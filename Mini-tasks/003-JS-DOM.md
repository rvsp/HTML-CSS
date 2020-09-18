# JS, DOM Micro Tasks

1. Color a `span/div` element content when a user moves the mouse over the element.

2. Use prompt to read a value from user and display it in the span element.

3. Write a Javascript code for character counts in the `textarea`.

   # Example: ![](https://miro.medium.com/max/1600/1*1HI4NXCeCz1EiIWcIE_0iQ.gif)

4. Convert a given number from decimal to binary or hexadecimal

5. With Javascript write a simple from validation

---

To check the stack size of browser

```html
<html>
  <head>
    <title>Max Call Stack Size</title>
  </head>
  <body>
    <script>
      var i = 0;
      function recurse() {
        i++;
        recurse();
      }
      try {
        recurse();
      } catch (ex) {
        alert("maxStackSize = " + i + "\nerror: " + ex);
      }
    </script>
  </body>
</html>
```
