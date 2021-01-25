import React, {useState, useEffect} from 'react';
import Papa from "papaparse";
import dangerous from "./dangerous.csv"; 
import half from "./half.csv";

function Checker() {
  const [website, setWebsite] = useState('Type in your website here');
  const [displayName, setDisplay] = useState('www.yourwebsitescorewillcomehere.com');
  const [websiteDanger, setDanger] = useState(5); // scale from 0-100 or something
  const [resultStyle, setstyle] = useState({color: 'blue', fontSize: 40, textAlign:'center'});
  const [dangerousCSV, setDangerous] = useState(null);
  const [halfCSV, setHalf] = useState(null);

  useEffect(() =>  {
    Papa.parse(dangerous, {
       download: true,
       complete: function(results){
         setDangerous(results.data); // dangerousCSV = an array of arrays, dangerousCSV[index][0]
         console.log(dangerousCSV);
       }
     })
    Papa.parse(half, {
      download: true,
      complete: function(results){
        setHalf(results.data); // dangerousCSV = an array of arrays, dangerousCSV[index][0]
        console.log(halfCSV);
      }
    })
  }, []); // [] means that this useEffect will not repeat

  const displayInfo = () => {
    setDisplay(website);
    // check which array website is in
    let websiteFound = false;
    let temp = setDanger;

    
    
    dangerousCSV.map((dWebsite) => {
      if (dWebsite[0] === website){
        setDanger(10);
        temp = 10;
        websiteFound = true;
      }
    });

    halfCSV.map((hWebsite) =>{
      if (hWebsite[0] === website){
        setDanger(5);
        temp = 5;
        websiteFound = true;
      }    
    });

    if (!websiteFound){
      
      temp = 0;
      setDanger(0);
    }
    
    
    let isolatedWebsite = (website.substring(4, website.length-4));
    console.log(isolatedWebsite);
    console.log(website);

    if (temp === 0){
      setstyle({color: 'green', fontSize: 40, textAlign:'center'});
    }
    else if (temp === 5){
      setstyle({color: 'blue', fontSize: 40, textAlign:'center'});
    }
    else if (temp === 10 || temp === -1){
      setstyle({color: 'red', fontSize: 40, textAlign:'center'});
    }
  }

  const handleSubmit = (evt) => {
    evt.preventDefault(); // prevent function misfires
    //alert(`Calculating Score for ${website}`)
    displayInfo(); // calling the function to calculate
  }

  return (
    <div className="App">
      <header className="App-header">
        <a>
          
        </a>
        <h3>Website security</h3>
        <a href src = "www.hi.com"></a>
        <form onSubmit={handleSubmit}> {/* when you click submit, this will call handleSubmit */}
          <label>
            Website Name: 
            <input
              type="text"
              value={website}
              onChange={e => setWebsite(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        {/* <p>Did you use safety measures? These safety measures include using a VPN, browsing incognito, clearing your cache, or rejecting cookies?</p>
        <button>Yes</button> */}
        <p style={resultStyle}>{displayName} has a safety score of {websiteDanger/*websiteDanger === 0 ? "Safe" : websiteDanger === 5 ? "Semi Dangerous" : "Dangerous"*/}</p> {/* style this is css */}
        <p>Lower is better</p>
      </header>
    </div>
  );
}

/*
  condition ? (what happens if true) : (what happens if false)
*/

export default Checker;
