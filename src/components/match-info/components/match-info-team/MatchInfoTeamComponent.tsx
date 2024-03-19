import styles from "./MatchInfoTeamComponent.module.scss";

interface MatchInfoTeamComponentProps {
  teamInfo: Team;
  teamSide: "host" | "guest";
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
  isButtonDisabled: boolean;
}

const MatchInfoTeamComponent: React.FC<MatchInfoTeamComponentProps> = ({
  teamInfo,
  teamSide,
  setGameResult,
  isButtonDisabled,
}) => {
  return (
    <div className={styles.match_info_team}>
      <div className={styles.match_info_team__image}>
        <img src={teamInfo.image} alt="team" />
      </div>
      <p>{teamInfo.name}</p>
      <div className={styles.match_info_team__controls}>
        <button
          onClick={() => setGameResult("add", teamSide, "goals")}
          disabled={isButtonDisabled}
        >
          +
        </button>
        <button
          onClick={() => setGameResult("remove", teamSide, "goals")}
          disabled={isButtonDisabled}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default MatchInfoTeamComponent;
