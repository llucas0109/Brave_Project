function menu(){
    var navegador=document.getElementById('firtnavegador')
    navegador.style.display='block'
}
function closing(){
    var navegador=document.getElementById('firtnavegador')
    navegador.style.display='none'
}
function listRecursos(){
    var lista=document.getElementById('listRe')
    var expand=document.getElementById('expandmore')
    if(lista.style.display=='block'){
        lista.style.display='none'
        expand.style.transform='rotateZ(0deg)'
    }else{
        lista.style.display='block'
        expand.style.transform='rotateZ(180deg)'
        
    }
}