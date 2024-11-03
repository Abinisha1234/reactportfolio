import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

<meta charset="UTF-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <title>Home - Portfolio</title>
    <link rel="stylesheet" href="style.css"></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"></link>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
    
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"></link>
  <div class="container">
            <h1 class="logo">My Portfolio</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">TechnicalSkills</a></li>
                    <li><a href="#softskills">SoftSkills</a></li>
                    <li><a href="#hobbies">Hobbies</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
  
  <section class="home-section" id="home">
  <div class="home-content">
  <img 
    src={`${process.env.PUBLIC_URL}/images/photo.jpg`} 
    alt="Your Photo" 
    className="profile-photo" 
    data-aos="fade-down" 
/>

      <h2 data-aos="fade-down">Welcome to My Portfolio</h2>
      <p data-aos="fade-up">I am Abinisha, a passionate Computer Science student specializing in Web Development, AI, and Machine Learning. Explore my work and get in touch!</p>
      <a href="projects.html" class="btn" data-aos="zoom-in">Explore My Work</a>
  </div>
</section>

<section class="dark-section about-section" id="about" data-aos="fade-up">
  <div class="about-content" data-aos="fade-up">
      <h2>About Me</h2>
      <p>I'm a final year Computer Science student with a passion for web development, AI, and machine learning. I enjoy solving problems and building innovative solutions.</p>
      <p>In my free time, I enjoy contributing to open-source projects and constantly learning new technologies to enhance my skills.</p>
      <p><a 
    href={`${process.env.PUBLIC_URL}/resume.pdf`} 
    download 
    className="download-btn"
>
    Download My CV
</a>
</p>
  </div>
</section>

<section class="education-section full-page" id="education">
  <h2 data-aos="fade-up">Education</h2>
  <div class="education-grid" data-aos="fade-up">
      <div class="education-card">
          <h3>B.E. Computer Science and Engineering</h3>
          <p>Bharathiyar Institute of Engineering for Women - 2021 - 2025</p>
          <p>CGPA-8.17</p>
      </div>
      <div class="education-card">
          <h3>Higher Secondary Education</h3>
          <p>A.K.T Academy Matric.hr.sec.school - 2020 - 2021</p>
          <p>Grade-92%</p>
      </div>
      <div class="education-card">
          <h3>SSLC</h3>
          <p>A.K.T Academy Matric.hr.sec.school - 2018- 2019</p>
          <p>Grade-91%</p>
      </div>
  </div>
</section>

<section class="experience-section full-page" id="experience">
  <h2 data-aos="fade-up">Experience</h2>
  <div class="experience-grid" data-aos="fade-up">
      <div class="experience-card">
          <h3>Internship at NSIC, Chennai</h3>
          <p>Duration: June 2024 - July 2024</p>
          <p>I focused on learning real world applications of AI&ML.</p>
      </div>
      <div class="experience-card">
          <h3>Internship at Emiglitz Technology</h3>
          <p>Duration: July 2024 - August 2024</p>
          <p>I developed DBMS project during my internship.</p>
      </div>
  </div>
</section>


<section class="projects-section full-page" id="projects">
  <h2 data-aos="fade-up">My Projects</h2>
  <div class="projects-grid" data-aos="fade-in">
      <div class="project-card">
          <h3>Project 1: E-commerce Website</h3>
          <p>Developed a full-featured e-commerce platform using Django for agricultural products.</p>
      </div>
      <div class="project-card">
          <h3>Project 2: Leaf Recognition System</h3>
          <p>Implemented a machine learning model for leaf recognition with real-time image classification.</p>
      </div>
      <div class="project-card">
          <h3>Project 3: Bill Receipt Generator</h3>
          <p>Designed a web application that allows users to create and manage receipts for purchases.</p>
      </div>
      
  </div>
</section>

<section class="skills-section full-page" id="skills">
  <h2 data-aos="fade-up">My Skills</h2>
  <div class="skills-grid" data-aos="fade-up">
      <div class="skill-card">
          <i class="fas fa-code"></i>
          <h3>Python</h3>
          <div class="progress-bar">
              <div class="progress" style="width: 90%;"></div>
          </div>
      </div>
      <div class="skill-card">
          <i class="fas fa-code"></i>
          <h3>Django</h3>
          <div class="progress-bar">
              <div class="progress" style="width: 85%;"></div>
          </div>
      </div>
      <div class="skill-card">
          <i class="fas fa-database"></i>
          <h3>Machine Learning</h3>
          <div class="progress-bar">
              <div class="progress" style="width: 80%;"></div>
          </div>
      </div>
      <div class="skill-card">
          <i class="fab fa-html5"></i>
          <h3>HTML, CSS, JavaScript</h3>
          <div class="progress-bar">
              <div class="progress" style="width: 85%;"></div>
          </div>
      </div>
      <div class="skill-card">
          <i class="fab fa-angular"></i>
          <h3>Angular</h3>
          <div class="progress-bar">
              <div class="progress" style="width: 75%;"></div>
          </div>
      </div>
      <div class="skill-card">
          <i class="fas fa-robot"></i>
          <h3>AI and Data Science</h3>
          <div class="progress-bar">
              <div class="progress" style="width: 80%;"></div>
          </div>
      </div>
  </div>
</section>

<section class="softskills-section full-page" id="softskills">
  <h2 data-aos="fade-up">Soft Skills</h2>
  <div class="softskills-grid" data-aos="fade-up">
      <div class="softskill-card">
          <h3>Adaptability</h3>
          <p>Ability to handle new challenges and work in different environments effectively.</p>
      </div>
      <div class="softskill-card">
          <h3>Teamwork</h3>
          <p>Experience working in teams to achieve goals efficiently and collaboratively.</p>
      </div>
      <div class="softskill-card">
          <h3>Communication</h3>
          <p>Strong verbal and written communication skills to articulate ideas clearly.</p>
      </div>
  </div>
</section>

<section class="hobbies-section full-page" id="hobbies">
  <h2 data-aos="fade-up">Hobbies</h2>
  <div class="hobbies-grid" data-aos="fade-up">
      <div class="hobby-card">
          <h3>Craft works</h3>
          <p>I Enjoy creating craft works for decorations.</p>
      </div>
      <div class="hobby-card">
          <h3>Reading</h3>
          <p>I like to read fiction and non-fiction books in my free time.</p>
      </div>
      <div class="hobby-card">
          <h3>Gardening</h3>
          <p>Interested in doing gardening works.</p>
      </div>
  </div>
</section>

<section class="contact-section" id="contact">
  <h2>Contact Me</h2>
  <div class="contact-info">
      <p>Email: <a href="mailto:san2004kallai@gmail.com">san2004kallai@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/abinisha-selvam-89a23b251" target="_blank">www.linkedin.com/in/abinisha-selvam-89a23b251</a></p>
  </div>
  
  <form>
      <div>
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" required></input>
      </div>
      <div>
          <label for="email">Your Email</label>
          <input type="email" id="email" name="email" required></input>
      </div>
      <div>
          <label for="message">Your Message</label>
          <textarea id="message" name="message" required></textarea>
      </div>
      <button type="submit">Send Message</button>
  </form>
</section>


<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
<script>
  AOS.init();
</script></>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

