$(document).ready(function () {
  $("input").click(function () {
    console.log("halo");
    oldval = $("#display").html();
    btnval = $(this).val();
    newval = oldval.toString() + btnval.toString();
    console.log(btnval);
    $("#display").html(newval);
  });
});
