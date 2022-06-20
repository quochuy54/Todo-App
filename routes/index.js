const Todo = require('../models/Todo');
const router = require('express').Router()

// [POST] /add/todo
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


//[GET] /edit/todo/:_id
router.get('/edit/todo/:_id', (req, res) => {
    const _id = req.params
    Todo.findOne({'_id': _id})
    .then((todo) => {
        res.render('edit',  {todo: todo})
    })
    .catch((e) => {
        console.log(e)
    })
})


// [POST] /edit/todo/:_id
router.post('/edit/todo/:_id', (req, res) => {
    Todo.updateOne({_id : req.params}, {todo: req.body.Editcontent})
    .then(() => {
        console.log('Cap nhat thanh cong')
        res.redirect('/')
    })
    .catch(err => console.log(err))
})

// [GET] /delete/todo/:_id
router.get('/delete/todo/:_id', (req, res) => {
    const{_id} = req.params
    Todo.deleteOne({_id})
    .then(() => {
        console.log('Xoa thanh cong')
        res.redirect('/')
    })
    .catch(err => console.log(err))
})

// [GET] home
router.get("/", async(req, res) => {
    const allTodo = await Todo.find()
    res.render('index', {allTodo: allTodo})
})






module.exports = router