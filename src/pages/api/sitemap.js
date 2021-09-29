import { SitemapStream, streamToPromise } from "./sitemap";
import graphlqlFetch from "lib/apollo"

export default async (req, res) => {
  const { posts } = await graphlqlFetch(`
    query getSitemapData {
      projects: allWorks {
        slug {
          current
        }
        publishedAt
      }
    }
  `);

  const smStream = new SitemapStream({
    hostname: "https://priver.dev",
  });

  smStream.write({
    url: "/",
  });

  posts.forEach((element) => {
    smStream.write({
      url: `/${element.slug.current}`,
      lastmod: element.publishedAt,
    });
  });

  smStream.end();
  const sitemap = await streamToPromise(smStream).then((sm) => sm.toString());

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
};