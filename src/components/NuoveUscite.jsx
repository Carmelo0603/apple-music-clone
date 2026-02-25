import { useState, useEffect } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { fetchMusica } from "../services/deezerAPI";

const NuoveUscite = ({ searchQuery }) => {
  const [brani, setBrani] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const caricaDati = async () => {
      setIsLoading(true);
      const query = searchQuery || "pop";
      const dati = await fetchMusica(query);
      setBrani(dati.slice(0, 12));
      setIsLoading(false);
    };

    const delayDebounceFn = setTimeout(() => {
      caricaDati();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  return (
    <section className="mb-5">
      <h4 className="text-white fw-bold mb-3">
        Nuove uscite <i className="bi bi-chevron-right text-secondary fs-5 align-middle"></i>
      </h4>

      <Row className="g-3 mx-0">
        {isLoading ? (
          <div className="d-flex justify-content-center align-items-center w-100" style={{ height: "150px" }}>
            <Spinner animation="border" variant="secondary" />
          </div>
        ) : (
          brani.map((brano) => (
            <Col xs={6} md={3} lg={2} key={brano.id}>
              <div className="mb-2 shadow-sm" style={{ cursor: "pointer" }}>
                <img
                  src={brano.album.cover_medium}
                  alt={brano.title}
                  className="img-fluid rounded-3 w-100"
                  style={{ aspectRatio: "1/1", objectFit: "cover" }}
                />
              </div>

              <div className="text-white text-truncate fw-bold" style={{ fontSize: "14px" }}>
                {brano.title}
              </div>
              <div className="text-secondary text-truncate" style={{ fontSize: "12px" }}>
                {brano.artist.name}
              </div>
            </Col>
          ))
        )}
      </Row>
    </section>
  );
};

export default NuoveUscite;
