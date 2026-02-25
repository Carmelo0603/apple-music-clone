import { Row, Col, Image } from "react-bootstrap";
import img1a from "../assets-3/images/1a.png";
import img1b from "../assets-3/images/1b.png";

const NovitaSection = () => {
  return (
    <section className="mb-5 mt-4">
      <h1 className="text-white fw-bold mb-3 pb-2 border-bottom border-secondary" style={{ fontSize: "34px" }}>
        Novità
      </h1>

      <Row className="flex-nowrap flex-md-wrap overflow-x-auto g-3 pb-2 mx-0" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        <Col xs={11} md={6}>
          <div className="text-secondary fw-bold" style={{ fontSize: "11px", letterSpacing: "1px" }}>
            NUOVA STAZIONE RADIO
          </div>
          <div className="text-white mb-2 text-truncate fs-5">Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill</div>
          <Image src={img1a} alt="Apple Music Chill" fluid rounded className="w-100" style={{ objectFit: "cover" }} />
        </Col>

        <Col xs={11} md={6}>
          <div className="text-secondary fw-bold" style={{ fontSize: "11px", letterSpacing: "1px" }}>
            NUOVA STAZIONE RADIO
          </div>
          <div className="text-white mb-2 text-truncate fs-5">Ecco la nuova casa della musica latina</div>
          <Image src={img1b} alt="Musica Latina" fluid rounded className="w-100" style={{ objectFit: "cover" }} />
        </Col>
      </Row>
    </section>
  );
};

export default NovitaSection;
