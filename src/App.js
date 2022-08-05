import { useRef, useState } from 'react';
import './App.css';
import Cells from './component/Cells';


function App() {
  const [currentPlayer,setCurrentPlayer]=useState("X");
  const [winMessage, setWinMessage] = useState("");
  const [gameOver,setGameOver]=useState(false);
  const [currentPlayerMessage,setCurrentPlayerMessage]=useState("")
  const [countX,setCountX]=useState(0);
  const [countO,setCountO]=useState(0);
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();
  const ref8 = useRef();
  const ref9 = useRef();
  function play(id){
    if(id.current.innerText===""&&gameOver==false){
      id.current.innerText=currentPlayer;
    }
    currentTurn();
    checkWinner();
    currentPlayerMsg();
  }

  function currentTurn(){
    if(currentPlayer==="X"){
      setCurrentPlayer("O")
    }else{
      setCurrentPlayer("X")
    }
  }

  function currentPlayerMsg(){
    if(currentPlayer==="X"){
      setCurrentPlayerMessage("Turn for O")
    }else{
      setCurrentPlayerMessage("Turn for X")
    }
  }

  const checkWinner = () => {
    if((ref1.current.innerText!=="" && ref1.current.innerText===ref2.current.innerText && ref2.current.innerText===ref3.current.innerText)||
    (ref4.current.innerText!=="" && ref4.current.innerText===ref5.current.innerText && ref5.current.innerText===ref6.current.innerText)||
    (ref7.current.innerText!=="" && ref7.current.innerText===ref8.current.innerText && ref8.current.innerText===ref9.current.innerText)||
    (ref1.current.innerText!=="" && ref1.current.innerText===ref4.current.innerText && ref4.current.innerText===ref7.current.innerText)||
    (ref2.current.innerText!=="" && ref2.current.innerText===ref5.current.innerText && ref5.current.innerText===ref8.current.innerText)||
    (ref3.current.innerText!=="" && ref3.current.innerText===ref6.current.innerText && ref6.current.innerText===ref9.current.innerText)||
    (ref1.current.innerText!=="" && ref1.current.innerText===ref5.current.innerText && ref5.current.innerText===ref9.current.innerText)||
    (ref3.current.innerText!=="" && ref3.current.innerText===ref5.current.innerText && ref5.current.innerText===ref7.current.innerText)){

      setWinMessage("Game Over " + currentPlayer + " won")
      setGameOver(true);
      setCurrentPlayer(currentPlayer);
      setCurrentPlayerMessage("");
      if(currentPlayer==="X"&&gameOver===false){
      setCountX(countX+1)
      }else if(currentPlayer==="O"&&gameOver===false){
        setCountO(countO+1)
      }
    }
    else if(ref1.current.innerText!=="" && ref2.current.innerText!=="" && ref3.current.innerText!=="" && ref4.current.innerText!=="" && 
    ref5.current.innerText!=="" && ref6.current.innerText!=="" && ref7.current.innerText!=="" && ref8.current.innerText!=="" && ref9.current.innerText!=="" && gameOver===false){
      setWinMessage("match tie")
      setCurrentPlayer(currentPlayer);
    }
  }
  const reset = () =>{
    setGameOver(false);
    setWinMessage("");
    setCurrentPlayerMessage("");
    ref1.current.innerText="";
    ref2.current.innerText="";
    ref3.current.innerText="";
    ref4.current.innerText="";
    ref5.current.innerText="";
    ref6.current.innerText="";
    ref7.current.innerText="";
    ref8.current.innerText="";
    ref9.current.innerText="";
  }
  
  return (<div className="App" >
    
     <div style={{color:"white",marginTop:"100px",marginRight:"50px"}}>No Of Games Wins By X <br/>{countX}</div>
    

      <div style={{
       display:"flex",
       flexDirection: "column",
       justifycontent: "center",
       alignItems: "center",
       backgroundColor: "black",
       marginTop:"0px"}}>

      <div style={{color:"white",fontSize:"large",margin:"10px",fontWeight:"bold"}}>{currentPlayerMessage}</div>

      <div style={{display:"flex", 
      flexWrap:"wrap", 
      height:"270px",
      width:"260px",
      backgroundColor:"grey",
      borderRadius:"20px",
      boxShadow:"inset 0 0 10px black" ,marginTop:"100px"}}>
      <Cells refs={ref1} fun={() => play(ref1)}/>
      <Cells refs={ref2} fun={() => play(ref2)} />
      <Cells refs={ref3} fun={() => play(ref3)} />
      <Cells refs={ref4} fun={() => play(ref4)} />
      <Cells refs={ref5} fun={() => play(ref5)} />
      <Cells refs={ref6} fun={() => play(ref6)} />
      <Cells refs={ref7} fun={() => play(ref7)} />
      <Cells refs={ref8} fun={() => play(ref8)} />
      <Cells refs={ref9} fun={() => play(ref9)} />
      </div>


      <div style={{color:"white",margin:"20px",fontSize:"larger"}}>
        {winMessage}
      </div>
      <button onClick={reset}
      style={{fontWeight:"bold",
      borderRadius:"8px",
      border:"none",
      background:"yellow",
      boxShadow:"5px 5px 10px white",
      padding:"10px",
      fontSize:"LARGE",
      marginTop:"150px"
      }}>play again</button>
    </div>


    <div style={{color:"white",marginTop:"100px",marginLeft:"50px"}}>No Of Games Wins By O <br/>{countO}</div>
    </div>
  );
}

export default App;
