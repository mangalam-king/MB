# MBS Firebase Setup

This is the MBS/MPS demo configuration. Firestore rules are permissive because this version does not use Firebase Authentication. Do not use it for real money or a public production banking service.

The 9-digit account number is no longer generated automatically. The admin enters a unique 9-digit number when approving an application.

## Free Email OTP for Account Opening

The Open Account page now verifies the applicant's **email address** using a 6-digit OTP sent through EmailJS. Firebase Phone Authentication is no longer used, so Firebase SMS billing is not required for this OTP flow.

### Configure the free EmailJS service
1. Create an EmailJS account and create an email service.
2. Create an email template containing the OTP. The template can use variables such as `{{otp}}`, `{{verification_code}}`, `{{to_email}}`, `{{email}}`, and `{{name}}`.
3. Copy your EmailJS Public Key, Service ID, and Template ID.
4. Open `open-account.html` and replace these values near the top of the script:
   - `YOUR_EMAILJS_PUBLIC_KEY`
   - `YOUR_EMAILJS_SERVICE_ID`
   - `YOUR_EMAILJS_TEMPLATE_ID`
5. Upload the updated file to GitHub Pages.

The page generates a random 6-digit OTP in the browser, sends it to the entered email through EmailJS, and requires the correct OTP before writing the application to Firestore. The OTP expires after 5 minutes.

**Important:** EmailJS is a third-party email service. Its free plan has usage limits, which can change. Do not put a private SMTP password or secret API key in GitHub. The EmailJS public key is intended for browser use.

Mobile number is still collected and saved, but OTP verification is performed by email.

This remains a demo/educational banking-style project, not a real banking or payment service.


## Sub-admin logins and audit trail (demo)
The updated admin panel uses the `adminUsers` collection for sub-admin usernames and hashed passwords, and `auditLogs` to record approvals, card updates, balance transactions, and admin access changes. Add the `adminUsers` and `auditLogs` matches from `firestore.rules` when publishing rules. The main demo login is still configured in `admin.html`; replace it before sharing the site.

**Security warning:** the current site does not use Firebase Authentication or server-side role enforcement. Because the included rules are permissive, role-based hiding in the browser can be bypassed. Do not use this version for real money or public production. A real deployment needs Firebase Auth, secure Firestore rules, and trusted server/Cloud Functions authorization for every privileged action.
