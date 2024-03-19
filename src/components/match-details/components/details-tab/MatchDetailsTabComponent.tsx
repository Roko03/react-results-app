import styles from "./MatchDetailsTabComponent.module.scss";
import MatchGoalComponent from "./components/MatchGoalComponent";

interface MatchDetailsTabComponentProps {
  match: Match;
  timer: number;
}

const MatchDetailsTabComponent: React.FC<MatchDetailsTabComponentProps> = ({
  match,
  timer,
}) => {
  const hostGoals = match.host.statistic.goals.map((goal) => {
    return { goalBy: "host", minute: goal.minute };
  });

  const guestGoals = match.guest.statistic.goals.map((goal) => {
    return { goalBy: "guest", minute: goal.minute };
  });

  const goals = [...hostGoals, ...guestGoals];

  goals.sort((a, b) => {
    return b.minute - a.minute;
  });

  const firstHalfGoals = goals.filter((goal) => {
    return goal.minute <= 45;
  });

  const secondHalfGoals = goals.filter((goal) => {
    return goal.minute > 45;
  });

  return (
    <div className={styles.match_details_tab}>
      {timer >= 90 && (
        <span className={styles.match_details_tab__half}>KRAJ</span>
      )}
      {secondHalfGoals.map((el, index) => {
        return (
          <MatchGoalComponent
            key={index}
            variant={el.goalBy}
            minute={el.minute}
          />
        );
      })}

      {timer > 45 && (
        <span className={styles.match_details_tab__half}>POLUVRIJEME</span>
      )}
      {firstHalfGoals.map((el, index) => {
        return (
          <MatchGoalComponent
            key={index}
            variant={el.goalBy}
            minute={el.minute}
          />
        );
      })}
    </div>
  );
};

export default MatchDetailsTabComponent;
