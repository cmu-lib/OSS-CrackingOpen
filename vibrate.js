var canVibrate = 'vibrate' in navigator || 'mozVibrate' in navigator;

if (canVibrate && !('vibrate' in navigator))
    navigator.vibrate = navigator.mozVibrate;
 
document.querySelector('.buzz').addEventListener('click', function() {
    navigator.vibrate(50);  // 100ms vibration for button press feedback
});