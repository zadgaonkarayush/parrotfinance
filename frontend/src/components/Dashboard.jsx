import React from 'react'
import Image from '../assets/Logo.png';
import './dashboard.css';
import Influ from '../assets/infflu.jpg';
import { FaSearch, FaFilter, FaEllipsisH, FaFile, FaCopy, FaSearchPlus } from 'react-icons/fa';  // Import icons
import Icon from '../assets/Icon.png';
import twitter from '../assets/twiter.png';
import youtube from '../assets/youtube.png';
import game from '../assets/game.png';
import Image1 from '../assets/image1.png';
import Image2 from '../assets/image2.png';
import Image3 from '../assets/image3.png';
import Image4 from '../assets/image4.png';
import Image5 from '../assets/image5.png';
import Image6 from '../assets/image6.png';


import Sidebar from './Sidebar';
const Dashboard = () => {
    return (
        <div className='dashboard'>


            <Sidebar />

            <main className='main-content'>
                <header className='header'>
                    <div className='right-header'>

                        <p>Welcome to, <br /><h1>Parrot Finance</h1>
                        </p>
                        <div className="search-container">
                        <FaSearch className="search-icon" />
                            <input type="search" placeholder="Search..." className="search-bar" />
                        </div>
                    </div>
                    <div className='left-header'>
                        <h3>
                        <span className='featured-text'>Featured</span>
                            <img src={Icon} className='certified' />Traders</h3>
                        <div className="header-icons">
                            <FaSearch className="header-icon" />
                            <FaFilter className="header-icon" />
                            <FaCopy className='header-icon' />
                        </div>
                    </div>
                </header>
                <div className="brokerage-warning">
                    <p>You haven't added any brokerages yet</p>
                    <button className="link-brokerage-btn">LINK BROKERAGE</button>
                </div>
                <section className='featured-section'>
                    <div className="traders">
                        <div className="trader-card">
                            <img src={Image1} alt="Trader 1" className="trader-image" />
                            <div className="trader-info">
                              <div className='name-info'>
                              <span className='follow' ><img src={game} className='info-img' />8.23K</span>
                              <span className='nm' >@janediso  <img src={Icon} className='tick' /></span>
                              </div>
                                <span className='return' >Returns</span>
                                <span className='percent'>3.32%</span>
                            </div>
                            <button className='btn'>Follow</button>
                                <button className='btn sub' >Subscribe</button>
                           
                        </div>
                        <div className="trader-card">
                            <img src={Image2} alt="Trader 1" className="trader-image" />
                            <div className="trader-info">
                              <div className='name-info'>
                              <span className='follow' ><img src={game} className='info-img' />8.23K</span>
                              <span className='nm' >@janediso  <img src={Icon} className='tick' /></span>
                              </div>
                                <span className='return' >Returns</span>
                                <span className='percent'>3.32%</span>
                            </div>
                            <button className='btn'>Follow</button>
                            <button className='btn sub' >Subscribe</button>
                        </div>
                        <div className="trader-card">
                            <img src={Image3} alt="Trader 2" className="trader-image" />
                            <div className="trader-info">
                            <div className='name-info'>
                            <span className='follow' ><img src={youtube} className='info-img' />70.4K</span>
                            <span className='nm' >@alexkim  <img src={Icon} className='tick' /></span>
                            </div>
                                <span className='return' >Returns</span>
                                <span className='percent' >3.32%</span>

                            </div>
                            <button className='btn' >Follow</button>
                            <button className='btn sub' >Subscribe</button>
                        </div>
                        <div className="trader-card">
                            <img src={Image4} alt="Trader 3" className="trader-image" />
                            <div className="trader-info">
                            <div className='name-info'>
                            <span className='follow' ><img src={youtube} className='info-img' />5K</span>
                            <span className='nm' >@alexkim <img src={Icon} className='tick' /></span>
                            </div>
                                <span className='return'>Returns</span>
                                <span className='percent' >3.32%</span>

                            </div>
                            <button className='btn' >Follow</button>
                            <button className='btn sub'>Subscribe</button>
                        </div>
                        <div className="trader-card">
                            <img src={Image5} alt="Trader 1" className="trader-image" />
                            <div className="trader-info">
                              <div className='name-info'>
                              <span className='follow' ><img src={game} className='info-img' />8.23K</span>
                              <span className='nm' >@janediso  <img src={Icon} className='tick' /></span>
                              </div>
                                <span className='return' >Returns</span>
                                <span className='percent'>3.32%</span>
                            </div>
                            <button className='btn'>Follow</button>
                            <button className='btn sub' >Subscribe</button>
                        </div>
                        <div className="trader-card">
                            <img src={Image6} alt="Trader 1" className="trader-image" />
                            <div className="trader-info">
                              <div className='name-info'>
                              <span className='follow' ><img src={game} className='info-img' />8.23K</span>
                              <span className='nm' >@janediso  <img src={Icon} className='tick' /></span>
                              </div>
                                <span className='return' >Returns</span>
                                <span className='percent'>3.32%</span>
                            </div>
                            <button className='btn'>Follow</button>
                            <button className='btn sub' >Subscribe</button>
                        </div>
                    
                        <button className='load'>LOAD MORE</button>
                        
                    </div>

                    <aside className="notifications">
                        <h2>Today</h2>
                        <ul className="announcement-list">
                            <li><span className='noti-pic' ><img src={Image1} /></span>@jasondavidson made an announcement  <span className='minute'>1 min ago</span></li>
                            <li><span className='noti-pic' ><img src={Image2} /></span>@alisondilaurentis made an announcement <span className='minute'>1 hr ago</span></li>
                            <li><span className='noti-pic' ><img src={Image6} /></span>@lucyhale made an announcement <span className='minute'>2 hr ago</span></li>
                        </ul>
                        <h2>yesterday</h2>
                        <ul className="announcement-list">
                            <li><span className='noti-pic' ><img src={Image3} /></span>@jasondavidson made an announcement  <span className='minute'>1 min ago</span></li>
                            <li><span className='noti-pic' ><img src={Image4} /></span>@alisondilaurentis made an announcement <span className='minute'>1 hr ago</span></li>
                            <li><span className='noti-pic' ><img src={Image5} /></span>@lucyhale made an announcement <span className='minute'>2 hr ago</span></li>
                        </ul>

                    </aside>
                </section>

            </main>

        </div>
    )
}

export default Dashboard

