let express = require('express'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    dbConfig = require('./database/db'),
    config = require('config');

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('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');

const photo = require('../backend/routes/photo.routes');
const graph = require('../backend/routes/graph');
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

app.get('/send-email', (req,res) => {
    
    //Get Variables from query string in the search bar
    const { recipient, sender, topic, text } = req.query; 

    //Sendgrid Data Requirements
    const msg = {
        to: recipient, 
        from: sender,
        subject: topic,
        text: text,
    }

    //Send Email
    sgMail.send(msg)
    .then((msg) => console.log(text));
});


app.use('/public', express.static('public'));
app.use('/mazzevents', photo);
app.use('mazzevents/graph', graph);


const port = process.env.PORT || 4000;



const server = app.listen(port, () => {
    console.log("Server is running on Port: " + port);
})

//Use Routes
app.use('/mazzevents', require('./routes/api/signups'));
app.use('/mazzevents/auth', require('./routes/api/auth'));
app.use('/mazzevents', require('./routes/api/services'));
app.use('/mazzevents/graph', require('./routes/graph'));
app.use('/events', require('./routes/events'));
app.use('/notifications', require('./routes/notifications'));
app.use('/rating', require('./routes/rating'));
app.use('/request', require('./routes/request'));
app.use('/user', require('./routes/calendar'));

// app.use((req, res, next) => {
//     // Error goes via `next()` method
//     setImmediate(() => {
//         next(new Error('Something went wrong'));
//     });
// });

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