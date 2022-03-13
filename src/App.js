import { useEffect } from 'react';
import styles from './App.module.css';
import { getJokes } from './utils/api';

const App = () => {
  useEffect(() => {
    console.log(getJokes());
  }, []);

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
      <div className={styles.container}></div>
    </div>
  );
};

export default App;
