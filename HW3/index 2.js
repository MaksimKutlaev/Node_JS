const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PathJSON = path.join(__dirname, 'counter.json');

