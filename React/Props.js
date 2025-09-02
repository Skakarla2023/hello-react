import React from "react";

function Hello(props){
    return (
      <h1> Hello dear {props.name}!</h1>  
    );
}

export default function (){
    return(
        <div>
            <Hello name="Priya"/>
        </div>
    );
}
