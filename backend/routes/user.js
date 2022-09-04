//Contains all user-related routes: /user

const express = require('express');
const router = express.Router()

const mysql = require('mysql');
const config = require('../db');
const pool = mysql.createPool(config);



// Create customer record
router.post("/", (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err

        const params = req.body

        connection.query('INSERT INTO cust_details SET ?', params, (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Customer records for ${params.firstName} ${params.lastName} has been added.`)
            } else {
                console.log(err)
            }
        }) 
    })
});



// Read all data from the database
router.get("/", (req, res) => {
    pool.getConnection((err, connection) => {
        if(err) throw err

        connection.query('SELECT * from cust_details', (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(rows)
            } else {
                console.log(err)
            }
        })

    })
});



// Read customer details by ID
router.get("/:cust_id", (req, res) => {

    const cust_id = req.params.cust_id

    pool.getConnection((err, connection) => {
        if(err) throw err

        connection.query('SELECT * from cust_details WHERE cust_id = ?', [cust_id], (err, rows) => {
            connection.release() // return the connection to pool

            const firstName = rows[0].firstName
            const lastName = rows[0].lastName

            if(!err) {
                res.send(`This is the record for ${firstName} ${lastName}.`)
            } else {
                console.log(err)
            }
        })

    })
});



// Update customer record
router.put("/", (req, res) => {

    pool.getConnection((err, connection) => {
        if(err) throw err

        const {cust_id, firstName, lastName, email} = req.body

        connection.query('UPDATE cust_details SET firstName = ?, lastName = ?, email = ? WHERE cust_id = ?', [firstName, lastName, email, cust_id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Customer records for ${firstName} ${lastName} has been updated.`)
            } else {
                console.log(err)
            }
        })

    })
});



// Delete customer details by ID
router.delete("/:cust_id", (req, res) => {

    const cust_id = req.params.cust_id

    pool.getConnection((err, connection) => {
        if(err) throw err

        connection.query('DELETE from cust_details WHERE cust_id = ?', [cust_id], (err, rows) => {
            connection.release() // return the connection to pool

            if(!err) {
                res.send(`Customer with ID: ${cust_id} has been removed.`)
            } else {
                console.log(err)
            }
        })

    })
});



module.exports = router;