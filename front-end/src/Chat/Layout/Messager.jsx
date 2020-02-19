import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import Talk from 'talkjs'
import { appId } from '../../secret'

class Messager extends Component {

    componentDidMount() {
        Talk.ready
            .then(() => {
                const me = new Talk.User(this.props.user);

                if (!window.talkSession) {
                    window.talkSession = new Talk.Session({
                        appId: appId,
                        me: me
                    });
                }

                this.inbox = window.talkSession.createInbox();
                this.inbox.mount(this.container);

            })
            .catch(e => console.error(e));
    }

    render() {

        return (
            <div className='message-page' style={{
                marginTop: '65px'
            }}>
                <div className='message-container'>
                    <Fragment>
                        <div style={{ height: '600px' }} className="inbox-container" ref={c => this.container = c}>Loading...</div>
                    </Fragment>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.usersReducer.loggedUser.user,
    }
}


export default connect(mapStateToProps, null)(Messager)