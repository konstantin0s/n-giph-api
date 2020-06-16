const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;
const oneGifUrl = 'https://api.giphy.com/v1/gifs';
const trendUrl = 'https://api.giphy.com/v1/gifs/trending';

//get all gif by name

router.get('/search', function (req, res) {

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
    axios
        .get(`${apiUrl}`, options)
        .then(function (response) {
            // res.send(response.data);
            var body = response.data.data;
            res.json(body);
            // console.log(body) res.render('locations', {body: body})
        })
});

//Search beers by id
router.get('/gif/:id', function (req, res) {
    const options = {
        params: {
            key: apiKey
        },
        withCredentials: true
    }
    axios
        .get(`${oneGifUrl}/${req.params.id}`, options)
        .then(function (response) {
            // res.send(response.data); var body = response.data;
            var body = response.data.data;
            // console.log(response.data);
            res.json(body);
        })
        .catch(function (error) {
            res
                .status(404)
                .send();
        });
});

//get tranding gify
router.get('/daily', function (req, res) {

    const options = {
        params: {
            key: apiKey,
            name: req.query.title || '',
            p: req.query.page || 1,
            q: req.query
        },
        withCredentials: true
    };

    axios
        .get(`${trendUrl}`, options)
        .then(function (response) {
            // res.send(response.data);
            var body = response.data.data;
            res.json(body);
            console.log(body)
            // res.render('locations', {body: body})
        })
});

module.exports = router;