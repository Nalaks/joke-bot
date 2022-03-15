import styles from './App.module.css';
import { getJoke } from './utils/api';
import { useState, useEffect } from 'react';
import Button from './components/Button';

const App = () => {
  const [joke, setJoke] = useState('');
  const [delay, setDelay] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const handleJoke = async () => {
    setDelay(false);
    const data = await getJoke();
    setJoke(data);
    setDisabled(true);
    tellJoke(data.setup);
    setTimeout(() => {
      setDelay(true);
      setDisabled(false);
      tellJoke(data.delivery);
    }, 4000);
  };
  const handleKeyPress = (e) => {
    if (e.key === 'j') {
      handleJoke();
    }
  };

  const tellJoke = (text) => {
    let synth = window.speechSynthesis;
    let setup = new SpeechSynthesisUtterance(text);
    setup.lang = 'en-US';
    let voices = synth.getVoices();
    setup.voice = voices[0];
    synth.speak(setup);
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    <div className={styles.container}>
      <h1>Random Joke Generator Voice Bot</h1>
      <a href='https://www.animatedimages.org/cat-robots-118.htm'>
        <img
          src='https://www.animatedimages.org/data/media/118/animated-robot-image-0023.gif'
          border='0'
          alt='animated-robot'
        />
      </a>
      <div className={styles.container}>
        {joke ? (
          <div>
            <h2>{joke.setup}</h2>
            <h2>{delay ? joke.delivery : ''}</h2>
          </div>
        ) : (
          <></>
        )}
        {joke ? (
          <Button
            handleEvent={handleJoke}
            disabled={disabled}
            text={'Get Another Joke'}
          />
        ) : (
          <Button
            handleEvent={handleJoke}
            disabled={disabled}
            text={'Get Joke'}
          />
        )}
      </div>
    </div>
  );
};

export default App;
