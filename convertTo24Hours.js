// convert time to 24hr format

const convertTo24Hours = (timeText) => {
    const timeTextLower = timeText.toLowerCase();
    let [hours , mins] = timeTextLower.split(":");
    
        if(timeTextLower.endsWith("am")){
            hours = hours === "12" ? "0" : hours;
        } else if(timeTextLower.endsWith("pm")){
            hours = hours === "12" ? hours : String(+hours +12);
        }
        
    
      return hours.padStart(2,0) + ":" + mins.slice(0,-2).padStart(2,0);
    }
    
    convertTo24Hours("12:10AM")
