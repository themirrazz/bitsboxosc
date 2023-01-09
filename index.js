var document,window,navigator,DOMRect;
function OnScreenKeyboard () {
  var input=document.createElement('input');
  input.style.position="fixed";
  input.style.top="0px";
  input.style.left="0px";
  input.style.border="none";
  input.style.outline="none";
  input.style.pointerEvents="none";
  input.style.padding="0px";
  input.style.opacity="0";
  document.body.appendChild(input);
  var kbd={
    show: function () {
      input.value="";
      input.focus()
    },
    blur: function () {
      input.blur()
    },
    value: function () {
      return input.value
    }
  };
  input.onkeydown = function (event) {
    try {
      kbd.press({
        key: event.key,
        keyCode: event.keyCode,
        location: event.location,
        altKey: event.altKey,
        shiftKey: event.shiftKey,
        ctrlKey: event.ctrlKey,
        metaKey: event.metaKey,
        value: input.value
      })
    } catch (error) {
      alert(error)
    }
  }
  return kbd
}


// demo code

var keyboard=OnScreenKeyboard()

var button = stamp("button")
var label = text("try me", 'white', CENTER)
button.tap=function() {
  keyboard.show()
}
keyboard.press = function (data) {
  if(data.keyCode==13) {
    label.change(data.value)
    keyboard.blur()
  }
}




