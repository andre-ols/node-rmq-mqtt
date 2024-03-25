const mqtt = require('mqtt');

const client = mqtt.connect(`mqtt://localhost:1883`, {
    clientId: 'consumer-1',
    password: 'admin',
    username: 'admin',
    clean: false,
    queueQoSZero: false,
})

client.on('connect', () => {
    console.log('consumer is running');
    
    client.subscribe('myTopic');

    client.on('message', (topic, message) => {
        console.log(`Received message from ${topic}: ${message.toString()}`);
    })
})
