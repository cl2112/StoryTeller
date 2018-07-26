// TODOs
// -------------------
// handle new elements
// apppend elements
// read
// create a child element
// .then

// DONEs
// -------------------
// write
// create a stack function



function StoryTeller(element){
    return new Story(element);

    function Story(element) {
        // variables for the element nesting
        this.element = element;
        this.parentElement = null;
    
        // variables for execution options
        this.textSpeed = 100;
    
        // variables for the stack state
        this.step = 0;
        this.stack = [];
        this.running = false;
    
        // adds a write operation to the stack
        this.write = function(text) {
            // push to the stack the function and params
            this.stack.push([this.Render, text])
    
            // if the stack is not running, start the stack
            if (!this.running) this.Run();
    
            return this;
        }
    
        // adds a wait operation to the stack
        this.wait = function(time) {
            // push to the stack the function and params
            this.stack.push([this.Pause, time])
    
            // if the stack is not running, start the stack
            if (!this.running) this.Run();
    
            return this;
        }
    
        // reads from the element and adds a write operation
        // to the stack with the text from the element
        this.read = function() {
            
        }
    
        // adds a change of speed of execution for the 
        // write elements to the stack
        this.speed = function(speed) {
            // push to the stack the function and params
            this.stack.push([this.SetSpeed, speed])
    
            // if the stack is not running, start the stack
            if (!this.running) this.Run();
    
            return this;
        }
    
        // executes the current operation on the stack
        this.Run = function() {
            // If the running flag is false, set to true
            if (!this.running) this.running = true;
    
            // Check if the current stack is empty
            if (!this.stack[this.step]) return;
    
            // Execute the current stack
            this.stack[this.step][0](this.stack[this.step][1]);
        }
    
        // increments the stack to the next operation.
        // Used for handling async operations.
        this.Next = function() {
            // increment step
            this.step ++;
    
            // executes the stack
            this.Run();
        }
    
        // writes the text to the document
        this.Render = (text, speed = this.textSpeed) => {
            // splits the text and creates a timeout for each 
            // letter that appends the letter to the element
            // when the timer runs out
            text.split('').forEach((v, i, arr)=>{
                setTimeout(()=>{
                    this.element.innerHTML += v;
                }, speed * (i + 1));
                // If the last timeout has been created call
                // Next() on the next beat
                if (i >= arr.length -1){
                    setTimeout(()=>{
                       this.Next();
                    }, speed * (i + 2));
                }
            });
        }
        
        // creates a set timeout to pause the stack execution
        this.Pause = (time) => {
            // create a timeout for the calling of Next()
            setTimeout(()=>{
                this.Next();
            }, time)
        }
    
        // sets the speed of Render execution
        this.SetSpeed = (speed) => {
            // update speed variable
            this.textSpeed = speed;
    
            // call next stack operation
            this.Next();
        }
    } 
}




StoryTeller(document.getElementsByClassName('test')[0])
    .write('Hello, ')
    .wait(1000)
    .write('my name is ')
    .speed(1000)
    .write('... ')
    .speed(100)
    .write('not important.')