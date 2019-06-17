import styled from 'styled-components'
import * as React from 'react'
import * as style from '../../../utils/style'

type Props = {
  className?: string
  type: string
  value: string
  id?: string
  placeholder?: string
  maxLength?: number
  min?: number
  max?: number
  required?: boolean
  onInput?: (e: React.FormEvent<HTMLInputElement>) => void
  onFocus?: (e: React.FormEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FormEvent<HTMLInputElement>) => void
}

export const StyledInputText = styled.input`
  box-sizing: border-box;
  border: 1px solid ${style.color.border};
  padding: 8px 12px;
  width: 100%;
  font-size: ${style.font.sizePc};
  outline: none;
  transition: border 0.3s ${style.animation.easing};

  &:focus {
    border: 1px solid ${style.color.theme};
  }

  &[aria-invalid='true'] {
    border: 1px solid ${style.color.caution};
  }
`

export const InputText: React.FC<Props> = props => {
  return (
    <StyledInputText
      id={props.id}
      type={props.type}
      defaultValue={props.value}
      placeholder={props.placeholder}
      maxLength={props.maxLength}
      min={props.min}
      max={props.max}
      className={props.className}
      required={props.required}
      onInput={props.onInput}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  )
}

export default InputText
