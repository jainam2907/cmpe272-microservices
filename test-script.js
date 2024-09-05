const axios = require('axios');

const helloServiceURL = "http://127.0.0.1:63412";
const worldServiceURL = "http://127.0.0.1:63422";

async function getHelloWorld() {
    const helloResponse = await axios.get(`${helloServiceURL}/hello`);
    const worldResponse = await axios.get(`${worldServiceURL}/world`);

    console.log(`${helloResponse.data} ${worldResponse.data}`);
}

getHelloWorld();
