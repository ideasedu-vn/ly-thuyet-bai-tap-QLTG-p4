function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5tjxc5vaj2N":
        Script1();
        break;
      case "6jJKT27RgIW":
        Script2();
        break;
      case "6JrUu9E3HNf":
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

