import { Container } from "react-bootstrap";
import NovitaSection from "./NovitaSection";
// Qui in futuro importerai le altre 3 sezioni:
// import NuoviEpisodiRadio from './NuoviEpisodiRadio';
// import NuoveUscite from './NuoveUscite';
// import AltroDaEsplorare from './AltroDaEsplorare';

const Home = () => {
  return (
    // Padding bottom generoso per evitare che i contenuti finiscano sotto la tua PlayBar fissa
    <div className="bg-dark min-vh-100 pb-5" style={{ paddingTop: "10px" }}>
      <Container fluid className="px-3 px-md-4">
        {/* Sezione 1: Novità */}
        <NovitaSection />

        {/* Le prossime sezioni andranno qui sotto */}
        {/* <NuoviEpisodiRadio /> */}
        {/* <NuoveUscite /> */}
        {/* <AltroDaEsplorare /> */}
      </Container>
    </div>
  );
};

export default Home;
