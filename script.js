function setupEditor() {
  //editor and preview area and settigns
  editor = CodeMirror.fromTextArea(editingArea.elt, config);
  editor.setSize(width,height);
  editor.on("change",show);
}



function show() {
  let text = getText();
  if(text == ""){
    mode.elt.style.opacity = 1;
    label.elt.style.display = 'block';
    preview.elt.classList.add('empty');
    preview.elt.innerHTML = "<span id='default'><h2>GET ON <i>TYPING</i>👨‍💻👨‍💻</h2></span>";
  }else{
      mode.elt.style.opacity = 0.06;
      label.elt.style.display = 'none';
      preview.elt.classList.remove('empty');
      preview.elt.innerHTML = text;
  }
};

function getText(){
  var text = editor.getValue();
  if (mode.value() == "HTML")
    return text;
  else
    return markdown.toHTML(text);
}
