import './index.scss';
import LogoS from '../../../../assets/images/hoho.png';

const Logo = () => {
   
    return (
      <div className="logo-container">
        <img
          className="solid-logo"
          src={LogoS}
          alt="JavaScript,  Developer"
        />
      </div>
    )
  }
  
  export default Logo