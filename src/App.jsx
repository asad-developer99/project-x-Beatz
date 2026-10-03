import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText)

const BASE_URL = import.meta.env.BASE_URL

function Navbar() {
  return (
    <header className="w-full">
      <nav>
        <span className="logo-text">Beatz</span>
        <a href="#" className="btn radius">Buy Now</a>
      </nav>
    </header>
  )
}

function Section1() {
  return (
    <div id="section1">
      <h1 className="heading">Modern Harmony</h1>
    </div>
  )
}

function Section2() {
  return (
    <div id="section2">
      <div className="content-wrapper">
        <h2 className="heading">True Clarity</h2>
        <p>
          Engineered for clarity, comfort, and immersive sound — Audira
          redefines your listening experience with style and performance
          in perfect harmony.
        </p>
        <a href="" className="btn radius">Buy Now</a>
      </div>
      <div className="feature-wrapper">
        <div className="feature-box radius">
          <div className="feature-name">Crystal-Clear Audio</div>
          <div className="feature-detail">
            Hear every detail with balanced bass and studio-quality mids
            and highs.
          </div>
        </div>
        <div className="feature-box radius">
          <div className="feature-name">All-Day Comfort</div>
          <div className="feature-detail">
            Lightweight build with plush ear cushions and ergonomic fit.
          </div>
        </div>
        <div className="feature-box radius">
          <div className="feature-name">40+ Hour Battery Life</div>
          <div className="feature-detail">
            Long-lasting performance, wherever you go.
          </div>
        </div>
      </div>
    </div>
  )
}

function Section3() {
  return (
    <div id="section3">
      <h2 className="heading">Masterbeat</h2>
      <div className="content-wrapper">
        <video width="500" height="auto" autoPlay loop muted className="radius">
          <source src={`${BASE_URL}images/video.mp4`} type="video/mp4" />
        </video>
        <div className="content">
          <p>
            Crafted for the modern audiophile, Audira headphones deliver
            sound so rich, it pulses through your senses. From crisp highs
            to deep, rolling bass—you don't just hear it, you feel it.
          </p>
          <p>
            Whether you're in focus mode or free flow, the precision-tuned
            audio adapts to your pace. With Masterbeat, music becomes your
            personal soundtrack—bold, immersive, unforgettable.
          </p>
        </div>
      </div>
    </div>
  )
}

function Section4() {
  return (
    <div id="section4">
      <img src={`${BASE_URL}images/img1.jpeg`} alt="" className="img1 radius" />
      <img src={`${BASE_URL}images/img2.jpeg`} alt="" className="img2 radius" />
      <img src={`${BASE_URL}images/img3.jpeg`} alt="" className="img3 radius" />
    </div>
  )
}

function Section5() {
  return (
    <div id="section5">
      <h2 className="heading">Top Picks</h2>
      <div className="product-section">
        <div className="product">
          <img src={`${BASE_URL}images/blue.png`} alt="" />
          <div className="name">Audira Elite</div>
          <div className="price">$14,999</div>
         <a href="#" className="btn btnn radius">Buy Now</a>
        </div>
        <div className="product">
          <img src={`${BASE_URL}images/black.png`} alt="" />
          <div className="name">Audira One</div>
          <div className="price">$4,499</div>
          <a href="#" className="btn btnn radius">Buy Now</a>
        </div>
        <div className="product">
          <div className="name">Audira Plus</div>
          <div className="price">$7,499</div>
          <a href="#" className="btn btnn radius">Buy Now</a>
        </div>
        <div className="product">
          <img src={`${BASE_URL}images/brown.png`} alt="" id='head' />
          <div className="name">Audira Max Pro</div>
          <div className="price">$11,499</div>
          <a href="#" className="btn btnn   radius">Buy Now</a>
        </div>
      </div>
    </div>
  )
}

function Section6() {
  return (
    <div id="section6" className="w-full">
      <img src={`${BASE_URL}images/img4.jpg`} className="radius" alt="" />
      <div className="content-wrapper">
        <h2 className="heading">Pure Escape</h2>
        <p>
          Step into a world where every note feels alive. Audira
          headphones are engineered to create a sound experience that
          surrounds you—deep, rich, and breathtaking.
        </p>
        <p>
          Whether you're working, relaxing, or moving, our design blends
          comfort and clarity for every lifestyle. You don't just listen —
          you feel the moment.
        </p>
      </div>
    </div>
  )
}
function Footer() {
  return (
    <footer className="w-full">
      <span className="logo-text">Beatz</span>
      <div className="social">
        <a href=""><img src={`${BASE_URL}images/fb.png`} alt="" /></a>
        <a href=""><img src={`${BASE_URL}images/insta.png`} alt="" /></a>
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 4,
      effects: true,
    })

    const isShortHeight = window.screen.height < 1050

    ScrollTrigger.matchMedia({
      '(min-width: 991px)': function () {
        gsap.to('#headphone', {
          scrollTrigger: {
            trigger: '#section2',
            start: 'top bottom',
            end: 'center center',
            scrub: true,
          },
          y: '85vh',
          x: '18vw',
          width: '32vw',
          rotate: 90,
          ease: 'power1.inOut',
          immediateRender: false,
        })

        gsap.to('#headphone', {
          scrollTrigger: {
            trigger: '#section3',
            start: 'top bottom',
            end: 'bottom bottom',
            scrub: true,
          },
          y: '218vh',
          x: '18vw',
          width: '30vw',
          rotate: 35,
          ease: 'power1.inOut',
          immediateRender: false,
        })

        gsap.to('#headphone', {
          scrollTrigger: {
            trigger: '#section4',
            start: 'top bottom',
            end: 'center center',
            scrub: true,
          },
          y: '308vh',
          x: '0',
          width: '42vw',
          rotate: 0,
          ease: 'power1.inOut',
          immediateRender: false,
        })

        gsap.to('#headphone', {
          scrollTrigger: {
            trigger: '#section5',
            start: 'top bottom',
            end: 'center bottom',
            scrub: true,
          },
          y: isShortHeight ? '360vh' : '344vh',
          width: '28vw',
          ease: 'power1.inOut',
          immediateRender: false,
        })

        gsap.to('#headphone', {
          scrollTrigger: {
            trigger: '#section5',
            start: 'center bottom',
            end: 'bottom bottom',
            scrub: true,
          },
          y: '480vh',
          x: '10vw',
          width: '299px',
          ease: 'power1.inOut',
          immediateRender: false,
        })
        gsap.to('#headphone', {
          scrollTrigger: {
            trigger: '#section6',
            start: 'center bottom',
            end: 'bottom bottom',
            scrub: true,
          },
          y: '650vh',
          x: '25vw',
          rotate: 90,
          width: '199px',
          ease: 'power1.inOut',
          immediateRender: false,
        })
    

        gsap.from('#section2 .content-wrapper', {
          scrollTrigger: {
            trigger: '#section2',
            start: '-50% bottom',
            end: 'center center',
            scrub: true,
          },
          y: '140%',
          ease: 'power1.inOut',
        })

        gsap.from('#section3 .heading', {
          scrollTrigger: {
            trigger: '#section3',
            start: 'top bottom',
            end: 'center bottom',
            scrub: true,
          },
          y: '140%',
          ease: 'power1.inOut',
        })

        gsap.from('#section4 img', {
          scrollTrigger: {
            trigger: '#section4',
            start: 'top bottom',
            end: 'center center',
            scrub: true,
          },
          width: 0,
          opacity: 0,
          ease: 'power1.inOut',
        })

        gsap.from('#section6 .content-wrapper', {
          scrollTrigger: {
            trigger: '#section6',
            start: 'top bottom',
            end: 'center center',
            scrub: true,
          },
          y: '40%',
          duration: 2,
          ease: 'power1.inOut',
        })

        const split = SplitText.create('#section1 .heading', {
          type: 'chars, words, lines',
          mask: 'lines',
        })

        gsap.from(split.chars, {
          yPercent: () => gsap.utils.random(-100, 100),
          rotation: () => gsap.utils.random(-30, 30),
          autoAlpha: 0,
          ease: 'back.out(1.5)',
          stagger: {
            amount: 0.5,
            from: 'random',
          },
          duration: 1.5,
        })

        gsap.from('#headphone', {
          opacity: 0,
          scale: 0,
          duration: 1,
          delay: 1,
          ease: 'power1.inOut',
        })
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
      const smoother = ScrollSmoother.get()
      if (smoother) smoother.kill()
    }
  }, [])

  return (
    <>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div id="main" className="w-full">
            <img src={`${BASE_URL}images/green.png`} alt="" id="headphone" />
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
