const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;

//get all gif by name

router.get('/search', function (req, res, next) {
 
    const options = {
        params: {
          key: apiKey,
          name: req.query.title || '',
          p: req.query.page || 1,
          q: req.query
        },
        withCredentials: true
      };
      let queryString = 'princess'
  axios.get(`${apiUrl}` , options).then(function (response) {
    // res.send(response.data);
    var body = response.data.data;
    res.json(body);
    console.log(body)
    // res.render('locations', {body: body})
  })
});

module.exports = router;