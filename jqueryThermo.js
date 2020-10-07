$(document).ready(function () {
  var thermostat = new Thermostat();
  updateUsage();
  updateTemperature();

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

  function updateUsage() {
    $("#energyUsage").text(thermostat.energyUsage());
  }

  function updateTemperature() {
    $("#temperature").text(thermostat.temperature);
    $('#temperature').css('class', thermostat.energyUsage());
  }
});
