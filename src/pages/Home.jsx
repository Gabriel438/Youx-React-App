import Navbar from "../components/Navbar/Navbar";
import MapChart from "../components/MapChart/MapChart";
export default function Home() {
  const username = "Gabriel";
  return (
    <>
      <div className="container">
        <MapChart />
      </div>
    </>
  );
}
