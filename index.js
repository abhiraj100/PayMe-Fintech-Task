const express = require('express');
const bodyParser =  require('body-parser');

const app = express();
const PORT = 7000;

app.use('bodyParser.json()');

let todos = [];

app.get('/', (req, res) => {
    res.json(todos);
});

app.get('/api/todos', (req,res) => {
    res.json();
})

app.post('/api/todos', (req. res) => {
    const {title, description} = req.body;
    if(!title) return;
    res.send(400).json({message: 'Title must be required'});

    const newTodo = {
        id: todos.length + 1;
        title,
        description : description || '';
        completed: false,
    };

    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// for deleting
app.delete('/api/todos/:id', (req, res) => {
    const todoInd = todos.findIndex((item) = item.id ==- parseInt(req.param.id));
    if(todoInd === -1) return;

    res.status(404).json({message : 'TO-DO not found'});

    todos.splice(todoInd, 1);
    res.status(202).send();
});


app.listen(PORT, () => {
    console.log(`Server is listening on port no. ${PORT}`);
})

// FOR Update a To-do




