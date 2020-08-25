import React from "react";
import "./HomePage.css";
import UniversalPage from "../UniversalPage/UniversalPage";

const HomePage = () => {
  const component = (
    <div className="home">
      <h2>Strona Zespołu Audytu Wewnętrznego PL</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque
        voluptatum voluptatibus officia ex repellat aspernatur quaerat
        distinctio est voluptate sint pariatur enim harum ab modi, maxime nisi?
        Maiores accusantium quae unde, aliquam in nobis voluptatem aspernatur
        repudiandae amet cumque necessitatibus debitis dolorum iure sequi
        ratione aliquid eum odio earum.
      </p>
    </div>
  );

  return <UniversalPage component={component} />;
};

export default HomePage;
