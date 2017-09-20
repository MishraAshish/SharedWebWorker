onconnect = function(e) {
  var port = e.ports[0];

  port.onmessage = function(e) {
    var workerResult = 'Result: ' + (e.data[0] * e.data[1]);   
    //port.postMessage(workerResult);
    ajax('package.json',null, port,null);
    //port.postMessage("Test");    
    //port.postMessage(e.data);
  }

}
var ajax = function (url, data, callback, type) {
    var data_array, data_string, idx, req, value;
    
    if (data == null) {data = {};}
    if (callback == null) {callback = function () { };}
    if (type == null) {type = 'GET';}//default to a GET request
    data_array = [];
    
    for (idx in data) {value = data[idx]; data_array.push("" + idx + "=" + value);}

    data_string = data_array.join("&");
    req = new XMLHttpRequest();
    req.open(type, url, false);
    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    req.onreadystatechange = function () {
      if (req.readyState === 4 && req.status === 200) {
        //postMessage(req.responseText);      
        //debugger;
        callback.postMessage(req.responseText);
        //return callback(req.responseText);
        //debugger;
        return req.responseText;
      }
    };
    req.send(data_string);
    return req;
};

//  var connections = 0; // count active connections

//   self.addEventListener("connect", function (e) {

//     var port = e.ports[0];
//     connections++;

//     port.addEventListener("message", function (e) {
//       port.postMessage("Hello " + e.data + " (port #" + connections + ")");
//     }, false);

//     port.start();

//   }, false);

// function doSomething() {  
//   ajax('package.json',null, null,null);
// }
// //setTimeout ( "doSomething()", 1000 );
// var ajax = function (url, data, callback, type) {
//   var data_array, data_string, idx, req, value;
//   if (data == null) {
//     data = {};
//   }
//   if (callback == null) {
//     callback = function () { };
//   }
//   if (type == null) {
//     //default to a GET request
//     type = 'GET';
//   }
//   data_array = [];
//   for (idx in data) {
//     value = data[idx];
//     data_array.push("" + idx + "=" + value);
//   }
//   data_string = data_array.join("&");
//   req = new XMLHttpRequest();
//   req.open(type, url, false);
//   req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//   req.onreadystatechange = function () {    
//     if (req.readyState === 4 && req.status === 200) {
//       //postMessage(req.responseText);      
//       //debugger;
//       //port.postMessage(workerResult);
//       //return callback(req.responseText);
//       return req.responseText;
//     }
//   };
//   req.send(data_string);
//   return req;
// };