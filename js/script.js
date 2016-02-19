var btn_click = document.querySelector(".btn_title");
var popup = document.querySelector(".search_form");
var btn_close=0;
btn_click.addEventListener("click", function(event) {
  if (btn_close==0){
  event.preventDefault();
  btn_close=1;
    animate(function(timePassed) {
          popup.style.top = timePassed / 0.5 + 'px';
        }, 0);
}
else{
  btn_close=0;
  event.preventDefault();
    animate_up(function(timePassed) {
          popup.style.top = timePassed / -0.5 + 'px';
        }, 280);
}
});

function animate(draw, duration) {
      var start = performance.now()+280;
      requestAnimationFrame(function animate(time) {
        var timePassed = time - start;
        if (timePassed > duration) timePassed = duration;
        draw(timePassed);
        if (timePassed < duration) {
          requestAnimationFrame(animate);
        }
      });
    }

function animate_up(draw, duration) {
      var start = performance.now();
      requestAnimationFrame(function animate_up(time) {
        var timePassed = time - start;
        if (timePassed > duration) timePassed = duration;
        draw(timePassed);
        if (timePassed < duration) {
          requestAnimationFrame(animate_up);
        }
      });
    }
