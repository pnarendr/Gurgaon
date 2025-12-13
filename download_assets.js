import fs from 'fs';
import { Readable } from 'stream';
import { finished } from 'stream/promises';
import path from 'path';

// INSTRUCTION:
// Replace this array with the output from your "Asset Finder Agent".
// The format must be: { name: 'filename.jpg', url: 'https://...' }
const images = [
    // Example:
    // { name: 'hero_main.jpg', url: 'https://example.com/image.jpg' },
];

const downloadImage = async (url, filename) => {
    try {
        // Ensure folder exists
        const dir = 'public/images';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
        const stream = fs.createWriteStream(path.join(dir, filename));
        await finished(Readable.fromWeb(res.body).pipe(stream));
        console.log(`Downloaded ${filename}`);
    } catch (err) {
        console.error(`Error downloading ${filename}:`, err);
    }
};

(async () => {
    console.log(`Starting download of ${images.length} assets...`);
    for (const img of images) {
        await downloadImage(img.url, img.name);
    }
    console.log('Asset download complete.');
})();
