
import './style.css'
import image from './assets/pogi.jpg'
function App() {
  return (
    <>
    <nav>
        <h2>Mikel Chavez</h2>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    <header>
        <img src={image} alt="pogi.jpg" />
      <p>I Am</p>
      <h1>MIKEL JASTELL R. CHAVEZ</h1>
      <p>Just a kid with a big dream</p>
    </header>
    <section>
      <div>
         <p>GET TO KNOW ME</p>
        <h2>About Me</h2>

        <p>
          Hi! I'm Mikel Jastell R. Chavez, an Information
          Technology student who is interested in programming
          and web development. I enjoy learning new things
          and creating projects to improve my skills.
        </p>

      </div>
    </section>

     <section id="skills">
        <p>WHAT I LEARN</p>
        <h2>My Skills</h2>

        <div>
          <div>
            <h3>HTML & CSS</h3>
            <p>Creating website layouts and designs.</p>
          </div>

          <div>
            <h3>JavaScript</h3>
            <p>Learning how to make websites interactive.</p>
          </div>

          <div>
            <h3>Programming</h3>
            <p>Improving my logic and problem-solving skills.</p>
          </div>
        </div>
      </section>

      <section id="projects">
        <p>MY WORK</p>
        <h2>Featured Project</h2>

        <div>
          <div>
            <h3>MGE Laundry Online Booking</h3>
            <p>A website for laundry booking and tracking.</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <p>LET'S CONNECT</p>
        <h2>Contact Me</h2>
        <p>Have a project or idea? Feel free to reach out!</p>

        <a href="https://mail.google.com/mail/?view=cm&to=mikelc218@gmail.com" target="_blank">
          mikelc218@gmail.com
        </a>
      </section>


    </>
  )
}

export default App
