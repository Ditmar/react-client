import { useState } from 'react';
function getTime() {
    return <div>
      It is {new Date().toLocaleTimeString()}
    </div>
}

function Time() {
    const [time, setTime] = useState(getTime());
    setInterval(() => {
      setTime(getTime())
    }, 1000);
    return (
      <div className="App">
        Hola mundo {time}
      </div>
    );
  }
  
  export default Time;