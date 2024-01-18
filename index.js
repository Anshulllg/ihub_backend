const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require("body-parser");

require('dotenv').config();
const app = express();
app.use(cors());
app.use(bodyParser.json({limit: '50000kb'}));
app.use(express.json());
const url = "mongodb+srv://ihub:ihubmongo@ihub.shq6rfa.mongodb.net/iHub?retryWrites=true&w=majority";
const memberRouter = require("./routes/members")
const blogsRouter = require('./routes/blogs')
const careerRouter = require('./routes/careers')
const mevents = require('./routes/mevent')
const news = require('./routes/news')
const newsletter = require('./routes/newsletter')
const tendors = require("./routes/tendors")
const webinar = require('./routes/webinar')
const workshop = require('./routes/workshop')
const rgrants = require('./routes/rgrants')
const home = require('./routes/home')
const Entre = require("./routes/Entre")
const fellow =require("./routes/fellowship")
const Startup = require('./routes/startup')
const Collab = require('./routes/collabration')
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
console.log("Database connected")
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})
app.use('/member', memberRouter)
app.use('/blogs', blogsRouter)
app.use('/career', careerRouter)
app.use('/mev',mevents)
app.use('/news', news)
app.use('/newslet', newsletter)
app.use('/tendors', tendors)
app.use('/webinar', webinar)
app.use('/workshop', workshop)
app.use('/rgrants', rgrants)
app.use('/home', home)
app.use('/entre', Entre)
app.use('/fell', fellow)
app.use('/startup', Startup)
app.use('/collab', Collab)
app.listen(4000,()=>{
    console.log("Server is runnig on Port: 4000")
})
