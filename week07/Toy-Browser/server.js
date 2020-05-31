const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request received");
  console.log(req.headers);
  res.setHeader("Content-Type", "text/html");
  res.setHeader("X-Foo", "bar");
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`
  <html maaa=a>

  <head>
      <style>
          .wrap {
              display: flex;
              width: 800px;
              height: 600px;
              background-color: rgb(0,255,255)
          }  
          .left {
              display: flex;
              width: 300px;
              height: 400px;
              background-color: rgb(255,0,255);
              justify-content: center;
              align-items: center;
          }
  
          .left .top {
              width: 200px;
              height: 100px;
              background-color: rgb(255,255,0);
          }
  
          .right {
              width: 500px;
              height: 500px;
              background-color: rgb(0,0,0);
          }
      </style>
  </head>
  
  <body>
      <div id="wrap" class="wrap">
          <div class="left">
              <div class="top"></div>
          </div>
          <div class="right" />
      </div>
  </body>
  
  </html>
  `);
});

server.listen(8088);
