import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export type DetailDietTypeStyleProps = 'success' | 'fail'

type Props = {
  type: DetailDietTypeStyleProps
}

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

export const MealInfo = styled.View`
  flex: 1;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL2}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-bottom: 8px;
`

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_600};
  `}
  margin-bottom: 24px;
`

export const TitleDataTime = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `}
  margin-bottom: 8px;
`

export const Tag = styled.View<Props>`
  width: 160px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, type }) =>
    type === 'success' ? theme.COLORS.GREEN_100 : theme.COLORS.RED_100};
  padding: 8px 16px;
  border-radius: 24px;
`

export const Status = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: ${({ theme, type }) =>
    type === 'success' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_700};
  margin-right: 8px;
`

export const TitleTag = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `}
`
