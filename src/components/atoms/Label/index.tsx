import styled from 'styled-components'
import * as React from 'react'
import * as style from '../../../utils/style'

type Props = {
  className?: string
  htmlFor?: string
  id?: string
}

export const StyledLabel = styled.label`
  font-weight: bold;

  ${style.mediaQuery.pc} {
    font-size: ${style.font.sizePc};
  }

  ${style.mediaQuery.sp} {
    font-size: ${style.font.sizeSp};
  }
`

export const Label: React.FC<Props> = ({
  className,
  htmlFor,
  id,
  children
}) => {
  return (
    <StyledLabel className={className} htmlFor={htmlFor} id={id}>
      {children}
    </StyledLabel>
  )
}

export default Label
