Developed in CPSC 481 – Tutorial 06 - Group 02 - Winter 2025  

- Joshua Kraft
- Dyenaan Dapoet 
- Danny Ly
- Nisarg Bhalani
- Chuanheng Bu

University of Calgary
Professor: Lora Oehlberg
Head TA: Kathryn Blair
TA: Huann Zhao

Calgary Transit Bus Ticketing Kiosk:

- Live demo: https://cpsc-481.vercel.app/
- Alternatively can go into the FINAL_VERSION folder submitted and then use live server in vs code on "PressToBegin.html"

-  This is a touch-screen kiosk system for purchasing bus tickets and passes, reloading transit cards.


Functions:

- Note that after the Start Screen, at the bottom there are three buttons:
  - The (<-) button is the back button that sends users to the previous page
  - The (X) button is the cancel button that ends current session
  - The (?) button is a guide/instructions pop up 


- Start Screen: 
  Users tap the "Press to Begin" 

- Please Select an Option:
  Users can:
  - Purchase ticket/pass (more options when you select this)
  - Reload a transit card with a custom amount
  - View current schedule for the station
  - View a bus route map  


- Select Purchase Type (After Select an Option):
  If Ticket
  - Choose either single use or round trip
  If Pass
  - Choose daily, monthly or yearly pass

- Select Ticket/Pass User groups:
  - +/- for the user group you want to select for
  - Then press "Add to Cart"
  - Student Verification 
    - Enter a 7-digit student ID checker if user increments the Student (this is after pressing "Add to Cart")
    
  - After this it will go to "Your Cart" below


- Reload Transit Card (After Select an Option):
  - Enter amount you want to reload using the build in keypad
  - Press Confirm and Pay

- Insert Transit Card
  -Tap the arrow to proceed (simulates inserting the transit card)
  - Proceeds to "Select a Payment" below 


- Your Cart
  - Tells you what is in the cart currently
  - If press on "Add More Items" then goes back to the Select Ticket/Pass User groups
  - If press "Checkout" then proceed to payment 

- Select a Payment Method 
  - Tap Credit/Debit or
  - Tap Cash 

- Complete Payment 
  - Tap "Payment Success!"

- Transaction Complete Screen 
  - Can view bus schedule and map of bus routes 
  - Press done to exit back to Start Screen



Image references (rest of references are in the Design Portfolio II):

	arrow_down.png - https://www.flaticon.com/free-icon/down-arrow_959159

	coc-logo.svg - https://commons.wikimedia.org/wiki/File:Calgary_Transit_Logo.svg

	press.png - https://www.flaticon.com/free-icon/tap_655469

	transit_card.png - https://citystore.calgary.ca/ctestore/products

	CalgaryTransitMap.pdf - https://www.scribd.com/document/698944112/Calgary-Transit-2022-System-Map
