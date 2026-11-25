import "./maxcard.css";

function MaxCard(parameter){
  
    return ( 
    <div className="maxcard">
     <div className="grid_card">
      <p  > nom : {parameter.name} </p>
      <p  >title :{parameter.title}</p>
      <p  >size :{parameter.size}</p>
      </div>
      </div>
  
  );}

  export default MaxCard;