# Expense Tracker Web App
The Expense Tracker web application helps users manage their finances efficiently. Users can input income and expenses, categorize transactions and view a summary of their financial activities.

## Architecture
The app follows a client-side architecture utilizing HTML for structure, CSS for styling, and JavaScript for dynamic behaviour and functionality.

## Frontend Architecture
The frontend of the app consists of three primary components:

- HTML: Defines the structure of the app, including forms for adding transactions, displaying a list of transactions and showing summaries (e.g., total balance).
- CSS: Ensures the app is visually appealing, responsive to different screen sizes and features a modern, clean design for an optimal user experience.
- JavaScript:
  - Adding Transactions: Processes user inputs and stores them temporarily in memory.
  - Displaying Transactions: Dynamically updates the page to show the added transaction.
  - Calculations: Calculates total income and expenses separately and displays the net income (total income - total expenses).
  - Validation: Implements basic input validation to ensure users enter valid data and provides error messages for incorrect or incomplete inputs.
  - Edit or Delete: Allows users to edit or delete individual transactions.
  - Local Storage: Optionally persists data across sessions using localStorage.

## App Workflow
![Workflow](https://github.com/user-attachments/assets/a3f4e7ab-209e-4e10-9718-9d57ec111669)

The app workflow follows these steps:

- User Inputs: Users can input transaction via a form with fields for the date, description, category, transaction type and amount.
- Expense Calculation: After adding a transaction, the app immediately updates the total income and total expense including the net balance displayed at the top of the page.
- Dynamic List: A dynamic list of income and expense is displayed, with each entry including transaction details and buttons for editing and removal.
- Data Persistence: Optionally, the app saves data to localStorage to ensure persistence even after refreshing the page.

## Illustrations
Below are some snapshots of the application:

Home Page:
<img width="960" alt="Screenshot 2025-01-16 185131" src="https://github.com/user-attachments/assets/dc61cb4d-ee84-4687-b2a4-13efbb6b7a72" />

Add Transaction Details:
<img width="960" alt="Screenshot 2025-01-16 184536" src="https://github.com/user-attachments/assets/5372d2a0-5518-4004-a2bd-6c6ea9ae508d" />

Transaction Categorization Options:


Add First Transaction:
<img width="960" alt="Screenshot 2025-01-16 184618" src="https://github.com/user-attachments/assets/453036ef-1f94-4b1c-b0c5-6d115f907270" />


Success Confirmation:
<img width="960" alt="Screenshot 2025-01-16 184633" src="https://github.com/user-attachments/assets/a97180f1-5d76-4a64-a41d-280b2daa0e6f" />


Add Second Transaction:
<img width="960" alt="Screenshot 2025-01-16 184713" src="https://github.com/user-attachments/assets/2c015707-3f3d-4194-858e-56778b1b9b21" />


Add Third Transaction:
<img width="960" alt="Screenshot 2025-01-16 184813" src="https://github.com/user-attachments/assets/f73087f2-a045-4433-866d-846cc30e5329" />


Expense Calculation and Dynamic List:
<img width="960" alt="Screenshot 2025-01-16 184848" src="https://github.com/user-attachments/assets/85feb67a-48cd-4eef-bd4f-403485c9831f" />


Update Transaction:
<img width="960" alt="Screenshot 2025-01-16 184927" src="https://github.com/user-attachments/assets/b6d747ad-58b8-4e40-80b7-78e4e712d0ff" />


Updated Transaction Confirmation:
<img width="960" alt="Screenshot 2025-01-16 184938" src="https://github.com/user-attachments/assets/7c662edf-f1af-4348-8fe0-6981f41fd44a" />


Updated Expense Calculation and Dynamic List:
<img width="960" alt="Screenshot 2025-01-16 184956" src="https://github.com/user-attachments/assets/4d421481-f2e7-46a9-a562-f565150e15f7" />


Delete Transaction:
<img width="960" alt="Screenshot 2025-01-16 185015" src="https://github.com/user-attachments/assets/83be1b21-d284-487c-9e0c-d4b16d059649" />

Deleted Transaction Confirmation:
<img width="960" alt="Screenshot 2025-01-16 185027" src="https://github.com/user-attachments/assets/7a5a248e-f689-4249-afad-7e9e0320fdae" />


Final Updated Expense Calculation and Dynamic List:
<img width="960" alt="Screenshot 2025-01-16 185038" src="https://github.com/user-attachments/assets/133c9b71-be60-4579-8e5f-547da6d1329c" />


## Responsiveness
The app is responsive, meaning it functions well on both desktop and mobile devices.

## Technologies Used
- Frontend: HTML, CSS, JavaScript
- Storage: LocalStorage for data persistence
- Libraries and Frameworks: Bootstrap 5, SweetAlert, Font Awesome
