const FaceAPI =  require('./face-api');

const faceAPI = new FaceAPI();

// Testing Face API

// Detect
faceAPI.detect().then(data => {
    console.log(JSON.stringify(data, null, 2));
}).catch(e => {
    console.log(e);
});


