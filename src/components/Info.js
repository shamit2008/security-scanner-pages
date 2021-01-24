import React, {useState, useEffect} from 'react';

function Info() {
  const [textCategory, setCategory] = useState('None');
  const [ text, setText ] = useState('');

  useEffect(() => {
    displayText();
  }, [textCategory]);

  const displayText = () => {
    if (textCategory === "None"){
      setText("");
    }
    else if (textCategory === "Web Crawler"){
      setText("The main way we check web security is  through a web-crawler called openwpm. This web crawler internally runs the website and then tracks the data pulls. We filter these to only show data collected from the user, instead of  images and other things.We then run it through our formula that gives out a number. ");
    }
    else if(textCategory === "Cookies"){
      setText("Cookies are little bits of information that are stored and then sent to the server about the user. This is almost as important in our formula as the web-crawler data, but not as much. Not all cookies are put on by the website developer. Google sets hundreds of millions of them all together. ")
    }

    else if(textCategory === "Google Safety Check"){
      setText("Google has a safety checker, which is super simple to use and it is one of the easiest ways to get a brief checking of the website. There is not a lot to it, but one caveat that we found was that you cannot input very large sites. For example, one cannot input www.reddit.com, as it is a vast site that cannot be scanned. Instead you must use a smaller page, like reddit.com/home.")
    }

    else if(textCategory === "Ads"){
      setText("The number of ads is not the best indicator of how safe a website is, but is still fairly useful. This is why it is weighted least in our super-secret formula. I used an adblocker that counts the amount of advertisements. For example, when you go on an unsafe website it often has more ads, and our careful researched determined that there is a slight but not large correlation with a large average deviation. ")
    }
    else{
      setText("");
    }
    
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>About our Site</h3>
        <p>{text}</p>
        <ul>
          <li>
            <button onClick={(evt) => {evt.preventDefault(); setCategory('Web Crawler');}}>Web Crawler</button>
          </li>
          <li>
            <button onClick={(evt) => {evt.preventDefault(); setCategory('Cookies');}}>Cookies</button>
          </li>
          <li>
            <button onClick={(evt) => {evt.preventDefault(); setCategory('Ads');}}>Ads</button>
          </li>
          <li>
            <button onClick={(evt) => {evt.preventDefault(); setCategory('Google Safety Check');}}>Google Safety Check</button>
          </li>
        </ul>
      </header>
    </div>
  );
}


export default Info;


/*
  host on github pages
  styling
*/

/*
  callback function
    - a function that executes upon the end of another specific function
    - useEffect acts as our callback, whenever 'textcategory' changed state, our useEffect will call displayText() with the updated state
*/