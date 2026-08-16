# 🚀 Live Server – Phone Hotspot Data Submission

A simple **Node.js Live Server** that allows users to connect through a **phone hotspot** and submit data from their mobile devices. The submitted data is automatically stored in a local text file on the server.

## 📌 Project Overview

This project demonstrates how to create a lightweight web server using **Node.js and Express.js**. The server can be accessed by other devices connected to the same Wi-Fi or mobile hotspot network.

Users can open the server from their mobile browser, enter information into a form, and submit it. The submitted information is then saved in `data.txt`.

## ✨ Features

* 🌐 Live web server using Node.js
* 📱 Access from mobile devices through a phone hotspot
* 📝 User data submission form
* 💾 Automatically saves submitted data
* 📄 Stores data in a local `data.txt` file
* ⚡ Lightweight and easy to run
* 🔧 Uses Express.js for routing and request handling

## 🛠️ Technologies Used

* **Node.js**
* **Express.js**
* **HTML5**
* **JavaScript**
* **File System (fs)**
* **HTTP/POST Requests**

## 📂 Project Structure

```text
LiveServer/
│
├── public/
│   └── index.html
│
├── data.txt
├── server.js
├── package.json
└── package-lock.json
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project

```bash
cd LiveServer
```

### 3. Install dependencies

```bash
npm install
```

## ▶️ Run the Server

Start the server using:

```bash
node server.js
```

If everything is configured correctly, you should see:

```text
Server Running
```

## 🌐 Open the Server

On the same computer, open:

```text
http://localhost:3000
```

To access the server from a mobile phone:

1. Turn on your phone hotspot.
2. Connect your laptop to the hotspot.
3. Find your laptop's IPv4 address using:

```bash
ipconfig
```

4. Find the **IPv4 Address**, for example:

```text
192.168.43.120
```

5. Open this address on the mobile phone:

```text
http://192.168.43.120:3000
```

Make sure both devices are connected to the same hotspot network.

## 📝 How Data Submission Works

The user enters data into the form on the mobile browser and clicks **Submit**.

The server receives the POST request and saves the submitted information into:

```text
data.txt
```

Example:

```text
Hello from Mobile
Test Submission
Node.js Live Server
```

## 🎯 Learning Objectives

This project helps beginners understand:

* How Node.js servers work
* How Express.js handles routes
* How POST requests work
* How HTML forms communicate with a backend
* How to save data using Node.js `fs`
* How to access a local server from another device
* How IP addresses and local networks work

## 🔮 Future Improvements

Possible improvements include:

* Add a database such as MongoDB or MySQL
* Add user authentication
* Add an admin dashboard
* Display submitted data on a webpage
* Add form validation
* Add timestamps to submissions
* Improve the UI with CSS
* Deploy the application online

## 👨‍💻 Author

**Mohd Zaid Naseem**

Java Full Stack Developer | Node.js | Java | Spring Boot | React | JavaScript

## ⭐ Support

If you find this project useful, consider giving the repository a ⭐ on GitHub.
