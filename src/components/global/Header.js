import AUTH_BASE_URL from "../../util/AUTH_BASE_URL";
import React, { useRef, useEffect } from "react";
import Avatar from "./Avatar";
// import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { signout } from "../../actions/session/signOut";
// import { myNotifications } from "../../actions/myNotifications";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gitlabAvatar from "../../assets/images/gitlab-avatar.png";
import digitalAvatar from "../../assets/images/digitalocean.png";
// import {closeWebSocket} from "../../util/websockets/closeWebSocket";
// import {saveWSClient} from '../../actions/wsclient'
// MSAL Logout
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
// import { loginRequest } from "../../util/sso/authConfig";

const Header = (props) => {
  // MSAL: Determine is user is currently signed in
  const isAuthenticated = useIsAuthenticated();
  const { instance, accounts, inProgress } = useMsal();

  useEffect(() => {
    // fetch(`${AUTH_BASE_URL}notifications?id=${props.session?.userId}`, {
    //   method: "GET",
    // })
    //   .then((response) => response.json())
    //   .then((notifications) => {
    //     props.myNotifications(notifications.data);
    //   })
    //   .then((final) => {
    //     if (props.notifications) {
    //     }
    //   });
  }, [isAuthenticated]);

  const navigate = useNavigate();
  const notificationsRef = useRef(null);
  const messagesRef = useRef(null);
  const profileRef = useRef(null);
  // const teamsUrl =
  //   "https://teams.microsoft.com/l/team/19%3aYSuc4aIpjlHcsZ9QjWSiyGwpZi7c6B8QHkDQYv2pdTY1%40thread.tacv2/conversations?groupId=6b413c92-d5b0-43c3-b6ac-70f19b285fb0&tenantId=8cc434d7-97d0-47d3-b5c5-14fe0e33e34b";

  const handleNotificationsMenu = () => {
    // if (notificationsRef.current.classList.contains("show")) {
    //   notificationsRef.current.classList.remove("show");
    // } else {
    //   notificationsRef.current.classList.add("show");
    //   if (profileRef.current.classList.contains("show")) {
    //     profileRef.current.classList.remove("show");
    //   }
    // }
  };

  const handleProfileMenu = () => {
    // if (profileRef.current.classList.contains("show")) {
    //   profileRef.current.classList.remove("show");
    // } else {
    //   profileRef.current.classList.add("show");
    //   if (notificationsRef.current.classList.contains("show")) {
    //     notificationsRef.current.classList.remove("show");
    //   }
    // }
  };

  function removeNotification(id) {
    // fetch(`${AUTH_BASE_URL}notifications`, {
    //   method: "DELETE",
    //   body: JSON.stringify({ data: id }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((response) => {
    //   fetch(`${AUTH_BASE_URL}notifications`, {
    //     method: "GET",
    //   })
    //     .then((response) => response.json())
    //     .then((notifications) => {
    //       props.myNotifications(notifications.data);
    //     });
    // });
  }

  function avatarSwitcher(from) {
    if (from === "gitlab") {
      return gitlabAvatar;
    } else if (from === "digital") {
      return digitalAvatar
    }
  }
 async function handleSignout(event) {
//     event.preventDefault();
//     // console.log("Header: In handleSignout")
//     // MSAL Logout
//     if (isAuthenticated) {
//     // The account's ID Token must contain the login_hint optional claim to avoid the account picker
//     // console.log("In Logout Redirect: account:", accounts[0]);
//     instance.logoutPopup({ account: accounts[0]});
//     }
//     props.signout();
  }

  return (
    <div
      className={
        props.noSidebar
          ? "main-header sticky sticky-pin"
          : "main-header side-header sticky sticky-pin"
      }
    >
      <div className="container-fluid">
        <div className="main-header-left">
          <button
            className="icon main-header-menu-btn"
            onClick={props.handleSidebar}
          >
            <FontAwesomeIcon icon="fa-solid fa-bars" />
          </button>

        </div>
        <div className="main-header-right">
          <div
            ref={notificationsRef}
            className="dropdown main-header-notification"
          >
            <button onClick={handleNotificationsMenu} className="nav-link icon">
              <FontAwesomeIcon icon="fa-solid fa-bell" />
              {props.notifications && props.notifications.length !== 0 ? (
                <span className="badge bg-danger nav-link-badge">
                  {props.notifications.length}
                </span>
              ) : (
                <></>
              )}
            </button>
            <div className="dropdown-menu">
              <div className="header-navheading">
                <p className="main-notification-text">
                  You have{" "}
                  {props.notifications ? props.notifications.length : ""} unread
                  notifications
                </p>
              </div>
              <div className="main-notification-list">
                {props.notifications ? (
                  props.notifications.map((item, i) => {
                    return (
                      <button
                        key={i}
                        className="media new"
                        onClick={() => {
                          removeNotification(item._id);
                        }}
                        style={{ textAlign: "left" }}
                      >
                        <div className="main-img-user online">
                          <img alt="avatar" src={avatarSwitcher(item.from)} />{" "}
                        </div>
                        <div className="media-body">
                          <p>{item.message}</p>
                          <span>
                            {new Date(item.createdAt).toLocaleDateString() +
                              " " +
                              new Date(item.createdAt).toLocaleTimeString()}
                          </span>
                        </div>
                      </button>
                    );
                  })
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
          <div className="dropdown main-profile-menu">
            <button onClick={handleProfileMenu} className="d-flex">
              <span className="main-img-user">
                <Avatar user={props.session} size="sm" />
              </span>
            </button>
            <div
              ref={profileRef}
              className="dropdown-menu"
              style={{ width: "200px" }}
            >
              <div className="header-navheading">
                <h6 className="main-notification-title">
                  {props.session?.firstName} {props.session?.lastName}
                </h6>
                <p className="main-notification-text">{props.session?.role}</p>
              </div>
              <button
                className="dropdown-item"
                onClick={() => {
                  navigate("/settings");
                }}
              >
                <i className="fe fe-settings" />
                Settings
              </button>
              <button
                className="dropdown-item"
                // onClick={() => {
                //   window.open(teamsUrl, "_blank");
                // }}
              >
                <i className="fe fe-settings" /> Support
              </button>
              <button className="dropdown-item" onClick={handleSignout}>
                <i className="fe fe-power" /> Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Header;
