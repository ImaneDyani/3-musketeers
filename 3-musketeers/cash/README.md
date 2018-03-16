#cash

DESCRIPTION
Cash is a small library for modern browsers (Chrome, Firefox, Safari and Internet Explorer 9+) that provides jQuery style syntax for manipulating the DOM. Utilizing modern browser features to minimize the codebase, developers can use the familiar chainable methods at a fraction of the file size. 100% feature parity with jQuery isn't a goal, but cash comes helpfully close, covering most day to day use cases.

INSTALLATION
- We can easily add cash to a project through NPM as the cash-dom package with the following command:	
npm install cash-dom --save-dev
- Or through Bower as cash: 
bower install cash
- Or on your server or using the jsDelivr or CloudFlare CDNs, and use cash to manipulate the DOM!
<script src="https://cdn.jsdelivr.net/npm/cash-dom@1.3.5/dist/cash.min.js"></script>
<script>
$(function(){
  $('html').addClass('dom-loaded');
  $('<footer>Appended with cash</footer>').appendTo(document.body);
});
</script>

USAGE
For more information I invite you to refer to the following documentation
https://github.com/kenwheeler/cash/blob/master/README.md
