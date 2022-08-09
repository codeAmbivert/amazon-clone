import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CBS28684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12345671"
            title="The lean start up: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_801,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="12345672"
            title="Kenwood kMix stand Maixer for Baking, Stylish Kitchen Mixer with k-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239}
            image="https://images-eu.ssl-images-amazon.com/images/I/61FJtVQh9bL.__AC_SY300_SX300_QL70_ML2_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="12345673"
            title="Apple Watch Series 6 (GPS + Cellular, 44mm) - Blue Aluminum Case with Deep Navy Sport Band (Renewed)"
            price={325.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71XA4Z5F5tL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
            rating={3}
          />
          <Product
            id="12345674"
            title="Amazon Echo (3rd generation) smart speaker with alexa, Charcoal Fabric"
            price={98.99}
            rating={2}
            image="https://m.media-amazon.com/images/I/61AE1yWEK8L._AC_SX425_.jpg"
          />
          <Product
            id="12345675"
            title="New Apple ipad Pro (12.9-inch,wifi,128GB) - Silver (4thGeneration)"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_SX342_SY445_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="12345676"
            title="Samsung 49 inch curved LED Gaming monitor"
            price={98.99}
            image="https://m.media-amazon.com/images/I/812Ri9cjUcL._AC_SX450_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
