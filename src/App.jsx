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
        <video width="500" autoPlay loop muted playsInline className="radius">
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
      <img src={`${BASE_URL}images/img1.webp`} alt="" className="img1 radius" />
      <img src={`${BASE_URL}images/img2.webp`} alt="" className="img2 radius" />
      <img src={`${BASE_URL}images/img3.webp`} alt="" className="img3 radius" />
    </div>
  )
}

function Section5() {
  return (
    <div id="section5">
      <h2 className="heading">Top Picks</h2>
      <div className="product-section">
        <div className="product">
          <img src={`${BASE_URL}images/blue.webp`} alt="" />
          <div className="name">Audira Elite</div>
          <div className="price">$14,999</div>
         <a href="#" className="btn btnn radius">Buy Now</a>
        </div>
        <div className="product">
          <img src={`${BASE_URL}images/black.webp`} alt="" />
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
          <img src={`${BASE_URL}images/brown.webp`} alt="" id='head' />
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
      <img src={`${BASE_URL}images/img4.webp`} className="radius" alt="" />
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
        <a href=""><img src={`${BASE_URL}images/fb.webp`} alt="" /></a>
        <a href=""><img src={`${BASE_URL}images/insta.webp`} alt="" /></a>
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    const mm = gsap.matchMedia()

    // ───────────── Desktop (≥ 991px): unchanged animation ─────────────
    mm.add('(min-width: 991px)', () => {
      const smoother = ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 4,
        effects: true,
      })

      const isShortHeight = window.screen.height < 1050

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

      return () => smoother.kill()
    })

      // ───────────── Phones & tablets (≤ 990px) ─────────────
      // No ScrollSmoother here (native touch scrolling feels better and keeps
      // layout simple). The headphone is placed from the REAL position of each
      // section, so it follows the page even when text wraps differently.
      mm.add('(max-width: 990px)', () => {
        const main = document.querySelector('#main')
        const hp = document.querySelector('#headphone')
        if (!main || !hp) return

        const vw = () => document.documentElement.clientWidth / 100
        const vh = () => window.innerHeight / 100
        const topIn = (el) => {
          let y = 0
          while (el && el !== main) { y += el.offsetTop; el = el.offsetParent }
          return y
        }
        const leftIn = (el) => {
          let x = 0
          while (el && el !== main) { x += el.offsetLeft; el = el.offsetParent }
          return x
        }
        const q = (s) => main.querySelector(s)

        // Where the headphone rests in each section (x = offset from centre).
        const stops = [
          // 0 · hero: above the title
          () => {
            const w = Math.min(62 * vw(), 38 * vh(), 420)
            return { x: 0, y: Math.max(76, 13 * vh()), width: w, rotate: 0 }
          },
          // 1 · True Clarity: in the gap above the title
          () => {
            const w = Math.min(50 * vw(), 360)
            return { x: 12 * vw(), y: topIn(q('#section2')) + 3 * vw(), width: w, rotate: 25 }
          },
          // 2 · Masterbeat: tucked over the video's bottom-right
          () => {
            const v = q('#section3 video')
            const w = Math.min(42 * vw(), 300)
            return { x: Math.min(24 * vw(), 220), y: topIn(v) + v.offsetHeight - w * 0.55, width: w, rotate: 35 }
          },
          // 3 · Gallery: centre of the photo collage
          () => {
            const s = q('#section4')
            const w = Math.min(58 * vw(), 440)
            return { x: 0, y: topIn(s) + s.offsetHeight / 2 - w / 2, width: w, rotate: 0 }
          },
          // 4 · Top Picks: lands in the empty "Audira Plus" slot
          () => {
            const cell = q('#section5 .product:nth-child(3)')
            const name = cell.querySelector('.name')
            const w = Math.min(cell.offsetWidth * 0.92, 300)
            const cx = leftIn(cell) + cell.offsetWidth / 2 - main.offsetWidth / 2
            return { x: cx, y: topIn(name) - 14 - w, width: w, rotate: 0 }
          },
          // 5 · Pure Escape: on the corner of the photo
          () => {
            const img = q('#section6 img')
            const w = Math.min(32 * vw(), 220)
            return { x: Math.min(24 * vw(), 200), y: topIn(img) - w * 0.3, width: w, rotate: 90 }
          },
        ]
        const anchors = [null, '#section2', '#section3 video', '#section4', '#section5 .product:nth-child(3)', '#section6 img']
        const ends = [null, 'top 40%', 'top 40%', 'top 40%', 'top 45%', 'top 55%']

        gsap.set(hp, { xPercent: -50 })
        for (let i = 1; i < stops.length; i++) {
          gsap.fromTo(
            hp,
            {
              x: () => stops[i - 1]().x,
              y: () => stops[i - 1]().y,
              width: () => stops[i - 1]().width,
              rotate: () => stops[i - 1]().rotate,
            },
            {
              x: () => stops[i]().x,
              y: () => stops[i]().y,
              width: () => stops[i]().width,
              rotate: () => stops[i]().rotate,
              ease: 'none',
              immediateRender: i === 1,
              scrollTrigger: {
                trigger: anchors[i],
                start: 'top bottom',
                end: ends[i],
                scrub: 0.6,
                invalidateOnRefresh: true,
              },
            },
          )
        }

        gsap.from('#section3 .heading', {
          scrollTrigger: { trigger: '#section3', start: 'top 85%', end: 'top 45%', scrub: true },
          y: 60, opacity: 0, ease: 'power1.out',
        })
        gsap.from('#section4 img', {
          scrollTrigger: { trigger: '#section4', start: 'top 80%', end: 'top 30%', scrub: true },
          y: 70, opacity: 0, stagger: 0.15, ease: 'power1.out',
        })
        gsap.from('#section6 .content-wrapper', {
          scrollTrigger: { trigger: '#section6', start: 'top 75%', end: 'top 40%', scrub: true },
          y: 40, opacity: 0, ease: 'power1.out',
        })

        const split = SplitText.create('#section1 .heading', { type: 'chars, words, lines', mask: 'lines' })
        gsap.from(split.chars, {
          yPercent: () => gsap.utils.random(-100, 100),
          rotation: () => gsap.utils.random(-30, 30),
          autoAlpha: 0,
          ease: 'back.out(1.5)',
          stagger: { amount: 0.5, from: 'random' },
          duration: 1.5,
        })
        gsap.from(hp, { opacity: 0, duration: 1, delay: 0.8, ease: 'power1.inOut' })
      })

    // Re-measure once images / fonts have their real size.
    const refresh = gsap.delayedCall(0.15, () => ScrollTrigger.refresh()).pause()
    const kick = () => refresh.restart(true)
    const imgs = [...document.images]
    imgs.forEach((im) => { if (!im.complete) im.addEventListener('load', kick) })
    window.addEventListener('load', kick)
    document.fonts?.ready.then(kick)

    return () => {
      imgs.forEach((im) => im.removeEventListener('load', kick))
      window.removeEventListener('load', kick)
      refresh.kill()
      mm.revert()
    }
  }, [])

  return (
    <>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div id="main" className="w-full">
            <img src={`${BASE_URL}images/green.webp`} alt="" id="headphone" />
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
