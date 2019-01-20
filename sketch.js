let editor, editingArea, preview, mode, label;
let width, height;

let config = {
    lineNumbers: true,
    theme:"default",
    mode: "xml",
    htmlMode: true
};


function setup() {
  width = windowWidth/2;
  height = windowHeight-13;

  editingArea = select('.editor');
  preview      = select('.preview');
  setupEditor();
  preview.position(editor.x + editor.width, editor.y);

  mode = createSelect('Mode');
  mode.position((width-55)*2, 20);
  mode.addClass('mode');
  mode.option('HTML');
  mode.option("MarkDown");
  mode.changed(show);

  label = createP('Set The Mode: ');
  label.position(mode.x - 135, mode.y-20);
  label.addClass('label');
}
