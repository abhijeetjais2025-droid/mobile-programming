tsx
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.logo}>🅿️ ParkEasy</Text>
            <Text style={styles.nepal}>Nepal</Text>
          </View>

          <TouchableOpacity style={styles.profileButton}>
            <Text style={styles.profileIcon}>👤</Text>
          </TouchableOpacity>
        </View>

        {/* Welcome */}
        <View style={styles.welcome}>
          <Text style={styles.smallText}>SMART PARKING SOLUTION</Text>

          <Text style={styles.title}>
            Find Parking.{"\n"}
            <Text style={styles.titleGreen}>Park Easy.</Text>
          </Text>

          <Text style={styles.description}>
            Find nearby parking spaces, check availability, reserve a
            spot and pay digitally with ParkEasy Nepal.
          </Text>
        </View>

        {/* Search */}
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>🔍</Text>
          <Text style={styles.searchText}>
            Search parking location...
          </Text>
        </View>

        {/* Nearby Parking */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Nearby Parking</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>

        <View style={styles.parkingCard}>

          <View style={styles.cardTop}>
            <View>
              <Text style={styles.parkingTitle}>
                📍 Thamel Parking
              </Text>
              <Text style={styles.location}>
                Kathmandu, Nepal
              </Text>
            </View>

            <View style={styles.liveBadge}>
              <Text style={styles.liveText}>● LIVE</Text>
            </View>
          </View>

          <View style={styles.parkingDetails}>

            <View>
              <Text style={styles.availableLabel}>
                Available Spaces
              </Text>

              <Text style={styles.availableNumber}>
                12
              </Text>
            </View>

            <View style={styles.distanceBox}>
              <Text style={styles.distance}>0.8 km</Text>
              <Text style={styles.distanceLabel}>Away</Text>
            </View>

          </View>

          <View style={styles.infoRow}>
            <Text style={styles.info}>💰 Rs. 50/hr</Text>
            <Text style={styles.info}>🚗 Car & Bike</Text>
          </View>

          <TouchableOpacity style={styles.reserveButton}>
            <Text style={styles.reserveText}>
              Reserve Now →
            </Text>
          </TouchableOpacity>

        </View>

        {/* Quick Stats */}
        <View style={styles.statsContainer}>

          <View style={styles.statCard}>
            <Text style={styles.statIcon}>⚡</Text>
            <Text style={styles.statTitle}>Real-Time</Text>
            <Text style={styles.statText}>Updates</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statIcon}>📍</Text>
            <Text style={styles.statTitle}>Nearby</Text>
            <Text style={styles.statText}>Locations</Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statIcon}>💳</Text>
            <Text style={styles.statTitle}>Digital</Text>
            <Text style={styles.statText}>Payment</Text>
          </View>

        </View>

        {/* Features */}
        <View style={styles.section}>
          <Text style={styles.sectionTag}>OUR FEATURES</Text>

          <Text style={styles.bigHeading}>
            Everything You Need
          </Text>

          <Text style={styles.sectionDescription}>
            A smarter and more convenient way to find and manage
            parking spaces.
          </Text>

          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>🗺️</Text>
            <Text style={styles.featureTitle}>Live Parking Map</Text>
            <Text style={styles.featureText}>
              View nearby parking locations and check available
              spaces in real time.
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>📍</Text>
            <Text style={styles.featureTitle}>
              Find Nearby Parking
            </Text>
            <Text style={styles.featureText}>
              Use GPS and map integration to quickly locate parking
              spaces near you.
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>📅</Text>
            <Text style={styles.featureTitle}>
              Reserve a Space
            </Text>
            <Text style={styles.featureText}>
              Reserve your parking space in advance and avoid
              unnecessary waiting.
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>💰</Text>
            <Text style={styles.featureTitle}>
              Digital Payment
            </Text>
            <Text style={styles.featureText}>
              Make parking payments quickly through digital
              payment systems.
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>🧭</Text>
            <Text style={styles.featureTitle}>
              Easy Navigation
            </Text>
            <Text style={styles.featureText}>
              Get navigation assistance and reach your selected
              parking location easily.
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>🔔</Text>
            <Text style={styles.featureTitle}>
              Smart Notifications
            </Text>
            <Text style={styles.featureText}>
              Receive reminders about your parking time and
              reservation status.
            </Text>
          </View>

        </View>

        {/* Problem Section */}
        <View style={styles.problemSection}>

          <Text style={styles.sectionTag}>THE PROBLEM</Text>

          <Text style={styles.bigHeading}>
            Parking Shouldn't Be This Difficult.
          </Text>

          <Text style={styles.sectionDescription}>
            Finding a suitable parking space is a major challenge
            for vehicle owners in busy areas of Kathmandu Valley.
          </Text>

          <View style={styles.problemItem}>
            <Text style={styles.problemIcon}>⏰</Text>
            <Text style={styles.problemText}>
              Wasted Time Searching for Parking
            </Text>
          </View>

          <View style={styles.problemItem}>
            <Text style={styles.problemIcon}>⛽</Text>
            <Text style={styles.problemText}>
              Increased Fuel Consumption
            </Text>
          </View>

          <View style={styles.problemItem}>
            <Text style={styles.problemIcon}>🚗</Text>
            <Text style={styles.problemText}>
              Increased Traffic Congestion
            </Text>
          </View>

          <View style={styles.problemItem}>
            <Text style={styles.problemIcon}>⚠️</Text>
            <Text style={styles.problemText}>
              Limited Parking Information
            </Text>
          </View>

        </View>

        {/* Solution */}
        <View style={styles.solutionCard}>

          <Text style={styles.solutionIcon}>💡</Text>

          <Text style={styles.solutionTitle}>
            The Solution
          </Text>

          <Text style={styles.solutionText}>
            ParkEasy Nepal provides a smart and digital solution
            for finding and managing parking spaces.
          </Text>

          <Text style={styles.solutionPoint}>
            ✓ Real-time parking availability
          </Text>

          <Text style={styles.solutionPoint}>
            ✓ Location-based parking search
          </Text>

          <Text style={styles.solutionPoint}>
            ✓ Parking reservations
          </Text>

          <Text style={styles.solutionPoint}>
            ✓ Navigation assistance
          </Text>

          <Text style={styles.solutionPoint}>
            ✓ Digital payment services
          </Text>

        </View>

        {/* Objectives */}
        <View style={styles.section}>

          <Text style={styles.sectionTag}>
            OUR OBJECTIVES
          </Text>

          <Text style={styles.bigHeading}>
            Making Parking Smarter in Nepal
          </Text>

          <Text style={styles.sectionDescription}>
            Our goal is to create a convenient and efficient
            parking experience for drivers and parking operators.
          </Text>

          <View style={styles.objectiveCard}>
            <Text style={styles.objectiveNumber}>01</Text>
            <Text style={styles.objectiveText}>
              Provide real-time information about available
              parking spaces.
            </Text>
          </View>

          <View style={styles.objectiveCard}>
            <Text style={styles.objectiveNumber}>02</Text>
            <Text style={styles.objectiveText}>
              Help users locate nearby parking areas using GPS
              and maps.
            </Text>
          </View>

          <View style={styles.objectiveCard}>
            <Text style={styles.objectiveNumber}>03</Text>
            <Text style={styles.objectiveText}>
              Allow users to reserve parking spaces in advance.
            </Text>
          </View>

          <View style={styles.objectiveCard}>
            <Text style={styles.objectiveNumber}>04</Text>
            <Text style={styles.objectiveText}>
              Provide information about parking prices and
              capacity.
            </Text>
          </View>

          <View style={styles.objectiveCard}>
            <Text style={styles.objectiveNumber}>05</Text>
            <Text style={styles.objectiveText}>
              Integrate convenient digital payment options.
            </Text>
          </View>

          <View style={styles.objectiveCard}>
            <Text style={styles.objectiveNumber}>06</Text>
            <Text style={styles.objectiveText}>
              Provide navigation assistance to parking locations.
            </Text>
          </View>

          <View style={styles.objectiveCard}>
            <Text style={styles.objectiveNumber}>07</Text>
            <Text style={styles.objectiveText}>
              Help parking operators manage spaces digitally.
            </Text>
          </View>

          <View style={styles.objectiveCard}>
            <Text style={styles.objectiveNumber}>08</Text>
            <Text style={styles.objectiveText}>
              Reduce time, fuel consumption, and traffic
              congestion.
            </Text>
          </View>

        </View>

        {/* CTA */}
        <View style={styles.cta}>

          <Text style={styles.ctaTitle}>
            Parking Made Simple.
          </Text>

          <Text style={styles.ctaText}>
            Find it. Reserve it. Park it.
          </Text>

          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>
              Get Started →
            </Text>
          </TouchableOpacity>

        </View>

        {/* Footer */}
        <View style={styles.footer}>

          <Text style={styles.footerLogo}>
            🅿️ ParkEasy Nepal
          </Text>

          <Text style={styles.footerText}>
            © 2026 ParkEasy Nepal
          </Text>

          <Text style={styles.footerText}>
            Smart Parking for a Smarter Nepal.
          </Text>

        </View>

      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navActive}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🗺️</Text>
          <Text style={styles.navText}>Map</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navCenter}>
          <Text style={styles.navCenterIcon}>🅿️</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>📅</Text>
          <Text style={styles.navText}>Bookings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
  },

  scrollContent: {
    paddingBottom: 100,
  },

  /* Header */
  header: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    fontSize: 22,
    fontWeight: "800",
    color: "#172B4D",
  },

  nepal: {
    color: "#16A34A",
    fontSize: 13,
    fontWeight: "700",
    marginLeft: 30,
    marginTop: -3,
  },

  profileButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#E8F5EC",
    justifyContent: "center",
    alignItems: "center",
  },

  profileIcon: {
    fontSize: 20,
  },

  /* Welcome */
  welcome: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  smallText: {
    color: "#16A34A",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 10,
  },

  title: {
    fontSize: 36,
    lineHeight: 42,
    fontWeight: "900",
    color: "#172B4D",
  },

  titleGreen: {
    color: "#16A34A",
  },

  description: {
    color: "#68758A",
    fontSize: 15,
    lineHeight: 23,
    marginTop: 12,
  },

  /* Search */
  searchBox: {
    height: 52,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
    marginTop: 22,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#E5E9F0",
  },

  searchIcon: {
    fontSize: 19,
    marginRight: 10,
  },

  searchText: {
    color: "#9AA3B2",
    fontSize: 14,
  },

  /* Section */
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 28,
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: "800",
    color: "#172B4D",
  },

  seeAll: {
    color: "#16A34A",
    fontWeight: "700",
    marginTop: 4,
  },

  /* Parking Card */
  parkingCard: {
    backgroundColor: "#172B4D",
    marginHorizontal: 20,
    borderRadius: 22,
    padding: 20,
  },

  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  parkingTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
  },

  location: {
    color: "#AEB9C9",
    marginTop: 4,
    fontSize: 13,
  },

  liveBadge: {
    backgroundColor: "#DDF7E5",
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 10,
    height: 27,
  },

  liveText: {
    color: "#16A34A",
    fontSize: 11,
    fontWeight: "800",
  },

  parkingDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
  },

  availableLabel: {
    color: "#AEB9C9",
    fontSize: 12,
  },

  availableNumber: {
    color: "#FFFFFF",
    fontSize: 42,
    fontWeight: "900",
  },

  distanceBox: {
    alignItems: "flex-end",
  },

  distance: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "800",
  },

  distanceLabel: {
    color: "#AEB9C9",
    fontSize: 12,
    marginTop: 3,
  },

  infoRow: {
    flexDirection: "row",
    gap: 18,
    marginTop: 12,
  },

  info: {
    color: "#D5DCE6",
    fontSize: 13,
  },

  reserveButton: {
    backgroundColor: "#16A34A",
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
  },

  reserveText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },

  /* Stats */
  statsContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    gap: 10,
    marginTop: 15,
  },

  statCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    paddingVertical: 15,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8ECF2",
  },

  statIcon: {
    fontSize: 22,
    marginBottom: 5,
  },

  statTitle: {
    color: "#172B4D",
    fontSize: 12,
    fontWeight: "800",
  },

  statText: {
    color: "#8993A4",
    fontSize: 11,
    marginTop: 2,
  },

  /* General Section */
  section: {
    paddingHorizontal: 20,
    marginTop: 40,
  },

  sectionTag: {
    color: "#16A34A",
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1,
    marginBottom: 8,
  },

  bigHeading: {
    fontSize: 27,
    fontWeight: "900",
    color: "#172B4D",
    lineHeight: 33,
  },

  sectionDescription: {
    color: "#68758A",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 9,
    marginBottom: 15,
  },

  /* Features */
  featureCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    padding: 18,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#E8ECF2",
  },

  featureIcon: {
    fontSize: 27,
    marginBottom: 10,
  },

  featureTitle: {
    fontSize: 17,
    fontWeight: "800",
    color: "#172B4D",
  },

  featureText: {
    color: "#748094",
    fontSize: 13,
    lineHeight: 20,
    marginTop: 7,
  },

  /* Problem */
  problemSection: {
    backgroundColor: "#EEF7F1",
    marginTop: 40,
    padding: 20,
    paddingVertical: 35,
  },

  problemItem: {
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  problemIcon: {
    fontSize: 20,
    marginRight: 12,
  },

  problemText: {
    color: "#172B4D",
    fontSize: 13,
    fontWeight: "700",
    flex: 1,
  },

  /* Solution */
  solutionCard: {
    backgroundColor: "#172B4D",
    margin: 20,
    marginTop: 25,
    borderRadius: 20,
    padding: 22,
  },

  solutionIcon: {
    fontSize: 32,
    marginBottom: 10,
  },

  solutionTitle: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "900",
  },

  solutionText: {
    color: "#B8C3D2",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 8,
    marginBottom: 15,
  },

  solutionPoint: {
    color: "#DDE5EE",
    fontSize: 13,
    marginTop: 9,
  },

  /* Objectives */
  objectiveCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#E8ECF2",
  },

  objectiveNumber: {
    color: "#16A34A",
    fontSize: 18,
    fontWeight: "900",
    width: 40,
  },

  objectiveText: {
    color: "#526075",
    fontSize: 13,
    lineHeight: 19,
    flex: 1,
  },

  /* CTA */
  cta: {
    backgroundColor: "#16A34A",
    marginHorizontal: 20,
    marginTop: 40,
    borderRadius: 22,
    padding: 28,
    alignItems: "center",
  },

  ctaTitle: {
    color: "#FFFFFF",
    fontSize: 27,
    fontWeight: "900",
  },

  ctaText: {
    color: "#DDF7E5",
    fontSize: 15,
    marginTop: 7,
  },

  ctaButton: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 25,
    paddingVertical: 13,
    borderRadius: 12,
    marginTop: 20,
  },

  ctaButtonText: {
    color: "#16A34A",
    fontWeight: "900",
    fontSize: 14,
  },

  /* Footer */
  footer: {
    alignItems: "center",
    padding: 30,
  },

  footerLogo: {
    color: "#172B4D",
    fontSize: 19,
    fontWeight: "900",
  },

  footerText: {
    color: "#8A94A5",
    fontSize: 12,
    marginTop: 6,
  },

  /* Bottom Navigation */
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 72,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E9F0",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 8,
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 65,
  },

  navIcon: {
    fontSize: 19,
    marginBottom: 3,
  },

  navText: {
    color: "#8B95A7",
    fontSize: 10,
    fontWeight: "600",
  },

  navActive: {
    color: "#16A34A",
    fontSize: 10,
    fontWeight: "800",
  },

  navCenter: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: "#16A34A",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -25,
    borderWidth: 5,
    borderColor: "#F7F9FC",
  },

  navCenterIcon: {
    fontSize: 25,
  },
});
```
