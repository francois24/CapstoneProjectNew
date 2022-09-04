const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 3001;



// Routes
const userRoutes = require('./routes/user.js');
const contactRoutes = require('./routes/contactUs.js');

app.use('/user', userRoutes);
app.use('/contact', contactRoutes);



app.listen(port, () => {
    console.log(`Running on port ${port}`);
});

