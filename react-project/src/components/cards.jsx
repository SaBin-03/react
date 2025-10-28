function Card(props) {
    
  return (
    <div className="main-card">
      <div className="top">
        <img src={props.img} alt="images"/>
        <h1>{props.person}</h1>
      </div>
      <div className="center">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem, saepe?
        </p>
      </div>
      <div className="bottom">
        <button className="btn">Follow</button>
      </div>
    </div>
  );
}

export default Card;
