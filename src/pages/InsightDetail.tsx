import { useParams, Link } from "react-router-dom";
import { insights } from "@/data/insights";
import { useEffect } from "react";

const InsightDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const insight = insights.find(i => i.id === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!insight) {
    return (
      <div className="section-padding">
        <div className="container-editorial max-w-3xl">
          <h1 className="headline-hero">Insight not found</h1>
          <p className="body-large text-muted-foreground mt-6">
            The insight you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/insights" 
            className="inline-block mt-8 text-foreground hover:opacity-70 transition-opacity"
          >
            ← Back to all insights
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="section-padding">
      <div className="container-editorial max-w-4xl">
        <Link 
          to="/insights" 
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <svg 
            className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to insights
        </Link>
        
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted/50 text-foreground">
            {insight.type}
          </span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {insight.category}
          </span>
          <span className="text-sm text-muted-foreground">•</span>
          <span className="text-sm text-muted-foreground">
            {insight.date}
          </span>
        </div>
        
        <h1 className="headline-hero mb-8">
          {insight.title}
        </h1>
        
        <div 
          className="prose prose-lg prose-headings:font-medium prose-headings:mt-12 prose-headings:mb-6 
                    prose-p:leading-relaxed prose-p:mb-6 prose-ul:my-6 prose-ol:my-6
                    prose-li:my-2 prose-blockquote:border-l-foreground prose-blockquote:pl-6
                    prose-blockquote:italic prose-blockquote:text-muted-foreground
                    max-w-none"
          dangerouslySetInnerHTML={{ __html: insight.content }}
        />
        
        <div className="mt-16 pt-8 border-t border-border">
          <h2 className="text-lg font-medium mb-6">Continue Reading</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {insights
              .filter(i => i.id !== insight.id)
              .slice(0, 2)
              .map(related => (
                <Link
                  key={related.id}
                  to={`/insights/${related.id}`}
                  className="group block p-6 border rounded-lg hover:border-foreground/30 transition-colors"
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-muted/50 text-foreground mb-3">
                    {related.type}
                  </span>
                  <h3 className="text-lg font-medium mb-2 group-hover:text-foreground/70 transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {related.category} • {related.date}
                  </p>
                </Link>
              ))}
          </div>
        </div>
        
        <div className="mt-16 p-8 bg-muted/10 rounded-xl text-center">
          <h2 className="text-2xl font-medium mb-4">Ready to transform your brand?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            If this perspective resonates with you, let's discuss how we can apply these principles to your business.
          </p>
          <Link
            to="/proposal"
            className="inline-flex items-center px-6 py-3 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity"
          >
            Get a Proposal
            <svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default InsightDetail;
