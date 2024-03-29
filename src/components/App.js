import React from 'react'
import './App.css'

export default function App() {
    return (
        <header className='header'>
            <div className='logo-box'>
                <img src={require('../assets/img/logo-white.png')} alt='Logo' className='logo' />
            </div>
            <div className='text-box'>
                <h1 className='heading-primary'>
                    <span className='heading-primary-main'>Outdoors</span>
                    <span className='heading-primary-sub'>is where life happens</span>
                </h1>

                <a href='#' className='btn btn-white btn-animated'>Discover out tours</a>
            </div>
        </header>
    )
}
