function menu(){
    var navegador=document.getElementById('navfirst')
    navfirst.style.display='block'
}
function closing(){
    var navegador=document.getElementById('navfirst')
    navfirst.style.display='none'
}

function listRecursos(){
    var lista=document.getElementById('listRe')
    var expand=document.getElementById('expandmore')
    var recursostxt=document.getElementById('Recursostext')
    var hr=document.getElementById('hr1')
    var mon=document.getElementById('mon')

    if(lista.style.display=='block'){
        mon.style.transition='transform 0.5s ease 0.1s'
        mon.style.transform='translateY(0px)'
        hr.style.transition='transform 0.5s ease 0.1s'
        hr.style.transform='translateY(0px)' //O proprio transforme tranlate no final da animaçao aplica as configoraçoes !! deixando fixo no css
        lista.classList.remove('trans')
        lista.classList.add('opac')
        lista.style.display='none'
        expand.style.transform='rotateZ(0deg)'
       // hr.style.animationDirection='reverse' animation-direction: reverse; inverte a direçao da animaçao de keyframes.
    }else{
        expand.style.transform='rotateZ(180deg)' //Quando voce aplica rotaçao amargin right muda para direçao que voce mudou o elemento tambem!!
        mon.style.transition='transform 0.3s ease 0.1s'
        mon.style.transform='translateY(190px)'
        recursostxt.style.paddingBottom='0px'
        hr.style.transition='transform 0.3s ease 0.1s'
        hr.style.transform='translateY(190px)' //O proprio transforme tranlate no final da animaçao aplica as configoraçoes !! deixando fixo no css
        //COLOQUE FORWARDS NO FINAL DE ANIMATION. Para aplicar a alteraçao.
        lista.style.display='block'
        lista.classList.remove('opac')
        lista.classList.add('trans')
        
    }
    /*LEIA*/
}