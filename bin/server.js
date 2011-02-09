var jsdom = require('jsdom').jsdom,
    sys = require('sys'),
    window = jsdom().createWindow();

jsdom.jQueryify(window, '../lib/jquery.js', function (window, jquery) {
  window.jQuery('body').append("<div class='testing'>Hello World</div>");
  sys.puts(window.jQuery(".testing").text()); // outputs Hello World
});