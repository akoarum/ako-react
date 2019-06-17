import styled from 'styled-components'
import * as React from 'react'
import * as style from '../../../utils/style'

type Props = {
  className?: string
  caution?: boolean
  small?: boolean
}

export const StyledTexts = styled.div`
  white-space: pre-line;
  word-wrap: break-word;

  ${style.mediaQuery.pc} {
    font-size: ${style.font.sizePc};
    line-height: ${style.font.lineHeightPc};
  }

  ${style.mediaQuery.sp} {
    font-size: ${style.font.sizeSp};
    line-height: ${style.font.lineHeightSp};
  }

  &.-caution {
    color: ${style.color.caution};
  }

  &.-small {
    ${style.mediaQuery.pc} {
      font-size: 1.4rem;
      line-height: 1.6;
    }
    ${style.mediaQuery.sp} {
      font-size: 1.3rem;
      line-height: 1.5;
    }
  }
`

export const getClassNames = (
  className?: string,
  caution?: boolean,
  small?: boolean
): string[] => {
  const classNames = []

  if (className) {
    classNames.push(className)
  }

  if (caution) {
    classNames.push('-caution')
  }

  if (small) {
    classNames.push('-small')
  }

  return classNames
}

export const Texts: React.FC<Props> = ({
  className,
  caution,
  small,
  children
}) => {
  const classNames: string[] = getClassNames(className, caution, small)

  return <StyledTexts className={classNames.join(' ')}>{children}</StyledTexts>
}

export default Texts
