import MatchDetailsComponent from "../match-details/MatchDetailsComponent";
import MatchInfoComponent from "../match-info/MatchInfoComponent";
import styles from "./LandingPageSection.module.scss";

interface LandingPageSectionProps {
  match: Match;
  setGameResult: (
    functionality: "add" | "remove",
    team: "host" | "guest",
    variant:
      | "goals"
      | "possesion"
      | "shots"
      | "corners"
      | "offsides"
      | "fouls"
      | "yellowCards"
      | "redCards"
  ) => void;
  timer: number;
  resetMatch: () => void;
}

const LandingPageSection: React.FC<LandingPageSectionProps> = ({
  match,
  setGameResult,
  timer,
  resetMatch,
}) => {
  const isButtonDisabled: boolean = timer >= 90;

  return (
    <section className={styles.landign_section}>
      <h1>Dobrodošli na aplikaciju za rezultate</h1>
      <MatchInfoComponent
        match={match}
        setGameResult={setGameResult}
        timer={timer}
        isButtonDisabled={isButtonDisabled}
        resetMatch={resetMatch}
      />
      <MatchDetailsComponent
        match={match}
        setGameResult={setGameResult}
        timer={timer}
        isButtonDisabled={isButtonDisabled}
      />
    </section>
  );
};

export default LandingPageSection;
