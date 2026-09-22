import Image from 'next/image';
import Link from 'next/link';
import HeroImage from '@/public/hero-image.png'; // Import your static image


export default function Home() {
  return (
    <main className="w-full px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <section className="mx-auto grid min-h-[calc(100vh-7rem)] w-full items-center gap-10 md:grid-cols-2 md:gap-16" aria-labelledby="hero-title">
        <div className="flex flex-col items-start gap-4">
          <span className="text-sm font-semibold leading-6 text-gray-600">Your go-to platform for 3D printing files</span>
          <h1 id="hero-title" className="m-0 max-w-xl text-[clamp(2rem,9vw,4rem)] leading-tight">Discover what&apos;s possible with 3D printing</h1>
          <p className="m-0 max-w-lg text-base leading-relaxed text-gray-600">Join our community of creators and explore a vast library of user-submitted models.</p>
          <Link href="/3d-models" className="border-2 border-black bg-white px-6 py-3 font-semibold text-black transition duration-100 hover:bg-black hover:text-white">
          Browse models
          </Link>
        </div>
        <div className="mx-auto w-full max-w-lg overflow-hidden rounded-lg md:max-w-none">
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
