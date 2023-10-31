import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 24px;
  margin-top: -24px;
  border-radius: 32px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-top: 9px;
  margin-bottom: 23px;
  text-align: center;
`

export const Sequence = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
  padding: 16px;
  margin-bottom: 12px;
  border-radius: 8px;
`

export const Info = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
`

export const Success = styled.View`
  flex: 1;
  width: 50%;
  background-color: ${({ theme }) => theme.COLORS.GREEN_100};
  padding: 16px;
  border-radius: 8px;
`

export const Fail = styled.View`
  flex: 1;
  width: 50%;
  background-color: ${({ theme }) => theme.COLORS.RED_100};
  padding: 16px;
  border-radius: 8px;
`

export const TitleBox = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.XL2}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 8px;
  text-align: center;
`

export const SubtitleBox = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  text-align: center;
`
