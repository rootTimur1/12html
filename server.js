const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <!DOCTYPE html>
      <html lang="ru">
      <body>
          <img src="https://images.steamusercontent.com/ugc/90472493366823952/9AE061717B44506050E8D1AA5BAD3E51BCAD1185/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false">
      </body>
      </html>`);
});

server.listen(8080, () => {
    console.log('🚀 Сервер запущен: http://localhost:8080');
});