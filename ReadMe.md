# StoryTeller.js - A simple way to write expressive text.

## Getting Started:
### Add a link to the script to your html page.
`<script src="https://cl2112.github.io/StoryTellerJS/StoryTeller.js"></script>`

#### Example html page:
``` HTML
<!DOCTYPE html>
<html>
<head>
    <title>StoryTellerJS - Getting Started</title>
</head>
<body>
    <div id="story"></div>
    <script src="https://cl2112.github.io/StoryTellerJS/StoryTeller.js"></script>
    <script src="Link to your file goes here"></script>
</body>
</html>
```
### Then in your javascript file call StoryTeller and pass in the element you want to start writing to.

#### Example .js file:
``` javascript
const element = document.getElementById('story');

StoryTeller(element)
```

### And you're ready to start using StoryTeller.
``` javascript
const element = document.getElementById('story');

StoryTeller(element)
.write('Hello! ')
.wait(1000)
.write('How are you today?')
```

## API
## `.write( string )`
>`.write()` renders text to the element.
``` javascript
StoryTeller(element)
.write('Here is some text. And here is some more.')
```

## `.wait( number )`
>`.wait()` pauses the sequence for a given time. The number entered is how long to wait in milliseconds. _(1 second = 1000 milliseconds)_
``` javascript
StoryTeller(element)
.write('Sorry, one second... ')
.wait(1000)
.write('OK. Done.')
```

## `.newLine()`
>`.newLine()` creates a new line by adding a `<br>` element.
``` javascript
StoryTeller(element)
.write('Here is one line of text.')
.newLine()
.write('And here is another line of text. Neat huh.')
.wait(2000)
.newLine()
.write('Meh.')
```

## `.speed( number )`
>`.speed()` sets the rate of speed that the text renders to the element. The number entered is the time between each character in milliseconds. _The default speed is 50 milliseconds._
``` javascript
StoryTeller(element)
.speed(10)
.write('Woah! I need to lay off the coffee.')
.newLine()
.speed(500)
.write('Woah. I need coffee. A lot of coffee.')
```

## `.textColor( string )`
>`.textColor()` changes the text color of the text rendered. 
_Accepts all valid css color properties, like 'rgb(255,255,255)', 'red', and '#000000'._
``` javascript
StoryTeller(element)
    .textColor('red')
    .write('This line is red.')
    .newLine()
    .textColor('rgb(0,128,0)')
    .write('This line is green.')
    .newLine()
    .textColor('#0000ff')
    .write('This line is blue.');
```