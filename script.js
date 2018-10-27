var w = window.innerWidth-50;
w = w/2
var h = window.innerHeight-50;
var config, editor;
var area = document.querySelector(".editor");
var prev = document.querySelector(".preview");
var choices = document.getElementsByName("mode");

prev.style.maxWidth = w;

config = {
    lineNumbers: true,
    theme:"default",
    mode: "xml",
    htmlMode: true
};


//editor and preview area and settigns
editor = CodeMirror.fromTextArea(area, config);
editor.setSize(w,h);
editor.on("keyup", show);
editor.on("inputRead", function () {
  prev.innerHTML ="";
  prev.setAttribute("style", "color:black; font-size:16px; font-weight: 400;");
});


function show() {
  let text = editor.getValue();
  if(text == ""){
    prev.setAttribute("style", "color:#007c72; font-size:27px;");
    prev.innerHTML = "<h2>GET ON <i>TYPING</i>👨‍💻👨‍💻</h2>";
  }else{
    if(editor.options.mode == "xml"){
      prev.innerHTML = text;
    }
    else {
      prev.innerHTML = markdown.toHTML(text);
    }
  }
};

choices[0].onclick = function(){
  editor.options.mode = "xml";
}

choices[1].onclick = function(){
  editor.options.mode = "markdown";
}
