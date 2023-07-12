import { Avatar, Button, Icon, ListItem } from '@rneui/themed';
import React, { useContext } from "react";
import { Alert, FlatList, View } from "react-native";
import UsersContext from '../context/UserContext';

export default props =>{

    const { state, dispatch } = useContext(UsersContext)


    function confirmUserDelete(user){
        Alert.alert("Excluir usuário?", "Deseja excluir usuário?", [ 
            {
                text: "Sim",
                onPress(){
                    dispatch({
                        type: 'deleteUser',
                        payload: user,
                    })
                }
            },
            {
                text: "Não"
            }
        ]) 
    }



    function getUserItem({ item: user }){
        return(
            <ListItem 
                bottomDivider
                onPress={()=>props.navigation.navigate('UserForm', user)}
                >
                <Avatar
                    rounded
                    source={{uri: user.url}}
                    />
                    <ListItem.Content>
                        <ListItem.Title>{user.name}</ListItem.Title>
                        <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
                    </ListItem.Content>
                    <ListItem>
                        <Button onPress={()=> props.navigation.navigate("UserForm", user)} type='clear'>
                            <Icon name="account-edit" type="material-community" color="grey" />
                        </Button>
                        <Button onPress={()=> confirmUserDelete(user)} type='clear'>
                            <Icon name="trash-can-outline" type="material-community" color="grey" />
                        </Button>
                    </ListItem>
            </ListItem >
        )
    }
    return(
        <View>
            <FlatList
            keyExtractor={user => user.id}
                data={state.users}
                renderItem={getUserItem}
                />
        </View>
    )
}