// App.js
import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ScanScreen from './ScanScreen'; // Thêm import cho ScanScreen

// HomeScreen Component
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Xin Chào 👋</Text>
            <Text style={styles.username}>Tiến Luyện Luyện</Text>
          </View>
          <Image
            source={{ uri: 'https://kenh14cdn.com/2020/7/17/brvn-15950048783381206275371.jpg' }}
            style={styles.profileImage}
          />
        </View>

        <Text style={styles.sectionTitle}>Thông tin của bạn</Text>

        <View style={styles.cardsContainer}>
          <TouchableOpacity style={[styles.card, styles.scanCard]} onPress={() => navigation.navigate('ScanNew')}>
            <Icon name="scan" size={35} color="#FF5722" />
            <Text style={styles.cardTitle}>Quét mới</Text>
            <Text style={styles.cardSubtitle}>Đã quét 483</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card, styles.counterfeitCard]} onPress={() => navigation.navigate('Counterfeits')}>
            <Icon name="alert-circle-outline" size={35} color="#F44336" />
            <Text style={styles.cardTitle}>Hàng giả</Text>
            <Text style={styles.cardSubtitle}>Hàng giả 32</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card, styles.successCard]} onPress={() => navigation.navigate('Success')}>
            <Icon name="checkmark-circle-outline" size={35} color="#4CAF50" />
            <Text style={styles.cardTitle}>Thành công</Text>
            <Text style={styles.cardSubtitle}>Đã thanh toán 8</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.card, styles.directoryCard]} onPress={() => navigation.navigate('Directory')}>
            <Icon name="calendar-outline" size={35} color="#2196F3" />
            <Text style={styles.cardTitle}>Danh bạ</Text>
            <Text style={styles.cardSubtitle}>Lịch sử 26</Text>
          </TouchableOpacity>
        </View>

        {/* Khám Phá Thêm Section */}
        <Text style={styles.exploreTitle}>Khám Phá Thêm</Text>

        {/* Horizontal Scroll for Explore Images */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.exploreContainer}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvBhCAtyR2AC5jrn-ELDWCrEgJVFAutEcgVA&s' }}
            style={styles.exploreImage}
          />
          <Image
            source={{ uri: 'https://img.lazcdn.com/g/p/b8a146b3560d16169a7ef315fafc56cd.jpg_960x960q80.jpg_.webp' }}
            style={styles.exploreImage}
          />
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2SGWgc2m1hvCTmcq1IUdklx8xIYmWwjNPbg&s' }}
            style={styles.exploreImage}
          />
          <Image
            source={{ uri: 'https://img.lazcdn.com/g/p/fd202569b41f03fce006b185cd793877.jpg_960x960q80.jpg_.webp' }}
            style={styles.exploreImage}
          />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

// Dummy Components for Other Tabs
function NotificationScreen() {
  return (
    <View style={styles.center}>
      <Text>Thông Báo</Text>
    </View>
  );
}

function TimeScreen() {
  return (
    <View style={styles.center}>
      <Text>Thời Gian</Text>
    </View>
  );
}

function CartScreen() {
  return (
    <View style={styles.center}>
      <Text>Giỏ Hàng</Text>
    </View>
  );
}

// BottomTabNavigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size, focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Scan') {
              iconName = focused ? 'scan' : 'scan-outline';
            } else if (route.name === 'Time') {
              iconName = focused ? 'time' : 'time-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            }

            // Tăng kích thước icon
            return <Icon name={iconName} size={focused ? 40 : 35} color={color} />;
          },
          tabBarActiveTintColor: '#FF5722', // Màu khi tab được chọn
          tabBarInactiveTintColor: '#999', // Màu khi tab không được chọn
          tabBarStyle: {
            paddingBottom: 10, // Giảm khoảng cách dưới
            height: 70, // Tăng chiều cao tab
            backgroundColor: '#fff',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5, // Đổ bóng thanh tab
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold', // Làm chữ đậm hơn
            paddingBottom: 5, // Tạo khoảng cách giữa text và icon
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Notifications" component={NotificationScreen} />
        
        {/* Custom Scan button */}
        <Tab.Screen
          name="Scan"
          component={ScanScreen}
          options={{
            tabBarButton: (props) => (
              <TouchableOpacity
                {...props}
                style={styles.scanButton}
              >
                <Icon name="scan" size={45} color="#FF5722" />
              </TouchableOpacity>
            ),
          }}
        />
        
        <Tab.Screen name="Time" component={TimeScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Màu nền cho header
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212121', // Màu chữ
  },
  username: {
    fontSize: 20,
    color: '#757575',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#BDBDBD', // Đường viền cho hình ảnh
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 16,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    flexWrap: 'wrap',
  },
  card: {
    width: '48%',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 16,
    elevation: 3,
    marginVertical: 8,
    borderColor: '#E0E0E0', // Đường viền cho thẻ
    borderWidth: 1,
  },
  scanCard: {
    backgroundColor: '#FFEBEE', // Màu nền cho thẻ quét mới
  },
  counterfeitCard: {
    backgroundColor: '#FFCDD2', // Màu nền cho thẻ hàng giả
  },
  successCard: {
    backgroundColor: '#C8E6C9', // Màu nền cho thẻ thành công
  },
  directoryCard: {
    backgroundColor: '#BBDEFB', // Màu nền cho thẻ danh bạ
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#424242', // Màu chữ tiêu đề
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#757575', // Màu chữ phụ
  },
  exploreTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 16,
  },
  exploreContainer: {
    padding: 16,
  },
  exploreImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0', // Đường viền cho hình ảnh
  },
  scanButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#FF5722', // Đường viền cho nút quét
    elevation: 5, // Đổ bóng cho nút
    width: 70,
    height: 70,
    marginBottom: 10, // Tạo khoảng cách dưới
    top: -20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
