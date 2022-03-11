const express = require('express');
const app = express();
require('dotenv').config();
;
app.delete('/users/:userId', (req, res) => {
    return res.send(`DELETE HTTP method on user/${req.params.userId} resource *********`);
});
