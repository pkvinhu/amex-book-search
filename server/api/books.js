const express = require('express');
const router = express.Router();
const axios = require('axios');
module.exports = router;

// search by title
router.get('/search/title', (req, res, next) => {
    const response = axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:0385472579,LCCN:62019420&format=json`)
    console.log(response.data);
    res.send(response);
})

