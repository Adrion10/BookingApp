import "./featuredProperty.css";

const featuredProperty = () => {
  return (
    <div className="fProperty">
      <img
        src="https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
        alt=""
      />
      <span className="fpName">Aparthotel Paris</span>
      <span className="fpCity">Paris</span>
      <span className="fpPrice">Starting from €120</span>
      <div className="fpRating">
        <button>9.2</button>
        <span>Exellent</span>
      </div>
    </div>
  );
};

export default featuredProperty;
