import { Row, Col } from "react-bootstrap";

const AltroDaEsplorare = () => {
  const categorie = [
    "Esplora per genere",
    "Decenni",
    "Attività e stati d'animo",
    "Worldwide",
    "Classifiche",
    "Audio spaziale",
    "Video musicali",
    "Nuovi artisti",
    "Hit del passato",
  ];

  return (
    <section className="mb-5 pb-5">
      {" "}
      <h4 className="text-white fw-bold mb-3">Altro da esplorare</h4>
      <Row className="g-3">
        {categorie.map((categoria, index) => (
          <Col xs={12} md={4} key={index}>
            <div className="d-flex justify-content-between align-items-center p-3 rounded-3" style={{ backgroundColor: "#242424", cursor: "pointer" }}>
              <span className="fw-bold" style={{ color: "#fa243c", fontSize: "15px" }}>
                {categoria}
              </span>
              <i className="bi bi-chevron-right" style={{ color: "#fa243c" }}></i>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default AltroDaEsplorare;
