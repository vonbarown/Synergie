import React from 'react'
import { RootComponent } from '../RootComponent'
import PubNub from 'pubnub';
import { PubNubProvider } from 'pubnub-react';

const pubNubConfig = require('./pubnub.config.json');
const pubNubClient = new PubNub(pubNubConfig.keySet);

export const ChatApp = () => {
    return (
        <>
            <PubNubProvider client={pubNubClient}>
                <RootComponent />
            </PubNubProvider>
        </>
    )
}