const FaceAPI =  require('./face-api');

const faceAPI = new FaceAPI();

// Testing Face API

// Detect
faceAPI.detect().then(data => {
    console.log('DETECT');
    console.log(JSON.stringify(data, null, 2));
}).catch(e => {
    console.log(e);
});


// Findsimilars
faceAPI.findSimilars().then(data => {
    console.log('FIND SIMILARS');
    console.log(JSON.stringify(data, null, 2));
}).catch(e => {
    console.log(e);
});


