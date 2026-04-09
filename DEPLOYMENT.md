# Deployment Guide

This guide explains how to deploy the React portfolio to GitHub Pages with your custom domain balaram.me.

## 📋 Prerequisites

- Node.js and npm installed
- Git installed
- GitHub account
- Domain registered (balaram.me)

## 🚀 Step-by-Step Deployment

### Step 1: Install Dependencies

```bash
cd /home/ram/balaram753.github.io
npm install
```

This will install all required packages defined in `package.json`:
- React
- react-dom
- react-icons
- gh-pages (for deployment)

### Step 2: Test Locally

```bash
npm start
```

This starts the development server at `http://localhost:3000`. You should see your portfolio with all sections working. Press `Ctrl+C` to stop the server.

### Step 3: Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

This command:
1. Builds the production version
2. Creates a `gh-pages` branch
3. Deploys the built files to GitHub Pages
4. Your site will be live at `https://balaram753.github.io`

## 🌐 Custom Domain Setup

The CNAME file is already configured with `balaram.me`, so you just need to:

### Step 1: Update DNS Records

For your domain registrar (where you bought balaram.me), add these DNS records:

```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153

Type: AAAA (Optional - IPv6)
Name: @
Value: 2606:50c0:8000::153
       2606:50c0:8001::153
       2606:50c0:8002::153
       2606:50c0:8003::153
```

### Step 2: Verify Custom Domain

After 10-15 minutes, visit `https://balaram.me` and your portfolio should load.

You can verify DNS is working:
```bash
nslookup balaram.me
```

## 📦 Update Deployment

To push updates to your portfolio:

1. Make changes to your code
2. Test locally: `npm start`
3. Deploy: `npm run deploy`

That's it! Your changes are live.

## ⚠️ Important Notes

### Keep These Files

- `.gitignore` - Prevents uploading node_modules and build artifacts
- `package.json` - Lists all dependencies
- `package-lock.json` or `yarn.lock` - Locks dependency versions
- `CNAME` - Routes your domain to GitHub Pages
- `public/` - Static assets folder
- `src/` - React components and styles

### Don't Commit to Git

The `.gitignore` automatically excludes:
- `node_modules/` - Dependencies (reinstall with npm install)
- `build/` - Production build (regenerate with npm run build)
- `.env` files - Environment variables
- Editor configs (`.vscode`, `.idea`)

### GitHub Pages Limitations

- Free tier uses the `gh-pages` branch for deployment
- Your main code stays on `main` branch
- No server-side processing (use Netlify Forms or similar for contact form)

## 🔄 Workflow

```
Edit Code → Test (npm start) → Commit (git add/commit) → Deploy (npm run deploy)
```

## 🆘 Troubleshooting

### Portfolio not showing after deployment?

1. Clear browser cache: `Ctrl+Shift+Delete`
2. Wait 5-10 minutes for GitHub Pages to update
3. Check GitHub Actions for deployment errors
4. Verify custom domain DNS settings

### Changes don't appear?

```bash
# Force update
rm -rf build/
npm run build
npm run deploy
```

### Local development issues?

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

### Contact form not working?

The contact form is currently set up for local testing. For production, integrate with:
- Netlify Forms
- Formspree
- SendGrid
- Your own backend API

## 📱 Verifying Deployment

Check these to confirm successful deployment:

1. **GitHub Pages Status**
   - Go to Settings → Pages
   - Should show "Your site is live at https://balaram.me"

2. **Test Responsiveness**
   - Open balaram.me on mobile
   - Resize browser window
   - Verify all sections are responsive

3. **Check Performance**
   - Use Google PageSpeed Insights: https://pagespeed.web.dev/
   - Enter: https://balaram.me
   - Target: 90+ score

4. **Verify Content**
   - Check all sections load correctly
   - Test navigation links
   - Verify social media links work

## 🔐 Security Best Practices

- Keep npm packages updated: `npm audit` and `npm update`
- Use HTTPS (automatic with GitHub Pages)
- Don't commit sensitive data to Git
- Regularly review dependencies for vulnerabilities

## 📞 Support

If you encounter issues:

1. Check GitHub Actions for deployment errors
2. Verify DNS settings are correct
3. Clear cache and hard refresh (Ctrl+Shift+R)
4. Check browser console for JavaScript errors

---

Your portfolio is now live! 🎉
