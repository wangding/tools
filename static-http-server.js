#!/usr/bin/node

var http = require('http'),
    fileName,                 // URL 请求的静态资源文件绝对路径
    req,                      // HTTP 请求对象
    res;                      // HTTP 响应对象

var server = http.createServer();

server.listen(8080);
server.on('request', function(request, response) {
  req = request;
  res = response;
  fileName = getRootDir() + (req.url === '/' ? '/index.html' : req.url);

  log();

  if(req.url === '/favicon.ico') {
    if(sendFavicon()) return;
  }

  sendFile(res, req);
});

/**
 * 得到网站根目录的绝对路径
 *
 * @returns {string} 网站根目录的绝对路径
 */
function getRootDir() {
  var path = require('path'),
      www = process.argv[2] || 'www';

  return path.isAbsolute(www) ? www : path.join(__dirname, www);
}

/**
 * 记录客户端请求的日志
 *
 * @param req HTTP 请求对象
 * @returns {undefined} 无
 */
function log() {
  var url = 'http://' + req.headers.host + req.url;

  console.log('-----------');
  console.log('URL:     ', url);
  console.log('fileName:', fileName);
  console.log(req.headers);
  console.log('');
}

/**
 * 发送默认的网站图标文件
 *
 * @returns {boolean} 是否发送默认的网站图标文件
 */
function sendFavicon() {
  var fs = require('fs'),
      mime = require('mime');
  
  fs.stat(fileName, function(err, stat) {
    if((err !== null) && ('ENOENT' === err.code)) { // favicon.ico 文件不存在
      res.writeHead(200, {
        'Content-Length': Buffer.byteLength(getIconData(), 'base64'),
        'Content-Type': mime.getType('ico')
      });
      res.end(getIconData(), 'base64');
      return true;
    } else {
      return false;
    }
  });
}

/**
 * 发送网站目录下的文件
 */
function sendFile() {
  var fs = require('fs'),
      path = require('path'),
      mime = require('mime');

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
}

/**
 * 返回 favicon.ico 文件的 Base64 编码的字符串
 *
 * @returns {string} favicon.ico 文件的 Base64 编码的字符串
 */
function getIconData() {
  return  'AAABAAEAEBAAAAEAIABoBAAAFgAAACgAAAAQAAAAIAAAAAEAIAAAAAA'
        + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
        + 'AAAAAAAAAAAAAAAAAAAAD8/PwE+/v7BAAAAAAAAAAAAAAAAAAAAAAAA'
        + 'AAAAAAAAAAAAAAAAAAAoaGhTENDQ4ImJiamIyMjviMjI74iIiKqNzc3'
        + 'nmpqaoKxsbEsAAAAAAAAAAAAAAAAAAAAAAAAAACCgoJcKioq2gMDA/8'
        + 'CAgL/AgIC/wICAv8CAgL/AgIC/wICAv8CAgL/CQkJ/zIyMtJsbGxk/P'
        + 'z8CAAAAAB9fX1YDg4O/wICAv8CAgL/AgIC/wICAv8CAgL/AgIC/wICA'
        + 'v8CAgL/AgIC/wICAv8CAgL/AgIC/0dHR7L7+/sEPT093gICAv8CAgL/'
        + 'AgIC/wQEBP8yMjLeREREjlJSUlxaWlpYVFRUfjQ0NKItLS3uAwMD/wI'
        + 'CAv8DAwP/h4eHRDc3N+ICAgL/AgIC/xwcHPZ4eHhcAAAAAAAAAAAAAA'
        + 'AAAAAAAAAAAAAAAAAA/f39BF1dXZYCAgL/AgIC/0hISGCWlpY4Pz8/1'
        + 'g8PD/+NjY1UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABT'
        + 'U1OOAgIC/woKCv+goKA0AAAAAPv7+wisrKw0AAAAAAAAAAAAAAAAAAA'
        + 'AAAAAAAAAAAAA/Pz8DImJiUBMTEyWERER/wICAv8/Pz+yAAAAAAAAAA'
        + 'AAAAAAAAAAAAAAAAD6+voEjo6ORFNTU342NjaqLCws1hgYGPoCAgL/A'
        + 'gIC/wICAv85OTnaysrKGAAAAAAAAAAAAAAAAAAAAABubm5UMDAw7gIC'
        + 'Av8CAgL/AgIC/wICAv8BAQH/ExMT+jg4OM5fX1946+vrDAAAAAAAAAA'
        + 'AAAAAAAAAAACJiYlEDAwM/wICAv8CAgL/ERER/y8vL8pJSUmOd3d3WO'
        + 'jo6BQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkJCQUAUFBf8CA'
        + 'gL/MDAw1sbGxigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
        + 'AAAAAAAAAAAAAAAAAAAAAABWVlamAgIC/yAgIO6ampo8AAAAAAAAAAD'
        + 'j4+MUWlpaQDg4OEC1tbUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+/'
        + 'v7BGZmZo4NDQ32DQ0N/yoqKuIpKSnuERER/wICAv8CAgL/BQUF/01NT'
        + 'a4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApqamOFhYWJpOTk6e'
        + 'YGBgnkhISGSYmJhQkZGRKIGBgWCgoKA4AAAAAAAAAAAAAAAAAAAAAAA'
        + 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
        + 'AAAAAAAAAAAAAAAAAA//8AAPAfAADABwAAgAEAAAHBAAAP8QAAn/EAA'
        + 'P/hAAD+AwAA8A8AAOB/AADj/wAA4/8AAPADAAD8fwAA//8AAA==';
}
