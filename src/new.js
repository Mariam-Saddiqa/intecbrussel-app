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
        <div className="container">THIS IS MY NEW PAGE
        <table className="table">
            <tr>
            <th>React</th>
            <th>NodeJs</th>
            <th>ExpressJs</th>
            <th>Bootstrap</th>
            <th>Css</th>
            </tr>
            <tr>
            <td>Framework</td>
            <td>Javascript Library</td>
            <td>Framework</td>
            <td>Framework</td>
            <td>Framework</td>
            </tr>
            
        </table>
        </div>
        </>
    )
}

export default App