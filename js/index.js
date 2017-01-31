var header = document.querySelector("header");
var stickyNav = document.querySelector("#stickyNav");

// TODO: throttle this function for optimal performance in production
window.addEventListener('scroll', function(e){
  var scrollPos = window.pageYOffset || document.documentElement.scrollTop;
  var stickyLine = header.scrollHeight - stickyNav.scrollHeight;
  if(scrollPos > stickyLine){
    stickyNav.classList.add("fixed");
  }else if(stickyNav.classList.contains('fixed')){
    stickyNav.classList.remove("fixed");
  }
});




$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink');
  } else {
    $('nav').removeClass('shrink');
  }
});


$(document).ready(function() {
  //$('h1').css({color: 'red'})
  $('li img').on('click', function () {
        var src = $(this).attr('src');
        var img = '<img src="' + src + '" class="img-responsive"/>';
        $('#myModal').modal();
        $('#myModal').on('shown.bs.modal', function () {
            $('#myModal .modal-body').html(img);
        });
        $('#myModal').on('hidden.bs.modal', function () {
            $('#myModal .modal-body').html('');
        });
    });
});