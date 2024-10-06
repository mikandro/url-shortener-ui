# URL Shortener UI

This is a simple React-based user interface for a URL shortener service. It allows users to input a long URL and receive a shortened version, making it easy to manage and share links.

## Features

- **URL Input Form**: Enter a long URL to shorten.
- **Shortened URL Display**: Displays the shortened URL that redirects to the original link.

## Prerequisites

- **Node.js**: Make sure Node.js (version 14 or above) and npm are installed.

## Installation

1. **Clone the repository**:

```
git clone https://github.com/yourusername/url-shortener-ui.git cd url-shortener-ui
```

2. **Install dependencies**

```
npm install
```

## Running the application

1. **Start the dev server**

```
npm start
```

2. **Access the app**:

Open a browser and navigate to `http://localhost:3000`.

## Configuration

- Ensure the URL Shortener backend is running on `http://localhost:8080`.
- The frontend makes API calls to `http://localhost:8080/shorten` to create short URLs.

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **Axios**: HTTP client for making requests to the backend.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

Created by [Mihail Andritchi](https://github.com/mikandro). Feel free to reach out!
