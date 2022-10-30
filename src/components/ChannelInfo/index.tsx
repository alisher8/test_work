import { Container, HashtagIcon, Title, Separator, Description } from './styles'

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />
      <Title>welcome</Title>
      <Separator />
      <Description>This channel is for fun</Description>
    </Container>
  )
};

export default ChannelInfo;