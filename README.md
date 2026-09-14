# 💌 Personalized Greeting Card Generator

Personalized Greeting Card Generator is a beautiful and interactive web application built using **HTML 🌐, CSS 🎨, and JavaScript ⚡**.

The application allows users to create customized digital greeting cards by entering recipient and sender details, writing personalized messages, selecting dates, and choosing different themes.

The card preview updates **in real time**, allowing users to instantly see how their personalized greeting card will look before sharing or downloading it.

---

# ✨ Features

💌 **Personalized Greeting Cards**

* Create digital greeting cards with customized content
* Add recipient and sender names
* Write personalized messages
* Select a custom date

🎨 **Multiple Themes**

Choose from different visual themes such as:

* ❤️ Love
* 🎂 Birthday
* 💍 Anniversary
* 🎉 Festival

Each theme dynamically changes the card's visual appearance.

⚡ **Real-Time Preview**

* Instantly updates the greeting card as users enter information
* Dynamically changes text, icons, colors, and background styling
* No page reload required

📥 **Download Card**

* Export the generated greeting card as an image
* Save personalized cards locally

🔗 **Shareable Greeting Links**

* Generate a shareable URL containing the card information
* Uses URL query parameters to preserve the personalized card

Example parameters:

```text
?to=John&from=Sam&msg=Happy%20Birthday&date=2026-08-11&theme=birthday
```

📱 **Responsive Interface**

* Works across different screen sizes
* Designed for both desktop and mobile-friendly usage

---

# 🖥️ User Interface

The application uses a simple two-panel layout.

### 📝 Left Panel — Card Customization

Users can enter:

* To Name
* From Name
* Date
* Personalized Message
* Greeting Theme

Action buttons are provided for:

* 📥 Download Image
* 🔗 Copy Share Link

### 💌 Right Panel — Live Preview

The greeting card is displayed in real time.

The preview automatically updates:

* Recipient name
* Sender name
* Message
* Date
* Theme
* Colors
* Background
* Icons

---

# 📂 Project Structure

```text
greeting-card-generator
│
├── index.html
├── style.css
├── script.js
├── README.md
└── LICENSE
```

---

# 🧩 File Description

### 📄 `index.html`

Contains the complete structure of the application, including:

* Customization form
* Input fields
* Theme selector
* Action buttons
* Greeting card preview

### 🎨 `style.css`

Controls the application's visual appearance, including:

* Layout
* Colors
* Typography
* Theme styling
* Card design
* Buttons
* Responsive behavior
* Animations and visual effects

### ⚡ `script.js`

Handles the application's functionality, including:

* Form input handling
* Real-time card updates
* Theme switching
* Image downloading
* Share-link generation
* URL parameter processing

### 📜 `LICENSE`

Contains the project's licensing information.

---

# ⚙️ Installation

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/rsamwilson2323-cloud/greeting-card-generator.git
```

---

## 2️⃣ Navigate to the Project

```bash
cd greeting-card-generator
```

---

# ▶️ Usage

Since this is a frontend web application, no backend server or database is required.

Simply open:

```text
index.html
```

in your web browser.

Or use a local development server such as **VS Code Live Server**.

---

# 🛠️ Technologies Used

| Technology        | Purpose                             |
| ----------------- | ----------------------------------- |
| 🌐 HTML5          | Application structure               |
| 🎨 CSS3           | Styling and responsive design       |
| ⚡ JavaScript      | Application logic and interactivity |
| 🔗 URL Parameters | Shareable card links                |
| 🖼️ Browser APIs  | Card image export                   |

---

# 🧠 How It Works

### 1️⃣ Enter Greeting Details

The user enters:

```text
To Name
From Name
Date
Message
```

---

### 2️⃣ Select a Theme

The user selects a greeting category such as:

```text
Love
Birthday
Anniversary
Festival
```

---

### 3️⃣ Generate Live Preview

JavaScript listens for changes in the input fields and immediately updates the card preview.

```text
User Input
     │
     ▼
JavaScript Event Handler
     │
     ▼
Update Card Content
     │
     ▼
Apply Selected Theme
     │
     ▼
Live Greeting Card
```

---

### 4️⃣ Download the Card

The generated card can be exported as an image file so users can save it to their device.

---

### 5️⃣ Generate Share Link

The application converts the card information into URL parameters.

For example:

```text
to=Sam
from=Alex
msg=Happy Birthday
date=2026-08-11
theme=birthday
```

These parameters can then be used to recreate the same greeting card when the link is opened.

---

# 🔗 Shareable URL System

The application supports personalized URLs using query parameters.

Example:

```text
https://your-domain.com/?to=Sam&from=Alex&msg=Happy%20Birthday&date=2026-08-11&theme=birthday
```

The application reads the parameters from the URL and automatically populates the greeting card.

This makes it possible to create and share personalized cards without requiring a database.

---

# 🎨 Available Themes

### ❤️ Love

Designed for romantic and special messages.

### 🎂 Birthday

Designed for birthday celebrations and wishes.

### 💍 Anniversary

Designed for anniversaries and relationship milestones.

### 🎉 Festival

Designed for festive greetings and celebrations.

---

# 📸 Example Card Data

```text
To: Sano

From: Sam

Date: 11 August 2026

Message:
Wishing you happiness, success and lots of beautiful moments!

Theme:
Love
```

---

# 🚀 Future Improvements

The project can be extended with several advanced features:

🤖 **AI Greeting Generator**

* Generate personalized messages using AI
* Suggest messages based on the selected occasion

🎨 **Custom Card Designer**

* Custom colors
* Custom fonts
* Background image selection
* Sticker and emoji support

🖼️ **More Export Formats**

* PNG
* JPG
* PDF

📱 **Mobile Application**

* Convert the web application into an Android/iOS application

☁️ **Cloud Storage**

* Save greeting cards online
* Generate permanent sharing links

👤 **User Accounts**

* User registration and authentication
* Personal card history

📊 **Analytics**

* Track card creation statistics
* Track shared cards and popular themes

🌍 **Multi-Language Support**

* English
* Tamil
* Hindi
* Other regional languages

---

# 🔐 Privacy

This application is designed as a **client-side web application**.

The greeting information entered by the user is processed directly in the browser unless additional backend or cloud functionality is added.

Users should avoid entering sensitive or confidential information into greeting cards.

---

# ⚠️ Disclaimer

This project is intended for **educational, personal, and demonstration purposes**.

The application does not currently provide a backend database or user authentication system.

---

# 👨‍💻 Author

**Sam Wilson**

🌐 GitHub

https://github.com/rsamwilson2323-cloud

💼 LinkedIn

https://www.linkedin.com/in/sam-wilson-14b554385/

---

# 📜 License

This project is licensed under the **MIT License**.

See the `LICENSE` file for more information.

---

# ⭐ Support

If you like this project, consider giving it a ⭐ **Star** on GitHub!

Your support helps encourage the development of more creative and useful projects. ❤️
