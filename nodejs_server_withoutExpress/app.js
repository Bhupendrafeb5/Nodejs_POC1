var http = require('http');
//create a server object:
http.createServer(function (req, res) {
 res.writeHead(200, {'Content-Type': 'text/html'}); // http header
var url = req.url;

 if(url ==='/monday'){
    //  const data= new Date();
    //  date:string=data.getFullYear.toString;
   
    res.write('<h1>Its Monday today current time is 10:29AM  <h1>');  
    res.end(); 
 }else if(url ==='/tuesday'){
   res.write(`<h1>Its Tuesday today current time is 10:30AM  </h1>`); //write a response
    res.end(); //end the response
 }else if(url ==='/wednesday'){
    res.write('<h1>Its Wednesday today current time is 10:31AM  <h1>'); //write a response
    res.end(); //end the response
 }else if(url ==='/thursday'){
    res.write('<h1>Its Thursday today current time is 10:32AM  <h1>'); //write a response
    res.end(); //end the response
 }else if(url ==='/friday'){
    res.write('<h1>Its Friday today current time is 10:33AM  <h1>'); //write a response
    res.end(); //end the response
 }else if(url ==='/saturday'){
    res.write('<h1>Its Saturday today current time is 10:34AM  <h1>'); //write a response
    res.end(); //end the response
 }
 else if(url ==='/sunday'){
    res.write('<h1>Its Sunday today current time is 10:35AM  <h1>'); //write a response
    res.end(); //end the response
 }
}).listen(3001, function(){
 console.log("server start at port 3001"); //the server object listens on port 3000
});