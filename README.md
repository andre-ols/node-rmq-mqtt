# Simple PoC with RabbitMQ using MQTT protocol

This is a simple PoC to demonstrate how to use RabbitMQ with MQTT protocol in node.js.

## Requirements

- Docker
- Node.js
- Yarn

## How to run

1. Run RabbitMQ with MQTT plugin:

```bash
docker build -t rmq-mqtt .

docker run -it -p 15672:15672 -p 5672:5672 -p 1883:1883 -v $PWD/docker/var/lib/rabbitmq:/var/lib/rabbitmq rmq-mqtt
```

2. Install dependencies:

```bash
yarn install
```

3. Run the publisher:

```bash
yarn start:publisher
```

4. Run the subscriber:

```bash
yarn start:subscriber
```
