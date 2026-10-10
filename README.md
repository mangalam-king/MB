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

## MBS Digital Banking 2.0 additions
- Premium dashboard summary with sent/received totals and transaction count.
- Notifications centre with read/unread controls; transfer events create sender/recipient alerts.
- MPS beneficiary management, ₹10,000 demo per-transfer limit, reference/status fields, searchable history, CSV export and per-transaction printable PDF receipts.
- Scheduled/recurring transfer requests (saved for review; they do not automatically execute in the background).
- Account services centre for contact/address updates, nominee details, printable demo account/balance certificates, date-range statements, support requests, freeze requests and closure requests.
- Admin can review/resolve/reject customer service requests.

### Important limitations
This is an educational demo. The current Firestore rules are permissive and the app does not use proper Firebase Authentication or trusted server-side authorization. Do not use it for real money, real payment credentials or sensitive personal data. Scheduled transfers are requests only, not automatic transfers. Admin credentials in static HTML are not secure for public deployment.


## Latest UI and email-change verification update
- Refreshed the shared design system with a modern responsive banking-style UI while preserving the existing pages and features.
- Account Services now sends a 6-digit EmailJS OTP to the new email address before changing the saved email. Codes expire after 5 minutes; the account email is updated only after a matching code is entered.
- EmailJS settings reuse the configured service/template/public key from the account-opening flow.
- This is still an educational demo. Browser-generated OTP and permissive Firestore rules are not suitable for real financial accounts or public production security. Use server-side OTP generation and Firebase Authentication/security rules for production.
