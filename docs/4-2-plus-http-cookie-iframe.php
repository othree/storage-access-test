<?php
header('Access-Control-Allow-Origin: https://othree.github.io');
setcookie("4-2-plus-http-cookie", "4-2-plus-http-cookie", time() + 3600 * 24);
?>
<!DOCTYPE html>
<html>
  <head>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.js"></script>
  </head>
  <body>
    <p>Has Access Result: <span id="has-result-1"></span></p>
    <p>Request Access Result: <span id="request-result"></span></p>
    <p>Has Access Result After Requested: <span id="has-result-2"></span></p>
    <p>localstorage.getItem Result: <span id="get-storage-result"></span></p>
    <p>localstorage.setItem Result: <span id="set-storage-result"></span></p>
    <p>Get cookie Result: <span id="get-cookie-result"></span></p>
    <button id="grant">Grant</button>
    <button id="read">Read</button>
    <button id="save">Save</button>
    <button id="clean">Clean</button>
    <script>
      const COOKIE_KEY = "4-2-plus-http-cookie";
      const STORAGE_KEY = "4-2-plus-http-cookie";
    </script>
    <script src="main.js"></script>
  </body>
</html>
