import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { host } from 'storybook-host'
import { withKnobs, text, boolean, number } from '@kadira/storybook-addon-knobs'
import Button from './Button'
import Welcome from './Welcome'
import ReactAnime from './ReactAnime'
import LetterShuffle from './LetterShuffle'

// const stories = storiesOf('Storybook knobs!', module)
// .addDecorator(withKnobs)

storiesOf('Welcome', module)
  .addDecorator(withKnobs)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ))

storiesOf('ReactAnime', module)
  .addDecorator(withKnobs)
  .addDecorator(host({
    title: 'Testing storybook-host container.',
    align: 'center bottom',
    height: '100%',
    width: '100%',
    background: '#191919',
    alignItems: 'center',
  }))
  .add('standard', () => <ReactAnime />)

storiesOf('LetterShuffle', module)
  .addDecorator(withKnobs)
  .addDecorator(host({
    title: 'Testing storybook-host container.',
    align: 'center bottom',
    height: '100%',
    width: '100%',
    background: '#191919',
    alignItems: 'center',
  }))
  .add('standard', () => <LetterShuffle />)
  .add('Orbitron', () => <LetterShuffle font="Orbitron" />)
  .add('Press Start 2P', () => <LetterShuffle font="'Press Start 2P'" />)
  .add('Dynamic font chooser', () => {
    const font = text('Enter an installed font\'s name', 'Roboto')

    return <LetterShuffle font={font} />
  })

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ))
  .add('Dynamic greeting', () => {
    const greeting = text('Who would you like to greet?', 'Universe')

    const content = `Hello ${greeting}!`
    return <Button onClick={action('clicked')}>{content}</Button>
  })
