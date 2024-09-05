import { FC } from "react";
import {  Href, Pages } from "../../../utils/constant/index";
import { ThemeSettingsInterFace } from "@/layout/LayoutTypes";

const ThemeSettings: FC<ThemeSettingsInterFace> = ({ setSettingPageOpen, settingPageOpen }) => {
  return (
    <div className="theme-settings">
     
      <div
        className="pages"
        onClick={() => setSettingPageOpen(!settingPageOpen)}
      >
        <a href={Href}>
          <div className="theme-setting-sidebar" id="setting-icon">
            <div>{Pages}</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default ThemeSettings;