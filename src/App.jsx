// src/App.jsx
import UserProfile from './UserProfile'; 

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column', 
      alignItems: 'center',    
      gap: '0px',             
    }}>
      {/* Studio Logo */}
      <img
        src="/images/TBSLOGO.png"
        alt="TripleByte Studio Logo"
        style={{ width: '150px', height: 'auto' }}
      />

      <h1 style={{ color: 'white', fontSize: '2 rem', marginBottom: '0px' }}>TripleByte Studio Team</h1>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap', 
        gap: '25px',
        justifyContent: 'center', 
        maxWidth: '100%', 
        alignItems: 'flex-start' 
      }}>
        {/* Profile: Elena Park */}
        <UserProfile
          name="Elena Park"
          jobTitle="Lead Software Engineer & Creative Technologist"
          role="System architecture, frontend/backend integration, and creative interaction design"
          bio="Elena blends system architecture with creative interaction design. She leads technical execution while adding motion and visual flair to TripleByte’s frontend and backend experiences."
          skills={["TypeScript", "Python", "React", "Next.js", "Node.js", "GraphQL", "Redis", "WebGL", "GSAP", "Three.js", "Docker", "Git"]}
          profileImage="/images/Elena.png"
        />

        {/* Profile: Omar Blockman */}
        <UserProfile
          name="Omar Blockman"
          jobTitle="Machine Learning Engineer"
          role="ML pipelines, model deployment, and data-driven product features"
          bio="Omar builds smart, scalable ML systems. He brings deep experience in model deployment and data workflows — with just the right amount of fantasy flair."
          skills={["Python (NumPy, Pandas, Scikit-learn)", "TensorFlow", "Hugging Face", "Data Engineering (Airflow, DVC)", "Model Serving (FastAPI, Flask)", "SQL", "BigQuery", "Snowflake"]}
          profileImage="/images/Omar.png"
        />

        {/* Profile: Riley Chen */}
        <UserProfile
          name="Riley Chen"
          jobTitle="Product Designer & Frontend Developer"
          role="UX/UI design, design-to-code workflows, and accessible component development"
          bio="Riley blends clean design with sharp code. From Figma to React, she ensures everything looks great and works even better across devices."
          skills={["Figma", "Framer", "Adobe CC", "HTML/CSS", "JavaScript", "React", "Design Systems & Component Libraries", "UX Research & Testing", "Accessibility & Responsive Design"]}
          profileImage="/images/Riley.png"
        />
      </div>
    </div>
  );
}

export default App; 