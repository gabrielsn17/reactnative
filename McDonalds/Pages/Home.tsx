import { StatusBar } from "expo-status-bar"
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import logoMcDonalds from "../assets/logoMcDonalds.png";
import footerMC from '../assets/footerMc.jpeg'
import Carousel, { Pagination } from "react-native-snap-carousel";
import { SetStateAction, useState } from "react";

export default function Home() {
  const carouselData = [
    { id: 1, image: require("../assets/promo1.jpg") },
    { id: 2, image: require("../assets/promo2.jpg") },
    { id: 3, image: require("../assets/promo3.jpg") },
    { id: 4, image: require("../assets/promo4.png") },
    { id: 5, image: require("../assets/promo5.jpg") },
    { id: 6, image: require("../assets/promo6.jpg") },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({ item }: { item: { id: number; image: any } }) => {
    return (
      <View style={styles.carouselItem}>
        <Image
          source={item.image}
          style={styles.carouselImage}
          resizeMode="contain"
        />
      </View>
    );
  };

  const renderPagination = () => {
    return (
      <Pagination
        dotsLength={carouselData.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.paginationDotInactive}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        dotContainerStyle={styles.teste}
      />
    );
  };

  return (
    <>
      <View style={styles.preHeader} />
      <View style={styles.header}>
        <Image
          source={logoMcDonalds}
          style={styles.logoHeader}
          resizeMode="contain"  
        />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.carousel}>
            <Carousel      
              data={carouselData}
              renderItem={renderItem}
              sliderWidth={Dimensions.get("window").width}
              itemWidth={Dimensions.get("window").width}
              layout="default"
              autoplay={true}
              loop={true}
              onSnapToItem={(index: SetStateAction<number>) =>
                setActiveSlide(index)
              }
            />
            <View style={styles.pagina}>{renderPagination()}</View>
          </View>
          <View style={styles.promos}>
            <Text style={styles.textDelivery}>Peça e Retire</Text>
            <Image
              source={require("../assets/mc1.png")}
              style={styles.imagemDelivery}
              resizeMode="contain"
            />
            <Text style={styles.textDelivery}>McDelivery</Text>
            <Image
              source={require("../assets/mcDelivery.jpg")}
              style={styles.imagemDelivery}
              resizeMode="contain"
            />
            <Text style={styles.textDelivery}>Cupons</Text>
            <Image
              source={require("../assets/cupom.png")}
              style={styles.imagemDelivery}
              resizeMode="contain"
            />
            <Text style={styles.textDelivery}>Méqui Vip Drive</Text>
            <Image
              source={require("../assets/mcdrive.jpg")}
              style={styles.imagemDelivery}
              resizeMode="contain"
            />
            <Text style={styles.textDelivery}>Restaurantes</Text>
            <Image
              source={require("../assets/restaurantes.png")}
              style={styles.imagemDelivery}
              resizeMode="contain"
            />
            <Text style={styles.textDelivery}>Meus Cupons Gerados</Text>
            <Image
              source={require("../assets/cupons.png")}
              style={styles.imagemDelivery}
              resizeMode="contain"
            />
          </View>
          <StatusBar style="auto" />
        </View>
      </ScrollView>
      <View style={styles.header}>
        <Image
          source={footerMC}
          resizeMode="contain"
          style={styles.footer}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  header: {
    height: 55,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  logoHeader: {
    width: 87,
    height: 27,
  },
  preHeader: {
    height: 31,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  carouselItem: {
    width: "100%",
    height: 260,
    borderRadius: 10,
    overflow: "hidden",
  },
  carouselImage: {
    width: "100%",
    height: "100%",
  },
  paginationContainer: {
    bottom: 150,
    alignSelf: "center",
    flexDirection: "row",
    marginTop: 100,
  },
  paginationDot: {
    width: 13,
    height: 13,
    borderRadius: 10,
    backgroundColor: "#ffc206",
    marginHorizontal: -10,
  },
  paginationDotInactive: {
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  textDelivery: {
    fontSize: 23,
    fontWeight: "900",
    marginBottom: -25,
  },
  imagemDelivery: {
    width: "100%",
    height: 220,
  },
  pagination: {
    height: 10,
  },
  carousel: {
    height: 300,
  },
  pagina: {
    height: 0,
  },
  teste: {
    width: 0,
  },
  promos: {
    backgroundColor: "white",
    marginLeft: 20,
    marginRight: 20,
    height: '120%',
  },
  footer:{
    height:"100%",
  },
});
