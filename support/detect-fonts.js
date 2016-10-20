function detectFonts() {
  var fonts = {};

  function walk(node) {
    if (node.nodeType == 1) {
      // console.log(node.tagName);

      try {
        var f = document.defaultView.getComputedStyle(node, null).getPropertyValue('font-family');
        // console.log(node, f);
        fonts[f] = true;
      } catch(e) {
        // ignore this for now
      }

      node = node.firstChild;

      while (node) {
        walk(node);
        node = node.nextSibling;
      }
    }
  }

  walk(document.body);

  return Object.keys(fonts);
}
