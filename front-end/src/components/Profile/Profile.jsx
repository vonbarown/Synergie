import React from 'react'
// import { Link } from 'react-router-dom'
import ModalContainer from '../../containers/modalContainer'
import './profile.css'

export default class Profile extends React.Component {


    render() {
        return (
            <div className='profile-page'>
                <h1>Profile</h1>
                <ModalContainer />
            </div >
        )
    }
}