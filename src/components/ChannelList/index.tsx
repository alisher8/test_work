import ChannelButton from '../ChannelButton';
import { Container, Category, AddCategoryIcon, Separator } from './styles'

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>DOORBELL</span>
        <AddCategoryIcon />
      </Category>
      <ChannelButton channelName="welcome" />
      <Separator />
      <Category>
        <span>INFO</span>
        <AddCategoryIcon />
      </Category>
      <ChannelButton channelName="rules" />
      <ChannelButton channelName="hello-goodbye" />
      <ChannelButton channelName="announcements" />
      <ChannelButton channelName="portal" />
      <ChannelButton channelName="feedback" />
      <Separator />
      <Category>
        <span>LOUNGES</span>
        <AddCategoryIcon />
      </Category>
      <ChannelButton channelName="zone-1" />
      <ChannelButton channelName="zone-2" />
      <ChannelButton channelName="gamerz" />
      <ChannelButton channelName="school-help" />
      <ChannelButton channelName="sports" />
      <ChannelButton channelName="self-promo" />
      <ChannelButton channelName="squad-up" />
    </Container>
  )
};

export default ChannelList;