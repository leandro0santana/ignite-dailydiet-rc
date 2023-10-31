import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 24px;
`

export const Header = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 32px 0;
`

export const Logo = styled.Image`
  width: 95px;
  height: 40px;
`

export const Profile = styled.View`
  width: 60px;
  height: 60px;

  justify-content: center;
  align-items: center;

  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 100%;
  overflow: hidden;
`

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  margin-top: 48px;
  margin-bottom: 16px;
`

export const ListTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-top: 24px;
  margin-bottom: 8px;
`
