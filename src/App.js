import React, { Component } from 'react';
import SVGAutobot from './SVGAutobot';
import styles from './App.css';
import Icon from 'react-icons-kit'
import { ic_add_a_photo } from 'react-icons-kit/md/ic_add_a_photo'
import { lock } from 'react-icons-kit/fa/lock'
import LetterShuffle from './LetterShuffle/LetterShuffle'
import ReactAnime from './Anime/ReactAnime'
// import { rocket } from 'react-icons-kit/entypo/rocket'

class App extends Component {
  render() {
    return (
      <div className={styles.app}>

        <header className={styles.header}>

          <div className={styles.logoContainer}>
            <SVGAutobot size={40} />
            {/* <Icon icon={rocket} className={styles.logoImg}/> */}
            {/* <LogoSVG fill={'#00beff'} className={styles.logoImg}/> */}
          </div>

          <div className={styles.topNav}>
            <h2 className={styles.title}>Welcome to React</h2>
          </div>

        </header>

        <div className={styles.middle}>

          <div className={styles.sideMenu}>
            <div><strong>TOOLS</strong><a href="#" className={styles.menuToggle}>▶</a></div>

            <div className={styles.tools}>
              <div><a className={styles.tool}>
                <Icon icon={ic_add_a_photo}/>
              </a></div>
              <div><a className={styles.tool}>
                <Icon icon={lock}/>
              </a></div>
              <div>
                <a className={styles.tool}>
                  <Icon icon={lock}/>
                  lock
                </a></div>
              <div><a className={styles.tool}>
                <Icon icon={lock}/>
              </a></div>
              <div><a className={styles.tool}>
                <Icon icon={lock}/>
              </a></div>
              <div><a className={styles.tool}>
                <Icon icon={lock}/>
              </a></div>
            </div>
          </div>

          <div className={styles.main}>
            <div className={styles.mainTop}>
              <LetterShuffle font={"Wingdings"} />
            </div>
            <div className={styles.mainMiddle}>
              <ReactAnime />
            </div>
            <div className={styles.mainBottom}>
              <LetterShuffle font={"Orbitron"} />
              <LetterShuffle font={"Source Code Pro"} />
            </div>
          </div>
        </div>

        <footer className={styles.footer}>
          footer
        </footer>

      </div>
    );
  }
}

export default App;
