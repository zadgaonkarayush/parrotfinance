import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faShareAlt, faMoon, faPowerOff, faPaperPlane, faHeadphones, faPersonDotsFromLine, faInfo, faCircleInfo, faBookmark, faBookReader, faSquare, faSquareFull, faSquareCaretLeft, faSquareCheck, faSquarePhone, faSquareNfi, faSquarePen } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/Logo.png';
import Influ from '../assets/infflu.jpg';
import './sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <img src={Logo} alt="Logo" className="logo" />
            </div>
            <div className="sidebar-profile">
                <img src={Influ} alt="Profile" className="profile-image" />
                <button className="send-button">
                    <FontAwesomeIcon icon={faPaperPlane} /> 
                </button>
            </div>
            <div className="sidebar-buttons">
                <button className="sidebar-btn">
                    <FontAwesomeIcon icon={faHome} /> 
                </button>
                <button className="sidebar-btn">
                    <FontAwesomeIcon icon={faSquarePen} /> 
                </button>
                <button className="sidebar-btn">
                    <FontAwesomeIcon icon={faUser} />
                </button>
                <button className="sidebar-btn">
                    <FontAwesomeIcon icon={faCog} />
                </button>
                <button className="sidebar-btn">
                    <FontAwesomeIcon icon={faShareAlt} />
                </button>
            </div>
            <div className="sidebar-footer">
                <button className="sidebar-btn moon">
                    <FontAwesomeIcon icon={faMoon} />
                </button>
                <button className="sidebar-btn power">
                    <FontAwesomeIcon icon={faPowerOff} />
                </button>
            </div>
            <div className="sidebar-footer2">
                <button className="sidebar-btn">
                    <FontAwesomeIcon icon={faHeadphones} />
                </button>
                <button className="sidebar-btn">
                    <FontAwesomeIcon icon={faCircleInfo} />
                </button>
            </div>
        </div>
    );
}

export default Sidebar;


