$(document).ready(function () {
  $("#getweatherbtn").click(function () {
    var city = $("#city").val();
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?q=London&appid=8d856c3cb815a0a672682d3ab75a35bc",
      method: "get",
      success: function (data) {
        console.log(data);
        console.log(data.name);
        $("#name").html(data.name);
      },
      error: function (err) {
        console.log(err);
      },
    });
  });

  //   $.ajax({
  //     url: "https://randomuser.me/api/",
  //     method: "get",
  //     success: function (data) {
  //       $("#name").html(data.results[0].name.first);
  //       $("#lname").html(data.results[0].name.last);
  //       $("#pic").attr("src", data.results[0].picture.large);

  //       console.log(data.results.length);
  //       console.log(data.results[0]);

  //       //   for (let i = 0; i < data.results.length; i++) {
  //       //     var user = data.results[i];
  //       // $("#name").html(data.results[0].name.first);

  //       //     console.log(user.name.first);
  //       //   }
  //     },
  //     error: function (err) {
  //       console.log("errorrrrr" + err);
  //     },
  //   });
});
