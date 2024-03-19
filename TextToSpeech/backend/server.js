
const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, 'Content-Type: text/html');
    var path = "../frontend";

    switch(req.url)
    {
        case '/':
            path += '/index.html';
            break;
        
        default:
            path += '/404.html';
    }
    console.log(path);
    fs.readFile(path, (err, data) => {
        if(err)
        {
            console.log(`Error Occured!!!`);
        }
        else{
            res.write(data);
            res.end();
        }
    });
});


server.listen(PORT, 'localhost', () =>{
    console.log(`Server is Running on PORT ${PORT} Successfully`);
});