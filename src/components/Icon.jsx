// Ícono del sprite de IconSprite.jsx: <Icon name="arrow" /> usa #icon-arrow.
// Es decorativo (aria-hidden); el texto accesible lo pone el elemento que lo contiene.
const Icon = ({ name, className = '' }) => (
  <svg className={`icon${className ? ` ${className}` : ''}`} aria-hidden="true">
    <use href={`#icon-${name}`} />
  </svg>
);

export default Icon;
