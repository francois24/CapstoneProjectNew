const express = require('express');
const router = express.Router();

const mysql = require('mysql');
const config = require('../db');
const pool = mysql.createPool(config);

// Receive message from customers through website's contact us page
router.post("/submit", (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err

        const params = req.body

        connection.query('INSERT INTO contact_us SET ?', params, (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`<h1>Hi ${params.client_name}! We have received your message. Thank you!</h1>`)
            } else {
                console.log(err)
            }
        }) 
    });
});


module.exports = router;