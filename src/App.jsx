import ThreeDScene from "./components/ThreeDScene"

function App() {
  return (
    <div className="App">
      {/* Background */}
      <div className="background">
        <img src="/gradient.png" alt="gradient" className="image-gradient" />
        <div className="layer-blur"></div>
      </div>

      {/* Header */}
      <header className="container">
        <h1 className="logo">DAFFADEV</h1>
        <nav>
          <a href="#">
            <strong>Home</strong>
            <div className="container-stars">
              <div className="stars"></div>
            </div>
            <div className="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </a>
          <a href="#">
            <strong>About Me</strong>
            <div className="container-stars">
              <div className="stars"></div>
            </div>
            <div className="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </a>
          <a href="#">
            <strong>My Experience</strong>
            <div className="container-stars">
              <div className="stars"></div>
            </div>
            <div className="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </a>
          <a href="#">
            <strong>Contact</strong>
            <div className="container-stars">
              <div className="stars"></div>
            </div>
            <div className="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </a>
        </nav>
        <div style={{ flex: 1 }}></div>
      </header>

      {/* Content */}
      <main>
        <div className="content">
          <div className="tag-box">
            <div className="tag">Hello World!!!, I'm</div>
          </div>

          <h1 className="title">Daffa Farash</h1>
          <p className="description">
            The best way to showcase your skills and projects with modern web technologies, delivering professional and
            interactive portfolio experiences at scale.
          </p>

          <div className="button">
            <a href="#" className="btn-history">
              History Project →
            </a>
            <a href="#" className="btn-contact">
              <svg xmlns="http://www.w3.org/2000/svg" className="arr-2" viewBox="0 0 24 24">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <span className="text">Contact Me</span>
              <span className="circle"></span>
              <svg xmlns="http://www.w3.org/2000/svg" className="arr-1" viewBox="0 0 24 24">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </main>

      {/* Content 3D */}
      <main>
        <ThreeDScene />
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <p>© 2025 Belajar React 3D</p>
      </footer>
    </div>
  )
}

export default App