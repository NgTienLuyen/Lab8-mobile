import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('window');

const ScanScreen = ({ navigation }) => {
  // Dữ liệu sản phẩm
  const productData = {
    name: 'Cà Rốt',
    imageUrl: 'https://img.lazcdn.com/g/p/e17446706a8eaf567aa5933038677a8d.jpg_960x960q80.jpg_.webp',
  };

  // State để lưu trữ giỏ hàng
  const [cart, setCart] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false); // State để quản lý hiển thị giỏ hàng

  const addToCart = () => {
    // Thực hiện hành động thêm vào giỏ hàng
    setCart([...cart, productData]); // Thêm sản phẩm vào giỏ hàng
    alert(`${productData.name} đã được thêm vào giỏ hàng!`);
    setIsModalVisible(true); // Hiển thị modal giỏ hàng
  };

  return (
    <View style={styles.container}>
      {/* Hiển thị hình ảnh tràn màn hình */}
      <Image 
        source={{ uri: productData.imageUrl }}
        style={styles.fullscreenImage}
        resizeMode="cover"
      />

      {/* Icon quay lại trang trước */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-back" size={30} color="#fff" />
      </TouchableOpacity>

      {/* Icon quay lại trang chủ */}
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('Home')} // Thay 'Home' bằng tên route của màn hình trang chủ
      >
        <Icon name="home" size={30} color="#fff" />
      </TouchableOpacity>

      {/* Hiển thị thông tin sản phẩm */}
      <View style={styles.productInfo}>
        <Image 
          source={{ uri: productData.imageUrl }}
          style={styles.productThumbnail}
          resizeMode="contain"
        />
        <Text style={styles.productName}>{productData.name}</Text>

        {/* Nút thêm vào giỏ hàng */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={addToCart}
        >
          <Icon name="add-shopping-cart" size={24} color="#fff" />
          <Text style={styles.addButtonText}> Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
      </View>

      {/* Modal hiển thị giỏ hàng */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Giỏ hàng của bạn</Text>
            {cart.map((item, index) => (
              <View key={index} style={styles.cartItem}>
                <Text style={styles.cartItemText}>{item.name}</Text>
                <Image source={{ uri: item.imageUrl }} style={styles.cartItemImage} />
              </View>
            ))}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Đóng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  fullscreenImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width,
    height: height,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    padding: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  homeButton: {
    position: 'absolute',
    top: 40,
    right: 16,
    padding: 10,
  },
  productInfo: {
    flexDirection: 'column',
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    elevation: 10,
    margin: 16,
    width: '90%',
    position: 'absolute',
    bottom: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    alignSelf: 'center',
  },
  productName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 10,
  },
  productThumbnail: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 10,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6C63FF',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    alignSelf: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Nền trong suốt
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  cartItemText: {
    fontSize: 18,
    marginRight: 10,
  },
  cartItemImage: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ScanScreen;
