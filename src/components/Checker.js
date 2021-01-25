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
    let eWebsite = website.toLowerCase();
    let eWebArray = eWebsite.split('.');
    let isWrong = false;
    console.log(eWebArray);
    if (eWebArray.length != 3 || eWebArray[0] != "www" || eWebArray[2] != "com"){
      isWrong = true;
    }
    console.log(isWrong);
    setDisplay(website);
    // check which array website is in
    
    let websiteFound = false;
    let temp = setDanger;

    
    
    dangerousCSV.map((dWebsite) => {
      if (dWebsite[0] === eWebsite){
        setDanger(10);
        temp = 10;
        websiteFound = true;
      }
    });

    halfCSV.map((hWebsite) =>{
      if (hWebsite[0] === eWebsite){
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

    if (temp === 0 && isWrong == false){
      setstyle({color: 'green', fontSize: 40, textAlign:'center'});
    }
    else if (temp === 5){
      setstyle({color: 'blue', fontSize: 40, textAlign:'center'});
    }
    else if (temp === 10 || temp === -1 || isWrong == true){
      setstyle({color: 'red', fontSize: 40, textAlign:'center'});
    }

    if (isWrong == true){
      setDanger(11);
    }
    console.log (websiteDanger);
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
        
        <p style={resultStyle}>{displayName} {websiteDanger == 0 ? "has a safety score of zero, which is the best one. Happy browsing! Make sure there were no typos" : websiteDanger === 5 ? "Has a safety score of 5. That means it is ok to use, but it may track you. Click the improve button at the top to try and make your browsing experience safer, or avoid this site. " : websiteDanger == 10 ? "has a safety score of 10. AVOID THIS SITE IF YOU CAN. If you absolutely must use this site, visit our improve page to see how to improve": "is not a valid url. Make sure it is in the form of www.entersite.com. "}</p> {/* style this is css */}
        <p>Lower is better</p>
      </header>
    </div>
  );
}

/*
  condition ? (what happens if true) : (what happens if false)
*/

export default Checker;
