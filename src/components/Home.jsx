import { Container } from "react-bootstrap";
import NovitaSection from "./NovitaSection";
import NuoviEpisodiRadio from "./NuoviEpisodiRadio";
import NuoveUscite from "./NuoveUscite";
import AltroDaEsplorare from "./AltroDaEsplorare";

const Home = () => {
  return (
    <div className="bg-dark min-vh-100 pb-5" style={{ paddingTop: "10px" }}>
      <Container fluid className="px-3 px-md-4">
        <NovitaSection />
        <NuoviEpisodiRadio></NuoviEpisodiRadio>
        <NuoveUscite></NuoveUscite>
        <AltroDaEsplorare></AltroDaEsplorare>
      </Container>
    </div>
  );
};

export default Home;
