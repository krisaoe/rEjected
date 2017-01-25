import React from 'react'
import Anime from 'react-anime'
import styles from './ReactAnime.css'

const ReactAnime = () => (
  <Anime
    easing="easeOutElastic"
    loop={true}
    duration={1000}
    direction="alternate"
    loop={true}
    delay={(el, index) => index * 240}
    translateX='13rem'
    scale={[.75, .9]}
  >
    <div className={styles.blue}/>
    <div className={styles.green}/>
    <div className={styles.red}/>
  </Anime>
)
export default ReactAnime
