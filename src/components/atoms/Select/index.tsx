import styled from 'styled-components'
import * as React from 'react'
import * as style from '../../../utils/style'
import { Choice } from '../../../models/types'

type Props = {
  className?: string
  name: string
  options: Choice[]
  value: string | number
  id?: string
  required?: boolean
  onChange?: (e: React.FormEvent<HTMLSelectElement>) => void
  onFocus?: (e: React.FormEvent<HTMLSelectElement>) => void
  onBlur?: (e: React.FormEvent<HTMLSelectElement>) => void
}

export const StyledRoot = styled.div`
  position: relative;
  display: inline-block;

  &::after {
    position: absolute;
    top: 50%;
    right: 12px;
    content: '';
    margin-top: -4px;
    border-style: solid;
    border-color: ${style.color.theme} transparent transparent;
    border-width: 8px 5px;
    pointer-events: none;
  }

  ${style.mediaQuery.pc} {
    min-width: 240px;
  }

  ${style.mediaQuery.sp} {
    width: 100%;
  }

  .select__content {
    display: inline-block;
    box-sizing: border-box;
    border-radius: 0;
    box-sizing: border-box;
    border: 1px solid ${style.color.border};
    padding: 8px 32px 8px 12px;
    width: 100%;
    font-size: ${style.font.sizePc};
    line-height: 1.3;
  }
`

export const Select: React.FC<Props> = props => {
  const Options = props.options.map(option => {
    const value = option.value ? option.value : option.id
    return (
      <option key={option.id} value={value}>
        {option.label}
      </option>
    )
  })
  return (
    <StyledRoot className={props.className}>
      <select
        name={props.name}
        value={props.value}
        id={props.id}
        required={props.required}
        className="select__content"
        onChange={props.onChange}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      >
        {Options}
      </select>
    </StyledRoot>
  )
}

export default Select
