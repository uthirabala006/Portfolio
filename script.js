let mybutton=document.getElementById("topBtn");

window.onscroll=function(){
    scrollFunction();
};

function scrollFunction(){

    if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){

        mybutton.style.display="block";

    }else{

        mybutton.style.display="none";

    }

}

function topFunction(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}