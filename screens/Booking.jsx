import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Booking = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
        <View style={styles.headerIcons}>
          <Image source={require('../assets/icon.png')} style={styles.headerIcon} />
          <Image source={require('../assets/icon.png')} style={styles.headerIcon} />
        </View>
      </View>

      <View style={styles.ownerInfo}>
        <View style={styles.ownerInfoHeader}>
          <Text style={styles.ownerInfoTitle}>Owner Info</Text>
        </View>
        <View style={styles.ownerDetails}>
          <View style={styles.ownerNameContainer}>
            <Image source={require('../assets/icon.png')} style={styles.iconSmall} />
            <Text style={styles.ownerName}>Farhan Israk Shuvon</Text>
          </View>
          <View style={styles.ownerContactContainer}>
            <Image source={require('../assets/icon.png')} style={styles.iconSmall} />
            <Text style={styles.ownerPhone}>+880 189 098 9098</Text>
          </View>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.callButton}>
              <Text style={styles.callButtonText}>Call</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.viewProfileButton}>
              <Text style={styles.viewProfileButtonText}>View Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.bookingDetails}>
        <View style={styles.dateTimeContainer}>
          <Text style={styles.dateTimeLabel}>Date & Time</Text>
          <Image source={require('../assets/icon.png')} style={styles.iconMedium} />
        </View>
        <Text style={styles.price}>
          <Text style={styles.priceCurrency}>৳</Text>500
          <Text style={styles.priceUnit}>/hr</Text>
        </Text>
        <View style={styles.venueInfo}>
          <Text style={styles.venueName}>Football Playground</Text>
          <View style={styles.venueLocation}>
            <Image source={require('../assets/icon.png')} style={styles.iconSmall} />
            <Text style={styles.venueAddress}>Baluchor,Sylhet</Text>
          </View>
          <Text style={styles.paymentInfo}>Bkash/nagad: +088 178 098 9876</Text>
          <View style={styles.availabilityBadge}>
            <Text style={styles.availabilityText}>available</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.bookNowButton}>
          <Text style={styles.bookNowButtonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginHorizontal: 5,
  },
  ownerInfo: {
    backgroundColor: '#fff',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#e7e7e7',
    margin: 16,
    padding: 16,
  },
  ownerInfoHeader: {
    alignItems: 'flex-end',
  },
  ownerInfoTitle: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 12,
  },
  ownerDetails: {
    marginTop: 10,
  },
  ownerNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconSmall: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  ownerName: {
    fontSize: 20,
    fontWeight: '500',
    color: '#1e1e1e',
  },
  ownerContactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  ownerPhone: {
    fontSize: 16,
    color: '#1e1e1e',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  callButton: {
    backgroundColor: '#7A67FF',
    borderRadius: 41,
    paddingVertical: 8,
    paddingHorizontal: 44,
  },
  callButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  viewProfileButton: {
    borderWidth: 1,
    borderColor: '#c2c6ff',
    borderRadius: 34,
    paddingVertical: 8,
    paddingHorizontal: 44,
  },
  viewProfileButtonText: {
    color: 'rgba(0, 0, 0, 0.8)',
    fontSize: 16,
  },
  bookingDetails: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.21)',
    padding: 16,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.46)',
    borderRadius: 16,
    padding: 12,
    marginBottom: 20,
  },
  dateTimeLabel: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 12,
  },
  iconMedium: {
    width: 24,
    height: 24,
  },
  price: {
    fontSize: 30,
    fontWeight: '500',
    color: 'rgba(30, 30, 30, 0.9)',
    marginBottom: 20,
  },
  priceCurrency: {
    color: 'rgba(30, 30, 30, 0.4)',
    fontSize: 12,
  },
  priceUnit: {
    color: 'rgba(30, 30, 30, 0.4)',
    fontSize: 12,
  },
  venueInfo: {
    marginBottom: 20,
  },
  venueName: {
    fontSize: 14,
    color: '#1e1e1e',
    marginBottom: 5,
  },
  venueLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  venueAddress: {
    fontSize: 14,
    color: '#1e1e1e',
  },
  paymentInfo: {
    fontSize: 14,
    color: '#1e1e1e',
  },
  availabilityBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#009934',
    borderRadius: 32,
    paddingVertical: 4,
    paddingHorizontal: 10,
  },
  availabilityText: {
    color: '#fff',
    fontSize: 12,
    textTransform: 'capitalize',
  },
  bookNowButton: {
    backgroundColor: '#7A67FF',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  bookNowButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Booking;