import React from "react";
import MostPopularNews from "./MostPopularNews";
import Navbar from "./Navbar";
import Topnews from "./Topnews";
import PopularNews from "./PopularNews";
import FashionAndLifestyle from "./FashionAndLifestyle";
import Topbar from "./Topbar";
import FirstTopBar from "./FirstTopBar";
import TrandingNews from "./TrandingNews";
import VideoPart from "./VideoPart";
import Covid from "./Covid";



const HomeComponent = () => {
  return (
    <>
      <div className="main">
        {/* top bar one */}
        <FirstTopBar />
        {/* top bar one */}

        {/* top bar tow */}
        <Topbar />
        {/* top bar tow */}

        {/* top three */}
        <Navbar />
        {/* top three */}

        {/* top four */}
        <MostPopularNews />
        {/* top four */}

        {/* top five */}
        <Topnews />
        {/* top five */}

        {/* top six */}
        <PopularNews />
        {/* top six */}

        {/* top saven */}
        <FashionAndLifestyle />
        {/* top saven */}

        {/* top egiht */}
        <TrandingNews />
        {/* top egiht */}

        {/* video part  */}
        <VideoPart />
        {/* video part  */}

        {/* Covid part */}
        <Covid/>
        {/* Covid part */}

       
        





      </div>
    </>
  );
};

export default HomeComponent;
