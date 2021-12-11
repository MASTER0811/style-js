# Style Js

## Getting Started
Insert `<script>` Link Here
```html
<script src="https://cdn.jsdelivr.net/gh/MASTER0811/style-js/main.js" defer></script>
```


### Add `class` or `id` in your element
```html
  <div class="demo"></div>
```
#### -> and add `ws-background`
```html
  <div class="demo" ws-background="#202020"></div>
```
#### -> then add script
```html
  <div class="demo" ws-background="#202020"></div>
  <script>
    background(".demo")
    // if <div id="demo" ws-background="#202020"></div>
    // write background("#demo")
  </script>
```

### There is only background code for the time being

| CSS Properties | In Attribute |
|----------------|---------|
| `background-color` | ws-background="#202020" , ="rgb(32,32,32)" , ="" |
