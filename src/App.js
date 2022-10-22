import { useEffect, useState } from 'react';

// import image
import logo from  "./assets/images/logo.svg";

// style
import './App.css';

// component
import Display from './Component/Display';
import Form from './Component/Form';

function App() {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState("");
  const [people, setPeople] = useState("");
  const [calculatedTip, setCalculatedTip] =useState(0);
  const [total, setTotal] = useState(0);

useEffect(() =>{
  console.table({bill,people,tip})
  if(bill > 0 &&  people > 0  && tip > 0) {
     setCalculatedTip(bill * (tip / 100));
     setTotal(calculatedTip + bill)
  }
}  , [bill,people, tip, calculatedTip])


 const handleResetBtn =(e) => {
  console.log('reseted')
  setBill("");
  setTip("");
  setPeople("");
  setCalculatedTip(0);
  setTotal(0);
 }

  return (
    <div className="wrapper">
       <img className='logo' src={logo} alt='splitter-Logo' />
      <div className="container">
        <Form 
        bill={bill}
        setBill={setBill}
        tip={tip}
        setTip={setTip}
        people= {people}
        setPeople= {setPeople}
         />

        <Display 
          total={total}
          people={people}
          calculatedTip={calculatedTip}
          handleResetBtn={handleResetBtn}
        />

      </div>
     
    </div>
  );
}

export default App;
