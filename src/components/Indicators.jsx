import React, { useState } from 'react'

function Indicators() {
    
    const [index, setIndex] = useState(0);


  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
  return (
    <div>
        {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className={`indicator ${index === i ? 'active' : ''}`}
              onClick={() => handleSelect(i)}
            ></div>
          ))}
    </div>
  )
}

export default Indicators
