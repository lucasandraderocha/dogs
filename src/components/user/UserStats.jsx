import { lazy, Suspense, useEffect } from "react";

import { STATS_GET } from "../../api";

import useFetch from "../../hooks/useFetch";

import Loading from "../helper/Loading";
import Error from "../helper/Error";
import Head from "../helper/Head";

const UserStatsGraphs = lazy(() => import("./UserStatsGraphs"));
const UserStats = () => {
  const { error, data, loading, request } = useFetch();

  useEffect(() => {
    const syncStats = async () => {
      const { url, options } = STATS_GET();
      await request(url, options);
    };
    syncStats();
  }, [request]);
  if (loading) <Loading />;
  if (error) <Error error={error} />;
  if (data)
    return (
      <Suspense fallback={<div></div>}>
        <Head
          title={`Estatísticas do perfil`}
          description="Recupere sua senha e volte a compartilhar as melhores fotos do seu melhor amigo no Dogs."
        />
        <UserStatsGraphs data={data} />
      </Suspense>
    );
  else return null;
};

export default UserStats;
