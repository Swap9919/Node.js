const http = require('http')

const host ='localhost';
const port = 9000;



const server= http.createServer((req,res)=>{ 
      console.log("got incoming request");
      console.log(req.method)
      if(req.method == 'POST'){
            let body='';
            req.on('data', packet => {
                  body += packet ;
            }) 
            req.on('end', () => {
                  console.log(body);
                  res.end("sucess")
            })
      } else {
            res.writeHead(200);
            res.end("success");
      }
 })

const onServerRunning = () => console.log("sever running successfully")

server.listen(port, host, onServerRunning )