import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TPScreen4 = () => {
  const [quantity, setQuantity] = useState(50);

  const increaseQuantity = () => {
    if (quantity < 10000000) {
      setQuantity(quantity + 50);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 50) {
      setQuantity(quantity - 50);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../Screens/product4.jpg')} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>Ultratech OPC Cement</Text>
        <Text style={styles.price}>Rs 400.00</Text>
        <Text style={styles.priceDescription}>per 50 kg bag</Text>
        <View style={styles.discountContainer}>
          <Text style={styles.discountedPrice}>Rs. 440.00</Text>
          <Text style={styles.discountPercentage}>9.09% off</Text>
        </View>
        <Text style={styles.taxIncluded}>(Tax Included)</Text>
        <Text style={styles.stockAvailable}>Stock Available</Text>
        <Text style={styles.shippingCharge}>Shipping Charge: 0Rs.</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.button} onPress={decreaseQuantity}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.minOrderQty}>Min Order Qty: 50</Text>

        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </TouchableOpacity>
        <Text style={styles.descriptionTitle}>Product Description</Text>
        
        <View style={styles.productDetails}>
          <Text style={styles.detailLabel}>Size:</Text>
          <Text style={styles.detailValue}>50 Kg Bag</Text>
          <Text style={styles.detailLabel}>Material:</Text>
          <Text style={styles.detailValue}>Powder</Text>
          <Text style={styles.detailLabel}>Colors:</Text>
          <Text style={styles.detailValue}></Text>
          <Text style={styles.detailLabel}>Company Name:</Text>
          <Text style={styles.detailValue}>Ultratech</Text>
        </View>
        <Text style={styles.description}>
          Cement is more suitable where high early strength is necessary viz. for production of Hogh Strength/ High Performance Concretes and for Rehabilitation/ Retrofitting works. Blended Cements can be used for all general construction works, especially for works in aggresive environmental conditions particularly in coastal areas to counteract chloride and sulphate attacks, water retaining structures, marine works, sewage pipes, mass concrete works such as dams, etc.
        </Text>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: '100%',
    height: 230,
    resizeMode: 'cover',
  },
  detailsContainer: {
    marginTop: 20,
  },
  name: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  price: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  priceDescription: {
    color: 'grey',
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  discountedPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  discountPercentage: {
    fontSize: 14,
    color: 'red',
  },
  taxIncluded: {
    color: 'grey',
    marginTop: 5,
  },
  stockAvailable: {
    color: 'blue',
    marginTop: 10,
  },
  shippingCharge: {
    color: 'skyblue',
    marginTop: 5,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  quantity: {
    color: 'black',
    fontSize: 18,
    marginHorizontal: 20,
  },
  addToCartButton: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  addToCartButtonText: {
    fontSize: 18,
    color: 'white',
  },
  minOrderQty: {
    color: 'red',
    marginTop: 10,
  },
  descriptionTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  description: {
    color: 'black',
    marginTop: 10,
  },
  productDetails: {
    marginTop: 20,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'grey',
  },
  detailValue: {
    color: 'black',
    fontSize: 16,
    marginLeft: 200,
    marginTop: -15,
  },
});

export default TPScreen4;
