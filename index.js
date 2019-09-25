express = require("express")
bodyParser = require("body-parser")
fs = require("fs")
port = process.env.PORT || 3000
app = express()
function server(res,req){
  if(res.url == "/"){
    fs.createReadStream("./index.html").pipe(req)
  }else if(res.url == "/favicon.ico"){
    fs.createReadStream("./youtube.jpg").pipe(req)
  }else if(res.url == "/style.css"){
    req.writeHead(200,{"Content-Type":"text/css"})
    fs.createReadStream("./style.css").pipe(req)
  }else if(res.url == "/script.js"){
    fs.createReadStream("./script.js").pipe(req)
  }else if(res.url == "/youtube-loading.gif"){
      fs.createReadStream("./youtube-loading.gif").pipe(req)
  }else if(res.url == "/images/button/gold"){
    fs.createReadStream("./gold_button.png").pipe(req)
  }else if(res.url == "/images/button/silver"){
    fs.createReadStream("./silver.png").pipe(req)
  }else if(res.url == "/images/button/diamond"){
    fs.createReadStream("./diamond.png").pipe(req)
  }else if(res.url == "/images/button/ruby"){
    fs.createReadStream("./ruby.png").pipe(req)
  }else{
    fs.createReadStream("./notfound.html").pipe(req)
  }
}
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(server)
app.listen(port,function(e){
  if(e)throw e;
  console.log(`Listening on port ${port}`)
})