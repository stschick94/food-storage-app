# Food Storage Manager

A Vue.js application for managing food inventory across different storage locations.

## Features

- Multiple storage locations (Freezer, Pantry)
- Shelf organization (Top, Middle, Bottom)
- Shopping list functionality
- Dark mode support
- Customizable themes
- Firebase authentication and real-time database

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/food-storage-app.git
cd food-storage-app
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your Firebase configuration values
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
```bash
npm run dev
```

## Security

This project uses environment variables to handle sensitive data. Make sure to:

1. Never commit the `.env` file to version control
2. Keep your Firebase configuration values secure
3. Use appropriate Firebase security rules
4. Follow the principle of least privilege when setting up Firebase permissions

### Important Security Notes

- **Environment Variables**: The `.env` file contains sensitive configuration and should never be committed to version control. It is already added to `.gitignore`.
- **Firebase Security**:
  - Set up proper Firebase Security Rules for your Realtime Database
  - Use Authentication to protect user data
  - Enable email verification for new users
  - Set up proper Firebase project settings (authorized domains, etc.)
- **API Keys**: Never expose API keys in your client-side code or commit them to version control
- **Backup**: Keep a secure backup of your production environment variables
- **Access Control**: Regularly review and update access permissions in your Firebase Console

### Recommended Firebase Security Rules

```javascript
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

## Firebase Setup

1. Create a new Firebase project at [Firebase Console](https://console.firebase.google.com)
2. Enable Authentication and Realtime Database
3. Copy your Firebase configuration to `.env`
4. Set up Firebase security rules for your database
5. Configure Authentication providers (email/password, etc.)
6. Set up proper Firebase project settings:
   - Add authorized domains
   - Configure proper security rules
   - Enable email verification if needed

## Deployment

### GitHub Pages Deployment

This project is configured to deploy automatically to GitHub Pages using GitHub Actions. To set up deployment:

1. Go to your GitHub repository settings
2. Navigate to "Secrets and variables" → "Actions"
3. Add the following repository secrets:
   - `FIREBASE_API_KEY`
   - `FIREBASE_AUTH_DOMAIN`
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_STORAGE_BUCKET`
   - `FIREBASE_MESSAGING_SENDER_ID`
   - `FIREBASE_APP_ID`
   - `FIREBASE_DATABASE_URL`

4. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Set source to "GitHub Actions"

The deployment will automatically trigger when you push to the main branch.

### Firebase Configuration Security

The Firebase configuration is handled securely through GitHub Secrets:
- Configuration values are never exposed in the repository
- Values are injected during the build process
- Each deployment uses the secrets securely
- Access to secrets is limited to repository administrators

### Authorized Domains

After deployment, make sure to:
1. Go to Firebase Console → Authentication → Settings
2. Add your GitHub Pages domain (`yourusername.github.io`) to authorized domains
3. If using a custom domain, add that as well

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

### Before Submitting PR

- Ensure no sensitive data is included in your commits
- Check that `.env` and other sensitive files are not included
- Remove any hardcoded credentials or API keys
- Test the application with environment variables

## License

MIT License - See LICENSE file for details
