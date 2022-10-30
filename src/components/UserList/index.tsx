import { Container, Role, User, Avatar } from './styles'

interface UserProps {
  nickname: string;
  isBot?: boolean
  isUser?: boolean
}

const UserRow: React.FC<UserProps> = ({
  nickname,
  isBot,
  isUser
}) => {
  return(
    <User>
      <Avatar className={isBot ? 'bot' : '' } />
      <strong>{nickname}</strong>
      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
     <Role>B.O.T. - 1</Role>
     <UserRow nickname="Dank Memer" isBot/>

     <Role>THE MEMBERS - 2</Role>
     <UserRow nickname="LO4D.com" />
     <UserRow nickname="assley" />

    </Container>
  )
};

export default UserList;