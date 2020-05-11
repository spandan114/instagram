var state = false 
function toggle(){
  if(state){
    document.getElementById("myPass").setAttribute("type","password")
    state = false;
  }else{
    document.getElementById("myPass").setAttribute("type","text")
    state = true 
  }
}
function myFunction(show) {
  show.classList.toggle("fa-eye-slash");
}
  