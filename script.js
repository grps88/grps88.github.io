window.onload = function() {
  document.getElementById('menu-button').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  });
};

function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  
  minutes = (minutes < 10 ? "0" : "") + minutes;
  seconds = (seconds < 10 ? "0" : "") + seconds;

  var timeOfDay = (hours < 12) ? "AM" : "PM";

  hours = (hours > 12) ? hours - 12 : hours;

  hours = (hours == 0) ? 12 : hours;

  var currentTimeString = 'Jest godzina ' + hours +  ":" + minutes + ":" + seconds;

  document.getElementById("clock").innerText = currentTimeString;
}

setInterval(updateClock, 1000);