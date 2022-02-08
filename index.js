const newyear='21 march 2022';
const d=document.querySelector('.day');
const h=document.querySelector('.hours');
const m=document.querySelector('.minutes');
const s=document.querySelector('.seccond');

function coundown(){
    const counter=new Date(newyear);
    const currenrDate=new Date();
    const totalDate=Math.floor(counter - currenrDate )/1000;
   const day=Math.floor(totalDate /3600 /24);
  const hour=Math.floor((totalDate /3600) %24);
  const minute=Math.floor((totalDate/60)%60);
  const seccound=Math.floor(totalDate % 60);

  d.innerText=day;
  h.innerText=hour;
  m.innerText=minute;
  s.innerText=seccound;
}
coundown();
const tick=setInterval(
    coundown,100
)
