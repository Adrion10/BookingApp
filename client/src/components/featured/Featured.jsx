import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,paris"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1550&q=80"
              alt=""
              className="featuresImg"
            />
            <div className="featuredTitles">
              <h1>Berlin</h1>
              <h2>{data[0]}</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1530284610319-31ee7c55378e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
              alt=""
              className="featuresImg"
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h2>{data[1]}</h2>
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
              <h2>{data[2]}</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
