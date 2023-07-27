const express = require('express')
const app = express()
const path = require('path')

require('./Confi')
const information =require('./Contactus')
const Reserv =require('./Reservation')

const cors=require('cors');
app.use(cors())


app.use(express.json())
app.use(express.static(path.join(__dirname, "../frontend/build")))
app.get('*',function(req,res){
  res.sendFile(path.join(__dirname,"../frontend/build/index.html"));
})



app.listen(process.env.PORT || 3000);

// contact us  detail 
app.post('/contact', async(req, res) => {
  console.log('Hello World!')
let info = new information({
    name:req.body.name,
    email:req.body.email,
    text:req.body.text


  })
  info = await info.save()
console.log(info)
res.send('lets go')
})

// resevation 
app.post('/Reservation', async(req, res) => {
  console.log('Hello World!')
let info = new Reserv({
    name:req.body.name,
    mail:req.body.mail,
    checkin:req.body.checkin,
    checkout:req.body.checkout,
    guest:req.body.guest,
    yourmessage:req.body.yourmesssage



  })
  info = await info.save()
console.log(info)
res.send('lets go')
})