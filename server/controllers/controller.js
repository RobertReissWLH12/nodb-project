const books = []
let id = 0

const {data} = require("../../src/Archives")

// FOR EDITING THE BOOKS LATER!!  DON'T FORGET TO MOVE THIS!!
// book[index] = {}
// ^^^^^^^^^^^^^^^^

module.exports = {
    chronicle: (req, res) => {
        const newManuscript = {...req.body, id}
        archivesLibrary.push(newBook)
        id++
        res.status(200).send(archivesLibrary)
    },
    accessArchives: (req, res) => {
        res.status(200).send(archivesLibrary)
    },
    amend: (req, res) => {
        const {id} = req.params
        const {info} = req.body
        const index = archivesLibrary.findIndex(el => el.id === +id)
        archivesLibrary[index].entry = entry
        res.status(200).send(archivesLibrary)
    },
    destroy: (req, res) => {
        const {id} = req.params
        const index = archivesLibrary.findIndex(el => el.id === +id)
        archivesLibrary.splice(index, 1)
        res.status(200).send(archivesLibrary)
    }
}
