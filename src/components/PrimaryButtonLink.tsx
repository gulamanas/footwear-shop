import { Link } from 'react-router-dom';
import './PrimaryButtonLink.css';

interface PrimaryButtonLinkProps {
  title?: string;
  link: string;
}

const PrimaryButtonLink: React.FC<PrimaryButtonLinkProps> = ({ title, link }) => {
  return (
    <div className='primary-button'>
      <Link to={link}>
        {title}
      </Link>
    </div>
  )
}

export default PrimaryButtonLink