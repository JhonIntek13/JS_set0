let counter = 0;
let timer;

function A() {
  console.log("Function A executed.");
}

function B() {
  console.log("Function B executed.");
}

function C() {
  console.log("Function C executed.");
}

function startTimerController() {
  timer = setInterval(function() {
    counter++;

    if (counter % 2 === 0) {
      A();
    }

    if (counter % 3 === 0) {
      B();
    }

    if (counter % 4 === 0) {
      C();
    }
  }, 1000); // Timer interval set to 1 second (1000 milliseconds)
}

function stopTimerController() {
  clearInterval(timer);
}

// Start the timer controller
startTimerController();

// Stop the timer controller after 5 minutes (300 seconds)
setTimeout(stopTimerController, 300000);
