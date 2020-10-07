$(document).ready(function () {
  var thermostat = new Thermostat();
  updateUsage();
  updateTemperature();
  checkOutsideTemp ();

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

  

  function checkOutsideTemp () {
    $("#outsideTemp").get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      console.log(data.main.temp);
    })
  }
  function updateUsage() {
    $("#energyUsage").text(thermostat.energyUsage());
  }

  function updateTemperature() {
    $("#temperature").text(thermostat.temperature);
    $('#temperature').attr('id', thermostat.energyUsage());
  }
});
