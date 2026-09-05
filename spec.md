ParkEasy Nepal

Smart Parking Reservation and Management System

Version: 1.0
Project Type: Mobile Application / Web-based Parking Management System
Target Market: Kathmandu Valley, Nepal

1. Project Overview

ParkEasy Nepal is a smart parking application designed to help vehicle owners find, reserve, and manage parking spaces efficiently. The application provides information about nearby parking locations, parking availability, prices, navigation, reservations, and digital payments.

The system also provides parking operators with a platform to manage their parking spaces, reservations, and availability digitally.

The main goal of ParkEasy Nepal is to reduce the time and fuel wasted while searching for parking and help reduce unnecessary traffic congestion in busy areas of Kathmandu Valley.

2. Problem Statement

Finding a suitable parking space is a major challenge for vehicle owners in busy areas of Kathmandu Valley. Drivers often spend considerable time searching for available parking, which contributes to traffic congestion, fuel consumption, and frustration.

Currently, there is limited real-time information about parking availability, prices, and locations. Most drivers must physically visit different parking areas to determine whether spaces are available. Additionally, the lack of an organized digital reservation and payment system makes parking management inefficient for both drivers and parking operators.

Therefore, there is a need for a smart parking application that provides real-time parking availability, location-based search, reservation options, navigation, and digital payment services.

3. Objectives

3.1 Main Objective

To develop a smart mobile application that helps vehicle owners find, reserve, and manage parking spaces efficiently in busy areas of Kathmandu Valley.

3.2 Specific Objectives

1. Provide real-time information about available parking spaces.
2. Allow users to search for nearby parking locations using GPS and map integration.
3. Enable users to reserve parking spaces in advance.
4. Provide information about parking prices, capacity, and operating availability.
5. Integrate digital payment options for convenient parking payments.
6. Provide navigation assistance to guide users to their selected parking location.
7. Help parking operators manage parking spaces and reservations digitally.
8. Reduce the time, fuel consumption, and traffic congestion caused by searching for parking.

4. Target Users

4.1 Vehicle Owners

Users who need to find and reserve parking spaces.

They can:

Search for parking
View parking availability
Compare parking prices
Reserve parking
Make payments
Navigate to parking locations
View parking history

4.2 Parking Operators

Businesses or individuals who manage parking facilities.

They can:

Register parking locations
Add parking spaces
Update availability
Manage reservations
View parking sessions
Monitor payments
View parking reports

4.3 System Administrator

The administrator manages the overall platform.

The administrator can:

Manage users
Manage parking operators
Approve parking locations
Monitor reservations
Monitor payments
Manage reported issues
View system analytics

5. Core Features

5.1 User Registration and Login

Users can create an account using:

Name
Email
Phone number
Password

Users can securely log in and manage their profile.

5.2 Parking Search

Users can search for available parking based on:

Current location
Destination
Distance
Price
Vehicle type
Availability

5.3 Live Parking Availability

The system displays the current availability of parking spaces.

Example:

Thamel Parking**

Total spaces: 50
Available: 12
Occupied: 38
Price: Rs. 50/hour

Availability can be updated by parking operators.

5.4 Parking Details

Each parking location provides:

Parking name
Address
Location on map
Available spaces
Total capacity
Parking price
Operating hours
Vehicle types supported
Contact information
User ratings and reviews

5.5 Parking Reservation

Users can select a parking location and reserve a space.

Reservation information includes:

* Parking location
* Vehicle
* Date
* Start time
* End time
* Reservation status
* Estimated price

5.6 GPS and Navigation

The application uses GPS and map services to help users find nearby parking.

Users can:

1. Select a parking location.
2. View the location on a map.
3. Get directions.
4. Navigate to the parking location.

5.7 Digital Payment

The system supports digital parking payments.

Possible payment methods include:

* eSewa
* Khalti
* Fonepay
* Debit/Credit Card

After successful payment, the user receives a digital receipt.

5.8 Parking Timer

When a user starts a parking session, the system records the parking time.

The user can view:

* Start time
* Current duration
* End time
* Parking cost

The system can notify the user before the parking session expires.

5.9 Vehicle Management

Users can register multiple vehicles.

Example:

| Vehicle | Number Plate  | Type       |
| ------- | ------------- | ---------- |
| My Car  | BA 01 PA 1234 | Car        |
| My Bike | BA 02 PA 5678 | Motorcycle |

5.10 Parking History

Users can view previous parking sessions.

Information includes:

* Parking location
* Date
* Duration
* Amount paid
* Payment method
* Reservation status

5.11 Notifications

The system sends notifications for:

* Reservation confirmation
* Payment confirmation
* Parking session starting
* Parking expiry
* Reservation cancellation
* Parking availability changes

6. Parking Operator Features

Parking operators have a separate dashboard.

They can:

Manage Parking Locations

* Add parking location
* Edit parking details
* Update operating hours
* Add pricing information

Manage Parking Spaces

* Add parking spaces
* Mark spaces as available
* Mark spaces as occupied
* View total capacity

Manage Reservations

Operators can:

* View upcoming reservations
* Confirm reservations
* Cancel reservations
* View active parking sessions

Reports

Operators can view:

* Daily revenue
* Number of vehicles
* Occupancy rate
* Reservations
* Parking usage

7. Administrator Features

The administrator controls the entire system.

User Management

* View users
* Update users
* Suspend accounts
* Remove accounts

Parking Management

* Approve parking operators
* Approve parking locations
* Manage parking information

Monitoring

* Monitor reservations
* Monitor transactions
* Monitor complaints
* View system statistics

8. Functional Requirements

The system shall:

1. Allow users to register and log in.
2. Allow users to manage their profiles.
3. Allow users to register vehicles.
4. Display available parking locations.
5. Display parking prices.
6. Display parking capacity.
7. Use GPS to locate nearby parking.
8. Allow users to reserve parking.
9. Store reservation information.
10. Process digital payments.
11. Generate payment receipts.
12. Track parking sessions.
13. Send notifications.
14. Store parking history.
15. Allow operators to manage parking spaces.
16. Allow administrators to manage the system.

9. Non-Functional Requirements

Performance

The application should provide parking information quickly and efficiently.

Security

The system should protect:

* User accounts
* Passwords
* Personal information
* Payment information
* Reservation information

Usability

The application should have a simple and user-friendly interface that can be easily used by drivers.

Availability

The system should be available whenever users need to find parking.

Scalability

The application should be capable of supporting additional parking locations and users as the service expands throughout Nepal.

Reliability

Parking availability and reservation information should be updated accurately to avoid double booking.

10. System Workflow

 User Workflow

```text
Open Application
       ↓
Login / Register
       ↓
Allow Location Access
       ↓
Search for Parking
       ↓
View Available Parking
       ↓
Select Parking
       ↓
View Price & Details
       ↓
Select Date & Time
       ↓
Reserve Parking
       ↓
Make Digital Payment
       ↓
Receive Confirmation
       ↓
Navigate to Parking
       ↓
Start Parking Session
       ↓
Complete Parking
       ↓
View Receipt & History
```

 11. Database Design

The initial database can contain the following tables:

Users

* user_id
* name
* email
* phone
* password
* role
* created_at

Vehicles

* vehicle_id
* user_id
* vehicle_number
* vehicle_type
* vehicle_model

Parking_Locations

* parking_id
* operator_id
* name
* address
* latitude
* longitude
* capacity
* price_per_hour
* opening_time
* closing_time
* status

Parking_Spaces

* space_id
* parking_id
* space_number
* vehicle_type
* status

Reservations

* reservation_id
* user_id
* parking_id
* vehicle_id
* start_time
* end_time
* status
* total_amount

Payments

* payment_id
* reservation_id
* user_id
* amount
* payment_method
* transaction_id
* payment_status
* payment_date

Parking_Sessions

* session_id
* reservation_id
* vehicle_id
* entry_time
* exit_time
* duration
* total_cost

Notifications

* notification_id
* user_id
* title
* message
* status
* created_at

### Reviews

* review_id
* user_id
* parking_id
* rating
* comment
* created_at


12. Suggested Technology Stack

## Frontend

**Flutter**

Flutter can be used to develop the mobile application for Android and iOS.

## Backend

**Node.js + Express.js**

The backend will manage:

* Authentication
* Parking information
* Reservations
* Payments
* User data
* API requests

Database

**MySQL**

MySQL will store user, vehicle, parking, reservation, payment, and session information.

Maps

**Google Maps API**

Used for:

* Maps
* GPS location
* Parking locations
* Navigation

Authentication

JWT-based authentication can be used for secure user sessions.

 13. User Interface Pages

### User Application

1. Splash Screen
2. Login
3. Registration
4. Home
5. Parking Map
6. Search Parking
7. Parking Details
8. Reservation
9. Payment
10. Reservation Confirmation
11. Navigation
12. Parking Timer
13. My Vehicles
14. Parking History
15. Notifications
16. Profile

Operator Dashboard

1. Login
2. Dashboard
3. Parking Locations
4. Parking Spaces
5. Reservations
6. Active Sessions
7. Payments
8. Reports
9. Profile

Admin Dashboard

1. Dashboard
2. Users
3. Operators
4. Parking Locations
5. Reservations
6. Payments
7. Reports
8. Complaints

14. Future Enhancements

The following features can be added in future versions:

* AI-based parking availability prediction
* IoT parking sensors
* Automatic number plate recognition
* EV charging station availability
* Monthly parking subscriptions
* Parking loyalty/reward system
* Voice-based parking search
* Integration with more digital payment platforms
* Expansion to major cities throughout Nepal

15. Expected Outcome

The expected outcome of ParkEasy Nepal is a user-friendly smart parking platform that makes finding and reserving parking spaces easier and more efficient.

The application is expected to:

* Reduce parking search time.
* Reduce unnecessary fuel consumption.
* Help reduce traffic congestion.
* Improve parking space utilization.
* Provide convenient digital parking reservations.
* Simplify parking payments.
* Help parking operators manage their facilities efficiently.

16. Project Scope

The initial version of ParkEasy Nepal will focus on selected busy areas of Kathmandu Valley. The system will provide parking search, availability information, reservations, navigation, payment functionality, and parking management.

The application can later be expanded to other cities and municipalities across Nepal.

17. Success Criteria

The project will be considered successful when users can:

* Create an account.
* Register their vehicle.
* Find nearby parking.
* View available parking spaces.
* View parking prices.
* Reserve a parking space.
* Complete a digital payment.
* Navigate to the selected parking location.
* View their parking history.

Parking operators should also be able to manage parking locations, availability, reservations, and payments through the management dashboard.

18. Project Vision

**ParkEasy Nepal aims to make parking in Nepal smarter, faster, and more convenient by connecting drivers with available parking spaces through a single digital platform.**

> Find it. Reserve it. Park it.
