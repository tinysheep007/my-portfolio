// src/app/projectData.js
const projectData = [
    {
      title: 'Year in Mood (Emotions Tracker)',
      description: `
        Created a full-stack web app enabling high school students to explore over 300 colleges, allowing searches based on grades, food quality, safety, and reputation.
        Implemented search, save, comment, and college matching features for user browsing.
        Built an admin system to monitor user accounts, databases, approve new college requests, and post announcements.
      `,
      techStack: [
        { name: 'React', color: 'blue' },
        { name: 'Node.js', color: 'green' },
        { name: 'Express', color: 'orange' },
        { name: 'MySQL', color: 'gray' }
      ],
      images: [
        '/images/project-year-in-mood/1.png',
        '/images/project-year-in-mood/2.png',
        '/images/project-year-in-mood/3.png',
        '/images/project-year-in-mood/4.png',
      ],
      link: "https://github.com/tinysheep007/year-in-mood"
    },
    {
      title: 'College Recommender',
      description: `
          Deployed a full-stack web app for tracking emotions and mental health on an interactive calendar interface.
          Incorporated features to color-code dates by emotions, log journals, visualize mood distributions with various graphs, and analyze word frequency using word clouds.
      `,
      techStack: [
        { name: 'React', color: 'blue' },
        { name: 'Node.js', color: 'green' },
        { name: 'Express', color: 'orange' },
        { name: 'MySQL', color: 'gray' }
      ],
      images: [
        '/images/project-college-recomennder/1.png',
        '/images/project-college-recomennder/2.png',
        '/images/project-college-recomennder/3.png',
        '/images/project-college-recomennder/4.png',
      ],
      link: "https://github.com/tinysheep007/college-recommender"
    },
    {
      title: 'Numdle',
      description: `
          The Numdle is a 4 digit number guessing game(similar to Wordle). Based on user's previous geuses, the game will return users hints about the positioning of each digit. Each digit will only appear once.
      `,
      techStack: [
        { name: 'React Native', color: 'lightBlue' },
        { name: 'Expo', color:"orange"},
        { name: 'NativeWind', color:"gray"}
      ],
      images: [
        '/images/project-numdle/5.png',
        '/images/project-numdle/6.png',
        '/images/project-numdle/3.png',
        '/images/project-numdle/4.png',
      ],
      link: "https://github.com/tinysheep007/numdle"
    }
    // Add more projects as needed
  ];
  
  export default projectData;
  