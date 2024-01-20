import express from 'express'

const app=express()
const port=8000;



app.get('/',(req,res)=>{
  res.send("Welcome to the Security training course home page!");
})

app.get('/training',(req,res)=>{
  res.send("This is the Training course page. Learn the Tactics/Methods of becoming a full fledge Bodyguard and Security Driver here")
})

app.get('/bouncer-training',(req,res)=>{
  res.send("Bouncer-Training : Learn the skills of bouncer for effective Crowd Management and Security")
})

app.get('/bouncer-training/use-of-force',(req,res)=>{
  res.send("Bouncer-Training : Use of Force - Understanding legal and ethical use of force.")
})

app.get('/security-driver-training', (req, res) => {
  res.send('Security Driver Training: Develop the skills required for safe and secure driving.');
});

app.get('/security-driver-training/evasive-driving', (req, res) => {
  res.send('Security Driver Training: Evasive Driving Techniques for emergency situations.');
});


app.listen(port, () => {
  console.log(` Server is running at ${port}`)

});