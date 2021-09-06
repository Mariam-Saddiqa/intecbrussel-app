import React from 'react'
import './style.css'
const App=()=>{
    let myNum=11;
    let isOpen=true;
    return(
        <>
        <h1>Hello World</h1>
        <h3 className="MycustomFont" id="">title??</h3>
        <h3 className="MycustomFont" id="">
            {5+5}
            {
                '\nIntec'+'Brussel'
            }
            {
                console.log('Hello Users')
            }
        </h3>
        <h3 className="MycustomFont" id="">
            {
                myNum+myNum
            }
        </h3>
        <h3 className="MycustomFont" id="">
            {
                isOpen ? 'Yes' : 'No'
            }
        </h3>
        </>
    )
}

export default App