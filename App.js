import React from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";


const Flex = () => {
  return (
    <View style={[styles.container, {
      flex:0.8,
      flexDirection: "column",
    }]}>

      <View style={styles.box1}>
      <View style={styles.menubarr}>
      <Image
         source={require('F:/ReactNative/MyFirstApp/src/assets/menubar.png')}
         style={styles.editimg}
         />
         </View>

      <Text style={styles.text}>Creativa</Text>

      <TextInput
                style={styles.input}
                placeholder="Search for Product, Brand & More"
      />


      </View>

      <View style={styles.box2}>
       <View style={styles.firstone}>
       <Image
         source={require('F:/ReactNative/MyFirstApp/src/assets/Men.jpg')}
         style={styles.editimage}
       />
       <Text style={styles.textcircle}>Men</Text>
       </View>
       <View style={styles.secondone}>
              <Image
                source={require('F:/ReactNative/MyFirstApp/src/assets/women.jpg')}
                style={styles.editimage}
              />
          <Text style={styles.textcircle}>Woman</Text>
       </View>
       <View style={styles.thirdone}>
              <Image
                source={require('F:/ReactNative/MyFirstApp/src/assets/kids.jpg')}
                style={styles.editimage}
              />
              <Text style={styles.textcircle}>Kids</Text>
       </View>
      <View style={styles.fourthone}>
             <Image
               source={require('F:/ReactNative/MyFirstApp/src/assets/home.jpg')}
               style={styles.editimage}
             />
             <Text style={styles.textcircle}>Home</Text>
       </View>

    </View>
    <View style={styles.box3}>
           <View style={styles.weekfirst}>
           <Image
             source={require('F:/ReactNative/MyFirstApp/src/assets/winter.jpg')}
             style={styles.editsquareimage}
           />

           </View>
           <View style={styles.weekmiddle}>
                      <Image
                        source={require('F:/ReactNative/MyFirstApp/src/assets/sale.jpg')}
                        style={styles.editsquareimage}
                      />

                      </View>
           <View style={styles.weeksecond}>
                  <Image
                    source={require('F:/ReactNative/MyFirstApp/src/assets/third.jpg')}
                    style={styles.editsquareimage}
                  />

           </View>
          </View>
      <View style={styles.texting}>
             <View style={styles.hightext}>
                <Text style={styles.textbro}>Weekly finds for you</Text>
                </View>
                <View style={styles.lastpicture}>
                 <Image
                         source={require('F:/ReactNative/MyFirstApp/src/assets/watch.jpg')}
                         style={styles.editsquareimage}
                                  />
                  <Text style={styles.firstdeal}>Hot Deal
                  </Text>
                  <Text style={styles.seconddeal}>The Black Files:Watches
                              </Text>
                  <Text style={styles.thirddeal}>  EXPLORE & SHOP
                              </Text>
                 </View>
                 <View style={styles.lastonepicture}>
                            <Image
                                    source={require('F:/ReactNative/MyFirstApp/src/assets/outfit.jpg')}
                                    style={styles.editsquareimage}
                                             />
                             <Text style={styles.firstdeal}>Hot Deal
                             </Text>
                             <Text style={styles.seconddeal}>The outfit
                                         </Text>
                             <Text style={styles.thirddeal}>  EXPLORE & SHOP
                                         </Text>
                            </View>
                 </View>



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
     //flex:0.5,
//     alignItems:'flex-start',
    //padding: 20,
  },
  box1: {
  flex: 0.7,
  backgroundColor: "#3569b8",
  top:-20,
  },

  box2:{
  flexDirection:'row',
  flex:0.4,
  left:9,
  top:-7,
  backgroundColor:"white",

  },
  box3:{
  flexDirection:'row',
    flex:0.8,
//  left:5,
    bottom:-30,
  backgroundColor:"#cac5d1",
  },
  texting:{
  flexDirection:'row',
    flex:0.5,
  //  left:5,
      bottom:-22,
    backgroundColor:"white",
  },
  weekfirst:{
  height:110,
  width:110,
  margin:16,
  right:9,
  bottom:9,

  },
  menubarr:{
  height:10,
  width:10,
  bottom:-52,
  left:9,
  },

  weekmiddle:{
    height:110,
    width:109,
    margin:24,
    right:-5,
    bottom:17,
    },
  weeksecond:{
  height:110,
  width:110,
  margin:20,
  right:-12,
  bottom:13,
  },

  lastpicture:{
    height:70,
    width:150,
    margin:10,
    right:143,
    bottom:-14,

  },
  lastonepicture:{
    height:90,
    width:150,
    margin:20,
    right:88,
    bottom:-4,
  },

 firstdeal:{
 fontSize:11,
 },
 seconddeal:{
 fontSize:13,
 fontWeight:'bold',
 },
 thirddeal:{
 color:"red",
 fontWeight:'bold',
 right:6,
 },

  editsquareimage:{
  width: '140%',
  height: '140%',
  borderWidth:70,

  },
  firstone:{

    height:100,
    width:100,

  },
  secondone:{

    height:100,

    width:100,

  },
  thirdone:{
    height:100,

    width:100,
  },

  fourthone:{
    height:100,
    width:100,
  },
  textcircle:{
  margin:5,
  left:20,

  },
  hightext:{
    right:-10,

  },
  textbro:{
  fontWeight: "bold",
  fontSize:15,

  },

  editimage:{

  width: '90%',
  height: '90%',
  borderRadius: 100,

  },
  editimg:{
  width:'10%',
  height:'10%',
  borderWidth:10,
  },


  text:{
  //flex:0.7 ,
  color: "white",
  fontFamily: "Cochin",
  fontWeight: "bold",
  fontSize: 30,
  padding: 20,
  left:20,
  top:10,
  },
  input:{
   height:50,
   margin: 7,
   borderRadius:1,
   backgroundColor:"white",
   padding: 8,
   },


});

export default Flex;