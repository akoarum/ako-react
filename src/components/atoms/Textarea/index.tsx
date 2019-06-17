import styled from 'styled-components'
import * as React from 'react'
import * as style from '../../../utils/style'

type Props = {
  className?: string
  name: string
  value: string
  id?: string
  minLength?: number
  maxLength?: number
  placeholder?: string
  required?: boolean
  onInput: (e: React.FormEvent<HTMLTextAreaElement>) => void
  onFocus: (e: React.FormEvent<HTMLTextAreaElement>) => void
  onBlur: (e: React.FormEvent<HTMLTextAreaElement>) => void
}

export const StyledTextarea = styled.textarea`
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

  ${style.mediaQuery.pc} {
    height: 140px;
  }

  ${style.mediaQuery.sp} {
    height: 100px;
  }
`

export const Textarea: React.FC<Props> = props => {
  return (
    <StyledTextarea
      id={props.id}
      className={props.className}
      name={props.name}
      defaultValue={props.value}
      minLength={props.minLength}
      maxLength={props.maxLength}
      placeholder={props.placeholder}
      required={props.required}
      onInput={props.onInput}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  )
}

export default Textarea
