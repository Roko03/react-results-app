import styles from "./MatchStatisticsBoxComponent.module.scss";

interface MatchStatisticsBoxComponentProps {
  title: string;
  hostValue: number;
  guestValue: number;
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
  variant:
    | "goals"
    | "possesion"
    | "shots"
    | "corners"
    | "offsides"
    | "fouls"
    | "yellowCards"
    | "redCards";
}

const MatchStatisticsBoxComponent: React.FC<
  MatchStatisticsBoxComponentProps
> = ({ title, hostValue, guestValue, setGameResult, variant }) => {
  let sumValue: number = hostValue + guestValue;

  let barStyleWidth: number =
    hostValue / sumValue > 0 ? (hostValue / sumValue) * 100 : 0;

  const barStyle = {
    width: `${barStyleWidth}%`,
  };

  return (
    <div className={styles.match_statistics_box}>
      <div className={styles.match_statistics_box__values}>
        <div
          className={`${styles.match_statistics_box__values__team} ${styles.match_statistics_box__values__host}`}
        >
          <button
            onClick={() => setGameResult("add", "host", variant)}
            disabled={variant === "possesion" ? guestValue <= 10 : false}
          >
            +
          </button>
          <p>{hostValue}</p>
          <button
            onClick={() => setGameResult("remove", "host", variant)}
            disabled={
              variant === "possesion" ? hostValue <= 10 : hostValue <= 0
            }
          >
            -
          </button>
        </div>
        <p>{title}</p>
        <div
          className={`${styles.match_statistics_box__values__team} ${styles.match_statistics_box__values__guest}`}
        >
          <button
            onClick={() => setGameResult("add", "guest", variant)}
            disabled={variant === "possesion" ? hostValue <= 10 : false}
          >
            +
          </button>
          <p>{guestValue}</p>
          <button
            onClick={() => setGameResult("remove", "guest", variant)}
            disabled={
              variant === "possesion" ? guestValue <= 10 : guestValue <= 0
            }
          >
            -
          </button>
        </div>
      </div>
      <div className={styles.progress_bar}>
        <div className={styles.progress_bar__line} style={barStyle}></div>
      </div>
    </div>
  );
};

export default MatchStatisticsBoxComponent;
