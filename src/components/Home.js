// src/components/Home.js
import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="home-section">
      <div className="intro-container">
        <h1>Hi, I'm Arvind! 👋 </h1>
        <p>
          I'm a <strong>Software Engineer and Data Enthusiast</strong> with a
          passion for building scalable applications and uncovering insights
          through data. With experience in{" "}
          <strong>
            full-stack development, data analytics, and software design
          </strong>
          , I love solving complex problems and optimizing performance.
        </p>
        <p>
          Currently pursuing my <strong>Master’s in Computer Science</strong> at
          the <strong>University of Houston</strong>, I have worked with
          technologies like{" "}
          <strong>
            React.js, Java, SQL, AWS, and machine learning frameworks
          </strong>
          . My journey has taken me from frontend development to backend
          systems, performance testing, and even visualization projects, making
          me adaptable across multiple domains.
        </p>
        <p>
          Beyond coding, I enjoy{" "}
          <strong>
            exploring visualization techniques, mentoring students, and working
            on projects that bridge the gap between software engineering and
            data science
          </strong>
          . Whether it's designing intuitive user experiences, analyzing large
          datasets, or architecting efficient systems, I'm always eager to push
          boundaries and learn something new.
        </p>
        <p>Let's connect and build something amazing! 🚀</p>
      </div>
    </section>
  );
}

export default Home;
