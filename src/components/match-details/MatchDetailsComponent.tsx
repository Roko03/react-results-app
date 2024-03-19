import { useState } from "react";
import styles from "./MatchDetailsComponent.module.scss";
import MatchDetailsTabComponent from "./components/details-tab/MatchDetailsTabComponent";
import MatchStatisticsTabComponent from "./components/statistics-tab/MatchStatisticsTabComponent";

interface MatchDetailsComponentProps {
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
}

const MatchDetailsComponent: React.FC<MatchDetailsComponentProps> = ({
  match,
  setGameResult,
  timer,
  isButtonDisabled,
}) => {
  const [tab, setTab] = useState<"details" | "statistics">("details");

  const tabElement = () => {
    let divElement;
    switch (tab) {
      case "details":
        divElement = <MatchDetailsTabComponent timer={timer} match={match} />;
        break;
      case "statistics":
        divElement = (
          <MatchStatisticsTabComponent
            match={match}
            setGameResult={setGameResult}
            isButtonDisabled={isButtonDisabled}
          />
        );
        break;
    }

    return divElement;
  };

  return (
    <div className={styles.match_details}>
      <div className={styles.match_details__tabs}>
        <button
          onClick={() => setTab("details")}
          className={`${styles.match_details__tabs__button} ${
            tab === "details" ? styles.match_details__tabs__active : ""
          }`}
        >
          Details
        </button>
        <button
          onClick={() => setTab("statistics")}
          className={`${styles.match_details__tabs__button} ${
            tab === "statistics" ? styles.match_details__tabs__active : ""
          }`}
        >
          Statistics
        </button>
      </div>
      <div className={styles.match_details_tab}>{tabElement()}</div>
    </div>
  );
};

export default MatchDetailsComponent;
