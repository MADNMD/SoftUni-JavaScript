const express = require('express');

function expressConfig(app) {

    app.use(express.static('public'));
    app.use(express.urlencoded({ extended: false }));
}

module.exports = expressConfig;