import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 40px 24px;
  margin-top: -24px;
  border-radius: 32px;
`

export const Form = styled.View`
  flex: 1;
`

export const DateTimeContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 12px 0;
`

export const DateTimeContent = styled.View`
  flex: 1;
`

export const Option = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};

    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 4px;
`
