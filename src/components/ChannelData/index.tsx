import { useRef, useEffect } from 'react'
import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles'

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(()=> {
    const div = messagesRef.current;
    if(div) {
      div.scrollTop = div.scrollHeight;
    }
  },[messagesRef])

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(1).keys()).map((n)=>(
          <ChannelMessage 
          key={n}
          author='LO4D.com' 
          date='30/10/2022'
          content="hello"
        />
        ))}

        {Array.from(Array(1).keys()).map((n)=>(
          <ChannelMessage 
          key={n}
          author='assley' 
          date='30/10/2022'
          content="hello"
        />
        ))}
      
        <ChannelMessage 
          author='LO4D.com' 
          date='30/10/2022'
          hasMention={true}
          content={
            <>
              <Mention>
                @everyone
              </Mention>
              Welcome to the game center!
            </> 
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder='Message #welcome'/>
        <InputIcon />
      </InputWrapper>
    </Container>
  )
};

export default ChannelData;