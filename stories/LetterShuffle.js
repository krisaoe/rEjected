import React, { Component } from 'react'
import random from 'lodash/random'
import sampleSize from 'lodash/sampleSize'
import FlipMove from 'react-flip-move'
import styles from './LetterShuffle.css'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('')

function getSubsetOfAlphabet() {
  const numToPick = random(1, 35)
  return sampleSize(alphabet, numToPick).sort()
}

class LetterShuffle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      letters: getSubsetOfAlphabet(),
    }
  }

  componentWillMount() {
    this.interval = window.setInterval(() => {
      this.setState({
        letters: getSubsetOfAlphabet(),
      })
    }, 1500)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval)
  }

  onStart({entering, leaving}, node) {
    if (entering) {
      node.classList.add(styles.enter);
    } else if (leaving) {
      node.classList.add(styles.leave);
    } else {
      node.classList.remove(styles.enter, styles.leave);
    }
  }

  renderLetters() {
    return this.state.letters.map(letter => (
      <span key={letter} style={{ display: 'inline-block', fontFamily: this.props.font }}>
        {letter}
      </span>
    ))
  }

  render() {
    const animations = {
      enterAnimation: {
        from: {
          transform: 'translateY(-100px) rotate(320deg)',
          opacity: 0,
        },
        to: {
          transform: 'translateY(0) rotate(0)',
          opacity: 1,
        },
      },
      leaveAnimation: {
        from: {
          transform: 'translateY(0)',
          opacity: 1,
        },
        to: {
          transform: 'translateY(100px) rotate(-400deg)',
          opacity: 0,
        },
      },
    }

    return (
      <div className={styles.letterShuffle}>
        <FlipMove {...animations} onStart={this.onStart}>
          {this.renderLetters()}
        </FlipMove>
      </div>
    )
  }
}

export default LetterShuffle
