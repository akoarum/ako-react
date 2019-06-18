import styled from 'styled-components'
import * as React from 'react'
import * as style from '../../../utils/style'

type Props = {
  className?: string
  name: string
  value: string
  checked?: boolean
  required?: boolean
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void
}

export const StyledRadio = styled.label`
  position: relative;

  .radio__input {
    position: absolute;
    left: 0;
    top: 0;
    width: 5px;
    height: 5px;
    opacity: 0;

    &:checked {
      + span::before {
        border-color: ${style.color.theme};
      }
      + span::after {
        opacity: 1;
      }
    }
  }

  .radio__label {
    &::before,
    &::after {
      position: absolute;
      top: 50%;
      content: '';
      border-radius: 50%;
      transform: translate3d(0, -50%, 0);
    }

    &::before {
      left: 0;
      border: 1px solid ${style.color.border};
      transition: border-color 0.1s $easing;
    }

    &::after {
      background: ${style.color.theme};
      opacity: 0;
      transition: opacity 0.1s ${style.animation.easing};
    }
  }

  ${style.mediaQuery.pc} {
    padding: 7px 0 6px 32px;
    font-size: ${style.font.sizePc};

    .radio__label {
      &::before {
        width: 24px;
        height: 24px;
      }
      &::after {
        left: 6px;
        width: 14px;
        height: 14px;
      }
    }
  }

  ${style.mediaQuery.sp} {
    padding: 7px 0 6px 28px;
    font-size: ${style.font.sizeSp};

    .radio__label {
      &::before {
        width: 20px;
        height: 20px;
      }
      &::after {
        left: 5px;
        width: 12px;
        height: 12px;
      }
    }
  }
`

export const Radio: React.FC<Props> = props => {
  return (
    <StyledRadio className={props.className}>
      <input
        type="radio"
        name={props.name}
        value={props.value}
        required={props.required}
        checked={props.checked}
        className="radio__input"
        onChange={props.onChange}
      />
      <span className="radio__label">{props.children}</span>
    </StyledRadio>
  )
}

export default Radio
