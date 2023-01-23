const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//     throw new Error("Hello error!")
//   })

app.get('/', (req, res, next) => {
    setTimeout(() => {
        try {
            console.log("Async code example.")
            throw new Error("Hello Error!")
        } catch (error) { // manually catching
            next(error) // passing to default middleware error handler
        }
    }, 1000)
  })

  app.listen(3001, 
    () => console.log('Server listening on port 3000.'))