const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))

var todos = [{
    text: 'read books',
    completed: true,
    active: false
},
{
    text: 'algorithm',
    completed: true,
    active: false
},
{
    text: 'RD',
    completed: true,
    active: false
}]

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/todos', (req, res) => res.send(todos))

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
