const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const userModel = require('../models/User');

/* GET users listing. */
router.get('/kullanicilar', function(req, res, next) {
});


router.post('/', (req, res, next) => {
  const user = new userModel(req.body);
    const promise = user.save();
  
    promise.then((data) =>{
      res.json(data);
  
    }).catch((err) => {
         res.json(err);
    })
  });
module.exports = router;
