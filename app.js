const express = require('express');
const app = express();
require('dotenv').config();
//API 

// Root API
app.get('/', function (req, res) {
    res.send(`GET method is sent to   ${process.env.Sample1}  excercise here`);
});
app.post('/', function (req, res) {
    res.send('POST method is sent');
});
app.put('/', function (req, res) {
    res.send('PUT nethod is sent  ===============');
});
app.delete('/', function (req, res) {
    res.send('DELETE method is sent  5555555555==');
});

//users API
app.get("/users", (req, res) => {
    return res.send(`GET HTTP method on user resources ${process.env.sample2}`);
});
app.post("/users", (req, res) => {
    return res.send("POST HTTP method on user resources 5-222222222")
});
app.put("/users", (req, res)=>{
   return res.send("PUT Http method on users resources=====================")
});
app.delete("/users", (req, res) => {
    return res.send(`DELETE HTTP method on users resources ${process.env.sample3}`);
});
//users with parameters API for PUT & DELETE Http Methods
app.put('/users/:userId', (req, res) => {
    return res.send(`PUT HTTP method with parameter== PUT Method on user/ ${req.params.userId} resource ===`);
});
app.delete('/users/:userId', (req, res) => {
    return res.send(`DELETE HTTP method on user/${req.params.userId} resource *********`);
});







app.listen(process.env.PORT_aaa, function () {
    console.log(`The Local SERVER:   ${process.env.PORT_aaa}   is ON`);
});


