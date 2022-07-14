import React from 'react';
import './single.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import TableList from '../../components/tablelist/TableList';

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
                                    <span className="itemKey">Email: </span>
                                    <span className="itemValue">janedow@gmail.com</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Phone: </span>
                                    <span className="itemValue">+1 2345 67 89</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Adress: </span>
                                    <span className="itemValue">Elton St.234 Garden New york</span>
                                </div>
                                <div className="detailItem">
                                    <span className="itemKey">Country: </span>
                                    <span className="itemValue">USA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <Chart aspect={3 / 1} title="user Spending (last 6 months)" />
                    </div>
                </div>
                <div className="bottom">
                    <h1 className="title">Last Transactions</h1>
                    <TableList />
                </div>
            </div>
        </div>
    )
}

export default Single