import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

// Define your website's base URL
const baseUrl = 'https://www.vudecor.vn'; // Using www as preferred version since it's being crawled

// Define your routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/projects', changefreq: 'weekly', priority: 0.9 },
  { url: '/styles', changefreq: 'weekly', priority: 0.9 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/ourStory', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  // Note: /projects/:id routes are dynamic and should be handled separately if needed
];

async function generateSitemap() {
  try {
    // Create a stream to write to
    const stream = new SitemapStream({ hostname: baseUrl });
    
    // Return a promise that resolves with your XML string
    const data = await streamToPromise(Readable.from(routes).pipe(stream));
    
    // Write the sitemap to a file
    createWriteStream('./public/sitemap.xml').write(data.toString());
    
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

generateSitemap(); 