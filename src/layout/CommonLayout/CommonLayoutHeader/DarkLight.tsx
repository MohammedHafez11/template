import DynamicFeatherIcon from "@/Common/DynamicFeatherIcon";
import { Href } from "../../../utils/constant";
import { useState, useEffect } from "react";

const DarkLight: React.FC = () => {
  const [moonlight, setMoonlight] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        const isDarkMode = savedTheme === "dark";
        setMoonlight(isDarkMode);
        if (isDarkMode) {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }
      } else {
        localStorage.setItem("theme", "light");
      }
    }
  }, []);

  const MoonlightToggle = (light: boolean) => {
    const newTheme = light ? "light" : "dark";
    setMoonlight(!light);
    if (!light) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("theme", newTheme);
  };

  return (
    <li className="header-btn custom-dropdown" onClick={() => MoonlightToggle(moonlight)}>
      <a className="main-link" href={Href}>
        <DynamicFeatherIcon iconName={moonlight ? "Sun" : "Moon"} className="icon-light stroke-width-3 iw-16 ih-16"/>
      </a>
    </li>
  );
};

export default DarkLight;