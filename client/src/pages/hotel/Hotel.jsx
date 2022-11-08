import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

const Hotel = () => {
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow"> Book Now!</button>
          <h1 className="hotelTitle">Dusseledorf strasse Apartments</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Berliner St 30 Dusseldorf</span>
          </div>
          <span className="hotelDistance">
            Excellent location – 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over €95 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of City</h1>
              <p className="hotelDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                provident saepe vel. Voluptates assumenda, tempore impedit iste
                maiores obcaecati vel tempora, sunt aliquam, quo quisquam quam.
                Velit hic distinctio eum beatae labore libero doloribus dolorum
                praesentium, voluptatum eaque dolorem explicabo natus
                perferendis doloremque voluptas magni rem fugiat! Dolorem,
                consequatur, dignissimos, nemo repellendus dolorum esse
                veritatis molestias accusamus voluptatum rem sed cum
                praesentium. Dolorem adipisci, impedit rerum hic vitae odio quos
                ducimus at obcaecati dolor accusamus maxime, illum aliquam
                libero, debitis fuga architecto incidunt? Officia ducimus magnam
                similique nobis? Maiores quae voluptas quibusdam possimus magnam
                laborum repellat ipsa non obcaecati sunt?
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
