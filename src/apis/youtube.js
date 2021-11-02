import axios from 'axios';

const KEY="AIzaSyDb7oBJznmHngJcn3GHy2Gv2oU8lCyBfw8";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResults:5,
        key:KEY
    }
});