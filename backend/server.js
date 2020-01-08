let express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dbConfig = require('./database/db'),
    config = require('config');

const api = require('../backend/routes/user.routes')
const app = express();
const db = require('./config/keys').mongoURI;
// MongoDB Configuration
mongoose.Promise = global.Promise;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database sucessfully connected')
},
    error => {
    console.log('Database could not be connected: ' + error)
    }
)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

app.use('/public', express.static('public'));
app.use('/api', api)

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log("Server is running on Port: " + port);
})

//Use Routes
app.use('/mazzevents', require('./routes/api/signups'));
app.use('/mazzevents/auth', require('./routes/api/auth'));
app.use('/mazzevents', require('./routes/api/services'));

app.use((req, res, next) => {
    // Error goes via `next()` method
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

//Bodyparser Middleware
app.use(express.json());

const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})