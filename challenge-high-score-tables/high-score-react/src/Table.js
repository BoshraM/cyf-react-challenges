import React from "react";

const Table= (props) => {

    return (  <div className="table-container"> 
    <h1>highscores per Country</h1>
    {props.allCountryScores.map((item, key) => (
        <table key={key}>
          <thead>
            <tr>
                <th>Country Name:   {item.name} </th>
               
            </tr>
          </thead>
          <tbody>
          {item.scores.map(x => 
            <tr className="tddd">     
               <td>{x.n}</td>
               <td>{x.s}</td>
            </tr>
          )
}
          </tbody>
        </table>
        
      ))}</div>
         
   
      );
 
}

export default Table;