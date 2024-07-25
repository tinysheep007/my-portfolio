import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="container mx-auto py-10 px-4 md:px-10">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-gray-700 mb-4">
            I am currently a master&#39;s student at the University of Pennsylvania. I studied
            Computer Science and Data Science at Rutgers University for my undergraduate degree.
            My goal is to work on machine learning projects that can be utilized every day to make
            people&#39;s lives easier and more convenient.
          </p>
          <p className="text-gray-700">
            I am always open to discussing new ideas, projects, or opportunities. Feel free to reach out to me via the contact section below. You can view my resume <a href="/resume/Zihe_Zhang_SWE_resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">here</a>.
          </p>
        </div>
        <div className="flex justify-center">
          <Image src="/images/aboutPic.png" alt="About Photo Zihe Peter Zhang" width={400} height={400} className="rounded-lg max-w-full h-auto transform transition duration-300 hover:scale-110" />
        </div>
      </div>
    </section>
  );
}
