document.querySelector("#icon1").onclick = () => {
  copyText(document.querySelector("#icon1"));
};

document.querySelector("#icon2").onclick = () => {
  copyText(document.querySelector("#icon2"));
};

document.querySelector("#icon3").onclick = () => {
  copyText(document.querySelector("#icon3"));
};

document.querySelector("#icon4").onclick = () => {
  copyText(document.querySelector("#icon4"));
};

document.querySelector("#icon5").onclick = () => {
  copyText(document.querySelector("#icon5"));
};

function copyText(htmlElement) {
  if (!htmlElement) {
    console.log("selected a wrong elment");
    return;
  }

  let value;
  let message;

  switch (htmlElement.id) {
    case "icon1":
      value = "82095 85438";
      message = "Whatsapp no. copied";
      break;
    case "icon2":
      value = "https://www.facebook.com/profile.php?id=100036170415373";
      message = "Facebook link copied";
      break;
    case "icon3":
      value = "https://github.com/Kundankumar07";
      message = "Github link copied";
      break;
    case "icon4":
      value = "mr_kundan__";
      message = "Insta Id copied";
      break;
    case "icon5":
      value = "kundan200077@gmail.com";
      message = "Gmail copied";
      break;
  }

  let clipboard = document.querySelector(".clipboard");
  let list = document.querySelector(".clipboard li");
  clipboard.style.display = "flex";
  list.innerHTML = message;

  let inputElement = document.createElement("input");
  inputElement.setAttribute("value", value);
  document.body.appendChild(inputElement);
  inputElement.select();
  document.execCommand("copy");
  inputElement.parentNode.removeChild(inputElement);

  setTimeout(() => {
    clipboard.style.display = "none";
  }, 1000);
}
