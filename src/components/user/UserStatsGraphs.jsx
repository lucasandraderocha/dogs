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

    setTotal(
      data
        .map(({ acessos }) => Number(acessos))
        .reduce((first, second) => first + second, 0)
    );
    setGraph(graphData);
  }, [data]);

  return (
    <>
      <section className={`${styles.graph} animeLeft`}>
        <div className={`${styles.total} animeBounce`}>
          <p>Acessos:</p>
          <span>{total}</span>
        </div>
        <div className={`${styles.graphItem} animeBounce`}>
          <VictoryPie
            size={data.length}
            cornerRadius={({ datum }) => datum.y * 4}
            innerRadius={56}
            padding={32}
            data={graph}
            theme={VictoryTheme.clean}
            style={{
              data: {
                fillopacity: 0.9,
                stroke: "#FFF",
                strokeWidth: 2,
              },
              labels: {
                fontSize: 12,
                fill: "#333",
                fontFamily: "var(--type-first)",
                fontWeight: 600,
              },
            }}
          />
        </div>
        <div className={`${styles.graphItem} animeBounce`}>
          <VictoryChart>
            <VictoryBar alignment="start" data={graph} />
          </VictoryChart>
        </div>
      </section>
    </>
  );
};

export default UserStatsGraphs;
