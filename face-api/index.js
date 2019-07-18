//Libraries
const URL = require('url').URL;
const URLSearchParams = require('url').URLSearchParams;
// Configuration JSON
const conf = require('../configuration.json').faceAPI;
const fetch = require('node-fetch');

class FaceAPI {

    async detect() {

        const url = new URL('detect', conf.endpoint);
        const params = conf.params.detect;
        url.search = new URLSearchParams(params);

        const data = JSON.stringify({
            "url": conf.sampleURL
          });

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': conf.key
            },
            body: data
        };

        const response = await fetch(url, options).catch(e => {
            console.log('There was an error when calling FaceAPI', e);
        });
        return await response.json();

    }


    async findSimilars() {

        const url = new URL('findsimilars', conf.endpoint);
    
        const data = JSON.stringify({
            "url": conf.sampleURL
          });

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Ocp-Apim-Subscription-Key': conf.key
            },
            body: JSON.stringify(conf.params.findsimilars)
        };


        const response = await fetch(url, options).catch(e => {
            console.log('There was an error when calling FaceAPI', e);
        });
        return await response.json();

    }

}

module.exports = FaceAPI;
