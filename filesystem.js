const path = require('path');
const fs = require('fs');

function servePage(filename, fallbackMessage, res) {
  const filePath = path.join(__dirname, filename);
  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // Log error to file
      const errorMsg = `[${new Date().toISOString()}] Error reading ${filename}: ${err.message}\n`;
      fs.appendFile('error.log', errorMsg, (logErr) => {
        if (logErr) console.error('Failed to write to log file:', logErr);
      });
      
      // Serve fallback response
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`<h1>${fallbackMessage}</h1><p>File not found, showing basic message.</p>`);
    } else {
      // Serve file content
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
}

module.exports={ servePage };