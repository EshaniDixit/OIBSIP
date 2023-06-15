let screen = document.getElementById("display");
buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.value = screenValue;
    } else if (buttonText == "√") {
        screen.value = Math.sqrt(screenValue);
      }else if (buttonText == "Ans") {
      var result;
      try {
        result = eval(screenValue);
      } catch (error) {
        result = "Error";
      }
      screen.value = result;
    } else if (buttonText == "Enter") {
        var result;
        try {
          result = eval(screenValue);
        } catch (error) {
          result = "Error";
        }
        screen.value = result;
      }else if(buttonText == "__"){
        screenValue=screenValue;
      }
      else{
      screenValue += buttonText;
      screen.value = screenValue;
    }
  });
}