let img1=document.getElementById('img');
let prevbanner=document.querySelector('.prev');
let nextbanner=document.querySelector('.next');
let tulist=document.querySelectorAll('.banner_cir>li');
let imgarr=['1.webp','2.jpg','3.jpg','4.jpg','5.webp','6.webp','7.jpg','8.jpg'];

//设置路径
let k=0;
function imgadd(){
    for(let kk=0;kk<imgarr.length;kk++){
        tulist[kk].className=""
    }
    img1.src='images/'+imgarr[k];
    tulist[k].className="active"
}
function pd(){
    if(k>imgarr.length-1){
          k=0;
    }
  imgadd();
  k++;
}
setInterval('pd()',1000);

//设置左按钮
prevbanner.onclick=function(){
      k--;
     if(k<0){
       k=imgarr.length-1;

     }
      imgadd();

}
//设置右按钮
nextbanner.onclick=function(){
    k++;
   if(k>imgarr.length-1){
     k=0;

   }
    imgadd();
}
//小圆按钮设置

for(let s=0;s<imgarr.length;s++){
    tulist[s].onclick=function(){
        k=s;
        imgadd();
    }
}

