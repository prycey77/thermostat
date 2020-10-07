$(document).ready(function () {
  var thermostat = new Thermostat();
  updateUsage();
  updateTemperature();
  checkOutsideTemp('London');

  $("#temperature-up").click(function () {
    thermostat.up();
    updateTemperature();
    updateUsage();
  });

  $("#temperature-down").click(function () {
    thermostat.down();
    updateTemperature();
    updateUsage();
  });

  $("#temperature-reset").click(function () {
    thermostat.reset();
    updateTemperature();
    updateUsage();
  });

  $("#powersaving-toggle").click(function () {
    thermostat.powerSavingToggle();
    $("#power-saving").text("on");
    updateTemperature();
    updateUsage();
  });

  $("#current-city").change(function () {
    var city = $("#current-city").val();
    checkOutsideTemp(city) 
  })

  function checkOutsideTemp(city) {
      var url = "http://api.openweathermap.org/data/2.5/weather?q="
      var token = "&appid=a3d9eb01d4de82b9b8d0849ef604dbed"
      var units = "&units=metric"
      $.get(url + city + token + units,
        function (data) {
          $("#outsideTemp").text(data.main.temp);
        }
      );
    }

  function updateUsage() {
    $("#energyUsage").text(thermostat.energyUsage());
  }

  function updateTemperature() {
    $("#temperature").text(thermostat.temperature);
    if (thermostat.energyUsage() === "low-usage") {
      $("#temperature").css("color", "green");
    } else if (thermostat.energyUsage() === "medium-usage") {
      $("#temperature").css("color", "black");
    } else {
      $("#temperature").css("color", "red");
    }
  }
});
