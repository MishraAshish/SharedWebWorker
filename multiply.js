var first = document.querySelector('#number1');
var second = document.querySelector('#number2');

var result1 = document.querySelector('.result1');

if (!!window.SharedWorker) {
  var myWorker = new SharedWorker("demo_workers.js");

  first.onchange = function () {
    myWorker.port.postMessage([first.value, second.value]);
    console.log('Message posted to worker');
  }

  second.onchange = function () {
    myWorker.port.postMessage([first.value, second.value]);
    //ajax('package.json', null, myWorker.port, null);
    //myWorker.port.postMessage(ajax('package.json',null, null,null));
    console.log('Message posted to worker');
  }

  myWorker.port.onmessage = function (e) {
    result1.textContent = e.data;
    console.log('Message received from worker');
    console.log(e.lastEventId);
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
        //return req.responseText;
      }
    };
    req.send(data_string);
    return req;
};