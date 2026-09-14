# 💌 Personalized Greeting Card Generator

A beautiful and interactive **Personalized Greeting Card Generator** built with **HTML, CSS, and JavaScript**.

Create customized digital greeting cards by adding a recipient name, sender name, message, date, and theme. The card preview updates instantly as you type, and you can download the finished card as an image or generate a shareable link.

---

## ✨ Features

* 💌 Create personalized digital greeting cards
* 👤 Add recipient and sender names
* 📝 Add a custom greeting message
* 📅 Select a date
* 🎨 Choose from multiple card themes
* ⚡ Real-time card preview
* 📥 Download the card as a PNG image
* 🔗 Generate and copy a shareable card link
* 🌐 Restore card information automatically from URL parameters
* 📱 Responsive design for different screen sizes
* ✨ Smooth floating card animation
* 🎭 Theme-based colors and emojis

---

## 🎨 Available Themes

| Theme       | Icon | Description                        |
| ----------- | ---- | ---------------------------------- |
| Love        | ❤️   | Romantic and special messages      |
| Birthday    | 🎂   | Birthday wishes and celebrations   |
| Anniversary | 💍   | Anniversary and milestone wishes   |
| Festival    | 🎉   | Festival and celebration greetings |

---

## 🖥️ Preview

The application uses a simple two-panel interface.

### 📝 Card Details

Users can enter:

* To Name
* From Name
* Date
* Message
* Greeting Theme

Available actions:

* ⬇️ Download Image
* 🔗 Copy Share Link

### 💌 Live Card Preview

The preview automatically updates when the user changes:

* Recipient name
* Sender name
* Message
* Date
* Theme
* Background emoji
* Card colors

---

## 🛠️ Technologies Used

* **HTML5** — Application structure
* **CSS3** — Styling, themes, animations, and responsive layout
* **JavaScript** — Application logic and real-time updates
* **URLSearchParams API** — Shareable card links
* **History API** — Updating the URL without reloading
* **Clipboard API** — Copying share links
* **html2canvas** — Exporting the card as an image

---

## 📂 Project Structure

```text
greeting-card-generator/
│
├── index.html
├── style.css
├── script.js
├── README.md
└── LICENSE
```

---

## 📄 File Description

### `index.html`

Contains the main structure of the application:

* Card customization controls
* Input fields
* Theme selector
* Download button
* Share button
* Greeting card preview

### `style.css`

Handles:

* Application layout
* Glassmorphism-style controls
* Card themes
* Gradients
* Typography
* Buttons
* Responsive layout
* Floating animation
* Card visual effects

### `script.js`

Handles the main application functionality:

* Reading user input
* Updating the card in real time
* Switching themes
* Generating shareable URLs
* Loading cards from URL parameters
* Copying share links
* Downloading cards as PNG images

### `LICENSE`

Contains the project's license information.

---

## ⚙️ How to Run

This project does **not require a backend, database, Node.js, or Python**.

### Option 1 — Open Directly

1. Download or clone the repository.
2. Open the project folder.
3. Double-click `index.html`.
4. The application will open in your browser.

### Option 2 — Local Server

You can also run the project using any simple local web server.

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/greeting-card-generator.git
```

Navigate to the project:

```bash
cd greeting-card-generator
```

Then open `index.html` in your browser.

---

## 🧠 How It Works

The application follows a simple client-side workflow:

```text
User Enters Details
        │
        ▼
JavaScript Reads Input
        │
        ▼
Live Card Update
        │
        ▼
Theme Applied
        │
        ▼
Greeting Card Generated
       / \
      /   \
     ▼     ▼
Download  Share Link
   PNG       URL
```

---

## 🔗 Shareable Card Links

The application stores card information inside the URL using query parameters.

Example:

```text
?to=John&from=Sam&msg=Happy%20Birthday&date=2026-08-11&theme=theme-birthday
```

When someone opens the generated URL, the application reads the parameters and automatically recreates the personalized card.

This means the current version does not require a database to share card information.

---

## 📥 Download Feature

The **Download Image** feature uses `html2canvas` to convert the generated card into a PNG image.

Example:

```text
Greeting Card
      │
      ▼
html2canvas
      │
      ▼
Canvas Image
      │
      ▼
PNG Download
```

---

## 🔐 Privacy

This is a **client-side web application**.

The information entered into the greeting card is processed within the browser. The project does not currently use a backend server or database to store user information.

Avoid entering sensitive or confidential information into cards.

---

## 🚀 Future Improvements

Possible future upgrades include:

* 🤖 AI-powered greeting message generation
* 🎨 Custom fonts and colors
* 🖼️ Custom background images
* 😊 Emoji and sticker library
* 📄 PDF export
* 🖼️ JPG export
* 🌍 Multi-language support
* 💾 Save cards locally
* ☁️ Cloud-based card storage
* 👤 User accounts
* 📱 Android/iOS application
* 🎵 Animated greeting cards
* ✨ More themes and occasions

---

## 💡 Use Cases

This project can be used for:

* 🎂 Birthday wishes
* ❤️ Love messages
* 💍 Anniversary greetings
* 🎉 Festival wishes
* 🎓 Graduation messages
* 🎊 Celebration cards
* 💌 Digital invitations
* 👨‍👩‍👧 Family greetings
* 👋 Thank-you messages

---

## 📸 Example

```text
To: Ebinezer

Message:
Wishing you happiness, success and many beautiful moments!

From: Your Friend

Theme: 🎂 Birthday
```

The card is generated instantly in the preview panel.

---

## 🌟 Why This Project?

The project demonstrates how modern browser technologies can be combined to build an interactive application without requiring a backend.

It is a simple example of:

* DOM manipulation
* Event handling
* Responsive UI design
* Browser APIs
* URL-based state
* Client-side image generation

---

## 📜 License

This project is licensed under the **MIT License**.

See the `LICENSE` file for more information.

---

## 👨‍💻 Author

**Ebinezer**

Aspiring Software Engineer | Web Developer | AI Enthusiast

GitHub:
https://github.com/Ebinezer-cloud

---

## ⭐ Support

If you found this project useful or interesting, consider giving the repository a ⭐ **Star** on GitHub.

Your support motivates me to build and share more projects! ❤️
