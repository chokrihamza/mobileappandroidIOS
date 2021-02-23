import React,{useContext} from 'react';
import { View,Text,Button ,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import { Context } from '../context/BlogContext';
import {Feather} from '@expo/vector-icons'
const indexScreen = ({navigation}) => {
      
      const {state,deleteBlogPost} = useContext(Context);
      return <View>
           
            <FlatList
                  data={state}
                  keyExtractor={(blogpost) => blogpost.title}
                  renderItem={({ item }) => {

                        return(
                        <TouchableOpacity  onPress={()=>navigation.navigate('Show',{id:item.id})}>
                        <View style={styles.row}>
                              <Text style={styles.title}>{item.title}-{item.id}</Text>
                              <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                                    <Feather name='trash' style={styles.icon} /> 
                              </TouchableOpacity>        
                        </View>
                        </TouchableOpacity> 
                        )}}
            />
            
      </View>
}
const styles = StyleSheet.create({
      row: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
            paddingHorizontal:10,
            borderTopWidth: 1,
            borderColor:'black',
      },
      title: {
            fontSize:18,
      },
      icon: {
            fontSize:24
      }
});
indexScreen.navigationOptions = ({navigation}) => {
      return {
            headerRight: () =>
            <TouchableOpacity  onPress={()=>navigation.navigate('Create')}>
                  <Feather name='plus' size={30} />
            </TouchableOpacity>
      };
};


export default indexScreen;