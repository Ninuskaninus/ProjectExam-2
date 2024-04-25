import Arrow from "../../assets/icons/arrow_green.png";
import Logo from "../../assets/icons/logo.png";

const Icons = {
  Arrow: () => {
      return (
      <img src={Arrow} alt="Arrow icon" role="presentation" />
    );
  },
  Logo: () => {
    return (
      <img src={Logo} alt="Holidaze logo icon" role="presentation" />
    );
  },
}

export default Icons;