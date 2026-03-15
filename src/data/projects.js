const data = [
  {
    title: 'VetTrainNSF - Veteran Interview Trainer',
    link: 'https://github.com/rakeshy1116/VetTrainNSF',
    image: '/images/projects/document.png',
    date: '2024-07-17',
    desc:
      'Web application developed at the Institute of Cognitive Science to help veterans prepare for job interviews. '
      + 'Features real-time speech-to-text transcription via OpenAI Whisper, intelligent answer evaluation using Gemini Flash 1.5, '
      + 'and randomized sessions spanning 19 questions across 8 categories. Built with React and Python Flask.',
  },
  {
    title: 'BuffLink - CU Boulder Event Notifier',
    link: 'https://github.com/rakeshy1116/hackCU-BuffLink',
    image: '/images/projects/bufflink.png',
    date: '2024-03-02',
    desc:
      'Browser extension built at HackCU that delivers personalized campus event notifications to CU Boulder students. '
      + 'Uses DistilBERT and FAISS to identify relevant events with 75% confidence and sends calendar (.ics) invites via email. '
      + 'Events stored in AWS DynamoDB. Built with JavaScript, Python, Flask, and BeautifulSoup.',
  },
  {
    title: 'Gaanam - Full Stack Web Application',
    link: 'https://github.com/rakeshy1116/Gaanam',
    image: '/images/projects/gaanam.png',
    date: '2024-04-30',
    desc:
      'Full-stack web application developed for CSCI-5828 coursework at CU Boulder. '
      + 'Built with a React frontend and Python/Flask backend, with Cypress end-to-end testing. '
      + 'Deployed on AWS Amplify.',
  },
  {
    title: 'Spotify Analytics Application',
    image: '/images/projects/logo.png',
    date: '2023-09-01',
    desc:
      'Web application using Spotify APIs for personalized music analytics and recommendations. '
      + 'Frontend hosted on AWS Amplify, backend on EC2 with CI/CD via GitHub Actions. '
      + 'Metrics monitoring with Prometheus and Grafana, and backend processes decoupled using Amazon SQS.',
  },
  {
    title: 'Similar Document Retrieval Engine',
    link: 'https://github.com/rakeshy1116/DocumentRetrievalEngine',
    image: '/images/projects/document.png',
    date: '2022-11-30',
    desc:
      'React and Flask web application for similar document search using AWS S3 for storage and FAISS for optimized '
      + 'indexing and search relevance. Containerized and launched on AWS ECS with Docker for seamless scalability and management.',
  },
  {
    title: 'NITC Hostel Management System',
    link: 'https://github.com/rakeshy1116/Hostel-Management-System',
    image: '/images/projects/hostel.jpg',
    date: '2019-05-20',
    desc:
      'Designed and implemented a system that streamlines the process of room assignment in college hostels. '
      + 'Key functionalities encompassed Login Authentication, prioritized room allocation, and concurrent login '
      + 'capabilities.',
  },
  {
    title: 'Experimental Operating System',
    subtitle: 'Toy Operating System for understanding OS.',
    link: 'https://github.com/rakeshy1116/ExpOS',
    image: '/images/projects/logo.png',
    date: '2019-08-01',
    desc:
      'Implemented an experimental OS (ExpOS) which runs on the Experimental String Machine (XSM), '
      + 'architecture built internally by NITC. It efficiently handles Process Management, '
      + 'Memory Management, and System Calls.',
  },
  {
    title: 'Cat Detector',
    subtitle: 'A convolutional neural network to classify cats! (and dogs)',
    image: '/images/projects/catdetector.jpg',
    date: '2020-05-15',
    desc:
      'Trained a convolutional neural network to classify between ~80 cat breeds. '
      + 'Over 60,000 cats were classified before server bills made the project too expensive '
      + 'to continue hosting.',
  },
];

export default data;
