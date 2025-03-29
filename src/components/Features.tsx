import React from 'react';
import './Features.css';

const featuresData = [
  {
    id: 1,
    icon: "✍️",
    title: "AI Content Writer",
    description: "Create blog posts, articles, and marketing copy that sounds like it was written by a human expert."
  },
  {
    id: 2,
    icon: "🔍",
    title: "SEO Optimizer",
    description: "Automatically optimize your content for search engines to boost your rankings and visibility."
  },
  {
    id: 3,
    icon: "📈",
    title: "Content Analyzer",
    description: "Analyze your content's readability, engagement, and effectiveness with detailed metrics."
  },
  {
    id: 4,
    icon: "🎯",
    title: "Personalized Content",
    description: "Create content tailored to specific audiences, demographics, and buyer personas."
  },
  {
    id: 5,
    icon: "🌐",
    title: "Multilingual Support",
    description: "Generate and translate content across 50+ languages to reach a global audience."
  },
  {
    id: 6,
    icon: "⚡",
    title: "Rapid Generation",
    description: "Create high-quality content in seconds, not hours, increasing your team's productivity."
  }
];

const Features: React.FC = () => {
  return (
    <section className="features" id="features">
      <div className="section-header">
        <h2>Features that Make <span className="highlight">Content Creation Easy</span></h2>
        <p>Unlock powerful tools that simplify and enhance your content creation process</p>
      </div>
      
      <div className="features-grid">
        {featuresData.map(feature => (
          <div className="feature-card" key={feature.id}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;