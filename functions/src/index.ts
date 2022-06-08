import * as functions from "firebase-functions";
import axios from 'axios'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const getPictures = functions.https.onRequest(async (request, response) => {
    const url = request.body.apiUrl ? request.body.api.Url : 'https://api.pexels.com/v1/curated?page=1&per_page=10'
    let apiKey = '563492ad6f91700001000001e37a468ccc244367a5dae071a392cd00';
    const res = await axios.get(url, {headers: {Authorization: apiKey}});
    response.send(res.data);
});
