import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <div className="about-container">
      <h4 className='version-number'>Version 1.0.0</h4>
      <Link to="/"> Go Back</Link>
    </div>
  );
};
export default About;
