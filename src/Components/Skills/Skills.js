import './Skills.css';

function Skills() {

  const codingSkills=[
    'HTML',
    'Javascript',
    'Typescript',
    'Python',
    'CSS',
    'Lua',
    'React',
    'Gamemaker GML',
    'npm',
    'C',
    'C++',
    'OPP',
    'GatsbyJS',
    'GraphQL',
  ];

  const miscSkills=[
    'Blender',
    'Photoshop',
    'Game Testing',
    'Organization',
    'In-store support',
    'High-energy attitude',
    'Computer Skills',
    'Communication',
    'Spanish',
    'Urdu',
    'Weightlifting',
  ]

  return (
    <div className='skills'>
      <div className='skills-container'>
        <header className='skills-title'>Some of my Skills</header>
        <header className='skills-subtitle'>Coding</header>
        <ul className='skills-list'>
          {codingSkills.map((skill, index) => (
            <li className='skills-item' key={index}>{skill}</li>
          ))}
        </ul>
        <header className='skills-subtitle'>Miscellaneous</header>
        <ul className='skills-list'>
          {miscSkills.map((skill, index) => (
            <li className='skills-item' key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Skills;