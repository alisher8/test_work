import Logo from '../../assets/discord-logo.svg'
import pic1 from '../../assets/pic1.jpg'

import { Button } from './styles'


export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions
}) => {
  return(
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && <img src={Logo} alt="Discord Logo" />}
      {selected && <img src={pic1} alt="Channel Logo" />}
    </Button>
  )
};

export default ServerButton;