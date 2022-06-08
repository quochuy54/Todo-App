const Todo = require('../models/Todo');
const router = require('express').Router()



router.post('/add/todo', (req, res) => {
    const {todo} = req.body;
    const newTodo = new Todo({todo})

    newTodo.save()
    .then(() => {
        console.log('Luu thanh cong')
        res.redirect('/')
    })
    .catch(err => console.log(err))
})

router.get('/delete/todo/:_id', (req, res) => {
    const{_id} = req.params
    Todo.deleteOne({_id})
    .then(() => {
        console.log('Xoa thanh cong')
        res.redirect('/')
    })
    .catch(err => console.log(err))
})

router.get("/", async(req, res) => {
    const allTodo = await Todo.find()
    res.render('index', {allTodo: allTodo})
})






module.exports = router