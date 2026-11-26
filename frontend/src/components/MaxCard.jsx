import "./maxcard.css";

function MaxCard(coures){
  
    

    const {name , title , size} = coures.coures;
    
    return ( 
        
    <div className="maxcard">
     <div className="grid_card">
      <p> nom : {name} </p>
      <p>title :{title}</p>
      <p>size :{size}</p>  
      </div>
      </div>
  
  );}

  export default MaxCard;