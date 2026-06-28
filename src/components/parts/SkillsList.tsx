import '../../styles/parts/skills-list.scss';

const skills = [
  { category: 'デザイン', tools: 'Figma / Canva' },
  { category: 'フロント', tools: 'HTML / CSS / Sass / JavaScript / jQuery / PHP' },
  { category: 'CMS', tools: 'WordPress' },
  { category: '運用', tools: 'Git / GitHub / VSCode' },
];

export default function SkillsList() {
  return (
    <div className="skills-list">
      <p className="skills-list__label">SKILLS</p>
      <ul className="skills-list__items">
        {skills.map((skill) => (
          <li key={skill.category} className="skills-list__row">
            <span className="skills-list__category">{skill.category}</span>
            <span className="skills-list__tools">{skill.tools}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
