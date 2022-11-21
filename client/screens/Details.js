import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React from "react";
import Octicons from "react-native-vector-icons/Octicons";

const DetailScreen = () => {
  const list = [
    {
      id: 1,
      name: "NMD_R1 SPECTOO",
      brand: "Adidas ",
      price: "2.800.000",
      image:
        "https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-nasa-nmdr1-spectoo-footwear-white-fx6818-king-shoes-sneaker-real-hcm-1-1636602842.jpg",
      image1:
        "https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-nasa-nmdr1-spectoo-footwear-white-fx6818-king-shoes-sneaker-real-hcm-2.jpg",
        image2:
        "https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-nasa-nmdr1-spectoo-footwear-white-fx6818-king-shoes-sneaker-real-hcm-3.jpg",
        image3:
        "https://kingshoes.vn/data/upload/media/gia%CC%80y-adidas-nasa-nmdr1-spectoo-footwear-white-fx6818-king-shoes-sneaker-real-hcm-4.jpg" , 
        size1: 42,
        size2: 43,
        stock: 10,
        description:"Ngay từ ban đầu, thương hiệu adidas NMD đã hướng tới tương lai. Đề cao sự tiến hóa. Và hành trình tiến bộ.Lấy cảm hứng từ thời đại streaming dữ liệu kết nối không ngừng, đôi giày adidas NMD_R1 Spectoo này đặt dấu ấn mới mẻ vào phong cách NMD kinh điển. Thân giày bằng vải dệt kim thuôn gọn đầy ấn tượng với họa tiết graphic chữ in cùng mặt bên xuyên thấu, như sự chuyển biến đầy tinh tế từ kẻ khám phá phố thị thành cư dân kỹ thuật số. Với thiết kế linh hoạt và đàn hồi, đế giữa adidas Boost cho cảm giác thoải mái đến ngỡ ngàng từ bước chân đầu tiên tới sải bước cuối cùng.",
    },
    // {
    //   id: 2,
    //   name: "Nike Air Force 2",
    //   price: 200,
    //   image:
    //     "http://saigonsneakerstore.com/thumbs/1080x720x2/upload/product/1-2293.jpg",
    // },
    // {
    //   id: 3,
    //   name: "Nike Air Force 3",
    //   price: 300,
    //   image:
    //     "http://saigonsneakerstore.com/thumbs/1080x720x2/upload/product/1-2293.jpg",
    // },
  ];

  return (
    //List items
    <View style={styles.container}>
      {list.map((item) => (
        <View style={styles.item} key={item.id}>
          <Image style={styles.image} source={{ uri: item.image }} />
          <View style={styles.info}>
            <View style={styles.info1}>
            <Text style={styles.brand}>{item.brand}</Text>
            <View style={styles.new}>
            <Text style={{color: 'white', justifyContent:'center'}}>New</Text>
            </View>
            </View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price} VND</Text>
            <View style={styles.color}>
            <Text style={{letterSpacing: '3px', fontWeight:'bold', fontSize:16}}>COLORS AVAILABLE</Text>
            <View style={styles.row}>
            <Image
            style={styles.rowImg}
            source={{ uri: item.image1 }}
          />
          <Image
            style={styles.rowImg}
            source={{ uri: item.image2 }}
          />
          <Image
            style={styles.rowImg}
            source={{ uri: item.image3 }}
          />
            </View>
        </View>
            <View style={styles.main}>
            <Text style={styles.txtSize}>Size (US)</Text>
            <View style={{flexDirection: 'row'}}>
            <View style={styles.viewSize}>
            <Text style={styles.sizeActive}>{item.size1}</Text>
            </View>
            <View style={styles.viewSize}>
            <Text style={styles.sizeActive}>{item.size2}</Text>
            </View>
            </View>   
            </View>
            <View style={styles.description}>
            <Text style={{fontSize: 16, fontWeight:'bold', marginTop: 30}}>Description</Text>
            <Text style={styles.txtDes}>{item.description}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    // alignItems: "center",
    padding: 10,
    margin: 5,
    backgroundColor: "#eee",
    borderRadius: 10,
  },
  main:{
    
  },
  txtSize:{
    fontSize: 14,
    fontWeight: 'bold',
    paddingTop: 40
  },
  txtDes:{
    fontSize: 14,
    marginTop: 10
  },
  sizeActive:{
    fontSize: 17,
    fontWeight: 'bold',
  },
  viewSize:{
    marginTop:10,
    width: 40,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent:'center',
    textAlign:'center',
    marginLeft: 15
  },
  image: {
    width: '100%',
    height: 250,
    resizeMode: "contain",
    borderRadius: 10,
  },
  info: {
    marginLeft: 10,
  },
  info1: {
    width: 60,
    flexDirection: 'row'
  },
  brand: {
    fontSize: 16,
    fontWeight: "bold",
  },
  new:{
    width: 55,
    height: 20,
    backgroundColor: 'black',
    borderRadius: 5,
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 220,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    color: "#888",
  },
  search: {
    padding: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 15,
    border: "1px solid #ccc",
  },
  searchInput: {
    backgroundColor: "#fff",
    padding: 10,
    flex: 1,
  },
  color:{
    paddingTop: 20
},
row: {
    flexDirection: "row",
    paddingTop: 20
  },
  rowImg: {
    width: 100,
    height: 100,
    borderRadius: 20,
    borderWidth: 2,
    borderColor:'black',
    marginRight: 10,
    resizeMode: "contain",
  },
});
