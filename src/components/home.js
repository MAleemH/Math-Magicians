import LoremIpsum from 'react-lorem-ipsum';

const Home = () => (
  <div className="homepage">
    <h2>Welcome to our page!</h2>
    <p className="homepage-paragraphs">
      <LoremIpsum p={2} />
    </p>
  </div>
);

export default Home;
