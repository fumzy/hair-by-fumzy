import React from 'react';
import './App.css';
import './homepage.styles.scss';

const HomePage = ()=>(
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>BONE STRAIGHT</h1>
                    <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>

                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>LUXURY SDD</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>

                <div className='menu-item'>
                    <div className='content'>
                        <h1 className='title'>DONOR BOUNCY WIG</h1>
                        <span className='subtitle'>SHOP NOW</span>
                    </div>
                </div>

                <div className='menu-item'>
                    <div className='content'>
                    <h1 className='title'>PIXIE CURLY WIG</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>

            <div className='menu-item'>
            <div className='content'>
            <h1 className='title'>LUXURY WAVY WIG</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
            </div>
        </div>
)

export default HomePage;