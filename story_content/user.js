function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6QAXEqtY9Tl":
        Script1();
        break;
      case "6kSr4fnVZj3":
        Script2();
        break;
      case "5g9HZAqtuLx":
        Script3();
        break;
  }
}

function Script1()
{
  var currentTime = new Data()
var day = currentTime.getDate()
var month = currentTiem.getMonth() + 1
var year = currentTime.getFullYear()
var dateSting = month + "/" + day + "/" + year
var player = GetPlayer();
player.SetVar("TG",dateSting);
}

function Script2()
{
  var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear();
var player = GetPlayer();
var newName = day + "/" + month + "/" + year
player.SetVar("TG", newName);
}

function Script3()
{
  var currentTime = new Data()
var day = currentTime.getDate()
var month = currentTiem.getMonth() + 1
var year = currentTime.getFullYear()
var dateSting = month + "/" + day + "/" + year
var player = GetPlayer();
player.SetVar("TG",dateSting);
}

