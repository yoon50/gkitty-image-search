import './main.css';

import React from 'react';
import ReactDOM from 'react-dom';

var ImageSearchApp = require('./components/ImageSearchApp.jsx');

import OAuth from 'oauth';

var clientKey = 'PVar6gxislr8GGfuS50nM3vUZwu3sBIDxI0nuL0TsoWogOGbsE';
var clientSecret = 'sWv5qwVoT2xAaB7z6p5sr4TVyc0eMidOefJsiONhGpGcK5VmGx';
var oauthRequestToken, oauthRequestTokenSecret;

var consumer = new OAuth.OAuth(
    'https://www.tumblr.com/oauth/request_token',
    'https://www.tumblr.com/oauth/access_token',
    clientKey,
    clientSecret,
    '1.0A',
    null,
    'HMAC-SHA1'
);
console.log(consumer);

consumer.getOAuthRequestToken(function(error, oauthToken, oauthTokenSecret){
    if (error) {
        console.log("Error getting OAuth request token: " + error, 500);
    } else {
        oauthRequestToken = oauthToken,
            oauthRequestTokenSecret = oauthTokenSecret;
        console.log(oauthToken);
    }
});

// Authenticate via OAuth
/*var tumblr = require('tumblr.js');
var client = tumblr.createClient({
    consumer_key: clientKey,
    consumer_secret: clientSecret,
    token: '',
    token_secret: ''
});*/

// Make the request
/*client.userInfo(function (err, data) {
    console.log(data);
});*/

main();

function main() {
    const app = document.createElement('div');
    document.body.appendChild(app);
    ReactDOM.render(<ImageSearchApp />, app);
}