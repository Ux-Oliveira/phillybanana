import React, { useEffect, useRef, useState } from 'react'

export default function App() {
  const audioRef = useRef(null)
  const [showAlbumModal, setShowAlbumModal] = useState(false)
  const [showPhotoModal, setShowPhotoModal] = useState(false)
  const [sideOpen, setSideOpen] = useState(false)
  const [arrowSliding, setArrowSliding] = useState(false)

  useEffect(() => {
    const a = audioRef.current
    if (a) {
      a.preload = 'auto'
      a.playsInline = true
    }
  }, [])

  function playAudio() {
    const a = audioRef.current
    if (!a) return
    try {
      a.currentTime = 0
      a.play().catch(() => {
      })
    } catch (err) {
    }
  }

  function openTikTokAfterSlide() {
    setArrowSliding(true)
    setTimeout(() => {
      window.open('https://www.tiktok.com/@phillybanana?lang=en3', '_blank', 'noopener')
      setArrowSliding(false)
    }, 450)
  }

  function openTikTok() {
    window.open('https://tiktok.com/@phillybanana/', '_blank', 'noopener')
  }

  function toggleSide() {
    setSideOpen((s) => !s)
  }

  return (
    <div className="app-root">
      {/*audio element with no autoplay*/}
      <audio ref={audioRef} src="/mainsong.mp3" preload="auto" playsInline />

      {/*banana icon on the left*/}
      <button
        className={`banana-icon ${sideOpen ? 'active' : ''}`}
        aria-label="menu"
        onClick={toggleSide}
      >
        <img src="/bananaicon.png" alt="Banana" />
      </button>

      {/*sliding panel*/}
      <aside className={`side-panel ${sideOpen ? 'open' : ''}`} aria-hidden={!sideOpen}>
        <button className="side-close" onClick={() => setSideOpen(false)} aria-label="close">✕</button>
        <div className="side-inner">
          <h3>Where to Follow me</h3>
          <div className="divider" />
          <nav className="follow-list">
            <a id="tiktok" href="https://www.tiktok.com/@phillybanana" target="_blank" rel="noopener"><i className="fab fa-tiktok" /> TikTok</a>
            <a id="patreon" href="https://www.patreon.com/Phillybanana" target="_blank" rel="noopener"><i className="fab fa-patreon" /> Patreon</a>
            <a id="you" href="https://www.youtube.com/@Philly.Banana?si=G_nwdKmiO-lrYHKY" target="_blank" rel="noopener"><i className="fab fa-youtube" /> YouTube</a>
            <a id="insta" href="https://www.instagram.com/philly.banana" target="_blank" rel="noopener"><i className="fab fa-instagram" /> Instagram</a>
            <a id="tree" href="https://linktr.ee/phillybanana" target="_blank" rel="noopener"><i className="fas fa-link" /> Linktree</a>
            <a id="shirt" href="https://www.redbubble.com/people/Philly-Banana/shop" target="_blank" rel="noopener"><i className="fa-solid fa-shirt" /> Buy my merch</a>
          </nav>

          <div className="divider" />
          <a id="plug" className="credit" href="https://youtube.com/@ricksahuman/" target="_blank" rel="noopener">Website by Rick's a Human</a>
        </div>
      </aside>

      <main className="page">
        {/*up*/}
        <section className="section up" onClick={openTikTok} role="link" aria-label="Open TikTok">
          <div className="bg-image" style={{ backgroundImage: 'url(/phillybanana.png)' }} />

          {/*banana title*/}
          <div className="up-content">
            {/*clickable audio button*/}
            <img
              className="banana-gif"
              src="/banana.gif"
              alt="Banana"
              onClick={(e) => {
                e.stopPropagation() //make sure slicking on the gif doesnt open tiktok like the image behind it
                playAudio()
              }}
            />
            <h1 className="brand">Philly 🅱️anana</h1>
          </div>
        </section>

        {/*middle*/}
        <section className="section middle">
          <div className="center-modal">
            <img src="/prophilly.png" alt="Philly" className="pro-photo" />
            <div className="modal-content">
              <h2>Hi, I'm Philly.</h2>
              <p>Welcome to my portfolio! I'm a comedian and a writer with the heart of a rapper! Come peel the lyrics off of my music, because the internet is bananas.</p>
              <div className="arrow-row">
                <button
                  className={`arrow-btn ${arrowSliding ? 'sliding' : ''}`}
                  onClick={openTikTokAfterSlide}
                  aria-label="visit tiktok"
                >
                  <span className="thin-arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/*down*/}
        <section className="section down">
          <div className="down-gradient" />

          {/*vinyl*/}
          <div className="vinyl-area">
            <img
              src="/vinyl.gif"
              alt="vinyl"
              className="vinyl-gif pulse"
              onClick={() => setShowAlbumModal(true)}
            />
          </div>

          {/*album modal*/}
          {showAlbumModal && (
            <div className="overlay" onClick={() => setShowAlbumModal(false)}>
              <div className="album-modal" onClick={(e) => e.stopPropagation()}>
                <h3>Check Out My Newest Cover Album!</h3>
                <div className="tracks">
                  <a href="hhttps://www.tiktok.com/@phillybanana/video/7533677722502057230" target="_blank" rel="noopener">Born To Be Wild</a>
                  <a href="https://www.tiktok.com/@phillybanana/video/7526915541441793293?lang=en3" target="_blank" rel="noopener">Disturbed</a>
                  <a href="https://www.tiktok.com/@phillybanana/video/7529894632088440077?lang=en3" target="_blank" rel="noopener">Hail To The King</a>
                  <a href="https://www.tiktok.com/@phillybanana/video/7524689438832643341" target="_blank" rel="noopener">I Love Rock & Roll</a>
                  <a href="https://www.tiktok.com/@phillybanana" target="_blank" rel="noopener">and more... listen now!</a>
                </div>
              </div>
            </div>
          )}

          {/*assortment*/}
          <div className="assortment-area">
            <img
              src="/assortment.png"
              alt="assortment"
              className="assortment"
              onClick={() => setShowPhotoModal(true)}
            />
          </div>

          {/*photo pop up at thee end*/}
          {showPhotoModal && (
            <div className="overlay" onClick={() => setShowPhotoModal(false)}>
              <div className="photo-modal" onClick={(e) => e.stopPropagation()}>
                <img src="/explanation.png" alt="explanation" />
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  )
}