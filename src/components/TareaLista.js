import "./style/TareaLista.css"

function TareaLista(props){
  return(
    <ul>
      {props.children}
    </ul>
  );
}

export {TareaLista}