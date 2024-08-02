import { useEffect, useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import List from "./pages/List";
import Map from "./pages/Map";
import { useDispatch } from "react-redux";
import { getFlight } from "./reducer/action/index";

const App = () => {
  const [isMapView, setIsMapView] = useState(true);
  const [detailId, setDetailId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlight());
    /* 
    setInterval(() => {
      dispatch(getFlight());
    }, 3000);
 */
  }, []);

  return (
    <div>
      <Header />

      <div className="buttons">
        <button
          className={isMapView ? "active" : ""}
          onClick={() => setIsMapView(true)}
        >
          Harita Görünümü
        </button>
        <button
          className={!isMapView ? "active" : ""}
          onClick={() => setIsMapView(false)}
        >
          Liste Görünümü
        </button>
      </div>

      {isMapView ? (
        <Map setDetailId={setDetailId} />
      ) : (
        <List setDetailId={setDetailId} />
      )}

      {detailId && (
        <Modal detailId={detailId} close={() => setDetailId(null)} />
      )}
    </div>
  );
};

export default App;
