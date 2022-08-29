import React, {useRef} from 'react';
import Sidebar from "../global/Sidebar";
import Header from "../global/Header";

const Wrapper = (props) => {

    const wrapperRef = useRef(null)

    const handleSidebar = () => {
        if(wrapperRef.current.classList.contains('main-sidebar-show')){
            wrapperRef.current.classList.remove('main-sidebar-show')
        }  else{
            wrapperRef.current.classList.add('main-sidebar-show')
        }
    }

    if (props.noSidebar && props.noHeader) {
        return (
            <div ref={wrapperRef} className="page main-body">
                {/* TODO Mobile-header */}
                <div className="main-content">
                    <div className="container-fluid">
                        {props.children}
                    </div>
                </div>
            </div>
        )
    } else if (props.noSidebar){
        return (
            <div ref={wrapperRef} className="page main-body">
                <Header handleSidebar={handleSidebar} noSidebar={props.noSidebar}/>
                {/* TODO Mobile-header */}
                <div className="main-content pd-12">
                    <div className="container-fluid">
                        {props.children}
                    </div>
                </div>
            </div>

        )
    } else if (props.noHeader) {
        return (
            <div ref={wrapperRef} className="page main-body leftmenu main-sidebar-show">
                <Sidebar/>
                {/* TODO Mobile-header */}
                <div className="main-content side-content">
                    <div className="container-fluid">
                        {props.children}
                    </div>
                </div>
            </div>

        )
    } else {
        return (
            <div ref={wrapperRef} className="page main-body leftmenu main-sidebar-show">
                <Sidebar/>
                <Header handleSidebar={handleSidebar}/>
                {/* TODO Mobile-header */}
                <div className="main-content side-content">
                    <div className="container-fluid">
                        {props.children}
                    </div>
                </div>
            </div>

        )
    }
}
export default Wrapper
