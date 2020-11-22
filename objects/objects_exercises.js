//stopwatch
//create a constructor function for stopwatch with no parameters.
// methods:
// 	start()
// 	stop()
// 	reset()
// and a private property duration – it will be accessible via a getter function.
// If you execute a stop() method when the stopwatch is not running, you get an error 
//“Stopwatch is not started”.
// If you execute a start() method when the stopwatch is running, you get an error 
//*“Stopwatch has already started”.

function Stopwatch(){
    let startTime, endTime, running, duration = 0;

    this.start = function(){
        if(running) throw new Error("Stopwatch has already started.");

        running = true;
        startTime = new Date();
    };

    this.stop = function(){
        if(!running) throw new Error("Stopwatch is not started.");
        
        running = false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime() / 1000);
        duration += seconds;
    };

    this.reset = function(){
        startTime = 0;
        endTime = 0;
        running = false;
        duration = 0;
    };

    this.defineProperty(this, "duration", {
        get: function(){return duration;}
    })
};