var amqp = require('amqplib/callback_api');

const pushInQueue = (queue, msg) => {
    amqp.connect('amqp://172.16.131.218', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
        throw error1;
        }
        // var queue = 'email_queue';
        // msg = process.argv.slice(2).join(' ') || msg;

        channel.assertQueue(queue, {
        durable: true
        });
        channel.sendToQueue(queue, Buffer.from(msg), {
        persistent: true
        });
        console.log(" [x] Sent '%s'", msg);
    });
    // setTimeout(function() {
    //     connection.close();
    //     process.exit(0)
    // }, 500);
    });
}

module.exports = pushInQueue;