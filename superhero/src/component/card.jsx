function Card(props){
    return(
        <div className="card-body">
             <h4 className="card-title">{props.title}</h4>
             <p className="card-subtitle">{props.superpowers}</p>
             <p className="card-text">{props.description}</p>
             <img src={props.imgLink} alt={props.title}/>
        </div>
    );
}

export default Card;