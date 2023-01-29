import './style.css'
import gitHubIcon from './gitHub-black.svg';

const BtnGitHUb = ({link}) => {
    return (
        <a href={link} target='_blank' rel='noreferrer' className="btn-outline">
        <img src={gitHubIcon} alt="Github repo" />
        Github repo
      </a>
    );
}
 
export default BtnGitHUb;