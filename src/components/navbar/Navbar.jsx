import React, { useContext } from 'react';
import './navbar.scss';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { NotificationsNoneOutlined, FullscreenExitOutlined, ListOutlined, ChatBubbleOutlineOutlined } from '@mui/icons-material';
import { DarkModeContext } from '../../context/darkModeContext';

const Navbar = () => {

    const { dispatch } = useContext(DarkModeContext);

    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search...' />
                    <SearchOutlinedIcon />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon" />
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon className="icon" onClick={() => dispatch({ type: "TOGGLE" })} />
                    </div>
                    <div className="item">
                        <FullscreenExitOutlined className="icon" />
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlined className="icon" />
                        <div className='counter'>1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlined className="icon" />
                        <div className='counter'>2</div>
                    </div>
                    <div className="item">
                        <ListOutlined className="icon" />
                    </div>
                    <div className="item">
                        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=50" alt="some image" className="avatar" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar