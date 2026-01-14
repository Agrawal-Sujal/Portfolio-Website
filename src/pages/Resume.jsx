import "./resume.css";
import TopBar from "../components/TopBar";

const Resume = () => {
  return (
    <>
      {/* <TopBar /> */}

      <div className="resume-page">
        <div className="resume-container">
          <header className="resume-header">
            <div className="header-top">
              <h1 className="name">Sujal Agrawal</h1>

              <a
                className="download-resume"
                href="https://portfolio-sujal.s3.ap-south-1.amazonaws.com/Sujal's_Resume_v2.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </a>
            </div>
            <div className="contact">
              <span>📞 +91-8799283364, +91-6232203839</span>
              <span>
                📧{" "}
                <a href="mailto:sujalagrawal2703@gmail.com">
                  sujalagrawal2703@gmail.com
                </a>
              </span>
              <span>
                💼{" "}
                <a
                  href="https://www.linkedin.com/in/sujal-agrawal-823959296/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </span>
              <span>
                💻{" "}
                <a
                  href="https://sujalagrawal.in"
                  target="_blank"
                  rel="noreferrer"
                >
                  Portfolio
                </a>
              </span>
            </div>
          </header>

          {/* Education */}
          <section>
            <h2>Education</h2>
            <div className="content">
              <div className="row">
                <div>
                  <strong>Indian Institute of Information Technology</strong>
                  <p>
                    Bachelor of Technology in Computer Science and Engineering
                    (GPA: 8.0)
                  </p>
                </div>
                <div className="right">
                  <p>Aug 2023 – May 2027</p>
                  <p>Jabalpur, India</p>
                </div>
              </div>
            </div>
          </section>

          {/* Coding Profiles */}
          <section>
            <h2>Coding Profiles</h2>
            <p>
              <div>
                • <strong>Codeforces:</strong> Specialist (1597){" "}
                <a
                  href="https://codeforces.com/profile/sujalagrawal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [Link]
                </a>
              </div>
              <div>
                • <strong>LeetCode:</strong> Knight (2100){" "}
                <a
                  href="https://leetcode.com/u/sujalagrawal47/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [Link]
                </a>
              </div>
              <div>
                • <strong>CodeChef:</strong> 4★ (1935){" "}
                <a
                  href="https://www.codechef.com/users/sujalagrawal47"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [Link]
                </a>
              </div>
            </p>
          </section>

          {/* Achievements */}
          <section>
            <h2>Achievements</h2>
            <ul>
              <li>
                Winner of <strong>Can You Hack It</strong>, a 24-hour
                intra-college hackathon among 50+ teams.
              </li>
              <li>
                Secured <strong>1st Runner-up</strong> in the{" "}
                <strong>Aidothon Walker App Challenge 2025</strong> among 100+
                teams
              </li>
              <li>
                Secured <strong>1st Runner-up</strong> in{" "}
                <strong>Code Arena</strong>
                (Inter-College Coding Contest) among 100+ participants.
              </li>
              <li>
                Secured <strong>2nd Runner-up</strong> in{" "}
                <strong>Newbie</strong> (Intra-College Coding Contest) among
                350+ participants.
              </li>
              <li>
                Attained a <strong>Global Rank of 336</strong> among 30,000+
                participants in <strong>Codeforces Round 993.</strong>
              </li>
              <li>
                Attained a <strong>Global Rank of 378</strong> among 30,000+
                participants in <strong>LeetCode Weekly Contest 464.</strong>
              </li>
              <li>
                Attained a <strong>Global Rank of 18</strong> in{" "}
                <strong>CodeChef Starters 182.</strong>
              </li>
              <li>
                Solved <strong>1000+ problems</strong> across competitive
                programming platforms, including LeetCode, CodeChef, and
                Codeforces.
              </li>
            </ul>
          </section>

          {/* Projects */}
          <section>
            <h2>Projects</h2>
            <div className="content">
              <div className="project">
                <h3>
                  Chaperone{" "}
                  <span>| Android, Django, Razorpay, Maps, WebSockets</span>
                </h3>
                <a
                  href="https://github.com/Agrawal-Sujal/Chaperone-Android"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <ul>
                  <li>
                    Built a <strong>peer-to-peer companionship platform</strong>{" "}
                    connecting seniors/mobility-challenged individuals with
                    verified companions to reduce isolation and encourage
                    physical activity.
                  </li>
                  <li>
                    Developed a <strong>real-time GPS tracking system</strong>{" "}
                    using <strong>Django Channels</strong> and{" "}
                    <strong>Google Maps SDK</strong> for live safety monitoring.
                  </li>
                  <li>
                    Integrated <strong>Razorpay SDK</strong> for secure payments
                    and donation tracking with transparent role-based
                    dashboards.
                  </li>
                </ul>
              </div>

              <div className="project">
                <h3>
                  CropChain <span>| Android, Solidity, FCM, MetaMask</span>
                </h3>
                <a
                  href="https://github.com/sujalagrawal2/CropChain-Android"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <ul>
                  <li>
                    Developed a decentralized app enabling farmers to upload
                    crop images and receive expert feedback.
                  </li>
                  <li>
                    Integrated <strong>blockchain smart contracts</strong> to
                    ensure tamper-proof records and <strong>MetaMask</strong>{" "}
                    for secure transactions.
                  </li>
                  <li>
                    Utilized <strong>IPFS (Pinata)</strong> for decentralized
                    storage and
                    <strong> Firebase FCM</strong> for real-time expert response
                    notifications.
                  </li>
                </ul>
              </div>

              <div className="project">
                <h3>
                  Niyam <span>| Android, Jetpack Compose, DRF</span>
                </h3>
                <a
                  href="https://github.com/Agrawal-Sujal/Niyam"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <ul>
                  <li>
                    Developed a collaborative{" "}
                    <strong>task management app</strong> supporting
                    personal/group tasks using MVVM architecture.
                  </li>
                  <li>
                    Implemented subtasks, real-time activity notifications, and
                    a friend system with request functionalities.
                  </li>
                  <li>
                    Designed a scalable backend using{" "}
                    <strong>Django REST Framework</strong> to manage user data
                    and task synchronization.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2>Technical Skills</h2>
            <div className="content">
              <p>
                <strong>Languages:</strong> C, C++, Java, Python, Kotlin,
                JavaScript
              </p>
              <p>
                <strong>Android:</strong> Android SDK, Jetpack Compose, XML
              </p>
              <p>
                <strong>Backend:</strong> Django, Django REST Framework
              </p>
              <p>
                <strong>Web & DB:</strong> HTML5, CSS3, React, Tailwind CSS,
                SQLite, MySQL, PostgreSQL, MongoDB, Firebase
              </p>
              <p>
                <strong>Tools:</strong> AWS, Vercel, Render, Railway, Git,
                GitHub, Postman, Figma, GSAP, Three.js
              </p>
            </div>
          </section>

          {/* Positions */}
          <section>
            <h2>Positions of Responsibility</h2>
            <div className="content">
              <div className="position">
                <h3>
                  BitByte Core Member (TPC) <span>- IIIT Jabalpur</span>
                </h3>
                <div className="right">Aug 2024 – Present</div>

                <ul>
                  <li>
                    Conducted workshops on Competitive Programming and Android
                    Development for junior students.
                  </li>
                  <li>
                    Assisted in organizing technical events,Contests and
                    hackathons within the college.
                  </li>
                </ul>
                {/* <p>Conducted CP & Android workshops, organized hackathons</p> */}
              </div>
              <div className="position">
                <h3>
                  Programming Mentor <span>- IIIT Jabalpur</span>
                </h3>
                <div className="right">Oct 2024 – Present</div>

                <ul>
                  <li>
                    Helped juniors in CP and development, and guided them
                    throughout their programming journey.
                  </li>
                </ul>
                {/* <p>Mentored juniors in CP and development</p> */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Resume;
