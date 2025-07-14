import "./styles/Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="left part">
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and
          more...
        </p>
        <div className="home-button">Request invite</div>
      </div>
      <div className="right part">
        <div className="front-image"></div>
        <div className="back-image container"></div>
      </div>
    </div>
  );
};

export default Home;
