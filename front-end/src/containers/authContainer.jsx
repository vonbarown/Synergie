import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LoginForm from '../components/AuthComponents/LoginForm'
import SignupForm from '../components/AuthComponents/SignUpForm'
import axios from 'axios'
import io from 'socket.io-client'
import { connect } from 'react-redux'
import { setUser } from '../store/actions/userActions'

import { fetchSocket } from '../store/actions/chatActions'
const socketUrl = 'http://localhost:8282/'
class AuthContainer extends Component {
    state = {
        username: '',
        avatar_url: '',
        password: ''
    }
    async componentDidMount() {
        try {
            const { data } = await axios.get('/api/auth/isUserLoggedIn')
            this.props.setUser(data.payload)
            this.props.history.push('/profile')
        } catch (err) {
            console.log('ERROR', err)
        }
        this.initSocket()
    }

    initSocket = () => {
        const { fetchSocket } = this.props
        const socket = io(socketUrl)
        socket.on('connect', () => {
            console.log('connected');

        })
        fetchSocket(socket)
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    signupUser = async (user) => {
        try {
            const { data } = await axios.post('/api/auth/signup', this.state)

            this.props.setUser(data.payload)
            this.props.history.push('/profile')
        } catch (error) {
            console.log(error);

        }

    }

    loginUser = async () => {
        try {
            const { data } = await axios.post('/api/auth/login', this.state)

            this.props.setUser(data.payload)
            this.props.history.push('/profile')
        } catch (error) {
            console.log(error);

        }
    }

    renderSignupForm = () => {
        const { username, password, avatar_url } = this.state
        return (
            <SignupForm
                handleChange={this.handleChange}
                signupUser={this.signupUser}
                username={username}
                password={password}
                avatar_url={avatar_url}
            />
        )
    }

    renderLoginForm = () => {
        const { username, password } = this.state
        return (
            <LoginForm
                handleChange={this.handleChange}
                username={username}
                password={password}
                loginUser={this.loginUser}
            />
        )
    }

    render() {
        return (
            <div>
                {
                    this.props.isUserLoggedIn
                        ? <Redirect to='/profile' />
                        : (
                            <Switch>
                                <Route path='/login' component={this.renderLoginForm} />
                                <Route path='/signup' render={this.renderSignupForm} />
                            </Switch>
                        )
                }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: data => dispatch(setUser(data)),
        fetchSocket: data => dispatch(fetchSocket(data))

    }
}

export default connect(null, mapDispatchToProps)(AuthContainer)