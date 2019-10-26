const books = require("./archives.json")
let id = 2

// const {data} = require("../../src/Archives")

// FOR EDITING THE BOOKS LATER!!  DON'T FORGET TO MOVE THIS!!
// book[index] = {}
// ^^^^^^^^^^^^^^^^

module.exports = {
    chronicle: (req, res) => {
        const newBook = {...req.body, id}
        books.push(newBook)
        id++
        res.status(200).send(books)
    },
    accessArchives: (req, res) => {
        res.status(200).send(books)
    },
    amend: (req, res) => {
        const {id} = req.params
        console.log(req.params)
        req.body = {...req.body, id}
        console.log(req.body)
        const index = books.findIndex(el => el.id === +id)
        books[index] = req.body
        res.status(200).send(books)
    },
    destroy: (req, res) => {
        const {id} = req.params
        const index = books.findIndex(el => el.id === +id)
        books.splice(index, 1)
        res.status(200).send(books)
    }
}
