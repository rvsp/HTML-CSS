# JS, DOM Micro Tasks

1. Color a `span/div` element content when a user moves the mouse over the element.

2. Use prompt to read a value from user and display it in the span element.

3. Display the mouse X and Y coordinates in a `<span>` tag when you click on a `<h1>` tag which contains a paragraph.

4. Write a Javascript code for character counts in the `textarea`.

   # Example: ![](https://miro.medium.com/max/1600/1*1HI4NXCeCz1EiIWcIE_0iQ.gif)

5. Convert a given number from decimal to binary or hexadecimal

6. With Javascript write a simple from validation

7. In your HTML Add two buttons, where first button action for full screen mode and the second button for exit from full screen mode.

8. When user press any key in your html page show a alert that `Invalid Key Pressed`, but when user press spacebar show an alert `Thank You..!!` and close the current window.

9. When a cursor is moved over an content, allow the user to edit the content in HTML page.<br>
   NOTE: Input element should not be used.
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
