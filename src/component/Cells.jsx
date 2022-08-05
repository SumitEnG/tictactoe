import React from "react";

export default function Cells(props){

return( 
    <div className="cells" 
    style={{height:"75px" , 
    width: "75px" , 
    margin: "5px", 
    display: "flex", 
    justifyContent:"center", 
    alignItems:"center"  
    }}
ref={props.refs}
onClick={props.fun}>
</div> 
)
}