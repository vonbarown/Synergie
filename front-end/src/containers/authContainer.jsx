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
            this.props.history.push('/')
            this.props.setUser(data.payload)
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
        const { setUser, socket } = this.props
        try {
            const { data: { payload } } = await axios.post('/api/auth/signup', this.state)

            setUser(payload)
            socket.emit('user', payload.username)
            this.props.history.push('/profile')
        } catch (error) {
            console.log(error);

        }

    }

    loginUser = async () => {
        const { setUser, socket } = this.props

        try {
            const { data: { payload } } = await axios.post('/api/auth/login', this.state)

            setUser(payload)
            socket.emit('user', payload.username)
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

const mapStateToProps = (state) => {
    return {
        socket: state.chatReducer.socket
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: data => dispatch(setUser(data)),
        fetchSocket: data => dispatch(fetchSocket(data))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)