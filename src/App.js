import React from 'react';
import { mainArr } from './includes';
import ChatBot from 'react-simple-chatbot';

function App() {

  return (
    <div className="App">
      <ChatBot
        floating
        width={'500px'}
        steps={mainArr}
        hideSubmitButton
        headerTitle="ZeniBot"
        style={{height: '90%'}}
        placeholder="Clique em uma opção acima"
        footerStyle={{position: 'fixed', bottom: '0', width: '100%'}}
        botAvatar="https://cdn.discordapp.com/avatars/778334734476115978/f59d4d5d3f03e72d65f8d9d240a12ebb.webp?size=80"
      />
    </div>
  );
}

export default App;
