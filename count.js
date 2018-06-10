$(document).ready(function(){ 

    var compteur = 0;
    var cron;
   
    var sv_seg = 10;
    var seg = document.getElementById('seg');
    var iniciado = false; //init status of cron

$("#btn_play").click(function(){
    if(!iniciado){ iniciado = true; start_cron(); }
});

function start_cron(){
  cron = setInterval(function(){
    
    if(sv_seg > 0 ){
      if(sv_seg < 10){ seg.innerHTML = "0"+sv_seg; }else{ seg.innerHTML = sv_seg; }
      sv_seg--;
    }else{
      sv_seg = 0; seg.innerHTML = "00";
        $("#timeover").css("visibility","visible"); 
      }
    }
  , 1000);
}

$("#btn_pause").click(function(){
  clearInterval(cron);
  iniciado = false;
});



$("#btn_lap").click(function(){
  compteur++;
  consola('<li class="list-group-item"><small>'+compteur+'</small>     '+min.innerHTML+":"+seg.innerHTML+'</li>');
});



});