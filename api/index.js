const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/test', function (req, res) {
	res.send('Test successful')
})

app.get('/test2', (req, res) => {
	res.json({ data:'Test2 successful'} )
})


export default {
	path: '/api',
	handler: app
}