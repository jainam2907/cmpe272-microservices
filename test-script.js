const axios = require('axios');

const helloServiceURL = "http://localhost:62933/hello";
const worldServiceURL = "http://localhost:62121/world";

async function getHelloWorld() {
    const helloResponse = await axios.get(helloServiceURL);
    const worldResponse = await axios.get(worldServiceURL);

    console.log(`${helloResponse.data} ${worldResponse.data}`);
}

getHelloWorld();
