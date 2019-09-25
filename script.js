function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
cookies = getCookie("cookies")
if(cookies == ""){
  cookies = 0
  document.cookie = `cookies=${cookies}`
}else{
  cookies = parseInt(cookies, 10);
  clicks.innerText = `${cookies} Clicks!`
}
button = document.getElementById("youtube")
clicks = document.getElementById("clicks")
button.addEventListener("click",function(e){
  if(button.src == "https://youtube-clicker.applidev.repl.co/favicon.ico"){
    cookies = cookies + 1
  clicks.innerText = `${cookies} Clicks!`
  document.cookie = `cookies=${cookies}`
  }else if(button.src == "https://youtube-clicker.applidev.repl.co/images/button/gold"){
    cookies = cookies + 100
  clicks.innerText = `${cookies} Clicks!`
  document.cookie = `cookies=${cookies}`
  }else if(button.src == "https://youtube-clicker.applidev.repl.co/images/button/silver"){
    cookies = cookies + 10
  clicks.innerText = `${cookies} Clicks!`
  document.cookie = `cookies=${cookies}`
  }else if(button.src == "https://youtube-clicker.applidev.repl.co/images/button/diamond"){
    cookies = cookies + 1000
  clicks.innerText = `${cookies} Clicks!`
  document.cookie = `cookies=${cookies}`
  }else if(button.src == "https://youtube-clicker.applidev.repl.co/images/button/ruby"){
    cookies = cookies + 10000000
  clicks.innerText = `${cookies} Clicks!`
  document.cookie = `cookies=${cookies}`
  }
})
function buy(what){
  if(what == "gold"){
    if(cookies >= 1000){
      button.src = "/images/button/gold"
    }else{
      alert("Not enough cookies")
    }
  }else if(what == "silver"){
    if(cookies >= 100){
      button.src = "/images/button/silver"
      button.height = 100
    }else{
      alert("Not enough cookies")
    }
  }else if(what == "diamond"){
    if(cookies >= 1000000){
      button.src = "/images/button/diamond"
      button.height = 100
    }else{
      alert("Not enough cookies")
    }
  }else if(what == "ruby"){
    if(cookies >= 1000000000){
      button.src = "/images/button/ruby"
      button.height = 100
    }else{
      alert("Not enough cookies")
    }
  }
}