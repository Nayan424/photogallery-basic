function upDate(previewPic){
  var a=previewPic.src;
  document.getElementById("image").style.backgroundImage="url('"+a+"')";
  document.getElementById("image").innerHTML=previewPic.alt;
}

function unDo(){
  var img=document.getElementById("image");
  var a=img.src;
  img.style.backgroundImage="url('"+a+"')";
  img.innerHTML='Hover over an image below to display here.';
}