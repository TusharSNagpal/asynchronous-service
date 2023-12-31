**Making Services Asynchronous using RabbitMQ:**<br /><br />
Tasks which can be done in asynchronous mode and doesn't require client to wait until its done are asynchronous tasks. This we can achieve using Message Queues and a service provider for the same is RabbitMQ.<br />
Apart from providing aynchronous functionality, if we have various workers running then RabbitMQ also does Load Balancing by using **Round-Robin Technique.**<br /><br />
While learning **High Level Design** from **Gaurav Sen's Youtube channel**. He mentioned how useful and powerful **Message Queue** is,<br />
I wanted to see the result of how this actually performs.<br /><br />
Thought of implementing an email-service using nodemailer. Made a small module (customer registration and ordering items) just for invoking email service to check if its working in asynchronous mode or not and how well it is performing.<br /><br />
After customer calls API for placing an order. They should not wait until the email is sent and the whole process is completed. This should be done in asynchronous mode. Meanwhile customer will be able to call other APIs of views products/items without waiting for response.<br /><br />
For demo purpose I have taken a timer for 1 minute at the email-service:<br />

In synchronized mode: if message queue is not used user will have to wait until this process is completed which is of 1 minute and then they will be able to do other tasks. (BLOCKED TIME)<br />
In this project we kept email-service as asynchronized mode: user's request will be stored in message queue and they will be able to do other tasks which will enhance user experience. (NO BLOCKING TIME)<br /><br />

**DOCKER:**<br />
To run this project one needs to clone this repository and do:<br /><br />
create your own .env file in the directories backend-service and email-service.<br /><br /><br />
In backend-service: Mention ATLAS_URL variable and assign its value to the link of MongoDB URL which enables you to connect.<br />
Also mention PORT variable and assign its value to the port you want your backend server to run. Take 5000 as PORT or change it in docker-compose.yml also accordingly.<br /><br /><br />
In email-service: Mention USER and PASS variables and assign them values of your email account from which email will be sent.<br /><br /><br />
Then, run COMMAND: <br />
**docker-compose up**

![Project](https://github.com/TusharSNagpal/asynchronous-service/assets/63884440/da73e7a6-757b-427b-907e-c73eea61ddae)
