import React from 'react';
import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';

const Single = () => {
    return (
        <div className='single'>
            <Sidebar />
            <div className="singleContainer">
                <Navbar />
                <div className="top">
                    <div className="left">
                        <div className="editButton">Edit</div>
                        <h1 className="title">Information</h1>
                        <div className="item">
                            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="" className="itemImg" />
                            <div className="details">
                                <h1 className="itemTile">
                                    Jane Doe
                                </h1>
                                <div className="detailItem">
                                    <div className="itemKey">Email: </div>
                                    <div className="itemValue">janedow@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right"></div>
                </div>
                <div className="bottom"></div>
            </div>
        </div>
    )
}

export default Single