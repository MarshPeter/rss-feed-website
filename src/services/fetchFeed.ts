import Parser from 'rss-parser';

const parser = new Parser();

export async function getFeed(url: string) {
  const feed = await parser.parseURL(url);
  console.log(feed.title);

  feed.items.forEach(item => {
    console.log(item.title + ':' + item.link);
  })
}