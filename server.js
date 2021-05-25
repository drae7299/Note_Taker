//Global const, also required routes and express
const express = require('express');
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
//initializing the app and express, created port
const app = express();
const PORT = preocess.env.PORT || 3000;
// Setup middle ware and other brick and mortar, giving acess to routes and static html
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use("/api" , apiRoutes);
app.use("/" , htmlRoutes);
//Starting the server and printing out log
app.listen(PORT, () => console.log(`Listening to PORT: ${PORT}`));