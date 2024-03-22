function Card(props){
    return(
        <div className="card-body">
             <h4 className="card-title">{props.name}</h4>
             <p className="card-subtitle">Суперспособности: {props.superpowers}</p>
             <p className="card-text">{props.info}</p>
             <img src={props.url} alt={props.title}/>
        </div>
    );
}

export default Card;