const skills = [
  // Languages
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'SQL',
    competency: 5,
    category: ['Languages', 'Databases', 'Data Engineering'],
  },
  {
    title: 'Scala',
    competency: 4,
    category: ['Languages', 'Data Engineering'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Typescript',
    competency: 3,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'C',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'GraphQL',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'gRPC',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  // Web Development
  {
    title: 'React',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Flask',
    competency: 4,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'FastAPI',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Spring Boot',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Node.JS',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  // Data Engineering
  {
    title: 'Spark',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering'],
  },
  {
    title: 'Airflow',
    competency: 5,
    category: ['Data Engineering', 'Tools'],
  },
  {
    title: 'Kafka',
    competency: 4,
    category: ['Data Engineering', 'Tools'],
  },
  {
    title: 'Hadoop',
    competency: 4,
    category: ['Data Engineering', 'Tools'],
  },
  {
    title: 'Hive',
    competency: 3,
    category: ['Data Engineering', 'Tools'],
  },
  {
    title: 'Oozie',
    competency: 3,
    category: ['Data Engineering', 'Tools'],
  },
  {
    title: 'dbt',
    competency: 3,
    category: ['Data Engineering', 'Tools'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Kubernetes',
    competency: 4,
    category: ['Tools', 'Data Engineering'],
  },
  // Databases
  {
    title: 'PostgreSQL',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'MySQL',
    competency: 4,
    category: ['Databases'],
  },
  {
    title: 'MongoDB',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Redis',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Snowflake',
    competency: 3,
    category: ['Databases', 'Data Engineering'],
  },
  {
    title: 'ElasticSearch',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'DynamoDB',
    competency: 4,
    category: ['Databases', 'Tools'],
  },
  {
    title: 'HBase',
    competency: 3,
    category: ['Databases', 'Data Engineering'],
  },
  // Cloud
  {
    title: 'AWS',
    competency: 4,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'AWS Lambda',
    competency: 4,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'GCP',
    competency: 3,
    category: ['Tools', 'Web Development'],
  },
  // Python / ML
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Numpy',
    competency: 4,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 3,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  // Tools / BI
  {
    title: 'Git',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Grafana',
    competency: 4,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Tableau',
    competency: 3,
    category: ['Tools', 'Data Science'],
  },
  {
    title: 'PowerBI',
    competency: 3,
    category: ['Tools', 'Data Science'],
  },
  {
    title: 'Data Visualization',
    competency: 4,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'Data Mining',
    competency: 4,
    category: ['ML Engineering'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
