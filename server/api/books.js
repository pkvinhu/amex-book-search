const express = require('express');
const router = express.Router();
const axios = require('axios');
module.exports = router;

// search by title
router.get('/search/title', (req, res, next) => {
    const response = axios.get(`http://openlibrary.org/search.json?q=the+lord+of+the+rings`)
    console.log(response.data);
})

