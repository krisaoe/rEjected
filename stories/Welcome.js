import React from 'react';

const styles = {
  main: {
    margin: 15,
    maxWidth: 600,
    lineHeight: 1.4,
    fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
  },

  logo: {
    width: 200,
  },

  link: {
    color: '#1474f3',
    textDecoration: 'none',
    borderBottom: '1px solid #1474f3',
    paddingBottom: 2,
  },

  code: {
    fontSize: 15,
    fontWeight: 600,
    padding: "2px 5px",
    border: "1px solid #eae9e9",
    borderRadius: 4,
    backgroundColor: '#f3f2f2',
    color: '#3a3a3a',
  },

  note: {
    opacity: 0.5,
  }
};

export default class Welcome extends React.Component {
  showApp(e) {
    e.preventDefault();
    if(this.props.showApp) this.props.showApp();
  }

  render() {
    return (
      <div style={styles.main}>
        <h1>Welcome to DreamOcean</h1>
        <p>
          This is where I attempt to give life to some of the weird and wonderful thoughts and visions that both haunt and delight me on a daily basis.
        </p>
        <p>
          Developed mainly in <code style={styles.code}>JavaScript</code> and <code style={styles.code}>CSS</code>, with the help of some amazing tutors, an incredible community, and a tripped out imagination.
        </p>
        <p>
          <b>(Basically a rambling, mostly-incoherent journey through one person's brain-farts)</b>
        </p>
        <p style={styles.note}>
          <b>#TODO: APPRECIATION</b>
          <br/>

        </p>
      </div>
    );
  }
}
