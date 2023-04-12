const express = require("express");
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;


app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send("hi my name is nizam")
})

const users = [
    { id: 1, name: 'nizam', email: 'nizam@gmail.com' },
    { id: 2, name: 'nizam a', email: 'nizam@gmail.com' },
    { id: 3, name: 'nizam b ', email: 'nizam@gmail.com' },
    { id: 4, name: 'nizam c', email: 'nizam@gmail.com' },
    { id: 5, name: 'nizam d', email: 'nizam@gmail.com' },
    { id: 6, name: 'nizam e', email: 'nizam@gmail.com' },
]

app.get('/users', (req, res) => {
    if (req.query.nam) {
        const search = req.query.name.toLocaleLowerCase();
        const matched = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(matched);
    }
    else {
        res.send(users);
    }
})
app.get('/user/:id', (req, res) => {
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user);
})

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('example app listening on port', port)
});