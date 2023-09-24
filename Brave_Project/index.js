function menu(){ //Existe diferença entre elementos e atributos !!acho
    var capheader=document.getElementById('header')
    /* IMPORTANTE!!! selecionamos ate chegar em '.document' e depois colocamos ou get elementbyid ou quaryselector para selecionar a tag que queremos. ou seja document getelementbyid(header) por exemplo*/
    var capnav=document.createElement('nav')
    var capspan=document.createElement('span')
    capheader.appendChild(capnav) //È sem aspas o filho
    capspan.innerHTML='close'
    capnav.appendChild(capspan)
    var atrspan=document.createAttribute('class')
    var atrspan2=document.createAttribute('onclick')
    var atrnav=document.createAttribute('id')
    atrnav.value='inav'
    atrspan2.value='fechar()'
    atrspan.value='material-symbols-outlined'
    capspan.setAttributeNode(atrspan)
    capspan.setAttributeNode(atrspan2)
    capnav.setAttributeNode(atrnav)
    window.alert('adicionado')
}
function fechar(){
    var fechando=document.getElementById('inav')
    fechando.style.display='none'
    window.alert('fechou')
}