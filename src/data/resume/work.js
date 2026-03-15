/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Walmart Inc',
    position: 'Data Engineer III',
    url: 'https://tech.walmart.com/',
    startDate: '2024-08-05',
    highlights: [
      'Automated report generation by developing a monthly Airflow DAG for MVP-1 and MVP-3 Reports, improving efficiency and reliability.',
      'Diagnosed and resolved a critical issue involving refund transactions changing Entity IDs. Led root cause analysis, code fixes, QA testing, and staged data loads, ensuring system stability and accuracy.',
      'Led critical platform upgrades (Airflow 12.5.0, Quantexa 2.7.6) across AML workstreams, coordinating cross-team dependencies and production rollouts, delivering zero-incident deployments.',
      'Raised data quality and test maturity by increasing Sonar coverage from 20% to 84%, adding DBT tests for international markets, and automating regression and sanity reporting.',
      'Improved pipeline reliability by enhancing CI/CD (Concord and looper jobs), refactoring inbound/outbound pipelines, and implementing dynamic SLA monitoring.',
      'Enabled scalable, compliant analytics for new geographies by owning transaction and panic-button data pipelines for GT, HN, NI, and SV, and designing extensible customer profiles.',
      'Optimized fraud workflows by delivering the Generational Entity Report, contributing fraud red flags, and supporting infrastructure efficiency improvements.',
    ],
  },
  {
    name: 'Institute of Cognitive Science, CU Boulder',
    position: 'Temporary Research Assistant',
    url: 'https://www.colorado.edu/ics/',
    startDate: '2024-06-10',
    endDate: '2024-08-03',
    highlights: [
      'Designed and developed a web application to assist veterans in job application preparation, integrating auto-transcription and answer evaluation for interview responses.',
      'Built the frontend using React, leveraged OpenAI Whisper for real-time transcription, and implemented Gemini Flash 1.5 for intelligent feedback on response quality.',
    ],
  },
  {
    name: 'Target Corporation',
    position: 'Data Engineer',
    url: 'https://corporate.target.com/',
    startDate: '2020-08-03',
    endDate: '2022-07-29',
    highlights: [
      'Led the Fixed Assets project by designing data models and developing optimized data pipelines using PySpark and Kafka, empowering the finance team to manage tax calculations in-house, resulting in $10M savings annually.',
      'Built a resource allocation web app using React and Spring Boot, improving allocation efficiency by 40%.',
      'Containerized microservices with Docker and deployed on Kubernetes for fault tolerance and scalability.',
      'Migrated sales data pipeline processing 700M+ records from Hive to Spark-Scala, saving 6 hours of runtime.',
      'Enhanced complex SQL queries and stored procedures for legacy data, improving server performance by 30%.',
      'Created Grafana dashboards for real-time monitoring of data pipelines with data quality checks and anomaly detection, resulting in a 50% decrease in SLA for issue resolution.',
    ],
  },
  {
    name: 'Arvind Internet',
    position: 'Software Engineer Intern',
    startDate: '2019-05-01',
    endDate: '2019-07-15',
    highlights: [
      'Designed and implemented a real-time notification feature for the Omuni.One app using Spring Boot, Firebase Messaging, and REST APIs, leading to a 25% improvement in vendor response times.',
      'Streamlined app signup time by implementing Google Sign-In with OAuth 2.0, improving user experience.',
    ],
  },
];

export default work;
