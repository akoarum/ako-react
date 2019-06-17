---
to: src/components/<%= category %>/<%= name %>/index.tsx
---
import styled from 'styled-components'
import * as React from 'react'
import * as style from '../../../utils/style'

type Props = {
  className?: string
}

export const Styled<%= name %> = styled.div`
`

export const <%= name %>: React.FC<Props> = ({ className }) => {
  return <Styled<%= name %> className={className} />
}

export default <%= name %>
