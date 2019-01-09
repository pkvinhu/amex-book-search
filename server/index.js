const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');

// Static Files
app.use(express.static(path.resolve(__dirname, '../public')));
app.use('/public', express.static(path.join(__dirname, '../public')));
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res) => {
  res.status(err.status || 500).send({ message: err.message });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})