require('dotenv').config()
const express = require('express')
const {SERVER_PORT} = process.env
const ctrl = require('./controllers/controller')

const app = express ()

app.use(express.json())

// ENDPOINTS
app.post('/api/archives', ctrl.chronicle)
app.get('/api/archives', ctrl.accessArchives)
app.put('/api/archives/:id', ctrl.amend)
app.delete('/api/archives/:id', ctrl.destroy)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} through victory my chains are broken`))