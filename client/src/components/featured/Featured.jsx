import "./featured.css";
import useFetch from "../../hooks/useFetch";

const Featured = () => {
  const { data, loading, error } = useFetch();

  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1550&q=80"
          alt=""
          className="featuresImg"
        />
        <div className="featuredTitles">
          <h1>Berlin</h1>
          <h2>123 propertis</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1530284610319-31ee7c55378e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
          alt=""
          className="featuresImg"
        />
        <div className="featuredTitles">
          <h1>Vien</h1>
          <h2>123 propertis</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://images.unsplash.com/photo-1508035460735-91088c495500?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
          alt=""
          className="featuresImg"
        />
        <div className="featuredTitles">
          <h1>Paris</h1>
          <h2>123 propertis</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
