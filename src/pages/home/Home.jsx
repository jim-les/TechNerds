import "./home.css";
import { FiSettings } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";

export const Home = () => {
  return (
    <div className="events-home-container">
      <div className="events-title">
        <h2>Events</h2>
        <p><FiSettings /></p>
      </div>

      <div className="search-container">
        <FiSearch />
        <input type="search" placeholder="Search events"/>
      </div>
    </div>
  )
}
