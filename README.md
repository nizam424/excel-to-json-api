# Excel to JSON API

This API allows users to upload an Excel file (`.xlsx` or `.xls`) and receive the data in JSON format. Follow the steps below to set up and use the API.

---

##  **Prerequisites**
Before starting, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended) 
- [Git](https://git-scm.com/)
- A package manager like **npm** (included with Node.js)

---

##  **Step 1: Clone the Repository**
Open a terminal / vs code terminal and run:
```sh
git clone https://github.com/nizam424/excel-to-json-api.git
cd excel-to-json-api
```
---
##  **Step 2: Install Dependencies**
Run the following command inside the project folder:
```sh
npm install
```
This will download and install all required dependencies used in this API.

---

##  **Step 3: Start the Server**
Run the following command to start the API:
```sh
cd src
node server.js
```
If successful, you should see a message like this on your terminal:
```
Server running on port 3002
```

---

##  **Step 4: Upload an Excel File / Test this API's functionality**
### **Using Postman (Recommended)**
1. Open **Postman** (Download from [here](https://www.postman.com/)).
2. Create a **new request** and set the method to **POST**.
3. Enter the API URL:
   ```
   http://localhost:3002/upload
   ```
4. Go to the **Body** tab and select **form-data**.
5. Add a new field:
   - **Key**: `file`
   - **Type**: `File`
   - **Value**: Select your Excel file (`.xlsx` or `.xls`).
6. Click **Send**.

 If successful, you will receive a JSON response with the converted data.

---

##  **Step 5: (To deploy this api on production level) Deploying the API (Optional)**
### **To Deploy on a Cloud Server (Like Vercel or Railway)**
1. Create an account on **[Vercel](https://vercel.com/)** or **[Railway](https://railway.app/)**.
2. Link your GitHub repository.
3. Deploy the API with one click.
4. Replace `http://localhost:3002/upload` with your deployed URL in Postman.

---

##  **Troubleshooting**
- If you see `No file uploaded`, ensure:
  - You're using **form-data** in Postman.
  - The field name is exactly **file**.
- If the server doesn’t start, check if **Node.js** is installed and dependencies are installed correctly.

---

##  **Contact**
If you have any issues, feel free to contact me by sending a mail  on moh.nizamuddin.khan@gmail.com 🚀

