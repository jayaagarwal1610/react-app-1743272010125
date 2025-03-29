import React, { useState } from 'react';
import './AskoidTools.css';

const tools = [
  {
    id: 1,
    name: "Blog Writer",
    description: "Create engaging blog posts optimized for your audience and search engines.",
    image: "https://askoid.com/blog-writer.webp"
  },
  {
    id: 2,
    name: "Social Media Content",
    description: "Generate catchy posts for all your social platforms in seconds.",
    image: "https://askoid.com/social-media.webp"
  },
  {
    id: 3,
    name: "Email Campaigns",
    description: "Draft compelling email content that drives opens, clicks, and conversions.",
    image: "https://askoid.com/email-campaign.webp"
  },
  {
    id: 4,
    name: "Ad Copy",
    description: "Create high-converting ad copy for your digital marketing campaigns.",
    image: "https://askoid.com/ad-copy.webp"
  }
];

const AskoidTools: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState(tools[0]);

  return (
    <section className="askoid-tools" id="tools">
      <div className="section-header">
        <h2>Powerful <span className="highlight">AI Content Tools</span></h2>
        <p>Explore our suite of specialized tools designed for every content need</p>
      </div>
      
      <div className="tools-container">
        <div className="tools-nav">
          {tools.map(tool => (
            <button 
              key={tool.id}
              className={`tool-btn ${selectedTool.id === tool.id ? 'active' : ''}`}
              onClick={() => setSelectedTool(tool)}
            >
              {tool.name}
            </button>
          ))}
        </div>
        
        <div className="tool-preview">
          <div className="tool-content">
            <h3>{selectedTool.name}</h3>
            <p>{selectedTool.description}</p>
            <button className="btn">Try it Now</button>
          </div>
          <div className="tool-image">
            <img src={selectedTool.image} alt={selectedTool.name} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskoidTools;