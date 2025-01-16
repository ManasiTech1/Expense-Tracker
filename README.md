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
<img width="959" alt="Screenshot 2025-01-15 231339" src="https://github.com/user-attachments/assets/1d7db7f7-3677-4f69-87e9-c07075eb20a7" />

Add Transaction Details:
<img width="960" alt="Screenshot 2025-01-15 231355" src="https://github.com/user-attachments/assets/89a7aed2-4b59-4060-b658-5d01c29a7008" />

Transaction Categorization Options:
<img width="960" alt="Screenshot 2025-01-15 231438" src="https://github.com/user-attachments/assets/e99a7312-fb12-440b-8e42-470e4b75bf5c" />

Add First Transaction:
<img width="960" alt="Screenshot 2025-01-15 231509" src="https://github.com/user-attachments/assets/bc724384-1292-457b-a6d8-d28e37201f14" />

Success Confirmation:
<img width="960" alt="Screenshot 2025-01-15 231521" src="https://github.com/user-attachments/assets/7b3f1a6a-d42a-4abf-87b4-5aef4fafe413" />

Add Second Transaction:
<img width="960" alt="Screenshot 2025-01-15 231617" src="https://github.com/user-attachments/assets/69ba4927-4cc8-49f7-bcf3-90f4fc04e0a6" />

Add Third Transaction:
<img width="960" alt="Screenshot 2025-01-15 231712" src="https://github.com/user-attachments/assets/541cc4a2-4949-414c-93ec-4294ded71d01" />

Expense Calculation and Dynamic List:
<img width="960" alt="Screenshot 2025-01-15 231733" src="https://github.com/user-attachments/assets/647c7dac-dc9a-4ae5-a567-3622673f74a8" />

Update Transaction:
<img width="960" alt="Screenshot 2025-01-15 231803" src="https://github.com/user-attachments/assets/64371290-4432-44cf-ae4e-b525d6971a29" />

Updated Transaction Confirmation:
<img width="960" alt="Screenshot 2025-01-15 231814" src="https://github.com/user-attachments/assets/259e6f9b-d4cc-46f9-a8c2-2f5127643b8c" />

Updated Expense Calculation and Dynamic List:
<img width="960" alt="Screenshot 2025-01-15 231834" src="https://github.com/user-attachments/assets/e57414a9-6b6b-454c-a532-85bdf93571bb" />

Delete Transaction:
<img width="960" alt="Screenshot 2025-01-15 231857" src="https://github.com/user-attachments/assets/879c92c4-3b51-4d63-b7ff-c5013a4701f8" />

Deleted Transaction Confirmation:
<img width="960" alt="Screenshot 2025-01-15 231908" src="https://github.com/user-attachments/assets/5930080b-54d4-49d8-9514-70bb0fa6a13b" />

Final Updated Expense Calculation and Dynamic List:
<img width="960" alt="Screenshot 2025-01-15 231921" src="https://github.com/user-attachments/assets/a90cb0a5-668a-46d6-a39a-7467e646d756" />

## Responsiveness
The app is responsive, meaning it functions well on both desktop and mobile devices.

## Technologies Used
- Frontend: HTML, CSS, JavaScript
- Storage: LocalStorage for data persistence
- Libraries and Frameworks: Bootstrap 5, SweetAlert, Font Awesome
