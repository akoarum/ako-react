import React from 'react'

import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs, text, number, boolean, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import Checkbox from '../components/atoms/Checkbox'
import Radio from '../components/atoms/Radio'
import Select from '../components/atoms/Select'
import Textarea from '../components/atoms/Textarea'
import InputText from '../components/atoms/InputText'
import Label from '../components/atoms/Label'
import Texts from '../components/atoms/Texts'
import Heading from '../components/atoms/Heading'

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
  .add('Heading', () => {
    const texts = text('テキスト', '吾輩は猫である')
    const level = number('レベル', 2)
    const visual = number('見た目のレベル', 2)
    return (
      <Heading level={level} visual={visual}>{texts}</Heading>
    )
  }, { info: {} })
  .add('Texts', () => {
    const texts = text('テキスト', '吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。吾輩はここで始めて人間というものを見た。')
    const caution = boolean('エラー文', false)
    const small = boolean('小サイズ', false)

    return (
      <Texts caution={caution} small={small}>{texts}</Texts>
    )
  }, { info: {} })
  .add('Label', () => {
    const label = text('ラベル', 'ラベル')
    return (
      <Label htmlFor="name" id="label">{label}</Label>
    )
  }, { info: {} })
  .add('InputText', () => {
    const type = select('type', {
      text: 'text',
      number: 'number',
      email: 'email',
      tel: 'tel',
      password: 'password'
    }, 'text')
    let value = ''

    return (
      <InputText name={'name'} type={type} value={value} onInput={action('input')} onFocus={action('focus')} onBlur={action('blur')} required={true} />
    )
  }, { info: {} })
  .add('Textarea', () => {
    let value = ''
    return (
      <Textarea name="name" value={value} onInput={action('input')} onFocus={action('focus')} onBlur={action('blur')} />
    )
  }, { info: {} })
  .add('Select', () => {
    const options = [
      { id: 1, label: '項目1' },
      { id: 2, label: '項目2' },
      { id: 3, label: '項目3' },
      { id: 4, label: '項目4' }
    ]
    const value = ''

    return (
      <Select name="name" options={options} value={value} onChange={action('change')} onFocus={action('focus')} onBlur={action('blur')} />
    )
  }, { info: {} })
  .add('Radio', () => {
    return (
      <Radio name="name" value="value" onChange={action('change')}>項目1</Radio>
    )
  }, { info: {} })
  .add('Checkbox', () => {
    return (
      <Checkbox name="name" value="value" onChange={action('change')}>項目1</Checkbox>
    )
  }, { info: {} })
