const express = require('express');
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname,"images")));

app.get("/product", (request, response)=> {
    response.sendFile("productsample.html", {
        root:"htmls/"
    });
})

app.listen(3000, 
    () => console.log('Server listening on port 3000.'))