import styled from 'styled-components'
import * as React from 'react'
import * as style from '../../../utils/style'

type Props = {
  className?: string
  secondary?: boolean
  caution?: boolean
  small?: boolean
  disabled?: boolean
  onClick?: any
}

export const Button: React.FC<Props> = props => {
  const classes: string[] = []

  if (props.className) {
    classes.push(props.className)
  }

  if (props.secondary) {
    classes.push('-secondary')
  }

  if (props.caution) {
    classes.push('-caution')
  }

  if (props.small) {
    classes.push('-small')
  }

  return (
    <button
      className={classes.join(' ')}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
}

export default styled(Button)`
  display: inline-block;
  border-radius: 2px;
  box-sizing: border-box;
  width: 100%;
  background: ${style.color.theme};
  font-size: ${style.font.sizePc};
  line-height: 1.3;
  color: #fff;
  text-align: center;
  transition: background 0.3s ${style.animation.easing};

  &.-secondary {
    background: ${style.color.secondary};
  }

  &.-caution {
    background: ${style.color.caution};
  }

  &:disabled {
    background: ${style.color.notice};
    cursor: default;

    &:hover,
    &:focus {
      background: ${style.color.notice};
    }
  }

  ${style.mediaQuery.pc} {
    padding: 9px 14px 8px;
    max-width: 160px;

    &:hover,
    &:focus {
      background: #5dc5e8;

      &.-secondary {
        background: #49bb99;
      }

      &.-caution {
        background: #f75656;
      }
    }
  }

  ${style.mediaQuery.sp} {
    padding: 10px 16px 9px;
  }
`
