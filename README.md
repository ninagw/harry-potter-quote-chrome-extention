# Motivational Quotes Chrome Extension

A simple and inspiring Chrome browser extension that displays a new motivational quote every time you click the extension icon.

## Description

This extension provides daily motivational quotes to inspire and encourage users throughout their day. Each time you open the extension, it fetches a fresh quote from a motivational quotes API and displays it in a vibrant popup window.

## Features

- 📱 **Easy Access** - Click the extension icon in your toolbar to view a new quote
- ✨ **Fresh Quotes** - Fetches new motivational quotes every time you open it
- 👤 **Author Information** - Displays the author of each quote

## Installation

### Prerequisites
- Google Chrome browser
- Internet connection (to fetch quotes from the API)

### Steps

1. Clone or download this repository:
   ```bash
   git clone https://github.com/yourusername/quote-chrome-extension.git
   cd quote-chrome-extension
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable **Developer mode** using the toggle in the top-right corner

4. Click **Load unpacked** and select the `quote-chrome-extension` folder

5. The extension will now appear in your Chrome toolbar

## Usage

1. Click the **Motivational quotes** extension icon in your Chrome toolbar
2. A popup window will appear displaying a motivational quote and its author
3. Click the icon again to fetch a new quote

## Project Structure

```
quote-chrome-extension/
├── manifest.json      # Extension configuration and metadata
├── index.html         # Popup interface
├── script.js          # Quote fetching logic
└── README.md          # This file
```

### File Details

- **manifest.json**: Defines the extension's name, version, description, and specifies the popup HTML file
- **index.html**: The UI of the extension popup with a centered display for quotes and authors
- **script.js**: Contains the `fetchData()` function that fetches quotes from the Motivation Quotes API

## API Used

This extension uses the [Motivation Quotes API](https://rapidapi.com/quotes-api-for-all/api/motivation-quotes4) from RapidAPI to fetch motivational quotes.

## Technical Details

- **Manifest Version**: 3 (Chrome Extension Manifest V3)
- **Language**: JavaScript (Vanilla)
- **Styling**: Inline CSS (HTML)

## Author

**Nina Weber**

## License

This project is open source and available under the MIT License.

