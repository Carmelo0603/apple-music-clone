import { Row, Col, Image } from "react-bootstrap";
import img2a from "../assets-3/images/2a.png";
import img2b from "../assets-3/images/2b.png";
import img2c from "../assets-3/images/2c.png";
import img2d from "../assets-3/images/2d.png";

const NuoviEpisodiRadio = () => {
  return (
    <section className="mb-5">
      <h4 className="text-white fw-bold mb-3">
        Nuovi episodi radio <i className="bi bi-chevron-right text-secondary fs-5 align-middle"></i>
      </h4>

      <Row className="flex-nowrap overflow-x-auto g-3 pb-2 mx-0" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        <Col xs={5} md={3} lg={2}>
          <Image src={img2a} alt="Prólogo con Abuelo" fluid rounded className="w-100 mb-2" />
          <div className="text-white text-truncate" style={{ fontSize: "13px" }}>
            Prólogo con Abuelo
          </div>
        </Col>

        <Col xs={5} md={3} lg={2}>
          <Image src={img2b} alt="The Wanderer" fluid rounded className="w-100 mb-2" />
          <div className="text-white text-truncate" style={{ fontSize: "13px" }}>
            The Wanderer
          </div>
        </Col>

        <Col xs={5} md={3} lg={2}>
          <Image src={img2c} alt="Michael Bublé" fluid rounded className="w-100 mb-2" />
          <div className="text-white text-truncate" style={{ fontSize: "13px" }}>
            Michael Bublé & Carly Pearce
          </div>
        </Col>

        <Col xs={5} md={3} lg={2}>
          <Image src={img2d} alt="Stephan Moccio" fluid rounded className="w-100 mb-2" />
          <div className="text-white text-truncate" style={{ fontSize: "13px" }}>
            Stephan Moccio
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default NuoviEpisodiRadio;
