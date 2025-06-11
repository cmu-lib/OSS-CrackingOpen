var isMobile = /iPhone|iPod|iPad|Android|BlackBerry/.test(navigator.userAgent)
 
$('#CrackingOpenLogo').on(isMobile ? 'touchend' : 'click', function (e) {
  navigator.vibrate(50)
})