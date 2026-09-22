// app/about/page.tsx
import Image from 'next/image';
import AboutImage from '@/public/hero-about.png';
import { GoStack } from "react-icons/go";
import { TbWorld } from "react-icons/tb";
import { CiFlag1 } from "react-icons/ci";


export default function About() {
  return (
    <main className="w-full">
        <section className="mx-auto grid w-full max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 md:grid-cols-2 md:gap-12 lg:px-8" aria-labelledby="about-title">
            <div className="flex justify-center">
                <Image className="h-auto w-full max-w-lg" src={AboutImage} alt="A 3D printed model" />
            </div>
            <div className="flex max-w-2xl flex-col justify-center gap-6 text-left">
                <p className="text-sm uppercase tracking-wide text-gray-600">
                    About PrintForge
                </p>
                <h1 id="about-title" className="text-3xl font-bold sm:text-4xl">Empowering makers worldwide</h1>
                <p className="text-base leading-relaxed text-gray-700">
                    Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and professional designers to share and discover amazing STL files for 3D printing.
                </p>
                <p className="text-base leading-relaxed text-gray-700">
                    Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring their ideas to life through 3D printing.
                </p>
            </div>
        </section>
        <section className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8" aria-label="PrintForge community statistics">
            <div className="p-6 md:border-r-2 md:border-gray-300">
                <h2 className="flex flex-row items-center gap-3 py-1 text-xl font-bold"><GoStack size={22} /> 100K+ Models</h2>
                <p className="mt-2 text-sm font-semibold tracking-wide text-gray-600">Access our vast library of community-created 3D models, from practical tools to artistic creations.</p>
            </div>
            <div className="p-6 md:border-r-2 md:border-gray-300">
                <h2 className="flex flex-row items-center gap-3 py-1 text-xl font-bold"><TbWorld size={22} /> Active Community</h2>
                <p className="mt-2 text-sm font-semibold tracking-wide text-gray-600">Join thousands of makers who share tips, provide feedback, and collaborate on projects.</p>
            </div>
            <div className="p-6 ">
                <h2 className="flex flex-row items-center gap-3 py-1 text-xl font-bold"><CiFlag1 size={22} /> Free to Use</h2>
                <p className="mt-2 text-sm font-semibold tracking-wide text-gray-600">Most models are free to download, with optional premium features for power users.</p>
            </div>
        </section>
        <section className="mx-auto flex w-full max-w-3xl flex-col items-start justify-center gap-6 px-4 py-12 text-left sm:px-6 lg:px-8">
                <h3 className="text-3xl font-bold">
                    Our Vision
                </h3>
                <p>
                    At PrintForge, we believe that 3D printing is revolutionizing the way we create, prototype, and manufacture. Our platform serves as a bridge between designers and makers, enabling the sharing of knowledge and creativity that pushes the boundaries of what&apos;s possible with 3D printing.
                </p>
                <hr className="my-4 border-gray-300 w-40 align-center" />
                <p>
                    Whether you&apos;re a hobbyist looking for your next weekend project, an educator seeking teaching materials, or a professional designer wanting to share your creations, PrintForge provides the tools and community to support your journey in 3D printing.
                </p>
        </section>
    </main>
  );
}