#!/usr/bin/node

var http = require('http'),
    fs = require('fs'),
    mime = require('mime'),
    path = require('path');

var www = process.argv[2] || 'www';

var root = path.isAbsolute(www) ? www : path.join(__dirname, www);

console.log('root:', root);

http.createServer(function(req, res) {
  var url = 'http://' + req.headers.host + req.url;

  console.log('URL:', url);
  console.log(req.headers);
  console.log('');

  var fileName = root + req.url;
  fs.stat(fileName, function(err, stat) {
    if(err) {
      if('ENOENT' === err.code) {
        res.statusCode = 404;
        res.end(fileName + ' NOT FOUND!');
      } else {
        res.statusCode = 500;
        res.end(err.message);
      }
    } else {
      var ext = path.extname(fileName);
      res.writeHead(200, {
        'Content-Length': stat.size,
        'Content-Type': mime.getType(ext.slice(1, ext.length))
      });
      fs.createReadStream(fileName).pipe(res);
    }
  });
}).listen(8080);
