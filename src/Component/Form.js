import {useState} from "react";
import dollar from  "../assets/images/icon-dollar.svg";
import person from  "../assets/images/icon-person.svg";

  
const Form = ( {bill, setBill, tip, setTip, people, setPeople }) => {
    
    const [isCustomSelected, setIsCustomSelected] = useState(false)


    const handleSelectedTip  = (e) => {
        setTip(+e.target.value);
        setIsCustomSelected(true)
    }
       
    return (
        <div classNmae="form">
            <div className= "label-group">
                <div className="label-wrapper">
            <label className="label" htmlFor="bill"> Bill </label>
            </div>
            <div className="number-wrapper">
            <input type="number" className="number-input" placeholder="0" id ="bill" onInput={(e) => setBill(+e.target.value)} value={bill} />
            <img src={dollar} aria-hidden="true" className="icon" />
            </div>
            </div>
            
            <div className="tip-section">
                 
                 <p className="label"> Selected Tip % </p>
                <div className="tip-amount-wrapper">
                <div className="tip-amount">
                <input type="radio" className="tip-input" onInput={handleSelectedTip} id="input1" name="tip" value="5" />
                <label className="tip-btn" htmlFor="input1"> 5% </label>
                </div>  

                <div className="tip-amount">
                <input type="radio" className="tip-input" onInput={handleSelectedTip} id="input2"  name="tip" value="10" />
                <label className="tip-btn" htmlFor="input2"> 10% </label>
                </div>  

                <div className="tip-amount">
                <input type="radio" className="tip-input" onInput={handleSelectedTip} id="input3"  name="tip" value="15" />
                <label className="tip-btn" htmlFor="input3"> 15% </label>
                </div>  

                <div className="tip-amount">
                <input type="radio" className="tip-input" onInput={handleSelectedTip} id="input4" name="tip" value="25" />
                <label className="tip-btn" htmlFor="input4"> 25% </label>
                </div>  

                <div className="tip-amount">
                <input type="radio" className="tip-input" onInput={handleSelectedTip} id="input5" name="tip" value="50" />
                <label className="tip-btn" htmlFor="input5"> 50% </label>
                </div>  
     <div className="custom-wrapper">
           <input type="number " onInput={handleSelectedTip} id="custom" name="tip" className="tip-custom  number-input" placeholder="Custom"/>
           </div>
                </div>

            </div>
          
            <div className= "label-group">
                <div className="label-wrapper">
            <label className="label" htmlFor="people"> Number of People </label>
            <p className="error">
                {people === 0 ? "can't be zero" : ""} 
                 </p>
            </div>
            <div className="number-wrapper">
            <input type="number" placeholder="0" className={`number-input ${people === 0 ? 'number-error' : "" }`} id ="people" onInput={(e) => setPeople(+e.target.value)} value={people} />
            <img src={person} aria-hidden="true" className="icon" />
            </div> 
            </div>
 

        </div>
    )
}

export default Form;