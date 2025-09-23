import ThreeDScene from "./components/ThreeDScene"

function App() {
  // Generate random GitHub contribution data
  const generateContributions = () => {
    const contributions = [];
    for (let i = 0; i < 371; i++) {
      const level = Math.floor(Math.random() * 5);
      contributions.push(level);
    }
    return contributions;
  };

  const contributions = generateContributions();

  return (
    <div className="App">
      {/* SVG Filters for animations */}
      <svg style={{position: 'absolute', width: 0, height: 0}}>
        <filter id="unopaq" y="-100%" height="300%" x="-100%" width="300%">
          <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 5 0"></feColorMatrix>
        </filter>
        <filter id="unopaq2" y="-100%" height="300%" x="-100%" width="300%">
          <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 10 0"></feColorMatrix>
        </filter>
        <filter id="unopaq3" y="-100%" height="300%" x="-100%" width="300%">
          <feColorMatrix values="1 0 0 1 0 0 1 0 1 0 0 0 1 1 0 0 0 0 2 0"></feColorMatrix>
        </filter>
      </svg>

      {/* Background */}
      <div className="background">
        <img src="/gradient.png" alt="gradient" className="image-gradient" />
        <div className="layer-blur"></div>
      </div>

      {/* Header */}
      <header className="container">
        <h1 className="logo">DAFFADEV</h1>
        <nav>
          <a href="#home">
            <strong>Home</strong>
            <div className="container-stars">
              <div className="stars"></div>
            </div>
            <div className="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </a>
          <a href="#about">
            <strong>About Me</strong>
            <div className="container-stars">
              <div className="stars"></div>
            </div>
            <div className="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </a>
          <a href="#experience">
            <strong>My Experience</strong>
            <div className="container-stars">
              <div className="stars"></div>
            </div>
            <div className="glow">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </a>
          <a href="#contact">
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

      {/* Home Section */}
      <section id="home">
        <main>
          <div className="content">
            <div className="tag-box">
              <div className="tag">Hello World!!!, I'm</div>
            </div>

            <h1 className="title">Daffa Farash</h1>
            <div className="description">
              <div className="goal-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                  <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                </svg>
                My Goal
              </div>
              <div className="goal-content">
                Hi world, call me a technology fan, I have a dream of being able to understand technological developments
              </div>
            </div>

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
      </section>

      {/* About Me Section */}
      <section id="about" className="about-section">
        {/* About Me Description Box */}
        <div className="about-content">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            Hello world!, I'm Daffa Farash, born in Indonesia. I'm a fan of technology development, and I'm currently exploring the world of IT, specifically front-end coding.
          </p>
        </div>

        <div className="about-grid">
          {/* GitHub Stats */}
          <div className="github-stats">
            <div className="github-header">
              <h3>My GitHub</h3>
              <span>{`{Total: 1,787}`}</span>
            </div>
            <div className="github-chart">
              <div className="contributions">
                {contributions.map((level, index) => (
                  <div key={index} className={`day ${level > 0 ? `level-${level}` : ''}`}></div>
                ))}
              </div>
              <div className="legend">
                <span>Less</span>
                <div className="legend-scale">
                  <div className="day"></div>
                  <div className="day level-1"></div>
                  <div className="day level-2"></div>
                  <div className="day level-3"></div>
                  <div className="day level-4"></div>
                </div>
                <span>More</span>
              </div>
            </div>
          </div>

          {/* GitHub PR Card */}
          <div className="github-pr-card">
            <div className="card-container">
              <div className="spin spin-blur"></div>
              <div className="spin spin-intense"></div>
              <div className="backdrop"></div>
              <div className="card-border">
                <div className="spin spin-inside"></div>
              </div>
              <div className="card">
                <div className="header">
                  <div className="top-header">
                    <div className="icon">
                      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z"></path>
                      </svg>
                    </div>
                    <a className="gh-icon" href="https://github.com/daffa1404">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path>
                      </svg>
                    </a>
                    <div className="repo">
                      <a className="repo-owner" href="https://github.com/daffa1404">daffa1404</a>
                      <span className="repo-slash">/</span>
                      <a className="repo-name" href="https://github.com/daffa1404/my-api">my-api</a>
                    </div>
                    <div className="space"></div>
                    <div className="icon">
                      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
                      </svg>
                    </div>
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path d="M2.8 2.06A1.75 1.75 0 0 1 4.41 1h7.18c.7 0 1.333.417 1.61 1.06l2.74 6.395c.04.093.06.194.06.295v4.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-4.5c0-.101.02-.202.06-.295Zm1.61.44a.25.25 0 0 0-.23.152L1.887 8H4.75a.75.75 0 0 1 .6.3L6.625 10h2.75l1.275-1.7a.75.75 0 0 1 .6-.3h2.863L11.82 2.652a.25.25 0 0 0-.23-.152Zm10.09 7h-2.875l-1.275 1.7a.75.75 0 0 1-.6.3h-3.5a.75.75 0 0 1-.6-.3L4.375 9.5H1.5v3.75c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25Z"></path>
                      </svg>
                    </div>
                    <div className="pfp"></div>
                  </div>
                  <div className="btm-header">
                    <div className="tab">
                      <div className="tab-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                          <path d="m11.28 3.22 4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275.749.749 0 0 1 .734.215Zm-6.56 0a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"></path>
                        </svg>
                      </div>
                      <div className="tab-text">Code</div>
                    </div>
                    <div className="tab">
                      <div className="tab-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"></path>
                        </svg>
                      </div>
                      <div className="tab-text">Issues</div>
                    </div>
                    <div className="tab active">
                      <div className="tab-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                          <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
                        </svg>
                      </div>
                      <div className="tab-text">Pull Requests</div>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <div className="prs">
                    <div className="pr">
                      <label>
                        <input type="checkbox" />
                        <div className="checkbox"></div>
                      </label>
                      <div className="pr-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                          <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
                        </svg>
                      </div>
                      <div className="pr-text">
                        <div className="pr-title">[Bug fix]: Various improvements</div>
                        <div className="pr-desc">#4969 opened 3 days ago by daffa1404</div>
                      </div>
                    </div>
                    <div className="pr">
                      <label>
                        <input type="checkbox" />
                        <div className="checkbox"></div>
                      </label>
                      <div className="pr-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                          <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
                        </svg>
                      </div>
                      <div className="pr-text">
                        <div className="pr-title">Feature request: Storage of cats</div>
                        <div className="pr-desc">#4931 opened 12 days ago by daffa1404</div>
                      </div>
                    </div>
                    <div className="pr">
                      <label>
                        <input type="checkbox" />
                        <div className="checkbox"></div>
                      </label>
                      <div className="pr-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                          <path d="M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z"></path>
                        </svg>
                      </div>
                      <div className="pr-text">
                        <div className="pr-title">Improve documentation I guess</div>
                        <div className="pr-desc">#4206 opened 2 months ago by daffa1404</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pixel Character */}
        <div className="pixel-character">
          <div id="ghost">
            <div id="red">
              <div id="pupil"></div>
              <div id="pupil1"></div>
              <div id="eye"></div>
              <div id="eye1"></div>
              <div id="top0"></div>
              <div id="top1"></div>
              <div id="top2"></div>
              <div id="top3"></div>
              <div id="top4"></div>
              <div id="st0"></div>
              <div id="st1"></div>
              <div id="st2"></div>
              <div id="st3"></div>
              <div id="st4"></div>
              <div id="st5"></div>
              <div id="an1"></div>
              <div id="an2"></div>
              <div id="an3"></div>
              <div id="an4"></div>
              <div id="an5"></div>
              <div id="an6"></div>
              <div id="an7"></div>
              <div id="an8"></div>
              <div id="an9"></div>
              <div id="an10"></div>
              <div id="an11"></div>
              <div id="an12"></div>
              <div id="an13"></div>
              <div id="an14"></div>
              <div id="an15"></div>
              <div id="an16"></div>
              <div id="an17"></div>
              <div id="an18"></div>
            </div>
            <div id="shadow"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <p>© Copyright By DaffaDev</p>
      </footer>
    </div>
  )
}

export default App