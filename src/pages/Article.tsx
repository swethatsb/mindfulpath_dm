import { useParams, Link } from "react-router-dom";
import { findArticleBySlug } from "@/lib/articles";
import { ArrowLeft } from "lucide-react";

export default function Article() {
  const { slug } = useParams();
  const article = typeof slug === "string" ? findArticleBySlug(slug) : undefined;

  if (!article) {
    return (
      <main className="section-padding">
        <div className="container-wellness">
          <h2 className="font-display text-2xl font-semibold">Article not found</h2>
          <p className="text-muted-foreground">We couldn't find the article you're looking for.</p>
          <Link to="/resources" className="text-primary inline-flex items-center gap-2 mt-4">
            <ArrowLeft className="w-4 h-4" /> Back to resources
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="section-padding">
      <div className="container-wellness max-w-3xl">
        <Link to="/resources" className="text-primary inline-flex items-center gap-2 mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to resources
        </Link>

        <article>
          <header className="mb-6">
            <h1 className="font-display text-3xl font-bold mb-2">{article.title}</h1>
            <div className="text-muted-foreground text-sm">
              <span>{article.author}</span>
              <span className="mx-2">•</span>
              <span>{article.date}</span>
              <span className="mx-2">•</span>
              <span>{article.readTime}</span>
            </div>
          </header>

          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content || "" }} />
        </article>
      </div>
    </main>
  );
}
