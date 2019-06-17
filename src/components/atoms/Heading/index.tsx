import styled from 'styled-components'
import * as React from 'react'
import * as style from '../../../utils/style'

type Props = {
  className?: string
  level?: number
  visual?: number
}

const StyledHeading = styled.div`
  .-lv2 {
    ${style.mediaQuery.pc} {
      font-size: 2.3rem;
      line-height: 1.4;
    }
    ${style.mediaQuery.sp} {
      font-size: 2.2rem;
      line-height: 1.5;
    }
  }
  .-lv3 {
    font-size: 2rem;
    line-height: 1.5;
  }
  .-lv4 {
    font-size: 1.8rem;
    line-height: 1.5;
  }
`

export const Heading: React.FC<Props> = ({
  className,
  level = 2,
  visual = 2,
  children
}) => {
  const Tag: any = `h${level}`
  const classNames: string[] = []

  if (className) {
    classNames.push(className)
  }

  classNames.push(`-lv${visual}`)

  return (
    <StyledHeading>
      <Tag className={classNames.join(' ')}>{children}</Tag>
    </StyledHeading>
  )
}

export default Heading
