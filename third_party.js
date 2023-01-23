const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('tiny'))

app.get('/', (request, response)=>{
    response.send('<html><body><h1>Hello</h1></body></html>')
  
  })

  app.listen(3001, 
    () => console.log('Server listening on port 3000.'))