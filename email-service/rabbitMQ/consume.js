const amqp = require('amqplib/callback_api');
const sendEmail = require('../service');

const operation = () => {

    amqp.connect('amqp://172.16.131.218', function(err, connection) {
    if (err) {
        throw err;
    }
    connection.createChannel(function(err, channel) {
        if (err) {
            throw err;
        }
        var queue = 'email-queue';

        channel.assertQueue(queue, {
        durable: true
        });
        
        channel.prefetch(1);
        console.log(" [*] Waiting for email messages in %s. To exit press CTRL+C", queue);
        channel.consume(queue, function(msg) {
        var secs = msg.content.toString().split('.').length - 1;

        const receivedMsg = msg.content.toString().split(',');

        sendEmail(receivedMsg);

        console.log(" [x] Received %s", msg.content.toString());
        setTimeout(function() {
            console.log(" [x] Done");
            channel.ack(msg);
        }, secs * 1000);
        }, {
        noAck: false
        });
    });
    });
}

module.exports = operation;