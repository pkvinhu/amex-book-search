const express = require('express');
// var cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

// var whitelist = ['localhost:3000/', 'https://openlibrary.org/search.jsonp']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

// // access control allow origin
// app.use(cors(corsOptions));

// books router
app.use('/api/books', require('./api').books);

// Static Files
app.use(express.static(path.resolve(__dirname, '../public')));
app.use('/public', express.static(path.join(__dirname, '../public')));
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send({ message: err.message });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})