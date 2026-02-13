# Byteframe - Modern Web Development Company Website

A professional, modern website for Byteframe, a web development and software company based in Kenya. Built with HTML, CSS, and vanilla JavaScript featuring storytelling elements, scroll-based animations, and exceptional UI/UX.

## 🚀 Features

- **Modern Design**: Professional aesthetic with clean typography and cohesive color palette
- **Scroll Animations**: Smooth, performant animations triggered on scroll
- **Responsive Layout**: Fully responsive design that works on all devices
- **Storytelling**: Narrative-driven content that engages visitors
- **Interactive Elements**: Smooth scrolling, hover effects, and micro-interactions
- **Performance Optimized**: Fast loading with debounced scroll handlers
- **Accessibility**: Keyboard navigation support and semantic HTML


## 🎨 Design System

the color pallete (IDK THE SPELLING) was inspod from the company logo and expounded upon using coolers.

### Typography
- **Display Font**: Playfair Display (headings)
- **Body Font**: DM Sans (content)


## 📄 Sections

1. **Hero** - Compelling introduction
2. **About** - Company story and key features
3. **Services** - Four main service offerings with stats
4. **Work/Portfolio** - Case studies (placeholder projects)
5. **Founders section** - the two co faundas plus contact info and a short bio
5. **Process** - Six-step workflow
6. **CTA** - Call-to-action section
7. **Contact** - Contact form and information
8. **Footer** - Links and copyright

### TO DO

### Update Contact Information
In `index.html`, search for and replace:
- `hello@byteframe.co.ke` - Email address
- `+254 700 000 000` - Phone number
- Social media links (LinkedIn, Twitter, GitHub) to the biz and foundas


### Add Real Project Images
1. Replace `.work-placeholder` divs with actual project screenshots
2. Recommended size: 1600x1000px (16:10 ratio)
3. Optimize images for web (use WebP format if possible)

### Connect Contact Form
In `js/script.js` (around line 170), integrate with your backend:
```javascript
// Example with a backend endpoint
fetch('YOUR_BACKEND_ENDPOINT', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
})
```

Popular form services:
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- [Netlify Forms](https://www.netlify.com/products/forms/)
- [Web3Forms](https://web3forms.com/)

## 🚀 Deployment

### Static Hosting Options

**Netlify** (Recommended)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

**Vercel**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

**GitHub Pages**
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select branch and root folder
4. Save and wait for deployment.............done

**Other Options**
- Cloudflare Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Surge.sh

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest) webkit shenanigans 
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance Tips

1. **Optimize Images**: Use WebP format and lazy loading
2. **Minify CSS/JS**: Use build tools before production
3. **Enable Caching**: Configure server headers
4. **Use CDN**: Serve static assets from CDN
5. **Compress Files**: Enable Gzip/Brotli compression



## 📝 Content Updates

### Adding New Services
Edit the `.services-grid` section in `index.html`:
```html
<div class="service-card">
    <div class="service-number">05</div>
    <h3 class="service-title">Your Service</h3>
    <!-- ... -->
</div>
```

### Adding Portfolio Items
Add new `.work-item` in the work section:
```html
<article class="work-item">
    <div class="work-image">
        <!-- Your project image -->
    </div>
    <div class="work-content">
        <!-- Project details -->
    </div>
</article>
```

### Updating Stats
update the stats kijanaa

## 🎯 SEO Optimization

1. **Update Meta Tags**: Edit `<head>` section in `index.html`   all shall be done upon completion
2. **Add Analytics**: Insert Google Analytics or alternative
3. **Create Sitemap**: Generate XML sitemap
4. **Add robots.txt**: Configure crawler access
5. **Optimize Images**: Add alt text to all images

## 🔐 Security Best Practices

- Use HTTPS in production
- Implement CSP (Content Security Policy)- we should look into this
- Sanitize form inputs if processing server-side
- Keep dependencies updated
- Enable security headers

## 📞 Support & Maintenance

### Regular Updates
- Review and update portfolio quarterly
- Update service offerings as they evolve
- Refresh testimonials and case studies
- Check all links monthly
- Update copyright year annually

### Analytics Integration
Add Google Analytics or alternative:
```html
<!-- Before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🤝 Contributing

If working with a team:
1. Create feature branches
2. Use meaningful commit messages
3. Test on multiple devices before merging
4. Document any new features

## 📄 License

© 202 (67) 😝😝😝😝😝 Byteframe. All rights reserved.

---

## 🎨 Design Notes

This website uses a professional, trustworthy design language:
- Clean typography hierarchy
- Ample white space
- Subtle animations that enhance (not distract)
- Business-focused color palette
- Clear calls-to-action

Built with ❤️ for Byteframe in Nairobi, Kenya


