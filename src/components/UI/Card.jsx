const Card = ({ title, children }) => {
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title py-2">{title}</h2>
          {children}
        </div>
      </div>
    );
  };
  
  export default Card;
  