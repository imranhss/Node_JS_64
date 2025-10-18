const express = require('express');
const router = express.Router();
const db = require('../db');


router.post('/save', (req, res) => {

    const { name, email, password, phone, photo } = req.body;
    const activeStatus_value = true;
    const userRole = 'CONSUMER';

    const sql = 'insert into user(name,email, password, phone, role, photo, activeStatus) values(?,?,?,?,?,?,?)';

    db.query(sql, [name, email, password, phone, userRole, photo, activeStatus_value], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'User added successfully!', id: result.insertId });
    });
});



// 🔵 READ
router.get('/all', (req, res) => {
    const sql = 'SELECT * FROM user';
    db.query(sql, (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results);
    });
});





// 🟠 UPDATE
router.put('/update/:id', (req, res) => {
    const { name, email, password, phone, photo } = req.body;
    const activeStatus_value = true;
    const userRole = 'CONSUMER';
    const { id } = req.params;

    const sql = 'UPDATE user SET name = ?, email = ?,password=?, phone=?, role=?, photo=?, activeStatus=?    WHERE id = ?';
    db.query(sql, [name, email, password, phone, userRole, photo, activeStatus_value, id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'User updated successfully!' });
    });
});


// 🔴 DELETE
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM user WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'User deleted successfully!' });
  });
});







module.exports = router;