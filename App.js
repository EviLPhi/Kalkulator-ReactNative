import React, { Component } from 'react';
import { View , StatusBar , Text , TouchableOpacity } from 'react-native';

class App extends Component {
  constructor(poops){
    super(poops);
    this.state = {
      hitung: 0,
    };
  }

  masukanAngka = (val) => {
    if(this.state.hitung == 0 ){
      this.setState({hitung : val})
    }
    else{
      this.setState({hitung : this.state.hitung +''+val})
    }
  }

  hitungHasil = () => {
    this.setState({hitung : eval(this.state.hitung)})
  }

  render(){
    return (
      <View style={{flex: 1, backgroundColor: '#212121'}}>
        <StatusBar backgroundColor='#212121' barStyle='light-content' />
        <View style={{flex:0.8}}>
          <View style={{flex: 1, justifyContent:'center', padding: 10, margin: 10}}>
            <Text style={{color:'#FFFFFF', fontSize:80, textAlign: 'right'}}>{this.state.hitung}</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{flex: 1, justifyContent:'center', padding: 10, margin: 10}} onPress={() => this.setState({hitung:0})}>
            <Text style={{color:'#FFFFFF', fontSize:24, textAlign: 'right'}}>Hapus</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', marginVertical:10}}>
          <TouchableOpacity style={{flex: 1, justifyContent:'center', padding: 10}} onPress={() => this.masukanAngka('(')}>
            <Text style={{color:'#FFFFFF', fontSize:40, textAlign: 'center'}}>(</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent:'center', padding: 10}} onPress={() => this.masukanAngka(')')}>
            <Text style={{color:'#FFFFFF', fontSize:40, textAlign: 'center'}}>)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent:'center', padding: 10}} onPress={() => this.masukanAngka('/')}>
            <Text style={{color:'#FFFFFF', fontSize:40, textAlign: 'center'}}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent:'center', padding: 10}} onPress={() => this.masukanAngka('*')}>
            <Text style={{color:'#FFFFFF', fontSize:40, textAlign: 'center'}}>x</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginVertical:10}}>
          <TouchableOpacity style={{flex: 1, justifyContent:'center', padding: 10}}
          onPress={() => this.masukanAngka(7)}>
            <Text style={{color:'#FFFFFF', fontSize:40, textAlign: 'center'}}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent:'center', padding: 10}}
          onPress={() => this.masukanAngka(8)}>
            <Text style={{color:'#FFFFFF', fontSize:40, textAlign: 'center'}}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent:'center', padding: 10}}
          onPress={() => this.masukanAngka(9)}>
            <Text style={{color:'#FFFFFF', fontSize:40, textAlign: 'center'}}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent:'center', padding: 10}} onPress={() => this.masukanAngka('+')}>
            <Text style={{color:'#FFFFFF', fontSize:40, textAlign: 'center'}}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginVertical:10}}>
          <TouchableOpacity style={{flex: 1, justifyContent:'center', padding: 10}}
          onPress={() => this.masukanAngka(4)}>
            <Text style={{color:'#FFFFFF', fontSize:40, textAlign: 'center'}}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent:'center', padding: 10}}
          onPress={() => this.masukanAngka(5)}>
            <Text style={{color:'#FFFFFF', fontSize:40, textAlign: 'center'}}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent:'center', padding: 10}}
          onPress={() => this.masukanAngka(6)}>
            <Text style={{color:'#FFFFFF', fontSize:40, textAlign: 'center'}}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent:'center', padding: 10}} onPress={() => this.masukanAngka('-')}>
            <Text style={{color:'#FFFFFF', fontSize:40, textAlign: 'center'}}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginVertical:10}}>
          <TouchableOpacity style={{flex: 1, justifyContent:'center', padding: 10}} 
          onPress={() => this.masukanAngka(1)}>
            <Text style={{color:'#FFFFFF', fontSize:40, textAlign: 'center'}}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent:'center', padding: 10}} 
          onPress={() => this.masukanAngka(2)}>
            <Text style={{color:'#FFFFFF', fontSize:40, textAlign: 'center'}}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent:'center', padding: 10}} 
          onPress={() => this.masukanAngka(3)}>
            <Text style={{color:'#FFFFFF', fontSize:40, textAlign: 'center'}}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, justifyContent:'center', padding: 10}} onPress={() => this.hitungHasil()}>
            <Text style={{color:'#FFFFFF', fontSize:40, textAlign: 'center'}}>=</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}
export default App;