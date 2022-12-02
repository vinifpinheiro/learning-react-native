import { Image, StyleSheet, Dimensions, Text } from "react-native"
import topo from '../../assets/topo.png'

const width = Dimensions.get('screen').width

export default function Cesta () {
    return(
        <>
            <Image style={styles.top} source={topo} />
            <Text style={styles.title}>Detalhe da cesta</Text>
        </>
        
    )
}

const styles = StyleSheet.create({
    top:{
        width:"100%" ,
        height: 578 / 768 * width,
    },
    title: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color:"white",
        fontWeight: "bold",
        padding: 16,

        
    }
})