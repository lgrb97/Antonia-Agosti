import React from "react"

class navBar extends React.Component{
    render(){
        const customStyles = {
            backgroundColor: "red",
            padding: "10px",
            height: "100px",
            }

        return(
            <h1 style={customStyles}>hola</h1>
        );
    }
}

export default navBar;