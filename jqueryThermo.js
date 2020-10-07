$(document).ready(function () {
  var thermostat = new Thermostat();
  updateTemperature();

  $("#temperature-up").click(function () {
    thermostat.up();
    updateTemperature();
    energyUsage();
  });

  $("#temperature-down").click(function () {
    thermostat.down();
    updateTemperature();
    energyUsage();
  });

  $("#temperature-reset").click(function () {
    thermostat.reset();
    updateTemperature();
    energyUsage();
  });

  $("#powersaving-toggle").click(function () {
    thermostat.powerSavingToggle();
    $("#power-saving").text("on");
    updateTemperature();
  });
  function energyUsage() {
    $("#energyUsage").text(thermostat.energyUsage());
  }

  function updateTemperature() {
    $("#temperature").text(thermostat.temperature);
    $("#temperature").attr("class", thermostat.energyUsage);
  }
});
