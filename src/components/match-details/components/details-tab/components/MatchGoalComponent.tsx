import styles from "./MatchGoalComponent.module.scss";

interface MatchGoalComponentProps {
  variant: string;
  minute: number;
}

const MatchGoalComponent: React.FC<MatchGoalComponentProps> = ({
  variant,
  minute,
}) => {
  let spanStyle;

  switch (variant) {
    case "guest":
      spanStyle = styles.guest_goal;
      break;
    case "host":
      spanStyle = styles.host_goal;
      break;
  }

  return (
    <span className={`${styles.goal} ${spanStyle}`}>
      <img src="/ball.png" alt="ball" width={25} height={25} />
      <span className={styles.goal__line}></span>
      <p>Goal - {minute} minuts</p>
    </span>
  );
};

export default MatchGoalComponent;
