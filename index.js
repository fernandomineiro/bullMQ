const express = require("express");

const helmet = require("helmet");

const myQueue = require('./jobQueue');

const app = express();  
const ads = [ {title: 'Seja bem vindo!'} ]; 
app.use(helmet()); 
app.get('/', (req, res) => 
{ 
    res.send(ads); 
});   

console.log('Worker started');

app.post('/register', async (req, res) => {


    const response = await myQueue.add({
      type: 'register',
      data: 'fernando@hotmail.com'
    });
  
    res.json({message: response.message});
  });

  app.post('/forgot-password', async (req, res) => {
    
  
    const response = await myQueue.add({
      type: 'reset-password',
      data: { email: 'fernando@hotmail.com' }
    });
  
    res.json({message: response.message});
  });
  


  
app.listen(3001, () => { console.log('escutando na porta 3001'); });