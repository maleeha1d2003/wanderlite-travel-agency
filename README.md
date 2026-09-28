# WanderLite Travel Agency

A responsive and accessible travel agency mini-site developed as the final handover project for the EZITECH Front-End Development Internship.

## Project Overview

WanderLite Travel is a small travel agency website designed to help visitors explore sample destinations and submit a booking inquiry.

The final project combines three major features developed across the internship tasks:

- Responsive travel agency landing page
- Interactive destination gallery with region filters
- Accessible booking inquiry form with live validation

The project is built with HTML5, CSS3, and vanilla JavaScript and is deployed as a static website using GitHub Pages.

## Features

### Responsive Landing Page

- Responsive hero section
- Desktop and mobile navigation
- Semantic HTML structure
- Responsive feature and call-to-action sections
- Mobile-friendly layout

### Interactive Destination Gallery

- Nine sample destinations
- Beach, Mountain, and City regions
- All, Beach, Mountain, and City filter buttons
- Destination data stored in `destinations.json`
- JavaScript `fetch()` used to load the local JSON data
- CSS Grid with responsive `auto-fill` and `minmax()` layout
- Descriptive image `alt` text
- Semantic destination cards

### Accessible Booking Inquiry Form

The form collects:

- Full Name
- Email
- Start Date
- End Date
- Destination

Validation includes:

- Real-time name validation
- Email format validation
- Required date validation
- End date versus start date comparison
- Required destination selection
- Accessible error messages
- `aria-invalid` states
- `role="alert"` and live regions
- Keyboard-accessible controls
- Enter-key form submission
- Escape-key modal closing
- Thank-you confirmation modal
- Focus moved to the first invalid field when validation fails

## Technologies Used

- HTML5
- CSS3
- JavaScript
- JSON
- CSS Grid
- Fetch API
- Git
- GitHub
- GitHub Pages

## Project Structure

```text
wanderlite-travel-agency/
│
├── index.html
├── style.css
├── script.js
├── destinations.json
├── .nojekyll
├── images/
│   ├── hero.svg
│   ├── maldives.jpg
│   ├── amalfi-coast.jpg
│   ├── bali.jpg
│   ├── swiss-alps.jpg
│   ├── banff.jpg
│   ├── himalayan.jpg
│   ├── paris.jpg
│   ├── new-york.jpg
│   └── tokyo.jpg
└── README.md
```

## Setup and Run

Because the destination gallery loads `destinations.json` with the Fetch API, the project should be run through a local web server rather than opened directly with `file://`.

### Option 1: VS Code Live Server

1. Open the project folder in VS Code.
2. Install or enable the Live Server extension.
3. Open `index.html`.
4. Select **Open with Live Server**.
5. Open the generated local URL in the browser.

### Option 2: Python HTTP Server

From the project folder, run:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deployment

The project is deployed using GitHub Pages from the `main` branch and the repository root.

### Live Website

https://maleeha1d2003.github.io/wanderlite-travel-agency/

### GitHub Repository

https://github.com/maleeha1d2003/wanderlite-travel-agency

## Relative Paths

The project uses relative paths for local project assets and files. All project images are stored in the `images/` folder, so the deployed site does not depend on external image hosts. The destination data is loaded with:

```javascript
fetch("destinations.json")
```

This allows the JSON file to be found correctly when the project is deployed from the repository root.

The destination photographs are stored locally in the `images/` folder and contain no embedded destination labels; the destination names and descriptions remain semantic HTML text.

Destination images are referenced with relative paths such as `images/maldives.jpg`, and the hero image uses `images/hero.svg`.

## Decision Log

### 1. CSS Grid for the Destination Gallery

CSS Grid was selected because it provides a simple and flexible way to create a responsive card layout. The gallery uses `auto-fill` and `minmax()` so cards can adapt to available screen width.

### 2. Local JSON for Destination Data

Destination information was placed in `destinations.json` instead of hard-coding every destination card into the HTML. This keeps the content separate from the page structure and makes the sample destination data easier to maintain.

### 3. Fetch API for Loading Data

The JavaScript Fetch API is used to load the local JSON file when the page starts. This demonstrates dynamic client-side data loading while keeping the project suitable for static hosting.

### 4. Client-Side Form Validation

JavaScript validation was used so users receive immediate feedback while entering their travel information. Date comparison is handled on the client side before the form can be submitted.

### 5. Semantic HTML and ARIA

Semantic elements such as `section`, `article`, `form`, `label`, and `button` were used to provide a clear document structure. ARIA attributes and live error regions were added to improve accessibility for validation feedback.

### 6. GitHub Pages

GitHub Pages was selected because the project is a static front-end website and does not require a server-side backend for the demonstration.

## Testing

The project was tested at:

- 1440 × 900 desktop
- 1024 × 768 tablet
- 768 × 1024 smaller tablet
- 375 × 812 mobile

Testing covered:

- Navigation
- Destination filters
- Destination data loading
- Image loading
- Responsive card layout
- No unwanted horizontal scrolling
- Form validation
- Invalid email feedback
- Start and end date validation
- End-date comparison
- Destination selection
- Successful form submission
- Thank-you modal
- Keyboard Tab navigation
- Enter-key interaction
- Escape-key modal closing
- Responsive modal layout

## Limitations

This is a front-end demonstration. Booking inquiries are handled only on the client side and are not connected to a real backend, email service, database, or booking system.

The project uses locally stored destination photographs so the deployed site does not depend on external image hosts.

## Internship Task

Developed as the final handover project for the EZITECH Front-End Development Internship.

## Final Status

The WanderLite Travel mini-site combines the landing page, interactive destination gallery, and accessible booking inquiry form into one deployable static project.

## Handover Notes

The project is organized as a production ready static website for GitHub Pages deployment. All destination images are stored locally in the `images` directory, while destination information is maintained in `destinations.json`.

The website can be run locally using Live Server or a local HTTP server. GitHub Pages is used for deployment because the project is a static HTML, CSS, and JavaScript application and does not require a server side backend.

Before final submission, the deployed GitHub Pages URL should be verified at desktop and mobile viewport sizes to confirm that all images, styles, scripts, filters, form validation, and navigation work correctly.

## Final Deployment Verification

The deployed website was verified after GitHub Pages configuration.

The final verification covered:

- Desktop layout at 1440 × 900
- Mobile layout at 375 × 812
- Destination gallery rendering
- Local destination image loading
- Destination category filters
- Responsive navigation
- Booking inquiry form
- Client side form validation
- Responsive layout without horizontal scrolling
- Relative asset paths on the deployed website

All required project assets are included in the repository and load correctly from the GitHub Pages deployment.
