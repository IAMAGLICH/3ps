const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const env = require('dotenv');
const router = require('./routes/authRoutes')
env.config({ path: './.env' });
app.use(cors({
    origin:"http://localhost:3000",
    credentials:true
}));

app.use(express.json());


app.get('/', (req, res) => {
    res.json({ message: "Hello from server!" });
});
app.use('/auth', router);


mongoose.connect(process.env.REACT_APP_MongoLink, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        console.log("all set");
    })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(process.env.REACT_APP_port, () => {
    console.log(`Server is running on port ${process.env.REACT_APP_port}.`);
});