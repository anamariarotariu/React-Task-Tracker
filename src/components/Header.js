import PropType from 'prop-types';
import Button from './Button';
export const Header = ({ title }) => {
  const onClick = () => { };
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick}></Button>
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};
Header.propsType = {
  title: PropType.string.isRequired,
};
