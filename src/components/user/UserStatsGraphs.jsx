import { useEffect, useState } from "react";
import styles from "./UserStatsGraphs.module.css";
import { VictoryPie, VictoryChart, VictoryBar, VictoryTheme } from "victory";
const UserStatsGraphs = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const graphData = data.map((item) => {
      return { x: item.title, y: Number(item.acessos) };
    });
    const views = data
      .map(({ acessos }) => Number(acessos))
      .reduce((first, second) => first + second);
    setTotal(views);
    setGraph(graphData);
    console.log(views);
  }, [data]);
  return (
    <>
      <section className={`${styles.graph} animeLeft`}>
        <div className={`${styles.total} animeLeft`}>
          <p>Acessos:</p>
          <span className="title">{total}</span>
        </div>
        <div className="container">
          <VictoryPie
            size={data.length}
            cornerRadius={({ datum }) => datum.y * 4}
            innerRadius={48}
            paddin={{ top: 24, bottom: 24, left: 24, right: 24 }}
            data={graph}
            theme={VictoryTheme.clean}
          />
        </div>
      </section>
    </>
  );
};

export default UserStatsGraphs;
