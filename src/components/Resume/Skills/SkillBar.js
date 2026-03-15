import React from 'react';
import PropTypes from 'prop-types';

const SkillBar = ({ data, categories }) => {
  const { category, competency, title } = data;

  const color = categories
    .filter((cat) => category.includes(cat.name))
    .map((cat) => cat.color)[0];

  const fillWidth = `${Math.min(100, Math.max((competency / 5.0) * 100.0, 0))}%`;

  return (
    <div className="skillbar-modern">
      <div className="skillbar-modern__header">
        <span className="skillbar-modern__label">{title}</span>
        <span className="skillbar-modern__percent">{competency} / 5</span>
      </div>
      <div className="skillbar-modern__track">
        <div
          className="skillbar-modern__fill"
          style={{ width: fillWidth, background: color }}
        />
      </div>
    </div>
  );
};

SkillBar.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    competency: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
  })),
};

SkillBar.defaultProps = {
  categories: [],
};

export default SkillBar;
