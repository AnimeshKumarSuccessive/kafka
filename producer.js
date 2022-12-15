const { Kafka } = require('kafkajs');
const Chance = require('chance');

const chance = new Chance();

const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['locahost:9092', 'locahost:9093', 'locahost:9094']
})

const producer = kafka.producer()
const topic = 'animal'

const produceMessage = async() => {
    const value = chance.animal()
    console.log('value', value);
    try {
        await producer.connect()
        await producer.send({
            topic,
            messages: [
            { value, },
            ],
        })
    } catch (error) {
        console.log(error);
    }
}

const run = async () => {
  // Producing
  await producer.connect()
  setInterval(produceMessage,1000)
}

run().catch(console.error)
