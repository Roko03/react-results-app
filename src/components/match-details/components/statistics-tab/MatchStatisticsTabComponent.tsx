import styles from "./MatchStatisticsTabComponent.module.scss";
import MatchStatisticsBoxComponent from "./components/statistics-box/MatchStatisticsBoxComponent";

interface MatchStatisticsTabComponentProps {
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
  isButtonDisabled: boolean;
}

const MatchStatisticsTabComponent: React.FC<
  MatchStatisticsTabComponentProps
> = ({ match, setGameResult, isButtonDisabled }) => {
  return (
    <div
      className={styles.match_statistics}
      style={{
        pointerEvents: isButtonDisabled ? "none" : "auto",
      }}
    >
      <MatchStatisticsBoxComponent
        title={"Posjed lopte"}
        hostValue={match.host.statistic.possesion}
        guestValue={match.guest.statistic.possesion}
        setGameResult={setGameResult}
        variant={"possesion"}
      />
      <MatchStatisticsBoxComponent
        title={"Šutevi"}
        hostValue={match.host.statistic.shots}
        guestValue={match.guest.statistic.shots}
        setGameResult={setGameResult}
        variant={"shots"}
      />
      <MatchStatisticsBoxComponent
        title={"Korneri"}
        hostValue={match.host.statistic.corners}
        guestValue={match.guest.statistic.corners}
        setGameResult={setGameResult}
        variant={"corners"}
      />
      <MatchStatisticsBoxComponent
        title={"Zaleđa"}
        hostValue={match.host.statistic.offsides}
        guestValue={match.guest.statistic.offsides}
        setGameResult={setGameResult}
        variant={"offsides"}
      />
      <MatchStatisticsBoxComponent
        title={"Prekršaji"}
        hostValue={match.host.statistic.fouls}
        guestValue={match.guest.statistic.fouls}
        setGameResult={setGameResult}
        variant={"fouls"}
      />
      <MatchStatisticsBoxComponent
        title={"Žuti kartoni"}
        hostValue={match.host.statistic.yellowCards}
        guestValue={match.guest.statistic.yellowCards}
        setGameResult={setGameResult}
        variant={"yellowCards"}
      />
      <MatchStatisticsBoxComponent
        title={"Crveni kartoni"}
        hostValue={match.host.statistic.redCards}
        guestValue={match.guest.statistic.redCards}
        setGameResult={setGameResult}
        variant={"redCards"}
      />
    </div>
  );
};

export default MatchStatisticsTabComponent;
