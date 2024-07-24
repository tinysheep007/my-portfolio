// src/app/components/Experience.js
export default function Experience() {
    const experiences = [
      {
        title: 'Research Assistant',
        company: 'Rutgers Cancer Institute of New Jersey',
        period: 'Sep 2023 – May 2024',
        description: `
          - Developed machine learning models and performed data analysis using Python and R.
          - Implemented machine learning algorithms on Chromosome fragment matrices, including random forest, Non-negative Matrix Factorization, hierarchical clustering, and visualizations in Python with numpy, pandas, matplotlib, and sklearn.
          - Analyzed tissue origin by examining gene expression patterns within cell-free DNA using regression and correlation techniques
          - Created 5 Circos graphs to visualize DNA amplification/deletion in ovarian cancer studies using the pyCirclize library
        `,
      },
      {
        title: 'Support Specialist',
        company: 'Rutgers Digital Classroom Services',
        period: 'Sep 2022 – Dec 2022',
        description: `
          - Managed equipment functionality and replacement across over 70 classrooms, maintaining item logs
          - Assisted faculty with in-class technologies (podiums, projectors, and more), collaborating with technical teams to resolve hardware/software issues and reducing technology failure frequency by 30\% through early debugging
        `,
      },
      {
        title: 'Full Stack Developer Intern',
        company: 'Revolutionary Integration Group Inc.',
        period: 'May 2022 – Sep 2022',
        description: `
          - Built a React web application to assess Python's facial recognition libraries, such as OpenCV and dlib, enabling user photo uploads for similarity comparisons
          - Tested various third-party facial comparison APIs to achieve accuracy above 70\% for similar images
          - Designed a React Native mobile app for Venue Safety using Expo packages, designing UI with bubble.io
          - Led a team of 7 interns to integrate backend facial comparison APIs with frontend applications using Amazon Web Services (AWS) EC2 instances
        `,
      },
      // Add more experiences as needed
    ];
  
    return (
      <section id="experience" className="container mx-auto py-10 my-4 px-4 md:px-10">
        <h2 className="text-3xl font-bold mb-4">Experience</h2>
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">{experience.title}</h3>
              <p className="text-gray-700 mb-1">{experience.company}</p>
              <p className="text-gray-600 mb-2">{experience.period}</p>
              <p className="text-gray-700 whitespace-pre-line">{experience.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  