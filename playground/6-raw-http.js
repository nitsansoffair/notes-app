const https = require('https');

const url = 'https://api.darksky.net/forecast/9d2012a87c94fd258e379d463958402b/40,-75';

const req = https.request(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data = data + chunk.toString();
    });

    res.on('end', () => {
        const body = JSON.parse(data);
        console.log(body);
    });
});

req.on('error', (err) => {
    console.log('An error', err);
});

req.end();
