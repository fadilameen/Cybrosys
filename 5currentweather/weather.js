const apikey = "8d856c3cb815a0a672682d3ab75a35bc";

$(document).ready(function () {
  $("#getweatherbtn").click(function () {
    var city = $("#city").val();
    $.ajax({
      url:
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&appid=" +
        apikey,
      method: "get",
      success: function (data) {
        $("#error").html("");

        console.log(data);
        console.log(data.name);
        tempk = data.main.temp;
        tempc = tempk - 273.15;
        tempf = (tempk * 9) / 5 - 459.67;
        console.log(data.weather[0].description);
        weatherdescription = data.weather[0].description;

        // icon = "🌩️";
        icon = data.weather[0].icon;
        var url = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        $("#iconimg").attr("src", url);
        $("#citynamedisplay").html(data.name);
        $("#condition").html(weatherdescription);
        $("#tempk").html(tempk + "K");
        $("#tempc").html(tempc.toFixed(2) + "°C");
        $("#tempf").html(tempf.toFixed(2) + "°F");

        $("#lon").html(data.coord.lon);

        $("#lat").html(data.coord.lat);
      },
      error: function (err) {
        $("#error").html("Enter a valid city");

        // console.log(err);
      },
    });
  });
});

$(document).ready(function () {
  $("#getcurrentbtn").click(function () {
    getlocation();
  });
});

function getlocation() {
  navigator.geolocation.getCurrentPosition(locationdata, err);
}
function locationdata(pos) {
  console.log(pos.coords.latitude);
  console.log(pos.coords.longitude);
  // lati = 11.25;
  // long = 75.82;
  lati = pos.coords.latitude.toFixed(2);
  long = pos.coords.longitude.toFixed(2);
  $.ajax({
    url:
      "https://api.openweathermap.org/data/2.5/weather?lat=" +
      lati +
      "&lon=" +
      long +
      "&appid=" +
      apikey,
    method: "get",
    success: function (data) {
      $("#error").html("");

      console.log(data);
      console.log(data.name);
      tempk = data.main.temp;
      tempc = tempk - 273.15;
      tempf = (tempk * 9) / 5 - 459.67;
      weatherdescription = data.weather[0].description;

      // icon = "🌩️";
      icon = data.weather[0].icon;
      var url = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      $("#iconimg").attr("src", url);
      $("#city").val(data.name);
      $("#citynamedisplay").html(data.name);
      $("#condition").html(weatherdescription);

      $("#tempk").html(tempk + "K");
      $("#tempc").html(tempc.toFixed(2) + "°C");
      $("#tempf").html(tempf.toFixed(2) + "°F");

      $("#lon").html(data.coord.lon);

      $("#lat").html(data.coord.lat);
    },
    error: function (err) {
      $("#error").html("Something went wrongg");

      // console.log(err);
    },
  });
}
function err(err) {
  console.log(err);
}
