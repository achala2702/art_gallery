window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navigationBar").style.top = "0%";
  } else {
    document.getElementById("navigationBar").style.top = "12%";
  }
}