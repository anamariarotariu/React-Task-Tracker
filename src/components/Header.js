import PropType from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom'
export const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();
  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}></Button>}
    </header>
  );
};

Header.defaultProps = {
  title: 'Task Tracker',
};
Header.propsType = {
  title: PropType.string.isRequired,
};
