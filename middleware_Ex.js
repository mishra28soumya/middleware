const express = require('express');
const app = express();

const logTime = (req,res,next) => {
    console.log("Received request at ",Date.now());
    next();
}

app.use(logTime);

app.get('/', (request, response)=>{
  response.send('<html><body><h1>Hello</h1></body></html>')

})

app.get("/test", (request, response)=> {
    response.json({
        "message": "Response Received"
    })
})



// start the server
app.listen(3000, 
   () => console.log('Server listening on port 3000.'))