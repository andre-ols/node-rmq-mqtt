const mqtt = require('mqtt');

const client = mqtt.connect(`mqtt://localhost:1883`, {
    clientId: 'producer-1',
    password: 'admin',
    username: 'admin',
})

let count = 0;
client.on('connect', () => {
    console.log('Producer is running');
    
    client.subscribe('myTopic');
    setInterval(() => {
        console.log('Publishing message');
        client.publish('myTopic', `Message - ${count++}`, { qos: 1, retain: true });
    }, 1000);
})
