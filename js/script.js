var btn_click = document.querySelector(".btn_title");
var popup = document.querySelector(".search_form_body");
var btn_close=0;
btn_click.addEventListener("click", function(event) {
  if (btn_close==0){
  event.preventDefault();
  popup.classList.add("search_form_show");
  btn_close=1;
}else{
  event.preventDefault();
  popup.classList.remove("search_form_show");
  btn_close=0;
}
});
