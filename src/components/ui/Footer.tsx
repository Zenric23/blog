import React from 'react'
import { Link, StyledFooter } from './styles/footer.styled'
import { Flex } from './util/flex.styled'

const Footer = () => {
  return (
    <StyledFooter>
      <Flex gap="8px">
        <Link>About</Link>
        <Link>Term</Link>
      </Flex>
    </StyledFooter>
  )
}

export default Footer