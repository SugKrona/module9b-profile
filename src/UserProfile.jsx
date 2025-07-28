// Gustavo Corona
// src/UserProfile.jsx made July 27, 2025
// GitHub Repository URL: https://github.com/SugKrona/module9b-profile

import { useState } from 'react'; // Import useState hook for managing state

// UserProfile component now accepts name, bio, skills, profileImage, role, AND jobTitle as properties (props).
function UserProfile({ name, bio, skills, profileImage, role, jobTitle }) {
  // Use state to track if the mouse is hovering over the component.
  const [isHovered, setIsHovered] = useState(false);

  // Define the base style for the profile card.
  const baseCardStyle = {
    maxWidth: '400px',
    margin: '20px auto',
    padding: '24px',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white', // Card background remains white
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    transition: 'box-shadow 0.3s ease-in-out, color 0.3s ease-in-out', // Removed transform from transition
    cursor: 'pointer', // Indicate it's interactive
    display: 'flex', // Use flexbox for internal layout
    flexDirection: 'column', // Stack content vertically
    alignItems: 'center', // Center content horizontally
    // Removed minHeight here. Height will be determined by visible content + expanded bio/skills.
    color: '#333', // Default text color for the card (dark)
  };

  // Define the style for when the component is hovered.
  const hoveredCardStyle = {
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)', // Deeper shadow on hover
    color: '#0056b3', // Darker blue for text on hover (subtle change on white card)
  };

  // Combine base and hovered styles conditionally.
  const cardStyle = isHovered ? { ...baseCardStyle, ...hoveredCardStyle } : baseCardStyle;

  // Style for the bio/skills container (which reveals on hover)
  // This uses max-height to smoothly expand/collapse the content.
  const bioSkillsContainerStyle = {
    maxHeight: isHovered ? '500px' : '0', // Max height to show content when hovered, 0 when not
    overflow: 'hidden', // Hide any overflow when collapsed (e.g., during transition or if content exceeds 500px)
    transition: 'max-height 0.5s ease-in-out', // Smooth transition for height change
    width: '100%', // Ensure it takes full width when expanded
    textAlign: 'left', // Ensure text aligns left
    marginTop: '10px', // Space between fixed content and revealed content
  };

  return (
    <div
      style={cardStyle} // Apply the combined style
      onMouseEnter={() => setIsHovered(true)} // Set hovered state to true when mouse enters
      onMouseLeave={() => setIsHovered(false)} // Set hovered state to false when mouse leaves
    >
      <img src={profileImage} alt={`${name}'s profile`} style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #e1e5e9', marginBottom: '16px' }} />
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: 'black', marginBottom: '5px' }}>{name}</h1>
      
      {/* Job Title: Always visible below the name */}
      <p style={{ fontSize: '1.1rem', color: 'black', marginBottom: '5px', fontWeight: 'bold' }}>{jobTitle}</p>

      {/* Role description: Always visible below the job title */}
      <p style={{ fontSize: '1rem', color: '#666', marginBottom: '10px' }}>{role}</p>

      {/* Conditional Rendering & Height Control for Bio and Skills */}
      <div style={bioSkillsContainerStyle}>
        <p style={{ fontSize: '16px', color: '#555', marginBottom: '10px' }}>{bio}</p>
        <div style={{ fontSize: '0.9rem', color: '#666' }}>
          <h3 style={{ fontSize: '1rem', marginBottom: '5px', color: 'black' }}>Skills:</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {skills.map((skill, index) => (
                <li key={index} style={{ marginBottom: '4px', paddingLeft: '10px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: '#007bff' }}>•</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
    </div>
  );
}

export default UserProfile; // Exports the component