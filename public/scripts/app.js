$(() => {
  $.ajax({
    method: "GET",
    url: "/api/games"
  }).done((games) => {
    for(game of games) {
      var dateTime = new Date(game.datetime)
      var date = dateTime.toDateString();
      var time = (dateTime.getUTCHours() + ":" + dateTime.getUTCMinutes());
      console.log(date, time);
      $("<div>").appendTo($("#hero"));
      $("<span>").text(game.away_team).prependTo($("#hero div"));
      $("<span>").text(" vs ").appendTo($("#hero div"));
      $("<span>").text(game.home_team).appendTo($("#hero div"));
      $("<div>").appendTo($("#hero div"));
      $("<span>").text(date + " " + time).appendTo($("#hero div div"));
    }
  })
});
