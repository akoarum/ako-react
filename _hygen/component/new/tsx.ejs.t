---
to: src/components/<%= category %>/<%= name %>/index.tsx
---
import styled from 'styled-components'
import * as React from 'react'
import * as style from '../../../utils/style'

type Props = {
  className: string
}

export const <%= name %>: React.FC<Props> = ({ className }) => {
  return <div className={className} />
}

export default styled(<%= name %>)`
`
