(function() {
  var updateSeason = document.getElementById('updateSeason');
  var selectMonth = document.getElementById('selectMonth');
  var cancelSeason = document.getElementById('cancel');
  var cancelMonth = document.getElementById('cancel');
  var favDialog = document.getElementById('favDialog');
  var favMonth = document.getElementById('favMonth');

  // Update season opens a modal dialog
  updateSeason.addEventListener('click', function() {
    favDialog.showModal();
  });

  // Form cancel button closes the dialog box
  cancelSeason.addEventListener('click', function() {
    favDialog.close();
  });

  // Update button opens a modal dialog
  selectMonth.addEventListener('click', function() {
    favMonth.showModal();
  });

  // Form cancel button closes the dialog box
  cancelMonth.addEventListener('click', function() {
    favMonth.close();
  });
})();

//
// function displayWeather(month) {
//   var url = 'http://api.worldweatheronline.com/premium/v1/past-weather.ashx
//     // var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
//     var token = '&appid=69638d45e969469d756d603cbf4447e9';
//     var units = '&units=metric';
//     $.get(url + token + units, function(data) {
//       $('#current-temperature').text(data.main.temp + ' degrees celsius ');
//     });
//   };
