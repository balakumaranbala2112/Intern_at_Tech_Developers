import "./App.css";

function App() {
  return (
    <header>
      <div className="Head">
        <h1 className="logo">Balakumaran</h1>
        <div className="Role">
          <h2 className="Role-Heading">Role</h2>
          <p className="Role-description">
            I'm a final-year Computer Science Engineering student passionate
            about full-stack web development, especially the MERN stack.
            Currently, I'm focused on mastering JavaScript, React, and becoming
            a job-ready developer.
          </p>
        </div>
        <div className="About">
          <h2 className="About-Heading">About</h2>
          <p className="About-description">
            Engineering student at Anna University and MERN Stack Intern at Top
            Tech Developers, actively building hands-on web development skills
            through real projects.
          </p>
        </div>
        <button>More Info</button>
      </div>
      <div className="image">
        <img src="/images/profile_image.png" />
      </div>
    </header>
  );
}

export default App;
