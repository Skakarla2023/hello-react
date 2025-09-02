import React from "react";

function Welcome(props) {
    return (
        <h1>Hello, {props.name}!</h1>
    );
}

// export default allows this component to be imported and used in other files
export default function App() {
    return (
        <div>
             <Welcome name="Arohi"/>
             <Welcome name="Satwika"/>
        </div> 
    );
    
}
