import Image from 'next/image';
import HeroImage from '@/public/hero-image.png'; // Import your static image
import './globals.css'


export default function Home() {
  return (
    <main className="home-page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-content">
          <span className={`hero-kicker`}>Your go-to platform for 3D printing files</span>
          <h1 id="hero-title" className={`hero-title`}>Discover what&apos;s possible with 3D printing</h1>
          <p className={`hero-description`}>Join our community of creators and explore a vast library of user-submitted models.</p>
          <button
              className={`px-6 py-3 text-black transition duration-100 bg-white border-2 border-black hover:bg-black hover:text-white font-semibold `}>
          Browse models
          </button>
        </div>
        <div className="hero-media">
          <Image
            src={HeroImage}
            alt="A 3D printed model"
            priority
            sizes="(max-width: 767px) 100vw, 50vw"
          />
        </div>
      </section>
    </main>
  )
}
