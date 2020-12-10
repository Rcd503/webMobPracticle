import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,FlatList,ScrollView } from 'react-native';
import Constants from 'expo-constants';

 class App extends React.Component {
   constructor()
   {
     super();
     this.state={
       data:[]
   
     }
   }
   componentDidMount()
   {
     this.apiCall();
   }
  async apiCall(){
   let resp =await fetch('https://randomuser.me/api')
   let respJson = await resp.json()
  //console.warn(respJson.data)
   this.setState({data:respJson.results})
   
    }  
    
  render(){
  return (
    <View style={styles.container}>
      
      <Text style={{fontSize:35}}> webMob Practicle</Text>
     
      <FlatList
      data={this.state.data}
      datainfo={this.state.datainfo}
      renderItem={
      ({item,datainfo1}) => <ScrollView>
        
      <Text style={{fontSize:40}}>{item.gender}</Text>
      <Text style={{fontSize:40}}>{item.name.title}</Text>
      <Text style={{fontSize:40}}>{item.name.first}</Text>

      <Text style={{fontSize:50}}>{item.location.street.number}</Text>
      <Text style={{fontSize:50}}>{item.location.street.name}</Text>
      <Text style={{fontSize:30}}>{item.location.city}</Text>
      <Text style={{fontSize:30}}>{item.location.state}</Text>
      <Text style={{fontSize:30}}>{item.location.country}</Text>
      <Text style={{fontSize:30}}>{item.location.postcode}</Text>
      <Text style={{fontSize:30}}>{item.location.coordinates.latitude}</Text>
      <Text style={{fontSize:30}}>{item.location.coordinates.longitude}</Text>
      <Text style={{fontSize:30}}>{item.location.timezone.offset}</Text>
      <Text style={{fontSize:30}}>{item.location.timezone.description}</Text>
      <Text style={{fontSize:30}}>{item.email}</Text>
      <Text style={{fontSize:30}}>{item.login.uuid}</Text>
      <Text style={{fontSize:30}}>{item.login.username}</Text>
      <Text style={{fontSize:30}}>{item.login.password}</Text>
      <Text style={{fontSize:30}}>{item.login.salt}</Text>
      <Text style={{fontSize:30}}>{item.login.md5}</Text>
      <Text style={{fontSize:30}}>{item.login.sha1}</Text>
     
      <Text style={{fontSize:30}}>{item.dob.date}</Text>
      <Text style={{fontSize:30}}>{item.dob.age}</Text>
      <Text style={{fontSize:30}}>{item.registered.date}</Text>
      <Text style={{fontSize:30}}>{item.registered.age}</Text>
      <Text style={{fontSize:30}}>{item.phone}</Text>
      <Text style={{fontSize:30}}>{item.cell}</Text>
      <Text style={{fontSize:30}}>{item.id.name}</Text>
      <Text style={{fontSize:22}}>{item.id.value}</Text>
    
      <Text style={{fontSize:22}}>{item.nat.date}</Text>
      
      
        </ScrollView>
        
      }
      />

      </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
});

export default App;
