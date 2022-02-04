import PropType from 'prop-types';
import Button from './Button';
export const Header = ({ title, onAdd, showAdd }) => {

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}></Button>
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};
Header.propsType = {
  title: PropType.string.isRequired,
};
