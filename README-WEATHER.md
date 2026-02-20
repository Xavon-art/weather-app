# ☁️ Weather App

A beautiful and responsive weather application that fetches real-time weather data for major cities around the world.

![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge&logo=opensource&logoColor=white)
![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-blue?style=for-the-badge&logo=github&logoColor=white)
![Vibe](https://img.shields.io/badge/Vibe-Chill-blue?style=for-the-badge&logo=sparkles&logoColor=white)

## 📝 About

This is my personal solution to the FreeCodeCamp Weather App challenge. I am just happy to share it! 🎉

A modern weather application built with vanilla HTML, CSS, and JavaScript that provides real-time weather information for selected cities. The app features a clean, intuitive interface with beautiful gradient designs and smooth interactions.

## ✨ Features

🌍 **Multi-City Support** - Check weather for major cities worldwide  
🎨 **Beautiful UI** - Modern gradient design with smooth animations  
📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile  
⚡ **Real-time Data** - Fetches live weather data from API  
💨 **Comprehensive Info** - Temperature, humidity, wind speed, and "feels like" temperature  
🎯 **Intuitive Controls** - Simple dropdown selection and search button  

## 🛠️ Built With

- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with CSS variables
- **JavaScript (ES6+)** - Async/await for API calls
- **Weather API** - FreeCodeCamp weather proxy

## 📊 Weather Information Displayed

- **Location** - City name
- **Current Temperature** - In Celsius
- **Weather Condition** - Clear, Cloudy, Rainy, etc.
- **Feels Like Temperature** - Adjusted temperature based on wind and humidity
- **Humidity** - Percentage of moisture in air
- **Wind Speed** - Current wind speed
- **Wind Gust** - Maximum wind gust speed
- **Weather Icon** - Visual representation of current conditions

## 🚀 How to Use

### 1. **Clone or Download**
```bash
git clone https://github.com/Xavon-art/weather-app.git
cd weather-app
```

### 2. **Open the App**
Simply open `index.html` in your web browser:
- Double-click the file, or
- Right-click and select "Open with" browser

### 3. **Select a City**
- Click the dropdown menu
- Choose from available cities (New York, Los Angeles, Chicago, Paris, Tokyo, London)
- Click the "Search" button
- Weather information will display instantly

## 📁 Project Structure

```
weather-app/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript logic
└── README.md           # This file
```

## 🎨 Color Scheme

- **Primary Blue** - #1a6fad
- **Light Blue** - #e3f2fd
- **Text Dark** - #1a2332
- **Muted Gray** - #7a8fa6
- **Border Color** - #d0e8f5
- **Background Gradient** - Blue gradient (sky-like)

## 📱 Responsive Design

The app automatically adapts to different screen sizes:
- **Desktop** - Full layout with optimal spacing
- **Tablet** - Adjusted padding and font sizes
- **Mobile** - Single column layout with touch-friendly buttons

## 🔌 API Used

**Weather Proxy API by FreeCodeCamp**
```
https://weather-proxy.freecodecamp.rocks/api/city/{city}
```

Response includes:
- City location and timezone
- Current weather conditions
- Temperature data (current, min, max, feels like)
- Humidity levels
- Wind information (speed, direction, gust)
- Weather icons and descriptions

## 💡 How It Works

### 1. **City Selection**
User selects a city from the dropdown menu with predefined options.

### 2. **API Call**
When the "Search" button is clicked, the app makes an async fetch request to the weather API.

### 3. **Data Processing**
The response is converted to JSON and checked for errors.

### 4. **DOM Update**
Weather data is extracted and injected into the HTML elements.

### 5. **Display**
The weather result section becomes visible with all information displayed.

## 🎯 JavaScript Functions

### `getWeather(city)`
```javascript
async function getWeather(city) {
  const res = await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`);
  const data = await res.json();
  return data;
}
```
Fetches weather data for the specified city.

### `showWeather(city)`
```javascript
async function showWeather(city) {
  const data = await getWeather(city);
  // Validates data
  // Updates DOM elements
  // Shows weather result
}
```
Handles the complete weather display workflow.

## 🎓 Learning Points

This project demonstrates:
- **Async/Await** - Handling asynchronous API calls
- **Fetch API** - Making HTTP requests from JavaScript
- **DOM Manipulation** - Dynamically updating HTML content
- **Error Handling** - Validating API responses
- **CSS Variables** - Using custom properties for theming
- **Flexbox & Grid** - Modern responsive layouts
- **Event Listeners** - Handling user interactions
- **Optional Chaining** - Safe property access with `?.`
- **Nullish Coalescing** - Providing default values with `??`

## ⚙️ Customization

### Add More Cities

Edit the `<select>` element in `index.html`:

```html
<select id="city-select">
  <option value="">Select a city...</option>
  <option value="new york">New York</option>
  <option value="your-city">Your City</option>
</select>
```

### Change Colors

Modify the CSS variables in `styles.css`:

```css
:root {
  --blue: #1a6fad;          /* Primary color */
  --blue-light: #e3f2fd;    /* Light background */
  --text: #1a2332;          /* Text color */
  /* ... more variables ... */
}
```

### Modify Fonts

The app uses Google Fonts. Edit the link in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont&display=swap" rel="stylesheet">
```

## 🐛 Troubleshooting

### "Something went wrong" Alert
- Check your internet connection
- Verify the city name is spelled correctly
- The API might be temporarily unavailable

### Weather Icon Not Showing
- This is normal - the API might not return an icon URL for all cities
- The app will still display all text information

### App Not Opening
- Ensure all three files (index.html, styles.css, script.js) are in the same folder
- Make sure you're opening `index.html` directly in a browser

## 📄 License

This project is licensed under the MIT License.

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 🎓 Credits

- **Challenge by**: FreeCodeCamp
- **Solution by**: Xavon-art
- **API**: FreeCodeCamp Weather Proxy

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## 📧 Support

If you have questions or suggestions, feel free to open an issue or reach out!

---

**Made with ❤️ using Vanilla Web Technologies**

No frameworks. No dependencies. Just pure, beautiful code. 🎨

*I am just happy to share it!* 😊
