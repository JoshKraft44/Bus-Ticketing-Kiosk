# Calgary Transit Bus Ticketing Kiosk

## Overview

This project was developed as part of CPSC 481 (Human-Computer Interaction) to simulate a touch-screen kiosk system for purchasing bus tickets and passes, reloading transit cards, and viewing transit schedules and maps. Designed with usability and accessibility in mind, the system provides a streamlined interface that mimics real-world transit kiosks.

## Features

- **Intuitive Start Interface**  
  Users begin at a welcoming home screen with a clear call-to-action: "Press to Begin."

- **Multifunctional Options**  
  Users can:
  - Purchase **single-use or round-trip tickets**
  - Purchase **daily, monthly, or yearly transit passes**
  - **Reload a transit card** with a custom amount
  - **View a bus route map** or **real-time schedule** for 31st Street NW station

- **User Groups**  
  Supports multiple passenger types:
  - Adult (18–64)
  - Senior (65+)
  - Student (with ID)
  - Minor (under 18)

- **Smart Cart System**  
  - Real-time cart updates for both tickets and passes  
  - Price totals calculated dynamically  
  - Support for adding multiple ticket types in one transaction

- **Student Verification**  
  - Built-in 7-digit student ID validator for discounted rates

- **Flexible Payment Options**  
  - Supports **credit/debit** and **cash** payment flows  
  - Dynamic price rendering based on session data

- **Accessible Guidance**  
  - Each screen includes a guide popup explaining how to use the kiosk  
  - Clearly labeled icons for Back, Cancel, and Help

- **Receipt Screen**  
  - A final confirmation page presents a clean breakdown of purchases

## Technology Stack

- HTML5  
- CSS3 (inline and embedded styling)  
- Vanilla JavaScript (used for session tracking, state transitions, and dynamic updates)

## File Structure

- `PressToBegin.html` – Entry point screen
- `Select_an_Option.html` – Hub to choose ticket/pass, reload, or map/schedule
- `Purchase_Ticket_or_Pass.html` → `Select_Ticket_Type.html` / `Select_Pass_Type.html`
- `Select_User_Group_Ticket.html` / `User_Group_for_Pass.html` – Quantity selection screens
- `Ticket_Cart.html` / `Pass_Cart.html` – View and finalize purchases
- `Enter_Reload_Amount.html` → `Insert_Transit_Card.html` – Transit card reload flow
- `Payment_Methods.html` → `Complete_Cash_Payment.html` / `Complete_Credit_Payment.html`
- `Transaction_Complete.html` – Receipt and closing screen
- `Bus_Schedule.html` / `Bus_Map.html` – Static schedule and embedded map
- `Student_Verification.html` – Optional step for student purchases

## Interaction Flow

1. **Start** → `PressToBegin.html`
2. **Select Option** → `Select_an_Option.html`
3. Depending on the selection:
   - **Buy Ticket/Pass** → Type → Group → Cart → Payment
   - **Reload Card** → Enter Amount → Insert Card → Payment
   - **View Map/Schedule** → Navigate directly to static displays

## Notes

- No backend or server connection is used; everything runs client-side.
- All data is stored temporarily using `sessionStorage` or `localStorage`.
- Visual layout is optimized for 1024×768 kiosk screens.
- Includes basic error handling and user feedback, e.g. for invalid student IDs.

## Authors

Developed by CPSC 481 – Tutorial 06 - Group 02 - Winter 2025  

- Joshua Kraft
- Dyenaan Dapoet 
- Danny Ly
- Nisarg Bhalani
- Chuanheng Bu

University of Calgary  
Instructor: *[Lora Oehlberg]*
TA: *[Huann Zhao]*

## License

This project is for educational purposes only.













Image references:

	arrow_down.png - https://www.flaticon.com/free-icon/down-arrow_959159

	coc-logo.svg - https://commons.wikimedia.org/wiki/File:Calgary_Transit_Logo.svg

	press.png - https://www.flaticon.com/free-icon/tap_655469

	transit_card.png - https://citystore.calgary.ca/ctestore/products

	CalgaryTransitMap.pdf - https://www.scribd.com/document/698944112/Calgary-Transit-2022-System-Map
