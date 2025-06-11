var canVibrate = 'vibrate' in navigator || 'mozVibrate' in navigator;

if (canVibrate && !('vibrate' in navigator))
    navigator.vibrate = navigator.mozVibrate;
 
$(".buzz").bind("click", function() {
    navigator.vibrate([50, 500, 50]);
});
