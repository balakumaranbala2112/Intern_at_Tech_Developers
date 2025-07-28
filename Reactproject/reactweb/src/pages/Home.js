import "../styles/Home.css";

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
            I specialize in building dynamic, responsive, and scalable web
            applications using the MERN stack <span className="gradient-text">(MongoDB, Express, React,
            Node.js).</span> I love solving complex problems, designing intuitive UIs,
            and continuously learning new technologies.
          </p>
          <p>Let's build something great together. 👇</p>
          <button>Contact Me</button>
        </div>
        <div className="ImageContainer">
          <img src="/images/profile_image.png" />
        </div>
      </section>
      <section className="Myprogress">
        <h2>My Progress Snapshot</h2>
        <div className="div">
            <p>10+ Projects Completed</p>
            <p>20+ Hours Hands-on Practice</p>
            <p>5+ Real-world Web Apps</p>
        </div>
      </section>
    </main>
  );
}

export default Home;
