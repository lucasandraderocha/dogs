import Feed from "../Feed/Feed";

import UserContext from "../../UserContext";

import { useParams } from "react-router-dom";
import Head from "../helper/Head";

const UserProfile = () => {
  const { user } = useParams();

  return (
    <section className="container">
      <Head
        title={`@${user}`}
        description={`Perfil do usuário @${user} no Dogs.`}
      />
      <h1 className="title">@{user}</h1>
      <Feed user={user} />
    </section>
  );
};

export default UserProfile;
