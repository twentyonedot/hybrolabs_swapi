import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="welcome rounded-lg px-2 py-1">
      <Link to="/people">
        <button>Welcome</button>
      </Link>
    </div>
  );
};

export default Home;
