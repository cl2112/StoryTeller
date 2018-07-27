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

### And your ready to start using StoryTeller.
``` javascript
const element = document.getElementById('story');

StoryTeller(element)
.write('Hello! ')
.wait(1000)
.write('How are you today?')
```

## API
## `.write(`_TEXT : string_`)`

> `.write()` renders text to the element.
<html>
<head>
    <script src="https://cl2112.github.io/StoryTellerJS/StoryTeller.js"></script>
</head>
<body>
    <div id="story"><button id='btn'>Click Me!</button></div>
    <script>
        document.addEventListener('click', function(){
            StoryTeller(document.getElementById('story'))
            .write('hello')
        })
    </script>
</body>
</html>

