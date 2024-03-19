import LandingPageSection from "./components/landing/LandingPageSection";
import "./app.scss";
import Match from "./match.json";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState<number>(0);
  const [match, setMatch] = useState<Match>(Match);

  useEffect(() => {
    let timer = setTimeout(() => {
      if (time >= 90) {
        clearTimeout(timer);
        return;
      }

      setTime(time + 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [time]);

  const setGameResult = (
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
  ) => {
    switch (team) {
      case "host":
        setStatisticResult(functionality, match.host, "host", variant);
        break;
      case "guest":
        setStatisticResult(functionality, match.guest, "guest", variant);
        break;
    }
  };

  const setStatisticResult = (
    functionality: "add" | "remove",
    team: Team,
    teamName: string,
    variant:
      | "goals"
      | "possesion"
      | "shots"
      | "corners"
      | "offsides"
      | "fouls"
      | "yellowCards"
      | "redCards"
  ) => {
    switch (variant) {
      case "goals":
        let teamGoald = team.statistic.goals;

        if (functionality === "add") {
          teamGoald = [...team.statistic.goals, { minute: time }];
        } else {
          teamGoald.pop();
        }

        let teamStatisticUpdate: Statistic = {
          ...team.statistic,
          goals: teamGoald,
        };

        const teamUpdate: Team = {
          ...team,
          statistic: teamStatisticUpdate,
        };

        setMatch((prev) => ({
          ...prev,
          [teamName]: teamUpdate,
        }));
        break;
      case "possesion":
        let otherTeam: Team = teamName === "guest" ? match.host : match.guest;
        let otherTeamName: string = teamName === "guest" ? "host" : "guest";

        team.statistic.possesion += functionality === "add" ? 1 : -1;
        otherTeam.statistic.possesion += functionality === "add" ? -1 : 1;

        setMatch((prev) => ({
          ...prev,
          [otherTeamName]: {
            ...otherTeam,
          },
          [teamName]: {
            ...team,
          },
        }));

        break;
      case "corners":
        team.statistic.corners += functionality === "add" ? 1 : -1;

        setMatch((prev) => ({
          ...prev,
          [teamName]: {
            ...team,
          },
        }));

        break;
      case "fouls":
        team.statistic.fouls += functionality === "add" ? 1 : -1;

        setMatch((prev) => ({
          ...prev,
          [teamName]: {
            ...team,
          },
        }));
        break;
      case "offsides":
        team.statistic.offsides += functionality === "add" ? 1 : -1;

        setMatch((prev) => ({
          ...prev,
          [teamName]: {
            ...team,
          },
        }));
        break;
      case "shots":
        team.statistic.shots += functionality === "add" ? 1 : -1;

        setMatch((prev) => ({
          ...prev,
          [teamName]: {
            ...team,
          },
        }));
        break;
      case "yellowCards":
        team.statistic.yellowCards += functionality === "add" ? 1 : -1;

        setMatch((prev) => ({
          ...prev,
          [teamName]: {
            ...team,
          },
        }));
        break;
      case "redCards":
        team.statistic.redCards += functionality === "add" ? 1 : -1;

        setMatch((prev) => ({
          ...prev,
          [teamName]: {
            ...team,
          },
        }));
        break;
    }
  };

  const resetMatch = () => {
    match.guest.statistic = {
      goals: [],
      possesion: 50,
      shots: 0,
      corners: 0,
      offsides: 0,
      fouls: 0,
      yellowCards: 0,
      redCards: 0,
    };
    match.host.statistic = {
      goals: [],
      possesion: 50,
      shots: 0,
      corners: 0,
      offsides: 0,
      fouls: 0,
      yellowCards: 0,
      redCards: 0,
    };

    setMatch((prev) => ({
      ...prev,
      ...match,
    }));

    setTime(0);
  };

  return (
    <>
      <LandingPageSection
        match={match}
        setGameResult={setGameResult}
        timer={time}
        resetMatch={resetMatch}
      />
    </>
  );
}

export default App;
