import { Row, Col } from "react-bootstrap";

const NuoveUscite = () => {
  const placeholders = Array.from({ length: 8 });

  return (
    <section className="mb-5">
      <h4 className="text-white fw-bold mb-3">
        Nuove uscite <i className="bi bi-chevron-right text-secondary fs-5 align-middle"></i>
      </h4>

      <Row className="g-3 mx-0">
        {placeholders.map((_, index) => (
          <Col xs={6} md={3} lg={2} key={index}>
            <div
              className="rounded-3 d-flex justify-content-center align-items-center mb-2"
              style={{
                aspectRatio: "1/1",
                backgroundColor: "#2a2a2a",
              }}
            >
              <i className="bi bi-music-note" style={{ fontSize: "3rem", color: "#555" }}></i>
            </div>

            <div className="text-white text-truncate" style={{ fontSize: "14px" }}>
              Song Placeholder
            </div>
            <div className="text-secondary text-truncate" style={{ fontSize: "12px" }}>
              Artist Placeholder
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default NuoveUscite;
