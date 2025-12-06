import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Project Detail: {id}</h1>
      <section>
          <h2>Timeline</h2>
          <p>Details about the project's timeline including milestones and deadlines.</p>
      </section>
      <section>
          <h2>Team Info</h2>
          <p>Information about the team members involved in the project, their roles and contributions.</p>
      </section>
      <section>
          <h2>Progress Tracking</h2>
          <p>Real-time progress tracking and updates on the status of various tasks.</p>
      </section>
    </div>
  );
};

export default ProjectDetailPage;
