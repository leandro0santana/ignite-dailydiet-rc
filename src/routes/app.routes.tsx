import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@screens/Home'
import { CreateMeal } from '@screens/CreateMeal'
import { DetailDiet } from '@screens/DetailDiet'
import { EditMeal } from '@screens/EditMeal'
import { Feedback } from '@screens/Feedback'
import { Statistic } from '@screens/Statistic'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="statistic" component={Statistic} />
      <Screen name="create" component={CreateMeal} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="detail" component={DetailDiet} />
      <Screen name="edit" component={EditMeal} />
    </Navigator>
  )
}
