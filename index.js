function find()
{
    console.log(tt.value)
    let name= tt.value;
    document.getElementById("hey").innerHTML=name;
    document.getElementsByClassName("bunny")[0].style.display='none';
    document.getElementById("intro").style.display='none';
    document.getElementsByClassName("card")[0].style.display='flex';
    var x = document.createElement("VIDEO");

  if (x.canPlayType("video/mp4")) {
    x.setAttribute("src","movie.mp4");
  } else {
    x.setAttribute("src","movie.ogg");
  }
  x.setAttribute("width", "100%");
  x.setAttribute("height", "50%");
  x.setAttribute("autoplay","autoplay")
  document.body.appendChild(x);
}