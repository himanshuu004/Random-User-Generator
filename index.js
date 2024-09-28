var block = document.querySelector(".btn1");
var unblock = document.querySelector(".btn2");



block.addEventListener("click",function(){
  localStorage.setItem("block","true");
  disp();
});

unblock.addEventListener("click",function(){
  localStorage.setItem("block","false");
  disp();
});

function disp(){
  if(localStorage.getItem("block") == "true"){
    document.querySelector("#status").textContent = "BLOCKED";
  }
  else{
    document.querySelector("#status").textContent = "UNBLOCKED";
  }
}

disp();

