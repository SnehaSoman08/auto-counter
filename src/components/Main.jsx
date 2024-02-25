import React, {useEffect, useState } from 'react';
function Main() {
  
  
  const[sec,setSec]=useState(0)
  const[min,setMin]=useState(0)
var timer;
 useEffect(()=>{
  timer=setInterval(()=>{
setSec(sec+1);

if(sec===59){
  setMin(min+1);
  setSec(0);
}
},500);

return()=>clearInterval(timer);
 })

function stop(){
  clearInterval(timer);
};
function reset(){
  setSec(0);
  setMin(0);
}

  return (
<div className='container' style={{height:"75vh"}}>
      <div className='container w-50 d-flex flex-column justify-content-center align-items-center rounded my-5 p-3 text-center' style={{backgroundColor:" rgb(67, 40, 67)"}}>
        <h1 className='mb-5' id='head' style={{fontFamily:"cursive",fontWeight:"bold",color:"white"}}>Automatic Counter App</h1>
        <p className='fw-bolder' style={{fontSize:"40px",color:"pink"}}>{min<10?"0"+min:min+1} : {sec<10?"0"+sec:sec+1}</p>
<div>
            <button onClick={reset} className='btn btn-success px-5 mt-3 fw-bold mx-5 text-white'>reset</button>
            <button onClick={stop} className='btn btn-danger px-5 mt-3 fw-bold text-white'>stop</button>
  
</div>    
    </div>
  
</div>  );
}

export default Main;
