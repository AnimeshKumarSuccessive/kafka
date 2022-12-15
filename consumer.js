const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-consumer',
  brokers: ['locahost:9092', 'locahost:9093', 'locahost:9094']
})

const consumer = kafka.consumer({ groupId: 'consumer-group' })
const topic = 'animal'

const run = async() => {
    await consumer.connect()
      await consumer.subscribe({ topic})
    
      await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
          console.log({
            partition,
            offset: message.offset,
            value: message.value.toString(),
          })
        },
      })
}

run().catch(console.error)
