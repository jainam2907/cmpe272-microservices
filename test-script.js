const axios = require('axios');

async function getHelloWorld() {
    const helloResponse = await axios.get('http://localhost:62933/hello');
    const worldResponse = await axios.get('http://localhost:62121/world');

    console.log(`${helloResponse.data} ${worldResponse.data}`);
}

getHelloWorld();
