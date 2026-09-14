// app/about/page.tsx
import Image from 'next/image';
import AboutImage from '@/public/hero-about.png';
import { GoStack } from "react-icons/go";
import { TbWorld } from "react-icons/tb";
import { CiFlag1 } from "react-icons/ci";


export default function About() {
  return (
    <main className={`about-page `}>
        <section className="flex flex-col items-center justify-between gap-8 px-6 py-12 mx-auto md:flex-row w-full max-w-5xl" aria-labelledby="about-title">
            <div className="flex w-full justify-center md:w-1/2">
                <Image className="h-auto max-w-full" src={AboutImage} alt="A 3D printed model" />
            </div>
            <div className="flex flex-col justify-center text-left gap-8 px-9 py-12 mx-auto md:flex-col max-w-3xl md:w-1/2">
                <p className={`text-gray-600 uppercase tracking-wide text-sm `}>
                    About PrintForge
                </p>
                <h1 className={`text-3xl font-bold `}>Empowering makers worldwide</h1>
                <p className="text-md">
                    Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and professional designers to share and discover amazing STL files for 3D printing.
                </p>
                <p className="text-md">
                    Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring their ideas to life through 3D printing.
                </p>
            </div>
        </section>
        <section className="grid grid-cols-1 gap-4 px-6 py-8 mx-auto sm:grid-cols-3 md:flex-row w-full max-w-5xl" aria-label="PrintForge community statistics">
            <div className=" p-6 md:border-r-2 md:border-gray-300">
                <h2 className={`text-xl font-bold py-1 flex flex-row items-center gap-3`}><GoStack size={22} /> 100K+ Models</h2>
                <p className="mt-2 text-sm font-semibold tracking-wide text-gray-600">Access our vast library of community-created 3D models, from practical tools to artistic creations.</p>
            </div>
            <div className=" p-6 md:border-r-2 md:border-gray-300">
                <h2 className={`text-xl font-bold py-1 flex flex-row items-center gap-3 `}><TbWorld size={22} /> Active Community</h2>
                <p className="mt-2 text-sm font-semibold tracking-wide text-gray-600">Join thousands of makers who share tips, provide feedback, and collaborate on projects.</p>
            </div>
            <div className="p-6 ">
                <h2 className={`text-xl font-bold py-1 flex flex-row items-center gap-3`}><CiFlag1 size={22} /> Free to Use</h2>
                <p className="mt-2 text-sm font-semibold tracking-wide text-gray-600">Most models are free to download, with optional premium features for power users.</p>
            </div>
        </section>
        <section className="flex flex-col items-center justify-center text-left gap-8 px-9 py-12 mx-auto md:flex-col max-w-3xl">
                <h3 className={`text-3xl font-bold `}>
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