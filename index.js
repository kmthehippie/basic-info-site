const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', "text/html")

    let path = "./views/"
    switch(req.url){
        case "/": 
            path += "index.html"
            res.statusCode = 200;
            break;
        case "/about": 
            path += "about.html"
            res.statusCode = 200;
            break;
        case "/contact": 
            path += "contact.html"
            res.statusCode = 200;
            break;
        case "/contact-me": 
            res.statusCode = 301;
            res.setHeader('Location', '/contact')
            res.end()
            break;
        default:
            path += "404.html"
            res.statusCode = 404;
    }

    fs.readFile( path, (err,data) =>{
        if(err) {console.error(err)}
        res.end(data)
    })
})

server.listen(8080, 'localhost', ()=>{
    console.log("Listening on port 8080...")
})