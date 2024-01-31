const express = require('express')
const app = express()
const path = require('path')
const User = require('./models/assigmentModel')
const cors = require('cors')
const bcrypt = require('bcrypt');
const mongoose = require('mongoose')
require("dotenv").config();
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser");


app.use(cookieParser());
app.use(cors())


app.use(cors(
  {
      origin: ["https://homework-hq.vercel.app"],
      methods: ["POST", "GET"],
      credentials: true
  }
));
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/*+json' }))

// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

let userJson = {}




app.get('/', (req, res) => {

    res.send('this works ')


})

app.post('/saveUser', async (req, res) => {

    const name = req.body.name
    const email = req.body.email
    const password = req.body.password


    try {
        const user = await User.findOne({ email: req.body.email });
        if (user) {
          // A user with that email already exists
          res.status(200).json({message: "Email address already exits"})
        } else {
          // No user with the entered email was found
          const hashedPassword = await bcrypt.hash(password, 10);
          const user = await new User({ name, email, password: hashedPassword }) 
          await user.save();
          res.status(200).json({message: "Successsfully created account"});
        }
      } catch (err) {
        // Handle error here
        console.log(error)
        res.status(500).json({ message: error.message })
      }




})

app.post('/Login', async(req, res) => {

  try{
    const { email, password } = req.body;

    const user = await User.findOne({ email });
  
    if(!user) {
     return res.status(401).json({ message: "Didn't find an account"})
    }
  
    const passwordMatch = await bcrypt.compare(password, user.password);
  
    if(!passwordMatch){
     return res.status(401).json({ message: "Password does not match with record"})
    }
  
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SERECT_KEY, {
      expiresIn: '1h',
    });


  

    app.set('data', user.name);

    res.status(200).json({ message: "Login Succesfully", token: token,  name: user.name })
 

  }catch(error){
    res.status(500).json({ message: 'Login failed' });

  }


    
})

app.get('/getInfo', (req, res) => {

  // res.send( {retrievedData : app.get('data')});
  res.status(200).json({ name: app.get('data') })



})



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});


mongoose.connect(process.env.MONGO_DB_UR)
    .then(() => {
        const server = app.listen(5000, () => {
            console.log(`The application started on port ${server.address().port}`)
        })
        console.log('✅ Connected to mongoDB')
    }).catch((error) => {
        console.log(error)
    })