import Feed from "./Feed/Feed";
import Head from "./helper/Head";
const Home = () => {
  return (
    <>
      <section className="container">
        <Head
          title="Feed de fotos"
          description="Home do site Dogs, composta pelas fotos de todos os usuários do Dogs."
        />
        <h1 className="title">Feed</h1>
        <Feed />
      </section>
    </>
  );
};

export default Home;
