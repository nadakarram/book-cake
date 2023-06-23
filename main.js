var search_icon=document.getElementById("search_icon");
var search_play=document.getElementById('search-play');
var delete_icon=document.getElementById('delete');
var input=document.getElementsByName('search')[0];
search_icon.onclick=function(e){
    e.preventDefault()
    search_play.classList.toggle('display_1')
}
delete_icon.onclick=function(){
    input.value=""
  
}