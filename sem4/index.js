const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const userDbPath = path.join(__dirname, 'users.json');
app.use(express.json());
const uniqueId = 1;

app.get('/users', (req, res) => {
    const users = JSON.parse(fs.readFileSync(userDbPath, 'utf8'));
    res.send({users});
});

app.get('/users/:id', (req, res) => {
    const {id} = req.params;
    const users = JSON.parse(fs.readFileSync(userDbPath, 'utf8'));
    const findUser = users.find((user) => {
        return user.id === Number(id);
    });
    res.send({user: findUser});
});

app.post('/users', (req, res) => {
    uniqueId++;
    const users = JSON.parse(fs.readFileSync(userDbPath, 'utf8'));
    users.push({id:uniqueId, ...req.body});
    fs.writeFileSync(userDbPath, JSON.stringify(users, null, 2));
    res.send({id: uniqueId});
});

app.listen(3000);
