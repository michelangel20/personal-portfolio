import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo1.png";
import socialicon1 from "../assets/img/social-icon1.svg";
import socialicon2 from "../assets/img/social-icon2.svg";
import socialicon3 from "../assets/img/social-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#"><img src={socialicon1} alt="Icon" /></a>
              <a href="#"><img src={socialicon2} alt="Icon" /></a>
              <a href="#"><img src={socialicon3} alt="Icon" /></a>
            </div>
            <p>Terima kasih dan sampai jumpa kembali hehe</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
