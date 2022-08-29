// import {connect} from "react-redux";

function Avatar(props) {
    if (props.user) {
        if (props.user.avatar === null || props.user.avatar === ' ') {
            return (
                <div className={`avatar avatar-${props.size}`}>
                    {props.user.firstName.charAt(0).toUpperCase()}{props.user.lastName.charAt(0).toUpperCase()}
                </div>
            )
        } else {
            return (
                <div className={`avatar avatar-${props.size}`}>
                    <img alt="avatar" className="rounded-circle" src={props.user.avatar} />
                </div>
            )
        }
    }
    // else {
    //     if (props.session.avatar === null || props.session.avatar === ' ' && props.session.gitLab === null) {
    //         return (
    //             <div className={`avatar avatar-${props.size}`}>
    //                 {props.session.firstName.charAt(0).toUpperCase()}{props.session.lastName.charAt(0).toUpperCase()}
    //             </div>
    //         )
    //     } else {
    //         return (
    //             <div className={`avatar avatar-${props.size}`}>
    //                 <img alt="avatar" className="rounded-circle" src={props.session.avatar} />
    //             </div>
    //         )
    //     }
    // }

}

// const mapStateToProps = ({session}) => ({
//     session
// });

// export default connect(
//     mapStateToProps,
// )(Avatar);
export default Avatar;
