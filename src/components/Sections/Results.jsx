import React from "react";

// Assets
import AvaOlivia from "../../assets/img/avatar/Olivia Nie.png";
import AvaMaximB from "../../assets/img/avatar/Maxim Barron Lee.png";
import AvaSoniaS from "../../assets/img/avatar/Sonia Sharma.png";
import AvaKasraR from "../../assets/img/avatar/Kasra Rahmani.png";
import AvaAndyL from "../../assets/img/avatar/Andy Lee.png";
import AvaKimberlyS from "../../assets/img/avatar/Kimberly Seaman.png";
import AvaRaymondJ from "../../assets/img/avatar/Raymond Jang.png";
import AvaEstherS from "../../assets/img/avatar/Esther Sohn.png";
import AvaMikeW from "../../assets/img/avatar/Mike Woo.png";
import LogoHavard from "../../assets/img/school-logo/havard.png";
import LogoMcgill from "../../assets/img/school-logo/mcgill.png";
import LogoNorth from "../../assets/img/school-logo/northwestern.png";
import LogoPennsylvania from "../../assets/img/school-logo/pennsylvania.png";
import LogoToronto from "../../assets/img/school-logo/toronto.png";
import LogoWestern from "../../assets/img/school-logo/western.png";
import LogoWilfred from "../../assets/img/school-logo/wilfred.png";
import LogoGeorgetown from "../../assets/img/school-logo/geor.png";

const data = [
  {
    name: "Olivia Nie",
    subject: "7/7 in IB Higher Level Math",
    school: "Harvard University",
    text: "A.B. in Government",
    img: AvaOlivia,
    logo: LogoHavard
  },
  {
    name: "Mike Woo",
    subject: "99% in Calculus",
    school: "University of Toronto",
    text: "B.S. Physics and Math",
    img: AvaMikeW,
    logo: LogoToronto
  },
  {
    name: "Maxim Barron Lee",
    subject: "91% in Calculus",
    school: "Wilfred Laurier University",
    text: "B.S. Financial Mathematics",
    img: AvaMaximB,
    logo: LogoWilfred
  },
  {
    name: "Kasra Rahmani",
    subject: "92% in Calculus",
    school: "University of Toronto",
    text: "B.S. Computer Sci & Statistics",
    img: AvaKasraR,
    logo: LogoToronto
  },
  {
    name: "Sonia Sharma",
    subject: "96% in Calculus",
    school: "Western University",
    text: "Medicine",
    img: AvaSoniaS,
    logo: LogoWestern
  },
  {
    name: "Andy Lee",
    subject: "100% in Calculus",
    school: "University of Pennsylvania",
    text: "B.S. Systems Engineering",
    img: AvaAndyL,
    logo: LogoPennsylvania
  },
  {
    name: "Kimberly Seaman",
    subject: "99% in Calculus",
    school: "McGill University",
    text: "B.S. Chemical Engineering",
    img: AvaKimberlyS,
    logo: LogoMcgill
  },
  {
    name: "Esther Sohn",
    subject: "95% in Calculus",
    school: "Georgetown University",
    text: "B.S. Foreign Services",
    img: AvaEstherS,
    logo: LogoGeorgetown
  },
  {
    name: "Raymond Jang",
    subject: "5/5 in IB Higher Level Math",
    school: "Northwestern University",
    text: "B.S. Physics",
    img: AvaRaymondJ,
    logo: LogoNorth
  }
]

export default function Results() {
  return (
    <div id="results" className="py-12 sm:py-40 font-inter">
      {/* Student Out Come */}
      <div className="container flex flex-col">
        <div className="flex flex-col items-center">
          <h2 className="font-inter font-[400] text-3xl sm:text-[61px]">Our Student Outcome</h2>
          <p className="text-base sm:text-lg px-12 sm:px-48 text-center text-darkGreyPrep mt-5">We have taught over 2,000 students, and over 500 of our students have gone onto graduate from North America's top universities</p>
        </div>
        {/* grid card 3 row 3 col no gap */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 mt-16">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={item.logo} alt={item.name} className="absolute self-end z-10" />
              <div className={`w-full h-full flex flex-col items-center p-10 ${index % 2 === 0 ? '' : 'bg-[#F7F7F8]'}`}>
                <div className="flex items-center w-full">
                  <img src={item.img} alt={item.name}/>
                  <p className="ml-4">{item.name}</p>
                </div>
                <div className="flex w-full text-[#121217] font-semibold sm:font-[400] text-xl sm:text-[36px] pr-12 my-6">
                  <p>{item.school}</p>
                </div>
                <div className="flex flex-col w-full">
                  <p className="text-base">{item.subject}</p>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}