import "../pages/Home.css";
import profileImage from "../assets/images/profile_image.png";
import github from "../assets/images/github.png";
import mongodb from "../assets/images/mongodb.png";
import figma from "../assets/images/figma.png";
import kalilinux from "../assets/images/kalilinux.png";
import "../styles/global.css";

function Home() {
  return (
    <main>
      <section className="Home">
        <div className="HomeContents">
          <h2 className="HomeTitle">
            Hello, I'm <span>Balakumaran</span>
          </h2>
          <p className="HomeTagline">
            Turning ideas into real-world applications with the power of code.
          </p>
          <p>
            I create responsive and scalable web apps using the
            <span className="gradient-text"> MERN stack</span>. I love turning
            complex problems into simple, clean solutions.
          </p>

          <p>Let's build something great together. 👇</p>
          <div className="CtaButton">
            <button className="btn">See My Projects</button>
            <button className="btn">Resume</button>
          </div>
        </div>
        <div className="ImageContainer">
          <img src={profileImage} alt="Profile" />
        </div>
      </section>

      
      <section className="MyProgress">
        <h2 className="progressSectionTitle">🚀 My Progress Snapshot</h2>
        <div className="ProgressCards">
          <div className="ProgressCard fade-in">
            <h3>10+ Projects Completed</h3>
            <p>Built with HTML, CSS, JavaScript, and React</p>
          </div>
          <div className="ProgressCard fade-in">
            <h3>20+ Hours Practice</h3>
            <p>Real coding, debugging, and building UI</p>
          </div>
          <div className="ProgressCard fade-in">
            <h3>5+ Web Apps Built</h3>
            <p>Full-stack MERN applications with user features</p>
          </div>
        </div>
      </section>

      {/* 💡 Philosophy */}
      <section className="philosophy">
        <h2>💡My Philosophy</h2>
        <p>
          I believe consistency beats motivation. In both life and code,
          simplicity and clarity create the strongest foundations. Progress is
          made one small commit at a time.
        </p>
      </section>

      <section className="tools">
        <h2 className="tools-title">🛠️ Tools I Use</h2>
        <div className="scroll-wrapper">
          <div className="toolGrid scroll-track">
            {[kalilinux, github, figma, mongodb].map((tool, index) => (
              <div className="toolCard" key={index}>
                <img src={tool} alt="Tool" />
                <p>{["Kali Linux", "GitHub", "Figma", "MongoDB"][index]}</p>
              </div>
            ))}

            {/* Duplicate for seamless infinite scroll */}
            {[kalilinux, github, figma, mongodb].map((tool, index) => (
              <div className="toolCard" key={`dup-${index}`}>
                <img src={tool} alt="Tool" />
                <p>{["Kali Linux", "GitHub", "Figma", "MongoDB"][index]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 
      <section className="milestone-vertical">
        <h2 className="milestone-title">Learning Journey</h2>

        <div className="timeline">
          <div className="year-block">
            <h3 className="year-label">2023</h3>
            <div className="milestone completed">
              <div className="dot" />
              <p>Mastered JavaScript ES6 & Promises</p>
              <span className="tag">Completed</span>
            </div>
            <div className="milestone completed">
              <div className="dot" />
              <p>Built full MERN stack app with auth</p>
              <span className="tag">Completed</span>
            </div>
          </div>

          <div className="year-block">
            <h3 className="year-label">2024</h3>
            <div className="milestone completed">
              <div className="dot" />
              <p>Contributed to open source</p>
              <span className="tag">Completed</span>
            </div>
            <div className="milestone ongoing">
              <div className="dot" />
              <p>Learning System Design</p>
              <span className="tag">Ongoing</span>
            </div>
          </div>

          <div className="year-block">
            <h3 className="year-label">2025</h3>
            <div className="milestone goal">
              <div className="dot" />
              <p>Land a full-stack developer job</p>
              <span className="tag">Goal</span>
            </div>
          </div>
        </div>
      </section> */}
      <section className="milestone-vertical">
        <h2 className="milestone-title">Learning Journey</h2>

        <div className="timeline">
          <div className="year-block">
            <h3 className="year-label">2023</h3>
            <div className="milestone-card completed">
              <div className="dot" />
              <p>Mastered JavaScript ES6 & Promises</p>
              <span className="tag">Completed</span>
            </div>
            <div className="milestone-card completed">
              <div className="dot" />
              <p>Built full MERN stack app with auth</p>
              <span className="tag">Completed</span>
            </div>
          </div>

          <div className="year-block">
            <h3 className="year-label">2024</h3>
            <div className="milestone-card completed">
              <div className="dot" />
              <p>Contributed to open source</p>
              <span className="tag">Completed</span>
            </div>
            <div className="milestone-card ongoing">
              <div className="dot" />
              <p>Learning System Design</p>
              <span className="tag">Ongoing</span>
            </div>
          </div>

          <div className="year-block">
            <h3 className="year-label">2025</h3>
            <div className="milestone-card goal">
              <div className="dot" />
              <p>Land a full-stack developer job</p>
              <span className="tag">Goal</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
