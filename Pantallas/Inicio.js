import React, {useContext} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ListItem, Header} from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProductoContext from '../Context/ProductosContext';

const Listado =({navigation})=>{

    const {Lista, setLista, setProducto, productos, eliminar} = useContext(ProductoContext);

    return(
    
    <View style={styles.container}>
        <Text>te</Text>

        <Header
            centerComponent={{ text: 'Productos', style: { color: '#fff', fontSize:20 } }}
            rightComponent={{ icon: 'add', color: '#fff', onPress:()=>{
                navigation.navigate('Carrito',{status:"add"})

                setProducto({
                  codigo:null,
                  descripcion:"",
                  precio:""
                 })   

            }}}
            containerStyle={{backgroundColor:'#434343'}}
        />

<ScrollView>
        {
            Lista.length>0
            ?
            Lista.map((a,i)=>(
                <ListItem key={i} bottomDivider>
                    <ListItem.Content>
                        <ListItem.Title>{a.descripcion}</ListItem.Title>
                        <ListItem.Subtitle>{a.precio}</ListItem.Subtitle>
                    </ListItem.Content>
                    <View style={styles.buttons}>
                        <Ionicons name='ios-trash' size={30} color={'red'} onPress={()=>eliminar(a.id)}/>
                        <Ionicons name='md-create' size={30} color={'green'}  onPress={()=>{
                            setProducto({
                                codigo:a.codigo.toString(),
                                descripcion:a.descripcion,
                                precio:a.precio
                            })

                            navigation.navigate('Carrito',{status:"edit"})
                        }}/>
                    </View>
                </ListItem>

            ))
            :
            <Text style={{marginTop:50, textAlign:'center', fontSize:20}}>No hay productos</Text>


        }


        </ScrollView>
    </View>)


}

export default Listado;


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    buttons:{
        width:'25%', 
        flexDirection:'row', 
        justifyContent:'space-between'
    }
});