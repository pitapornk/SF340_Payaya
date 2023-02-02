import React, {useState} from 'react'
import { View, Text, StyleSheet, Switch, TextInput, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Octicon from 'react-native-vector-icons/Octicons';
import {Picker} from '@react-native-picker/picker';


const YourTaskPage = () => {
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    // const [isColorSelected, setColorSelected] = useState(false);
    // const selectColor = () => {
    //   setColorSelected(!isColorSelected)
    // }

    // const [selectedDate, setSelectedDate] = useState("1");
    // const [selectedMonth, setSelectedMonth] = useState("January");

    //const navigation = useNavigation();
  
    return (
      <SafeAreaView style={{flex:1, backgroundColor: '#FFF'}}>
        <View >
        <View style={styles.header}>
        <TouchableOpacity>
            <Text style={styles.headerButton}>Cancel</Text>
        </TouchableOpacity>

        <Text style={{fontWeight: 'bold', fontSize: 20}}>Your Task</Text>
        
        <TouchableOpacity>
            <Text style={styles.headerButton}>Done</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputView}>
        <TextInput
        style={styles.inputText}
        placeholder="Add Title"
        placeholderTextColor={'#C4C4C4'}
        />
      </View>

      <View style={styles.dateView}>
        <View style={{flex: 1, flexDirection: 'row', alignSelf: 'flex-start', justifyContent: 'flex-start'}}>
           <Text style={{flex:1, alignSelf: 'flex-start', color: '#1B1C1E', opacity: 0.8, fontSize: 18}}>Date</Text>
      
        {/* เปลี่ยนเอาของ Android มาใส่ */}
        <Switch
        trackColor={{false: '#CDD1D9', true: '#1B1C1E'}}
        thumbColor={isEnabled1 ? '#FFF' : '#FF F'}
        ios_backgroundColor="#CDD1D9"
        onValueChange={toggleSwitch1}
        value={isEnabled1}
        /> 
        </View>
        
      {/* <View style={{flex: 1, flexDirection: 'row'}}>
          <Picker
          selectedValue={selectedDate}
          style={{ height: 15, width: '20%'}}
          onValueChange={(itemValue, itemIndex) => setSelectedDate(itemValue)}
          mode='dropdown'
          itemStyle={{fontSize: 14}}
          >
          <Picker.Item label="1" value="1"/>
          <Picker.Item label="2" value="2" />
          <Picker.Item label="3" value="3" />
          <Picker.Item label="4" value="4" />
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
          <Picker.Item label="7" value="7" />
          <Picker.Item label="8" value="8" />
          <Picker.Item label="9" value="1" />
          <Picker.Item label="10" value="10" />
          <Picker.Item label="11" value="11" />
          <Picker.Item label="12" value="12" />
          <Picker.Item label="13" value="13" />
          <Picker.Item label="14" value="14" />
          <Picker.Item label="15" value="15" />
          <Picker.Item label="16" value="16" />
          <Picker.Item label="17" value="17" />
          <Picker.Item label="18" value="18" />
          <Picker.Item label="19" value="19" />
          <Picker.Item label="20" value="20" />
          <Picker.Item label="21" value="21" />
          <Picker.Item label="22" value="22" />
          <Picker.Item label="23" value="23" />
          <Picker.Item label="24" value="24" />
          <Picker.Item label="25" value="25" />
          <Picker.Item label="26" value="26" />
          <Picker.Item label="27" value="27" />
          <Picker.Item label="28" value="28" />
          <Picker.Item label="29" value="29" />
          <Picker.Item label="30" value="30" />
          <Picker.Item label="31" value="31" />
        </Picker>

        <Picker
          selectedValue={selectedDate}
          style={{ height: 15, width: '50%'}}
          onValueChange={(itemValue, itemIndex) => setSelectedDate(itemValue)}
          mode='dropdown'
          itemStyle={{fontSize: 14}}
        >
          <Picker.Item label="January" value="January"/>
          <Picker.Item label="February" value="February" />
          <Picker.Item label="March" value="March" />
          <Picker.Item label="April" value="April" />
          <Picker.Item label="May" value="May" />
          <Picker.Item label="June" value="June" />
          <Picker.Item label="July" value="July" />
          <Picker.Item label="August" value="August" />
          <Picker.Item label="September" value="September" />
          <Picker.Item label="October" value="October" />
          <Picker.Item label="November" value="November" />
          <Picker.Item label="December" value="December" />
        </Picker>


      </View> */}

      <View style={{flex: 1, flexDirection: 'row', alignSelf: 'flex-end', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
        {/* <FontAwesome name="bell" size={18} color="#1B1C1E" style={{marginRight: 5}}/> */}
        <Octicon name="bell-fill"
                        size={18} 
                        color="#1B1C1E"
                        style={{marginRight: 5, opacity: 0.8}}/>
        <Text style={{flex:1, color: '#1B1C1E', opacity: 0.8, fontSize: 16}}>Notification</Text>
      
        {/* เปลี่ยนเอาของ Android มาใส่ */}
        <Switch
        trackColor={{false: '#CDD1D9', true: '#1B1C1E'}}
        thumbColor={isEnabled2 ? '#FFF' : '#FF F'}
        ios_backgroundColor="#CDD1D9"
        onValueChange={toggleSwitch2}
        value={isEnabled2}
        /> 
        </View>
    </View> 

    <View style={styles.colorView}>
    <Text style={{flex:1, alignSelf: 'flex-start', color: '#1B1C1E', opacity: 0.8, fontSize: 18}}>Color</Text>
    <View style={{alignSelf: 'center',flexDirection: 'row', justifyContent: 'space-around'}}>
      <TouchableOpacity style={[styles.colorChart,{backgroundColor: '#CDD1D9'}]}
      onPress={() => selectColor()}></TouchableOpacity>
      <TouchableOpacity style={[styles.colorChart,{backgroundColor: '#F7D28C'}]}></TouchableOpacity>
      <TouchableOpacity style={[styles.colorChart,{backgroundColor: '#39DB8D'}]}></TouchableOpacity>
      <TouchableOpacity style={[styles.colorChart,{backgroundColor: '#F65279'}]}></TouchableOpacity>
      <TouchableOpacity style={[styles.colorChart,{backgroundColor: '#5BA9F0'}]}></TouchableOpacity>
    </View>
    </View>
        

    </View>
  </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({

  header:{
    marginTop: 20,
    marginBottom: 20,
    flew: 1,
    width: '100%',
    height: 50,
    justifyContent: 'space-evenly',
    flexDirection: 'row'
        
  },

  headerButton:{
    fontSize: 18,
    color: '#1B1C1E',
    opacity: 0.4
  },

  inputView:{
    width:"80%",
    height:"10%",
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:"#EEEFF2",
    borderRadius:15,
    marginBottom:15,
    justifyContent:"center",
    padding:20,
    alignSelf: 'center'
  },

  inputText:{
    flex: 1,
    paddingLeft: 5,
    height:50,
    color:"#000",
    fontSize: 18
  },

  dateView:{
    width:"80%",
    height:"30%",
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:"#EEEFF2",
    borderRadius:15,
    marginBottom:15,
    justifyContent:"center",
    padding:20,
    alignSelf: 'center'
  },

  colorView:{
    width:"80%",
    height:"20%",
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:"#EEEFF2",
    borderRadius:15,
    marginBottom:15,
    justifyContent:"center",
    padding:20,
    alignSelf: 'center'
  },

  colorChart: {
    width: 35, 
    height: 35, 
    borderRadius: 100 / 2,
    margin: '4%'
  },

  colorSelected: {
    width: 50, 
    height: 50, 
    borderRadius: 100 / 2,
    margin: '4%',
    color: '#EEEFF2',
    borderColor: "#1B1C1E" 
  }

});

  export default YourTaskPage