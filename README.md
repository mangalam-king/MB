# MBS — Mats Banks

A modern educational/demo banking web application built with HTML, CSS, JavaScript and Firebase Firestore.

## Pages
- `index.html` — Home
- `open-account.html` — Account opening
- `login.html` — Customer login
- `dashboard.html` — Customer dashboard
- `admin.html` — Admin panel
- `style.css` — Shared responsive design
- `firebase.js` — Firebase configuration
- `app.js` — Shared helpers

## Firebase setup
1. Create a Firebase project.
2. Enable Firestore Database.
3. Copy your Firebase Web App configuration into `firebase.js`.
4. Deploy the folder to GitHub Pages, Firebase Hosting, or another static host.

This project is a demo/educational banking interface and is not a real bank or payment service.

## MPS — Mats Payment System
- Send money from one approved MBS account to another using the receiver's 4-digit MATS Number.
- Sender balance is decreased and receiver balance increased in one Firestore transaction.
- Customer transaction history shows sent, received and deposit records.
- Admin can increase/decrease an approved account balance; each adjustment is logged.

## Latest MPS features
- Transfer confirmation before sending
- Customer change-MPIN flow
- Admin-issued demo virtual card details
- Real PDF account statement download via jsPDF CDN
- Unique MPS transaction IDs for new transfers

Virtual card details are demo-only and should never be used as real payment-card data.


### Account Opening OTP
Account opening now uses free EmailJS email OTP instead of Firebase SMS Phone Authentication. Configure the three EmailJS values in `open-account.html`.
