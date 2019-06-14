import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Button from '../components/atoms/Button'

storiesOf('Atoms', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add('Button', () => {
    const label = text('ラベル', 'ボタン')
    const secondary = boolean('secondary', false)
    const caution = boolean('caution', false)
    const small = boolean('small', false)
    const disabled = boolean('disabled', false)
    const handleClick = action('click')

    return (
      <Button secondary={secondary} caution={caution} small={small} disabled={disabled} onClick={handleClick}>{label}</Button>
    )
  }, { info: { inline: true } })
