var express = require('express');
var app = express();
var SpotifyWebApi = require('spotify-web-api-node');

var spotifyApi = new SpotifyWebApi({
    clientId: 'seu client_id',
    clientSecret: 'seu clientSecret',
    redirectUri: 'sua url'
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/token', function(req, res) {
    //var data;
    spotifyApi.clientCredentialsGrant()
    .then(data => res.send(data.body))
    .catch(err => console.log(err));
});

app.listen(process.env.PORT || 3000, function(){
    console.log('Your node js server is running');
});
