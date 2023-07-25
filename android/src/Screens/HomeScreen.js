import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import {Dropdown} from 'react-native-element-dropdown';

const cities = [
  {label: 'Agartala', value: '1'},
  {label: 'Agra', value: '2'},
  {label: 'Ahmedabad', value: '3'},
  {label: 'Aizawl', value: '4'},
  {label: 'Ajmer', value: '5'},
  {label: 'Allahabad', value: '6'},
  {label: 'Amritsar', value: '7'},
  {label: 'Banglore', value: '8'},
  {label: 'Bhopal', value: '9'},
  {label: 'Bhubneshwar', value: '10'},
  {label: 'Bikaner', value: '11'},
  {label: 'Chandigarh', value: '12'},
  {label: 'Chennai', value: '13'},
  {label: 'Dehradun', value: '14'},
  {label: 'Dispur', value: '15'},
  {label: 'Gandhinagar', value: '16'},
  {label: 'Gangtok', value: '17'},
  {label: 'Ghaziabad', value: '18'},
  {label: 'Gurgaon', value: '19'},
  {label: 'Guwahati', value: '20'},
  {label: 'Hyderabad', value: '21'},
  {label: 'Imphal', value: '22'},
  {label: 'Indore', value: '23'},
  {label: 'Itanagar', value: '24'},
  {label: 'Jaipur', value: '25'},
  {label: 'Jamnagar', value: '26'},
  {label: 'Jodhpur', value: '27'},
  {label: 'Kanpur', value: '28'},
  {label: 'Kochi', value: '29'},
  {label: 'Kohima', value: '30'},
  {label: 'Kolkata', value: '31'},
  {label: 'Kota', value: '32'},
  {label: 'Lucknow', value: '33'},
  {label: 'Ludhania', value: '34'},
  {label: 'Meerut', value: '35'},
  {label: 'Mumbai', value: '36'},
  {label: 'Nagpur', value: '37'},
  {label: 'Nashik', value: '38'},
  {label: 'Naya Raipur', value: '39'},
  {label: 'New Delhi', value: '40'},
  {label: 'Pali', value: '41'},
  {label: 'Patna', value: '42'},
  {label: 'Pune', value: '43'},
  {label: 'Rajkot', value: '44'},
  {label: 'Ranchi', value: '45'},
  {label: 'Shillong', value: '46'},
  {label: 'Shimla', value: '47'},
  {label: 'Srinagar', value: '48'},
  {label: 'Surat', value: '49'},
  {label: 'Thiruvanathapuram', value: '50'},
  {label: 'Udaipur', value: '51'},
  {label: 'Vadodara', value: '52'},
];

const serviceTypes = [
  {label: 'Service', value: '53'},
  {label: 'Product', value: '54'},
  {label: 'Maintenance', value: '55'},
];

const HomeScreen = () => {
  const navigation = useNavigation();

  // useEffect(() => {
  //  fetchBanner()

  // }, [])

  // const fetchBanner = async() => {
  //   try {
  //     const params = {
  //       mobile: '999999',
  //       password: 'hfkjdgkj'
  //     }

  //     const formData = new FormData()
  //     for (let key in params){
  //       FormData.append(key, params[key])
  //     }
  //     const response = await fetch()

  //     const newResponse = await response.json()

  //     if(newResponse){
  //       const {Status, Message} = newResponse
  //       if(Status === true){
  //         const {data} = newResponse
  //         setProducts(data)
  //         navigation.navi
  //       }
  //     }

  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  const handleCategoryPress = () => {
    // Handle category press
  };

  const handleProductPress = () => {
    // Handle product press
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.drawerButton}
          onPress={() => navigation.navigate('DrawerScreen')}>
          <Text style={styles.drawerButtonText}>Menu</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>CivilDeal</Text>
        <TouchableOpacity
          style={styles.navigationOption}
          onPress={() => navigation.navigate('RequirementScreen')}>
          <Text style={styles.navigationOptionText}>New Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationOption}></TouchableOpacity>
      </View>
      <View style={styles.dropDownContainer}>
        <Dropdown
          style={styles.dropDownBox}
          placeholderStyle={styles.dropDownPlaceholder}
          selectedTextStyle={styles.dropDownSelectedText}
          data={cities}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select City"
          // value={value}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderItem={item => (
            <Text
              style={{
                color: 'black',
                paddingVertical: 5,
                paddingHorizontal: 10,
                fontSize: 20,
              }}>
              {item.label}
            </Text>
          )}
        />
      </View>

      <View style={styles.dropDownContainer}>
        <Dropdown
          style={styles.dropDownBox}
          placeholderStyle={styles.dropDownPlaceholder}
          selectedTextStyle={styles.dropDownSelectedText}
          data={serviceTypes}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Service"
          // value={value}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderItem={item => (
            <Text
              style={{
                color: 'black',
                paddingVertical: 5,
                paddingHorizontal: 10,
                fontSize: 20,
              }}>
              {item.label}
            </Text>
          )}
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <Swiper
          autoplay={true}
          dotColor="white"
          activeDotColor="darkorange"
          dotStyle={styles.swiperDot}
          activeDotStyle={styles.swiperActiveDot}>
          <View style={styles.swiperImageContainer}>
            <Image
              // resizeMode=""
              source={require('../Screens/1.jpg')}
              style={styles.swiperImage}
            />
          </View>
          <View style={styles.swiperImageContainer}>
            <Image
              source={require('../Screens/2.jpg')}
              style={styles.swiperImage}
            />
          </View>
          <View style={styles.swiperImageContainer}>
            <Image
              source={require('../Screens/3.jpg')}
              style={styles.swiperImage}
            />
          </View>
        </Swiper>
        <View style={styles.rectangleContainer}>
          <Text style={styles.rectangleText}>CIVILMALL</Text>
        </View>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Product here"
            placeholderTextColor="#999"
          />
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryHeading}>Category</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={styles.categoryItem}
              onPress={() => navigation.navigate('CementScreen')}>
              <View style={styles.categoryImageContainer}>
                <Image
                  source={require('../Screens/cement.jpg')}
                  style={styles.categoryImage}
                />
              </View>
              <Text style={styles.categoryText}>Cement</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryItem}
              onPress={() => navigation.navigate('BrickScreen')}>
              <View style={styles.categoryImageContainer}>
                <Image
                  source={require('../Screens/brick.jpg')}
                  style={styles.categoryImage}
                />
              </View>
              <Text style={styles.categoryText}>Brick</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryItem}
              onPress={() => navigation.navigate('SandScreen')}>
              <View style={styles.categoryImageContainer}>
                <Image
                  source={require('../Screens/sand.jpg')}
                  style={styles.categoryImage}
                />
              </View>
              <Text style={styles.categoryText}>Sand</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryItem}
              onPress={() => navigation.navigate('TmtBarScreen')}>
              <View style={styles.categoryImageContainer}>
                <Image
                  source={require('../Screens/tmt-bar.jpg')}
                  style={styles.categoryImage}
                />
              </View>
              <Text style={styles.categoryText}>TMT Bar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryItem}
              onPress={() => navigation.navigate('BlockScreen')}>
              <View style={styles.categoryImageContainer}>
                <Image
                  source={require('../Screens/block.jpg')}
                  style={styles.categoryImage}
                />
              </View>
              <Text style={styles.categoryText}>Block</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryItem}
              onPress={() => navigation.navigate('StoneScreen')}>
              <View style={styles.categoryImageContainer}>
                <Image
                  source={require('../Screens/stone.jpg')}
                  style={styles.categoryImage}
                />
              </View>
              <Text style={styles.categoryText}>Stone</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.categoryItem}
              onPress={() => navigation.navigate('ConcreteScreen')}>
              <View style={styles.categoryImageContainer}>
                <Image
                  source={require('../Screens/concrete.jpg')}
                  style={styles.categoryImage}
                />
              </View>
              <Text style={styles.categoryText}>Concrete</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.topProductsContainer}>
          <Text style={styles.topProductsHeading}>Top Products</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={styles.topProductItem}
              onPress={() => navigation.navigate('TPScreen1')}>
              <View style={styles.topProductImageContainer}>
                <Image
                  source={require('../Screens/product1.jpg')}
                  style={styles.topProductImage}
                />
              </View>
              <Text style={styles.topProductName}>DK 1st Grade Bricks</Text>
              <Text style={styles.topProductPrice}>Rs. 7.00</Text>
              <Text style={styles.topProductDiscountPrice}>Rs. 8.00</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.topProductItem}
              onPress={() => navigation.navigate('TPScreen2')}>
              <View style={styles.topProductImageContainer}>
                <Image
                  source={require('../Screens/product2.jpg')}
                  style={styles.topProductImage}
                />
              </View>
              <Text style={styles.topProductName}>2nd Grade Red Bricks</Text>
              <Text style={styles.topProductPrice}>Rs. 5.00</Text>
              <Text style={styles.topProductDiscountPrice}>Rs. 6.00</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.topProductItem}
              onPress={() => navigation.navigate('TPScreen3')}>
              <View style={styles.topProductImageContainer}>
                <Image
                  source={require('../Screens/product3.jpg')}
                  style={styles.topProductImage}
                />
              </View>
              <Text style={styles.topProductName}>Flyash Brick</Text>
              <Text style={styles.topProductPrice}>Rs. 5.00</Text>
              <Text style={styles.topProductDiscountPrice}>Rs. 6.00</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.topProductItem}
              onPress={() => navigation.navigate('TPScreen4')}>
              <View style={styles.topProductImageContainer}>
                <Image
                  source={require('../Screens/product4.jpg')}
                  style={styles.topProductImage}
                />
              </View>
              <Text style={styles.topProductName}>Ultratech OPC Cement</Text>
              <Text style={styles.topProductPrice}>Rs. 400.00</Text>
              <Text style={styles.topProductDiscountPrice}>Rs. 440.00</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.topProductItem}
              onPress={() => navigation.navigate('TPScreen5')}>
              <View style={styles.topProductImageContainer}>
                <Image
                  source={require('../Screens/product5.jpg')}
                  style={styles.topProductImage}
                />
              </View>
              <Text style={styles.topProductName}>Shree OPC Cement</Text>
              <Text style={styles.topProductPrice}>Rs. 360.00</Text>
              <Text style={styles.topProductDiscountPrice}>Rs. 390.00</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.topProductItem}
              onPress={() => navigation.navigate('TPScreen6')}>
              <View style={styles.topProductImageContainer}>
                <Image
                  source={require('../Screens/product6.jpg')}
                  style={styles.topProductImage}
                />
              </View>
              <Text style={styles.topProductName}>Banas Sand</Text>
              <Text style={styles.topProductPrice}>Rs. 1300.00</Text>
              <Text style={styles.topProductDiscountPrice}>Rs. 1500.00</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.latestProductsContainer}>
          <Text style={styles.latestProductsHeading}>Latest Products</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={styles.latestProductItem}
              onPress={() => navigation.navigate('LPScreen1')}>
              <View style={styles.latestProductImageContainer}>
                <Image
                  source={require('../Screens/product3.jpg')}
                  style={styles.latestProductImage}
                />
              </View>
              <Text style={styles.latestProductName}>Flyash Brick</Text>
              <Text style={styles.latestProductPrice}>Rs. 5.00</Text>
              <Text style={styles.latestProductDiscountPrice}>Rs. 6.00</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.latestProductItem}
              onPress={() => navigation.navigate('LPScreen2')}>
              <View style={styles.latestProductImageContainer}>
                <Image
                  source={require('../Screens/brick.jpg')}
                  style={styles.latestProductImage}
                />
              </View>
              <Text style={styles.latestProductName}>Red Clay Bricks</Text>
              <Text style={styles.latestProductPrice}>Rs. 6.50</Text>
              <Text style={styles.latestProductDiscountPrice}>Rs. 8.00</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.latestProductItem}
              onPress={() => navigation.navigate('LPScreen3')}>
              <View style={styles.latestProductImageContainer}>
                <Image
                  source={require('../Screens/concrete.jpg')}
                  style={styles.latestProductImage}
                />
              </View>
              <Text style={styles.latestProductName}>
                Crushed Stone Aggregate
              </Text>
              <Text style={styles.latestProductPrice}>Rs. 650.00</Text>
              <Text style={styles.latestProductDiscountPrice}>Rs. 750.00</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.latestProductItem}
              onPress={() => navigation.navigate('LPScreen4')}>
              <View style={styles.latestProductImageContainer}>
                <Image
                  source={require('../Screens/sand.jpg')}
                  style={styles.latestProductImage}
                />
              </View>
              <Text style={styles.latestProductName}>River Sand</Text>
              <Text style={styles.latestProductPrice}>Rs. 750.00</Text>
              <Text style={styles.latestProductDiscountPrice}>Rs. 850.00</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.latestProductItem}
              onPress={() => navigation.navigate('LPScreen5')}>
              <View style={styles.latestProductImageContainer}>
                <Image
                  source={require('../Screens/product4.jpg')}
                  style={styles.latestProductImage}
                />
              </View>
              <Text style={styles.latestProductName}>Ambuja PPC Cement</Text>
              <Text style={styles.latestProductPrice}>Rs. 290.00</Text>
              <Text style={styles.latestProductDiscountPrice}>Rs. 320.00</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.vendorServicesContainer}>
          <Text style={styles.vendorServicesHeading}>Vendor Services</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/a.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>Architect</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/b.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>Main Contractor</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/c.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>Chartered Engineer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/d.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>Electrician</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/e.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>Plumber</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/f.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>Vastushastra</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/g.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>Interior Design</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/h.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>Waterproofing</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/i.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>
                POP and False Ceiling
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/j.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>Pest Control</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/k.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>PVC False Ceiling</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/l.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>
                Aluminium and Glass Work
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/m.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>Solar Panel Service</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/n.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>Modular Kitchen</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/o.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>Carpenter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/p.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>AC Fitting</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/q.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>
                Iron and Steel Fabrication
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/r.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>Painter</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/s.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>Curtains and Carpets</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/t.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>
                Tile and Marble Fitting
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/u.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>Housekeeping</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/v.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>Landscape Garden</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/w.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>Stone Elevation</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/x.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>
                Fire Fighting Equipment
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/y.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>CCTV</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/z.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>Elevator & Lift</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorServiceItem}
              onPress={() => {}}>
              <View style={styles.vendorServiceIconContainer}>
                <Image
                  source={require('../Screens/zz.png')}
                  style={styles.vendorServiceIcon}
                />
              </View>
              <Text style={styles.vendorServiceText}>Road Developer</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.vendorProductsContainer}>
          <Text style={styles.vendorProductsHeading}>Vendor Products</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={styles.vendorProductItem}
              onPress={() => {}}>
              <View style={styles.vendorProductIconContainer}>
                <Image
                  source={require('../Screens/cement.jpg')}
                  style={styles.vendorProductIcon}
                />
              </View>
              <Text style={styles.vendorProductText}>Cement</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorProductItem}
              onPress={() => {}}>
              <View style={styles.vendorProductIconContainer}>
                <Image
                  source={require('../Screens/brick.jpg')}
                  style={styles.vendorProductIcon}
                />
              </View>
              <Text style={styles.vendorProductText}>Brick</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorProductItem}
              onPress={() => {}}>
              <View style={styles.vendorProductIconContainer}>
                <Image
                  source={require('../Screens/sand.jpg')}
                  style={styles.vendorProductIcon}
                />
              </View>
              <Text style={styles.vendorProductText}>Sand</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorProductItem}
              onPress={() => {}}>
              <View style={styles.vendorProductIconContainer}>
                <Image
                  source={require('../Screens/tmt-bar.jpg')}
                  style={styles.vendorProductIcon}
                />
              </View>
              <Text style={styles.vendorProductText}>TMT Bar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorProductItem}
              onPress={() => {}}>
              <View style={styles.vendorProductIconContainer}>
                <Image
                  source={require('../Screens/block.jpg')}
                  style={styles.vendorProductIcon}
                />
              </View>
              <Text style={styles.vendorProductText}>Block</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorProductItem}
              onPress={() => {}}>
              <View style={styles.vendorProductIconContainer}>
                <Image
                  source={require('../Screens/stone.jpg')}
                  style={styles.vendorProductIcon}
                />
              </View>
              <Text style={styles.vendorProductText}>Stone</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorProductItem}
              onPress={() => {}}>
              <View style={styles.vendorProductIconContainer}>
                <Image
                  source={require('../Screens/concrete.jpg')}
                  style={styles.vendorProductIcon}
                />
              </View>
              <Text style={styles.vendorProductText}>Concrete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorProductItem}
              onPress={() => {}}>
              <View style={styles.vendorProductIconContainer}>
                <Image
                  source={require('../Screens/electricals.jpg')}
                  style={styles.vendorProductIcon}
                />
              </View>
              <Text style={styles.vendorProductText}>Electricals</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorProductItem}
              onPress={() => {}}>
              <View style={styles.vendorProductIconContainer}>
                <Image
                  source={require('../Screens/sanitary.jpg')}
                  style={styles.vendorProductIcon}
                />
              </View>
              <Text style={styles.vendorProductText}>Sanitary</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorProductItem}
              onPress={() => {}}>
              <View style={styles.vendorProductIconContainer}>
                <Image
                  source={require('../Screens/paints.jpg')}
                  style={styles.vendorProductIcon}
                />
              </View>
              <Text style={styles.vendorProductText}>Paints</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorProductItem}
              onPress={() => {}}>
              <View style={styles.vendorProductIconContainer}>
                <Image
                  source={require('../Screens/tam.jpg')}
                  style={styles.vendorProductIcon}
                />
              </View>
              <Text style={styles.vendorProductText}>Tile and Marble</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorProductItem}
              onPress={() => {}}>
              <View style={styles.vendorProductIconContainer}>
                <Image
                  source={require('../Screens/hardware.jpg')}
                  style={styles.vendorProductIcon}
                />
              </View>
              <Text style={styles.vendorProductText}>Hardware</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={styles.vendorMaintenanceContainer}>
          <Text style={styles.vendorMaintenanceHeading}>
            Vendor Maintenance
          </Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={styles.vendorMaintenanceItem}
              onPress={() => {}}>
              <View style={styles.vendorMaintenanceIconContainer}>
                <Image
                  source={require('../Screens/er.jpg')}
                  style={styles.vendorMaintenanceIcon}
                />
              </View>
              <Text style={styles.vendorMaintenanceText}>
                Electric Repairing
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorMaintenanceItem}
              onPress={() => {}}>
              <View style={styles.vendorMaintenanceIconContainer}>
                <Image
                  source={require('../Screens/pr.jpg')}
                  style={styles.vendorMaintenanceIcon}
                />
              </View>
              <Text style={styles.vendorMaintenanceText}>
                Plumbing repairing
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorMaintenanceItem}
              onPress={() => {}}>
              <View style={styles.vendorMaintenanceIconContainer}>
                <Image
                  source={require('../Screens/cctv.jpg')}
                  style={styles.vendorMaintenanceIcon}
                />
              </View>
              <Text style={styles.vendorMaintenanceText}>CCTV maintenance</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorMaintenanceItem}
              onPress={() => {}}>
              <View style={styles.vendorMaintenanceIconContainer}>
                <Image
                  source={require('../Screens/ro.jpg')}
                  style={styles.vendorMaintenanceIcon}
                />
              </View>
              <Text style={styles.vendorMaintenanceText}>
                RO & Geyser Repairing
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorMaintenanceItem}
              onPress={() => {}}>
              <View style={styles.vendorMaintenanceIconContainer}>
                <Image
                  source={require('../Screens/ac.jpg')}
                  style={styles.vendorMaintenanceIcon}
                />
              </View>
              <Text style={styles.vendorMaintenanceText}>AC Repairing</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.vendorMaintenanceItem}
              onPress={() => {}}>
              <View style={styles.vendorMaintenanceIconContainer}>
                <Image
                  source={require('../Screens/prs.jpg')}
                  style={styles.vendorMaintenanceIcon}
                />
              </View>
              <Text style={styles.vendorMaintenanceText}>
                Plaster Repairing Service
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: -10,
    marginTop: -50,
  },
  drawerButton: {
    marginLeft: 10,
  },
  drawerButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
  },
  navigationOption: {
    marginLeft: 10,
  },
  navigationOptionText: {
    fontSize: 16,
    color: '#FFF',
  },
  scrollView: {
    marginTop: 10,
  },
  dropdownItem: {
    color: 'black', // Set the color of dropdown list items to black
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  dropDownContainer: {
    height: 50,
    width: '100%',
    borderColor: '#c1c1c1',
    borderWidth: 0.5,
    borderRadius: 10,
    // paddingLeft: wp(2),
    backgroundColor: '#fff',
    // elevation: 5,
  },
  dropDownBox: {
    flex: 1,
  },
  dropDownPlaceholder: {
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
    color: '#999',
  },
  dropDownSelectedText: {
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
    color: '#333',
  },

  dropdownItem: {
    color: 'black', // Set the color of dropdown list items to black
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  dropDownContainer: {
    height: 50,
    width: '100%',
    borderColor: '#c1c1c1',
    borderWidth: 0.5,
    borderRadius: 10,
    // paddingLeft: wp(2),
    backgroundColor: '#fff',
    // elevation: 5,
  },
  dropDownBox: {
    flex: 1,
  },
  dropDownPlaceholder: {
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
    color: '#999',
  },
  dropDownSelectedText: {
    fontSize: 12,
    fontFamily: 'Roboto-Bold',
    color: '#333',
  },

  swiperImageContainer: {
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
  },
  swiperImage: {
    borderRadius: 20,
    width: '100%',
    height: 100,
  },
  swiperDot: {
    backgroundColor: 'orange',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 10,
  },
  swiperActiveDot: {
    backgroundColor: 'orange',
    width: 12,
    height: 12,
    borderRadius: 6,
    marginTop: 1460,
  },
  rectangleContainer: {
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    marginTop: -740,
  },
  rectangleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
  },
  categoryHeading: {
    color: 'black',
    backgroundColor: 'skyblue',
    paddingVertical: 15,
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryContainer: {
    backgroundColor: 'white',
    marginTop: 10,
    paddingVertical: 10,
  },
  categoryItem: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  categoryImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  categoryText: {
    color: 'black',
    fontSize: 16,
  },
  topProductsContainer: {
    marginTop: 10,
  },
  topProductsHeading: {
    color: 'black',
    backgroundColor: 'skyblue',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  topProductItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: -10,
    marginHorizontal: 5,
    alignItems: 'center',
    width: 150,
  },
  topProductImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  topProductImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  topProductName: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  topProductPrice: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  topProductDiscountPrice: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    textDecorationLine: 'line-through',
  },
  latestProductsContainer: {
    marginTop: 10,
  },
  latestProductsHeading: {
    color: 'black',
    backgroundColor: 'skyblue',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  latestProductItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 0,
    paddingHorizontal: -10,
    marginHorizontal: 5,
    alignItems: 'center',
    width: 150,
    borderWidth: 1,
    borderColor: 'black',
  },
  latestProductImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  latestProductImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  latestProductName: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  latestProductPrice: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  latestProductDiscountPrice: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    textDecorationLine: 'line-through',
  },
  vendorServicesContainer: {
    paddingHorizontal: 1,
    paddingVertical: 20,
  },
  vendorServicesHeading: {
    color: 'white',
    backgroundColor: 'blue',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  vendorServiceItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 0,
    paddingHorizontal: -10,
    marginHorizontal: 5,
    alignItems: 'center',
    width: 150,
    borderWidth: 1,
    borderColor: 'black',
  },
  vendorServiceIconContainer: {
    width: 60,
    height: 110,
    borderRadius: 30,
    marginBottom: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vendorServiceIcon: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  vendorServiceText: {
    fontSize: 12,
    color: 'black',
  },
  vendorProductsHeading: {
    color: 'white',
    backgroundColor: 'blue',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  vendorProductItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 0,
    paddingHorizontal: -10,
    marginHorizontal: 5,
    alignItems: 'center',
    width: 150,
    borderWidth: 1,
    borderColor: 'black',
  },
  vendorProductIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
  },
  vendorProductIcon: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  vendorProductText: {
    color: 'black',
    fontSize: 16,
  },
  vendorProductsContainer: {
    paddingHorizontal: 1,
    paddingVertical: 20,
  },
  vendorMaintenanceHeading: {
    color: 'white',
    backgroundColor: 'blue',
    textAlign: 'left',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  vendorMaintenanceItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 0,
    paddingHorizontal: -10,
    marginHorizontal: 5,
    alignItems: 'center',
    width: 150,
    borderWidth: 1,
    borderColor: 'black',
  },
  vendorMaintenanceIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
  },
  vendorMaintenanceIcon: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  vendorMaintenanceText: {
    color: 'black',
    fontSize: 16,
  },
  vendorMaintenanceContainer: {
    paddingHorizontal: 1,
    paddingVertical: 20,
  },
});

export default HomeScreen;
