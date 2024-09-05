import { FC, useState, useEffect } from "react";
import usaSVG from "../../../../public/assets/country/usa.svg";
import egyptSVG from "../../../../public/assets/country/egypt.svg";
import { LTR, RTL } from "../../../utils/constant/index";
import Image from "next/image";

const MultipleLang: FC = () => {
    const [currentLang, setCurrentLang] = useState<string>(RTL); 
    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedLang = localStorage.getItem("lang"); 
            if (savedLang) {
                setCurrentLang(savedLang); 
                document.body.classList.toggle("rtl", savedLang === RTL);
            } else {
                localStorage.setItem("lang", RTL);
                setCurrentLang(RTL);
                document.body.classList.add("rtl"); 
            }
        }
    }, []);


    const handleLanguageChange = () => {
        const newLang = currentLang === RTL ? LTR : RTL; 
        setCurrentLang(newLang); 
        document.body.classList.toggle("rtl", newLang === RTL); 
        localStorage.setItem("lang", newLang); 
    };

    return (
        <li className="header-btn custom-dropdown px-2" onClick={handleLanguageChange}>
            <a className="main-link">
                <Image
                    width={20}
                    height={20}
                    src={currentLang === RTL ? usaSVG : egyptSVG} 
                    alt={currentLang === RTL ? "Egypt" : "USA"} 
                />
            </a>
        </li>
    );
};

export default MultipleLang;