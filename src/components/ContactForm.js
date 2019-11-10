import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TextInput,Button } from 'react-native-paper';
const ContactForm = () => {
    const [nombres, setNombres] = useState('');
    const [correo, setCorreo] = useState('');
    const [telefono, setTelefono] = useState('');
    const handleSubmit = () => {
        //alert(nombres,correo,telefono);
        alert(nombres);
        alert(correo);
        alert(telefono);
    }
    return (
        <View>
            <Text style={{ fontSize: 40 }}>{nombres}</Text>
            <TextInput
                label='Nombres'
                value={nombres}
                onChangeText={e => setNombres(e)}
            />
            <Text style={{ fontSize: 40 }}>{correo}</Text>
            <TextInput
                label='Correo'
                value={correo}
                onChangeText={e => setCorreo(e)}
            />
            <Text style={{ fontSize: 40 }}>{telefono}</Text>
            <TextInput
                label='Telefono'
                value={telefono}
                onChangeText={e => setTelefono(e)}
            />
            <Button mode="contained" onPress={handleSubmit}>
                Guardar
            </Button>
        </View>
    )
}
export default ContactForm
