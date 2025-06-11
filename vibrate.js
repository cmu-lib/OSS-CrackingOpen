var isMobile = /iPhone|iPod|iPad|Android|BlackBerry/.test(navigator.userAgent)
 
$('.buzz, a').on(isMobile ? 'touchend' : 'click', function (e) {
  navigator.vibrate(50)
})
