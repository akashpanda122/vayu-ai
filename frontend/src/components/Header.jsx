import React from 'react'
import styled from 'styled-components'
import { WiDaySunny } from 'react-icons/wi'

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 0;
  margin-bottom: 30px;
`

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <WiDaySunny size={40} />
        Vayu AI Weather
      </Logo>
    </HeaderContainer>
  )
}

export default Header
