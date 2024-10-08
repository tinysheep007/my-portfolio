import Image from 'next/image';

export default function Skills() {
  return (
    <section id="skills" className="container mx-auto py-10 my-4 px-4 md:px-10">
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
        <div className="grid grid-cols-3 gap-4 mt-6 md:mt-0 md:mr-16 md:order-1 md:ml-16">
          {[
            { src: '/images/python.svg', alt: 'Python' },
            { src: '/images/java.png', alt: 'Java' },
            { src: '/images/js.png', alt: 'JavaScript' },
            { src: '/images/sql.png', alt: 'SQL' },
            { src: '/images/nodejs.png', alt: 'Node.js' },
            { src: '/images/react.png', alt: 'React.js' },
            { src: '/images/github.png', alt: 'GitHub' },
            { src: '/images/postman.png', alt: 'Postman' },
            { src: '/images/vscode.png', alt: 'VSCode' },
          ].map((image, index) => (
            <div key={index} className="transform transition duration-300 hover:scale-110">
              <Image src={image.src} alt={image.alt} width={75} height={75} className="max-w-full h-auto" />
            </div>
          ))}
        </div>
        <div className="md:order-2 md:flex-1">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-gray-700">
              <span className="font-bold">Languages/Frameworks:</span> Python, Java, JavaScript, Node.js, SQL, HTML/CSS, React, R
            </li>
            <li className="text-gray-700">
              <span className="font-bold">Developer Tools:</span> Git, GitHub, VS Code, Postman, Figma
            </li>
            <li className="text-gray-700">
              <span className="font-bold">Certifications:</span> IBM Data Science Certificate, IBM Full Stack Developer Certificate
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
