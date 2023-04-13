import React from "react";
import styled from "styled-components";
// Assets
// import ContactImg1 from "../../assets/img/contact-1.png";
// import ContactImg2 from "../../assets/img/contact-2.png";
// import ContactImg3 from "../../assets/img/contact-3.png";
import FullButton from "../Buttons/FullButton";

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font18">
              Schedule a demo or an assessment with us or send us query to info@prepanywhere.com
            </p>
            <h3 className="font24 extraBold" style={{padding: '20px 0px 10px 0px'}}>iMessage or WhatsApp </h3>
              <p className="font18">
                +1 (646) 290 0172
              </p>
            <h3 className="font24 extraBold" style={{padding: '20px 0px 10px 0px'}}>KakaoTalk</h3>
              <p className="font18">
                +82 10 2710 9984
              </p>
          </HeaderInfo>
          <BttnContainer>
          {/* <BtnWrapper>
            <a href="https://calendly.com/sanghyuk-kwon/30min?">
            <FullButton title="Book a demo (30m)" />
            </a>
          </BtnWrapper> */}
          <BtnWrapper>
            <a href="https://calendly.com/d/hw9-7wv-n3y/assessment">
            <FullButton title="Schedule assessment" />
            </a>
          </BtnWrapper>
          </BttnContainer>
          <div className="lightBg"/>
        </div>
        
      </div>

    </Wrapper>
  );
}

const BttnContainer = styled.div`
  padding: 0px 0 30px 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 50px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const BtnWrapper = styled.div`
  max-width: 240px;
  padding-bottom: 30px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
// const ButtonInput = styled.input`
//   border: 1px solid #7620ff;
//   background-color: #7620ff;
//   width: 100%;
//   padding: 15px;
//   outline: none;
//   color: #fff;
//   :hover {
//     background-color: #580cd2;
//     border: 1px solid #7620ff;
//     color: #fff;
//   }
//   @media (max-width: 991px) {
//     margin: 0 auto;
//   }
// `;
// const ContactImgBox = styled.div`
//   max-width: 180px; 
//   align-self: flex-end; 
//   margin: 10px 30px 10px 0;
// `;
// const SumbitWrapper = styled.div`
//   @media (max-width: 991px) {
//     width: 100%;
//     margin-bottom: 50px;
//   }
// `;









