import "./Resume.css";

function Resume() {
  return (
    <main>
      <div className="profileContainer">
        <div className="Profile_image">
          <img src="/images/profile_image.png" alt="Profile Image" />
        </div>
        <div className="ProfileInfo">
          <h1>
            Hello I'm Web Developer<span>Balakumaran</span>
          </h1>
          <div className="links">
            <a href="#">bkumaran2112@gmail.com</a>
            <a href="#">www.bkumaran.com</a>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            mollitia labore quaerat ipsum maxime ea error hic odio, est numquam
            vitae asperiores, repellendus excepturi.
          </p>
        </div>
      </div>
      <div className="ProfileContents">
        <div className="WorkExperience">
          <div className="WorkOne">
            <div className="heading">
              <h2>WORK EXPERIENCES</h2>
              <p>01</p>
            </div>
            <p>2025 - 2025</p>
            <p className="nameEx">UI GRAPHIC DESIGNER</p>
            <p>Ginyard International Co. - Any City</p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>{" "}
          <div className="WorkOne">
            <p>2025 - 2025</p>
            <p className="nameEx">Web Developer</p>
            <p>Ginyard International Co. - Any City</p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>{" "}
          <div className="WorkOne">
            <p>2025 - 2025</p>
            <p className="nameEx">JUNIOR GRAPHIC DESIGNER</p>
            <p>Ginyard International Co. - Any City</p>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>
        </div>
        <div className="SkillsSection">
          <div className="heading">
            <h2>SKILLS & EXPERTISE</h2>
            <p>02</p>
          </div>
          <div className="SkillContents">
            <ul>
              <li>Lorem ipsum dolor sit amet amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
              <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
            <div className="skills">
              <p>Software</p>
              <p>hardware</p>
              <p>Web Design</p>
            </div>
          </div>
        </div>
        <div className="Education">
          <div className="heading">
            <h2>EDUCATION</h2>
            <p>03</p>
          </div>
          <div className="UniversityNames">
            <div className="University">
              <p>University College of Engineering, Ariyalur</p>
              <p>2024 - 2026</p>
              <p>B.E / CSE</p>
            </div>
            <div className="University">
              <p>University College of Engineering, Thirukkuvalai</p>
              <p>2022 - 2024</p>
              <p>B.E / CSE</p>
            </div>
          </div>
        </div>
        <div className="Hobbies">
          <div className="heading">
            <h2>HOBBIES</h2>
            <p>04</p>
          </div>
          <div className="HobbiesLists">
            <p>Designing</p>
            <p>Drawing</p>
            <p>Book Reading</p>
          </div>
        </div>
        <div className="Achivement">
          <div className="heading">
            <h2>ACHIVEMENTS</h2>
            <p>05</p>
          </div>
          <div className="AchievNames">
            <div className="one">
              <div className="C0ne">
                <p>best Student at University</p>
                <p>Last Bench</p>
              </div>
              <div className="C2o">
                <p>2024</p>
              </div>
            </div>
            <div className="Two">
              <div className="C0ne">
                <p>best Student at University</p>
                <p>Last Bench</p>
              </div>
              <div className="C2o">
                <p>2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Resume;
