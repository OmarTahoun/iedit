let config, editor, editingArea, preview;
let w, h;

function setup() {
  w = windowWidth/2;
  h = windowHeight-10;

  editingArea = select('.editor');
  preview      = select('.preview');
  setupEditor();
  preview.position(editor.x + editor.width, editor.y);

}
