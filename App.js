import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Icon } from '@rneui/themed';
import { UsersProvider } from './src/context/UserContext';
import UserForm from './src/views/UserForm';
import UserList from './src/views/UserList';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='UserList'
          screenOptions={screenOptions}
          >
          <Stack.Screen 
            name="UserList" component={UserList}
            options={({ navigation })=>{
              return{
                title: "Lista de Usuários",
                headerRight: ()=> (    
                    <Button type="solid" color='#fff' onPress={()=> navigation.navigate('UserForm')}>
                      <Icon name='add' color='#000' size={25}/>
                    </Button>
                )
              }
            }}
            />
          <Stack.Screen 
            name="UserForm" component={UserForm}
            options={{ title:"Formulário de Usuários"}}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
}

const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e'
  },
  headerTintColor: '#ffff',
  headerTitleStyle: 'bold',
}