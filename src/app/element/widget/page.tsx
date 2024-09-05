"use client";
import PopularSongs from "@/components/Music/PopularSongs";
import BirthdayReminder from "@/components/NewsFeed/Style1/ContentRight/BirthdayReminder";
import EventsCard from "@/components/NewsFeed/Style1/ContentRight/EventsCard";
import Gallery from "@/components/NewsFeed/Style1/ContentRight/Gallery";
import LikePage from "@/components/NewsFeed/Style1/LeftContent/LikePage";
import WeatherCard from "@/components/Weather/WeatherCover/WeatherCard";
import CompanyLayout from "@/layout/CompanyLayout";

const Widget = () => {
  return (
    <CompanyLayout title="Widget">
      <div className="page-body container-fluid custom-padding element-space">
        <div className="page-center w-100">
          <div className="page-content justify-content-center">
            
            <div className="content-right">
              <BirthdayReminder />
              <Gallery />
              <EventsCard eventImage={1} />
            </div>
           
            <div className="content-right">
              <PopularSongs />
              <LikePage />
              <WeatherCard />
            </div>
          </div>
        </div>
      </div>
    </CompanyLayout>
  );
};

export default Widget;
