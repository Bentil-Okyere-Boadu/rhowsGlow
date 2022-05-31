import React from "react";
import { Container } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";

const ContactUs = () => {

  const onWaClick = () => {
    window.open("https://wa.me/message/PB7AH5IG4KI2F1", '_blank') ;
  }

  const onInsClick = () => {
    window.open("https://www.instagram.com/invites/contact/?i=1ra9o7basqbtt&utm_content=kbmz5ls", '_blank');
  }
  return (
    <Container
      style={{ backgroundColor: "white", color: "black", height: "7rem" }}
    >
      <h2>Contact Us</h2>
      <div style={{display:'flex', justifyContent:'center', gap: '1rem'}}>
        <Icon.Phone size={30}/>
        <Icon.Envelope size={30}/>
        <Icon.Facebook size={30} color="royalblue" cursor='pointer' />
        <Icon.Instagram size={30} color="tomato" cursor='pointer' onClick={onInsClick}/>
        <Icon.Whatsapp size={30} color="green" cursor='pointer'onClick={onWaClick}/>
      </div>
    </Container>
  );
};

export default ContactUs;
