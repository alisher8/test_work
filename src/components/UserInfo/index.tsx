import { 
  Container, 
  Profile, 
  Avatar,
  UserData, 
  Icons,
  MicIcon,
  HeadphoneIcon,
  SettingsIcon
   } from './styles'

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>
            LO4D.com
          </strong>
          <span>
            #3212
          </span>
        </UserData>
      </Profile>
      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  )
};

export default UserInfo;