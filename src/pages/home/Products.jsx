// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import p_bg from "../../assets/products/Rectangle 68.png";

const Products = () => {
  // const [carList, setCarList] = useState([]);
  const carList = [
      {
        id: "car_001",
        make: "Toyota",
        model: "Camry",
        year: 2022,
        type: "Sedan",
        seats: 5,
        bags: 3,
        features: ["Air Conditioning", "Bluetooth", "Cruise Control"],
        rates: {
          hourly: 15,
          daily: 70,
          weekly: 400,
        },
        imageURL:
          "https://s3.amazonaws.com/cka-dash/182-1021-RTO100/model1.png",
      },
      {
        id: "car_002",
        make: "Honda",
        model: "Civic",
        year: 2021,
        type: "Sedan",
        seats: 5,
        bags: 2,
        features: ["Air Conditioning", "Navigation System", "Bluetooth"],
        rates: {
          hourly: 12,
          daily: 60,
          weekly: 350,
        },
        imageURL:
          "https://images.autofusion.com/pricebooks_data/usa/colorized/2021/Honda/View2/Civic_Sedan/Sport/FC2F8MEW_RE.png",
      },
      {
        id: "car_003",
        make: "Ford",
        model: "Escape",
        year: 2023,
        type: "SUV",
        seats: 5,
        bags: 4,
        features: ["4WD", "Satellite Radio", "Heated Seats"],
        rates: {
          hourly: 20,
          daily: 90,
          weekly: 500,
        },
        imageURL: "https://inv.assets.ansira.net/3/2/7/32133341723.jpg",
      },
      {
        id: "car_004",
        make: "Chevrolet",
        model: "Tahoe",
        year: 2022,
        type: "SUV",
        seats: 7,
        bags: 5,
        features: ["4WD", "Leather Seats", "Bluetooth", "Navigation System"],
        rates: {
          hourly: 25,
          daily: 100,
          weekly: 600,
        },
        imageURL:
          "https://images.carprices.com/pricebooks_data/usa/colorized/2022/Chevrolet/View2/Tahoe/Z71/CK10706_G1W.png",
      },
    ]

  // useEffect(() => {
  //   axios
  //     .get("https://exam-server-7c41747804bf.herokuapp.com/carsList")
  //     .then(({ data }) => setCarList(data.data))
  //     .catch((error) => console.error("Error fetching car list:", error));
  // }, []);

  return (
    <section className="my-10 max-w-7xl min-h-screen mx-auto">
      <div className="text-center w-[70%] mx-auto">
        <h3 className="text-primary text-xl font-bold uppercase">
          <span className="text-[#2F8F6F]">WE HAVE</span>
        </h3>
        <hr className="w-full h-1 bg-slate-700 my-4" />
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {carList.map((car) => (
          <div key={car.id} className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={car.imageURL}
                className="w-32 h-32 rounded-xl z-10"
                alt={`${car.make} ${car.model}`}
              />
            </figure>
            <div
              style={{ background: `url(${p_bg})`, backgroundSize: "cover" }}
              className="card-body items-center text-center mt-[-30px]"
            >
              <div>
                <h2 className="card-title text-white">
                  {car.make} | {car.model} | {car.year}
                </h2>
                <p className="text-white py-4">
                  Seats: {car.seats} | Type: {car.type}
                </p>
                <Link to="/reserve" state={{ car, carList }}>
                  <button className="bg-[#FDCC1A] px-4 py-1 rounded-md">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
