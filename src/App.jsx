import Main from "./components/Main";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import { useEffect, useState } from "react";
import RingLoader from "react-spinners/RingLoader";
function App() {
  const [data, setData] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const URL =
        "https://api.nasa.gov/planetary/apod" +
        `?api_key=${NASA_KEY}` +
        //"&date=2023-06-15" +
        `&thumbs=True`;

      const today = new Date().toDateString();
      const localKey = `NASA-${today}`;

      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log("Fetched from cache");
        return;
      }
      localStorage.clear();

      try {
        const res = await fetch(URL);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log(apiData);
        console.log("Fetched from Api");
      } catch (err) {
        console.log(err);
      }
    }
    fetchAPIData();
  }, []);

  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <RingLoader
            color="white"
            size={200}
            cssOverride={{
              position: "absolute",
              top: "45vh",
              left: "45vw",
            }}
          />
        </div>
      )}
      {showModal && (
        <SideBar data={data} handleToggleModal={handleToggleModal} />
      )}
      {data && <Footer data={data} handleToggleModal={handleToggleModal} />}
    </>
  );
}

export default App;
