//window.onresize = autoResizeDiv;
window.onload=autoResizeDiv();
//autoResizeDiv();

delayedscroll();


var porttop=document.getElementById('port').offsetTop;

function autoResizeDiv() {
    document.getElementById('main').style.height = window.innerHeight + 'px';
    
}


function delayedscroll(){
    
    setTimeout(function(){ 
        document.getElementById('main').style.height= window.innerHeight-porttop + 'px';
        document.getElementById('main').style.transition='1s';
    },1000);
}