// const express = require('express');
// const path = require('path');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');



// const app = express();
// const port = process.env.PORT || 4002;

// //read the body as jason
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

// const config = require('./config/database');
// const customer = require('./routes/users/customers');

// const connection = mongoose.connect(config.database, {useNewUrlParser: true});
// if(connection){
//     console.log("database connected");
// }else{
//     console.log("database is not connected");
// }

// //path for static files
// app.use(express.static(path.join(__dirname,"public")));

// app.use('/customer', customer);

// app.get("/", (reg,res)=>{
//     res.send("hello world");
// });

// app.listen(port, () => {
//     console.log("listening to port " + port);

// });


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
// const signupRoutes = express.Router();
const PORT = 4001;

let SignUp = require('./routes/users/customers');
let CustSelections = require('./routes/users/customerSelection');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/mazzevent', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.use('/mazzevent', SignUp);
app.use('/custSelect', CustSelections);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

module.exports = app;