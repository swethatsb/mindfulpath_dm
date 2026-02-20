import { Link } from "react-router-dom";
import { articles } from "@/lib/articles";
import { ArrowRight } from "lucide-react";

export default function Resources() {
  return (
    <main className="section-padding">
      <div className="container-wellness">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold">Resources</h1>
            <p className="text-muted-foreground">Helpful articles and guides.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link key={article.slug} to={`/resources/${article.slug}`} className="block">
              <article className="card-wellness p-6 h-full group">
                  <div className="aspect-[16/10] mb-4 rounded overflow-hidden">
                    {article.thumbnail ? (
                      <img src={article.thumbnail} alt={article.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-sage-light via-sky-light to-lavender" />
                    )}
                  </div>
                <h2 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h2>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{article.author}</span>
                  <span className="inline-flex items-center gap-2">
                    <span>{article.readTime}</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
