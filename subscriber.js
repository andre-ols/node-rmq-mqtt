const mqtt = require('mqtt');

const client = mqtt.connect(`mqtt://localhost:1883`, {
    clientId: 'subscriber-1',
    password: 'admin',
    username: 'admin',
    clean: false,
    queueQoSZero: false,
})

client.on('connect', () => {
    console.log('subscriber is running');
    
    client.subscribe('myTopic');

    client.on('message', (topic, message) => {
        console.log(`Received message from ${topic}: ${message.toString()}`);
    })
})
