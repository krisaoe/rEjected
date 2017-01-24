import React, { Component } from 'react';
import random from 'lodash/random';
import sampleSize from 'lodash/sampleSize';
import FlipMove from 'react-flip-move';

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function getSubsetOfAlphabet() {
  const numToPick = random(1, 26);
  return sampleSize(alphabet, numToPick).sort();
}

class LetterDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: getSubsetOfAlphabet(),
    };
  }

  componentWillMount() {
    this.interval = window.setInterval(() => {
      this.setState({
        letters: getSubsetOfAlphabet(),
      });
    }, 2000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  renderLetters() {
    return this.state.letters.map(letter => (
      <span key={letter} style={{display: 'inline-block'}}>
        {letter}
      </span>
    ))
  }

  render() {
    const animations = {
      enterAnimation: {
        from: {
          transform: 'translateY(-30px)',
          opacity: 0,
        },
        to: {
          transform: 'translateY(0)',
          opacity: 1,
        },
      },
      leaveAnimation: {
        from: {
          transform: 'translateY(0)',
          opacity: 1,
        },
        to: {
          transform: 'translateY(30px)',
          opacity: 0,
        },
      },
    };

    return (
      <div className="letter-demo">
        <FlipMove {...animations}>
          {this.renderLetters()}
        </FlipMove>
      </div>
    );
  }
}

export default LetterDemo;
