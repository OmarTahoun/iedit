config = {
    lineNumbers: true,
    theme:"default",
    mode: "xml",
    htmlMode: true
};


function setupEditor() {
  //editor and preview area and settigns
  editor = CodeMirror.fromTextArea(editingArea.elt, config);
  editor.setSize(w,h);
  editor.on("change",show);
}



function show() {
  let text = editor.getValue();
  if(text == ""){
    preview.elt.classList.add('empty');
    preview.elt.innerHTML = "<span id='default'><h2>GET ON <i>TYPING</i>👨‍💻👨‍💻</h2></span>";
  }else{
      preview.elt.classList.remove('empty');
      preview.elt.innerHTML = text;
  }
};
