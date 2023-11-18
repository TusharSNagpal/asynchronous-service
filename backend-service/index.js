const pushInQueue = require('./service');

// pushInQueue('email_queue', 'nagpal8795@gmail.com,Thanks for using Tushar\'s app.,This is just for learning purpose (Message Queue)');
// pushInQueue('email_queue', 'tusharnagpal.5656@gmail.com,Thanks for using Tushar\'s app.,This is just for learning purpose (Message Queue)');
// pushInQueue('email_queue', 'hansaldhandha123@gmail.com,Thanks for using Tushar\'s app.,This is just for learning purpose (Message Queue)');

// pushInQueue('email_queue', 'vipulahuja2097@gmail.com,Thanks for using Tushar\'s app.,This is just for learning purpose (Message Queue)');

const app = require('./server')
require('dotenv').config();
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});