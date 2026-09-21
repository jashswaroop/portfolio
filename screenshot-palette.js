const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // High-res Desktop Viewport
  await page.setViewport({ width: 1920, height: 1080 });
  
  const filePath = `file://${path.resolve('swaroop-portfolio.html')}`;
  await page.goto(filePath, { waitUntil: 'networkidle0' });

  // Hide loader immediately to avoid taking screenshot of loader
  await page.evaluate(() => {
    const loader = document.getElementById('page-loader');
    if (loader) {
      loader.style.display = 'none';
      loader.style.opacity = '0';
      loader.classList.add('loader-hidden');
    }
  });

  // Inject the requested color palette dynamically for preview
  await page.evaluate(() => {
    // Switch to dark mode for the premium look matching the new palette
    document.documentElement.setAttribute('data-theme', 'dark');
    
    const root = document.documentElement;
    // New palette injected over existing tokens
    root.style.setProperty('--bg-0', '#050507');
    root.style.setProperty('--bg-1', '#050507');
    root.style.setProperty('--surface', '#2C2C2E');
    root.style.setProperty('--surface-hover', '#3a3a3d');
    root.style.setProperty('--accent-blue', '#FA2D48'); // Primary accent (Coral)
    root.style.setProperty('--accent-purple', '#FF3B5C'); // Secondary accent (Pinkish)
    root.style.setProperty('--accent-glow', 'rgba(250, 45, 72, 0.3)'); // Glow 
    root.style.setProperty('--glass-bg', 'rgba(44, 44, 46, 0.4)');
    root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.08)');
  });

  // Allow time for CSS transitions to apply
  await new Promise(r => setTimeout(r, 1000));

  // 1. Capture Hero Section (Usually the first section)
  const heroElement = await page.$('.hero') || await page.$('section');
  if (heroElement) {
    await heroElement.screenshot({ path: 'C:\\Users\\kittu\\.gemini\\antigravity-ide\\brain\\c713a2c6-fb24-4988-b92a-6a65639b1c8e\\hero_actual_preview.png' });
  }

  // 2. Capture About Me Section
  const aboutElement = await page.$('#about') || await page.$('.about-section');
  if (aboutElement) {
      await page.evaluate((el) => el.scrollIntoView(), aboutElement);
      // Wait for any scroll animations or layout shifts
      await new Promise(r => setTimeout(r, 800));
      await aboutElement.screenshot({ path: 'C:\\Users\\kittu\\.gemini\\antigravity-ide\\brain\\c713a2c6-fb24-4988-b92a-6a65639b1c8e\\about_actual_preview.png' });
  }

  await browser.close();
})();
