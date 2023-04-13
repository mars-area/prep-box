import React from 'react'

import BgTestimonial from "../../assets/img/bg-testimonial.png";
import QuoteImage from "../../assets/img/testimonial/quote.png";
import AvaCelineChung from "../../assets/img/testimonial/celine.png";
import AvaTrinity from "../../assets/img/testimonial/trinity.png";

const data = [
  {
    name: 'Trinity Hsu',
    text: 'I wanted to update you on my university admissions. I got into McMaster engineering, University of Toronto mechanical engineering, Waterloo Mechatronics engineering and also Vet school in Scotland!',
    img: AvaTrinity
  },
  {
    name: 'Celine Chung',
    text: 'I got into all my Waterloo choices today! Computer Science, Computer Science & BBA double degree, Math & Business double degree. Thank you so much for helping me during my math journey.',
    img: AvaCelineChung
  },
  {
    name: 'George Mavroudis, Parent of Gregory',
    text: 'Gregory wrote his final test today in Math and said he felt pretty comfortable in most of it. I want to thank you...as you made a significant amount of progress in building his confidence and enjoyment of the subject.',
    img: AvaTrinity
  },
  {
    name: 'Trinity Hsu',
    text: 'Robyn got 100% for grade 10 math this year. Thank you so much...Robyn will be starting the grade 11 math classes with you in the summer.',
    img: AvaTrinity
  },
  {
    name: 'Trinity Hsu',
    text: 'I hope you had a good weekend. I wanted to update you on my university admissions. I got into Mcmaster engineering, U of T mechanical engineering, Waterloo Mechatronics engineering and also Vet school in Scotland!',
    img: AvaTrinity
  },
  {
    name: 'Parent of Robyn',
    text: 'Robyn got 100% for grade 10 math this year. Thank you so much...Robyn will be starting the grade 11 math classes with you in the summer.',
    img: AvaTrinity
  }
]

export default function Testimonial() {
  return (
    <div id="testimonial" className="py-12 sm:py-40 font-inter min-h-[1044px]" style={{ backgroundImage: `url(${BgTestimonial})`, backgroundRepeat: "repeat-x", backgroundSize: "contain", backgroundPosition: "center" }}>
      <div className="container flex flex-col">
        <div className="flex flex-col items-center">
          <h2 className="font-inter font-[400] text-3xl sm:text-[61px]">Testimonials</h2>
          <p className="text-lg sm:text-lg px-12 sm:px-48 text-center text-darkGreyPrep mt-5">We are loved by the students and the parents, who learn through PrepBox, and we intend to keep it this way</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 center place-items-center">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col bg-white rounded-xl p-8 shadow-xl h-fit">
              <div className='flex'>
                <img src={QuoteImage} alt="quote" className='h-fit' />
                <p className='ml-4'>{item.text}</p>
              </div>
              <div className='flex items-center mt-6'>
                <img src={item.img} alt="avatar" />
                <p className='ml-4'>{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}