import { useState } from "react";
import Style from "./Calculater.module.css"
const Calculater=() =>{
    const [input, setInput] = useState('');

    const handleClick = (value) => {
        if(value==='='){
            try{
                setInput(eval(input).toString());
            }catch(error){
                 setInput('Error');
            }
        } else if(value==='C'){
          setInput(' ')
        }else if(value==='X'){
            setInput((prevInput) => prevInput.slice(0,-1))
        }else{
        setInput((prevInput) => prevInput + value);
        }
      };
    const Cal=['X','(',')','C','7','8','9','+','4','5','6','-','1','2','3','*','.','0','=','/']
   return<>
    <div className={Style.Calculater}>
       <h1 className={Style.Simple}>Simple Calculater</h1> 
         <input type="text" className={Style.input} value={input} readOnly/>
         <div className={Style.Cals}>
         <div className={Style.MapButtion}>
         {Cal.map((Items) => (
            <button className={Style.button} onClick={() => handleClick(Items)} key={Items}>
              {Items}
            </button>
          ))}
           </div>
        </div>
    </div>
   </>
}
export default Calculater;