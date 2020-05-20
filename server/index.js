const express = require('express');
const dotenv = require ('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')

const users = require('./routes/users')
const posts = require('./routes/posts')

dotenv.config()

const uri = process.env.ATLAS_URI
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useCreateIndex', true);

const connection = mongoose.connection;
connection.once('open', () => {
	console.log("MongoDB database connected");
})

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.use(passport.initialize())
require('./config/pass')(passport)

app.use('/api/users', users)
app.use('/api/posts', posts)

const PORT = process.env.PORT || 4242
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
