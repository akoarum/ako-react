import styled from 'styled-components'
import * as React from 'react'
import * as style from '../../../utils/style'

type Props = {
  className?: string
  name: string
  value: string | number
  checked?: boolean
  required?: boolean
  onChange?: (e: React.FormEvent) => void
}

export const StyledCheckbox = styled.label`
  position: relative;

  .checkbox__input {
    position: absolute;
    left: 0;
    top: 0;
    width: 5px;
    height: 5px;
    opacity: 0;

    &:checked + .checkbox__label {
      &::before {
        border-color: ${style.color.theme};
        background: ${style.color.theme};
      }
    }
  }

  .checkbox__label {
    &::before,
    &::after {
      position: absolute;
      content: '';
    }

    &::before {
      top: 6px;
      left: 0;
      border-radius: 2px;
      border: 1px solid ${style.color.border};
      width: 22px;
      height: 22px;
      transition: background 0.3s ${style.animation.easing},
        border-color 0.3s ${style.animation.easing};
    }

    &::after {
      top: 12px;
      left: 3px;
      width: 18px;
      height: 10px;
      background: url('~assets/icons/check.svg') left top no-repeat;
      background-size: 100% auto;
    }
  }

  ${style.mediaQuery.pc} {
    padding: 7px 0 6px 34px;
    font-size: ${style.font.sizePc};
  }

  ${style.mediaQuery.sp} {
    padding: 7px 0 6px 34px;
    font-size: ${style.font.sizeSp};
  }
`

export const Checkbox: React.FC<Props> = props => {
  return (
    <StyledCheckbox className={props.className}>
      <input
        type="checkbox"
        name={props.name}
        value={props.value}
        checked={props.checked}
        required={props.required}
        className="checkbox__input"
        onChange={props.onChange}
      />
      <span className="checkbox__label">{props.children}</span>
    </StyledCheckbox>
  )
}

export default Checkbox
