import img1a from "../assets-3/images/1a.png";
import img1b from "../assets-3/images/1b.png";

const NovitaSection = () => {
  return (
    <section className="mb-5">
      <h1 className="text-white fw-bold mb-3 pb-2 border-bottom border-secondary" style={{ fontSize: "34px" }}>
        Novità
      </h1>

      <div className="d-flex flex-nowrap overflow-x-auto gap-3 pb-2" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        {/* Card 1 */}
        <div className="flex-shrink-0" style={{ width: "85vw", maxWidth: "500px" }}>
          <div className="text-secondary fw-bold" style={{ fontSize: "11px", letterSpacing: "1px" }}>
            NUOVA STAZIONE RADIO
          </div>
          <div className="text-white mb-2 text-truncate fs-5">Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill</div>
          <img src={img1a} alt="Apple Music Chill" className="img-fluid rounded-4 w-100" style={{ objectFit: "cover" }} />
        </div>

        {/* Card 2 */}
        <div className="flex-shrink-0" style={{ width: "85vw", maxWidth: "500px" }}>
          <div className="text-secondary fw-bold" style={{ fontSize: "11px", letterSpacing: "1px" }}>
            NUOVA STAZIONE RADIO
          </div>
          <div className="text-white mb-2 text-truncate fs-5">Ecco la nuova casa della musica latina</div>
          <img src={img1b} alt="Musica Latina" className="img-fluid rounded-4 w-100" style={{ objectFit: "cover" }} />
        </div>
      </div>
    </section>
  );
};

export default NovitaSection;
