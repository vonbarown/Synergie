import React from 'react'
import './home.css'
import logo from '../../logo/07f3beb4-475b-4f38-b462-0d2dae119fd2_200x200.png'

export const Home = () => {
    return (
        <div className='home'>
            <img className='home-logo' src={logo} alt="" />
            <h1 className='banner'>Welcome to Synergie</h1>
        </div>
    )
}