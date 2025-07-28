import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="Head">
          <h1 className="logo">Balakumaran</h1>
          <div className="Role">
            <h2 className="Role-Heading">Role</h2>
            <p className="Role-description">
              I'm a final-year Computer Science Engineering student passionate
              about full-stack web development, especially the MERN stack.
              Currently, I'm focused on mastering JavaScript, React, and
              becoming a job-ready developer.
            </p>
          </div>
          <div className="About">
            <h2 className="About-Heading">About</h2>
            <p className="About-description">
              Engineering student at Anna University and MERN Stack Intern at
              Top Tech Developers, actively building hands-on web development
              skills through real projects.
            </p>
          </div>
          <button>More Info</button>
        </div>
        <div className="image">
          <img src="/images/profile_image.png" />
        </div>
      </header>
      <main className="Appss">
        <h2 className="Title">Project Documentation</h2>
        <section className="Documentation">
          <section className="SectionOne">
            <div>
              <h2>Project Name</h2>
              <p>Student Management System (SMS)</p>
            </div>
            <div>
              <h2>Project Type</h2>
              <p>Full-Stack Web Application (MERN Stack Compatible)</p>
            </div>
            <div>
              <h3>Description</h3>
              <p>
                A responsive and user-friendly web application designed to
                simplify student data management. The system allows
                administrators to <strong>create</strong>, <strong>read</strong>
                , <strong>update</strong>, and <strong>delete</strong> student
                records. Built with clean UI and scalable architecture, it's
                ideal for schools or institutions.
              </p>
            </div>
            <div className="KeyFeatures">
              <h2>Key Features</h2>
              <ul className="custom-list">
                <li>Admin Authentication</li>
                <li>Student Profile Management</li>
                <li>CRUD Operations</li>
                <li>Search & Filter</li>
                <li>Dashboard Overview</li>
                <li>MongoDB/JSON Data Storage</li>
                <li>React State Updates</li>
                <li>Mobile Responsive</li>
              </ul>
            </div>
          </section>
          <section>
            <div>
              <h2>Technologies Used</h2>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Layer</th>
                      <th>Tech Stack</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Frontend</td>
                      <td>HTML, CSS, JavaScript, React JS</td>
                    </tr>
                    <tr>
                      <td>State Management</td>
                      <td>useState, useEffect, Context API / Redux</td>
                    </tr>
                    <tr>
                      <td>Backend</td>
                      <td>Node.js, Express.js (optional)</td>
                    </tr>
                    <tr>
                      <td>Database</td>
                      <td>MongoDB or localStorage</td>
                    </tr>
                    <tr>
                      <td>UI/UX</td>
                      <td>Custom CSS / Bootstrap</td>
                    </tr>
                    <tr>
                      <td>Version Control</td>
                      <td>Git + GitHub</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <section>
              <h2>Live Demo / GitHub</h2>
              <p>
                <a
                  href="https://github.com/Arundeveloper001/Mern-stack-Frontend"
                  target="_blank"
                  rel="noreferrer"
                >
                  View GitHub Repository
                </a>
              </p>
              <p>
                <a href="#" target="_blank" rel="noreferrer">
                  View Live Project
                </a>
              </p>
            </section>
          </section>
        </section>
      </main>
    </>
  );
}

export default App;
