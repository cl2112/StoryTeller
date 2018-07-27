// TODOs
// -------------------
// access to element style properties
// read
// .then / callback
// allow for external control over text speed
// auto scroll for chat like additions
// prepend option for creating newElement
// speed option for a write call that applies only to that call, then reverts
// highlights
// options/defaults
// decide on how to handle create newElement on the base element. Automatically nest? search for the parent of the entry point?


// DONEs
// -------------------
// write
// create a stack function
// set speed
// new line
// handle new elements
// handle nested element



function StoryTeller(element){
    return new Story(element);

    function Story(element) {
        // variables for the element nesting
        this.elements = [element];
    
        // variables for execution options
        this.textSpeed = 100;
        this.styles = {
            color: 'black'
        };
    
        // variables for the stack state
        this.step = 0;
        this.stack = [];
        this.running = false;
    
        // adds a write operation to the stack
        this.write = function(text) {
            // push to the stack the function and params
            this.stack.push([Render, text])
    
            // if the stack is not running, start the stack
            if (!this.running) Run();
    
            return this;
        }
    
        // adds a wait operation to the stack
        this.wait = function(time) {
            // push to the stack the function and params
            this.stack.push([Pause, time])
    
            // if the stack is not running, start the stack
            if (!this.running) Run();
    
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
            this.stack.push([SetSpeed, speed])
    
            // if the stack is not running, start the stack
            if (!this.running) Run();
    
            return this;
        }

        this.newLine = function() {
            // push to the stack the function and params
            this.stack.push([AddBreak, null])
    
            // if the stack is not running, start the stack
            if (!this.running) Run();
    
            return this;
        }

        this.newElement = function(newElement) {
            // push to the stack the function and params
            this.stack.push([CreateNewElement, newElement])
    
            // if the stack is not running, start the stack
            if (!this.running) Run();
    
            return this;
        }

        this.newNestedElement = function(newNestedElement) {
            // push to the stack the function and params
            this.stack.push([CreateNewNestedElement, newNestedElement])
    
            // if the stack is not running, start the stack
            if (!this.running) Run();
    
            return this;
        }

        this.changeTextColor = function(textColor) {
            // push to the stack the function and params
            this.stack.push([ChangeTextColor, textColor])
    
            // if the stack is not running, start the stack
            if (!this.running) Run();
    
            return this;
        }
    
        // executes the current operation on the stack
        var Run = () => {
            // If the running flag is false, set to true
            if (!this.running) this.running = true;
    
            // Check if the current stack is empty
            if (!this.stack[this.step]) return;
    
            // Execute the current stack
            this.stack[this.step][0](this.stack[this.step][1]);
        }
    
        // increments the stack to the next operation.
        // Used for handling async operations.
        var Next = () => {
            // increment step
            this.step ++;
    
            // executes the stack
            Run();
        }
    
        // writes the text to the document
        var Render = (text, speed = this.textSpeed) => {
            // splits the text and creates a timeout for each 
            // letter that appends the letter to the element
            // when the timer runs out
            text.split('').forEach((v, i, arr)=>{
                setTimeout(()=>{
                    this.elements[this.elements.length - 1].innerHTML += v;
                }, speed * (i + 1));
                // If the last timeout has been created call
                // Next() on the next beat
                if (i >= arr.length -1){
                    setTimeout(()=>{
                       Next();
                    }, speed * (i + 2));
                }
            });
        }
        
        // creates a set timeout to pause the stack execution
        var Pause = (time) => {
            // create a timeout for the calling of Next()
            setTimeout(()=>{
                Next();
            }, time)
        }
    
        // sets the speed of Render execution
        var SetSpeed = (speed) => {
            setTimeout(() => {
                // update speed variable
                this.textSpeed = speed;
    
                // call next stack operation
                Next();
            }, 0)
        }

        // adds a line break (<br>) to the current element
        var AddBreak = () => {
            setTimeout(() => {
                // create and append a <br> element to 
                // the current element
                this.elements[this.elements.length - 1].appendChild(document.createElement('br'));

                // call next stack operation
                Next();
            })
        }

        var CreateNewElement = (newElement) => {
            setTimeout(() => {
                // Creates a new element and appends it to the document
                const el = this.elements[this.elements.length - 2].appendChild(document.createElement(newElement));

                // removes the last element
                this.elements.pop();

                // adds the newly created element to the array of
                // elements
                this.elements.push(el);

                // call next stack operation
                Next();
            })
        }

        var CreateNewNestedElement = (newElement) => {
            setTimeout(() => {
                // Creates a new element and appends it to the document
                const el = this.elements[this.elements.length - 1].appendChild(document.createElement(newElement));

                // adds the newly created element to the array of
                // elements
                this.elements.push(el);

                // call next stack operation
                Next();
            })
        }

        var ChangeTextColor = (textColor) => {
            setTimeout(() => {
                // update color variable
                this.styles.color = textColor;

                // sets the color property of the current element
                this.elements[this.elements.length - 1].style.color = textColor;
    
                // call next stack operation
                Next();
            }, 0)
        }
    } 
}




StoryTeller(document.getElementsByClassName('test')[0])
    .newNestedElement('h2')
    // .write('Hello, ')
    // .wait(1000)
    // .write('my name is ')
    // .speed(1000)
    // .write('...')
    // .speed(100)
    // .write(' not important.')
    // .newLine()
    // .write('What is important is that you follow my instructions.')
    // .speed(500)
    // .newLine()
    .newElement('h3')
    .write('Exactly.')
    .speed(100)
    .newLine()
    .newLine()
    .newElement('p')
    .changeTextColor('blue')
    .write('Connecting to remote terminal...')
    .changeTextColor('#871187')