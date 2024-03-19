import styles from "./MatchInfoComponent.module.scss";
import MatchInfoTeamComponent from "./components/match-info-team/MatchInfoTeamComponent";

interface MatchInfoComponentProps {
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
  isButtonDisabled: boolean;
  resetMatch: () => void;
}

const MatchInfoComponent: React.FC<MatchInfoComponentProps> = ({
  match,
  setGameResult,
  timer,
  isButtonDisabled,
  resetMatch,
}) => {
  const date = new Date();
  const formatDate = `${date.getDate()}.${
    date.getMonth() + 1
  }.${date.getFullYear()}`;

  let formatTime = () => {
    if (timer < 10) {
      return `0${timer}`;
    } else {
      return timer;
    }
  };

  return (
    <div className={styles.match_info}>
      <MatchInfoTeamComponent
        teamInfo={match.host}
        teamSide={"host"}
        setGameResult={setGameResult}
        isButtonDisabled={isButtonDisabled}
      />
      <div className={styles.match_info__result}>
        <p>{formatDate}</p>
        <p>
          <span className={styles.result}>
            {match.host.statistic.goals.length}
          </span>
          <span>:</span>
          <span className={styles.result}>
            {match.guest.statistic.goals.length}
          </span>
        </p>
        {timer >= 90 ? <p>KRAJ</p> : <p>{formatTime()}:00</p>}
        <button className={styles.reset_button} onClick={resetMatch}>
          Reset
        </button>
      </div>
      <MatchInfoTeamComponent
        teamInfo={match.guest}
        teamSide={"guest"}
        setGameResult={setGameResult}
        isButtonDisabled={isButtonDisabled}
      />
    </div>
  );
};

export default MatchInfoComponent;
