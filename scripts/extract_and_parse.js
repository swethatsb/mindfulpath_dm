const fs = require('fs');
const path = require('path');
const pdf = require('pdf-parse');

const pdfPath = path.resolve(__dirname, '../Digital Marketing Blogs.pdf');
const outJson = path.resolve(__dirname, '../src/lib/articles_extracted.json');

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

pdf(fs.readFileSync(pdfPath)).then((data) => {
  const text = data.text || '';

  // Normalize line endings
  const normalized = text.replace(/\r\n?/g, '\n');

  // Split into blocks by two or more newlines
  const blocks = normalized.split(/\n{2,}/).map(b => b.trim()).filter(Boolean);

  const articles = [];
  let i = 0;
  while (i < blocks.length) {
    const block = blocks[i];

    // Heuristic: a title is a short block (<= 120 chars) and contains spaces (multiple words)
    // followed by a longer paragraph block.
    if (block.length <= 120 && /[A-Za-z]/.test(block) && blocks[i+1]) {
      const title = block.replace(/\n+/g, ' ');
      const bodyBlocks = [];
      let j = i + 1;
      // gather following blocks until next likely title or end
      while (j < blocks.length && !(blocks[j].length <= 120 && /[A-Za-z]/.test(blocks[j]) && /\n/.test(blocks[j]) === false)) {
        // stop if the next block looks like a title (short)
        if (blocks[j].length <= 120 && /^[A-Z0-9]/.test(blocks[j])) break;
        bodyBlocks.push(blocks[j]);
        j++;
      }

      const body = bodyBlocks.join('\n\n');
      const excerpt = (body.split(/(?<=\.)\s+/)[0] || '').trim();
      const slug = slugify(title).slice(0, 60) || `article-${articles.length+1}`;

      articles.push({
        title,
        excerpt,
        category: 'Blog',
        author: 'Editorial',
        readTime: '5 min read',
        date: new Date().toDateString(),
        slug,
        content: body.split('\n').map(p => `<p>${p}</p>`).join('\n'),
      });

      i = j;
    } else {
      // No title found — treat this block as part of previous article if exists, otherwise skip
      i++;
    }
  }

  fs.writeFileSync(outJson, JSON.stringify({ extractedText: normalized, articles }, null, 2));
  console.log(`Wrote ${articles.length} articles to ${outJson}`);
}).catch(err => {
  console.error(err);
  process.exit(1);
});
