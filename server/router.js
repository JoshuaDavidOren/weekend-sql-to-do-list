// connecting pool to router
const { Router } = require('express');
const pool = require('./pool');
const express = require('express');
const listRouter = express.Router();