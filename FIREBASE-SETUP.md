# MBS Firebase Setup

This is the MBS/MPS demo configuration. Firestore rules are permissive because this version does not use Firebase Authentication. Do not use it for real money or a public production banking service.

The 9-digit account number is no longer generated automatically. The admin enters a unique 9-digit number when approving an application.

## Phone OTP for Account Opening
The Open Account page now uses Firebase Authentication Phone Sign-In to verify the applicant's mobile number before the application can be submitted.

In Firebase Console:
1. Open **Authentication → Sign-in method**.
2. Enable **Phone**.
3. Add your GitHub Pages domain (for example `yourname.github.io`) to Authentication authorized domains if it is not already listed.
4. For testing, Firebase Authentication supports test phone numbers/codes so you do not have to send real SMS repeatedly.

The application is written to Firestore only after the OTP is successfully verified and records `phoneVerified: true`, `phoneVerifiedAt`, and the Firebase phone-auth UID.

This remains a demo/educational banking-style project, not a real banking or payment service.
