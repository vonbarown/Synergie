import React from 'react'
import './chatinput.css'
export default class ChatInput extends React.Component {
    render() {
        return (
            <div className='chat-input'>
                <footer className="teal">
                    <form className="chat-form">
                        <div className="row">
                            <div className="input-field col s10">
                                <i className="prefix mdi-communication-chat" />
                                <input type="text" placeholder="Type your message" />
                                <span className="chip left">
                                    <img src="//robohash.org/503483?set=set2&bgset=bg2&size=70x70" />
                                    <span>Anonymous robot #503483</span>
                                </span>
                            </div>
                            <div className="input-field col s2">
                                <button type="submit" className="waves-effect waves-light btn-floating btn-large">
                                    <i className="mdi-content-send" />
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </footer>
            </div>
        );
    }
}