var myWorker;
function startWorker() {
  if (!!window.SharedWorker) {
     myWorker = new SharedWorker("demo_workers.js");

    // squareNumber.onchange = function() {
    //   myWorker.port.postMessage([squareNumber.value, squareNumber.value]);
    //   console.log('Message posted to worker');
    // }

    myWorker.port.onmessage = function (e) {
      //result2.textContent = e.data;
      console.log('Message received from worker' + e.data);
      alert(e.data);
    }
  }
}

// function startWorker() {
// var worker = new SharedWorker("demo_workers.js");

// worker.port.addEventListener("message", function(e) {
// 	alert(e.data);
// }, false);

// worker.port.start();

// // post a message to the shared web worker
// worker.port.postMessage("Alyssa");
// }
// function startWorker() {
//   if (typeof (Worker) !== "undefined") {
//     if (typeof (w) == "undefined") {
//       window.w = new Worker("demo_workers.js");
//       //window.w2 = new Worker("demo_workers.js");
//     } else if (typeof (w) != "undefined") {
//       w.terminate();
//       w = undefined;
//       w = new Worker("demo_workers.js");
//       // w2.terminate();
//       // w2 = undefined;
//       // w2 = new Worker("demo_workers.js");
//       document.getElementById("result").innerHTML = "Data cleared....";
//     }

//     w.onmessage = function (event) {
//       document.getElementById("result").innerHTML = JSON.stringify(event.data);
//       console.log("We bind data in this " + JSON.stringify(event.data));
//     };

//     // w2.onmessage = function(event) {
//     //     document.getElementById("result").insertAdjacentText("beforeend","Adding New Set -"+JSON.stringify(event.data))
//     // };
//   } else {
//     document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
//   }
// }

function stopWorker() {
    //alert("Button Click Working");
    //   w.terminate();
    //   w = undefined;

    //myWorker.port.postMessage("We've Posted some events to it!");
    console.log('Message posted to worker');

 }

console.log("JS Code");