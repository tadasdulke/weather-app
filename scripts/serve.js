const app = require('https-localhost')();
const path = require('path');
const express = require('express');

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/', function (_, res) {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

app.listen(7979);
