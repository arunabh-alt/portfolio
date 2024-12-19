export interface Skill {
  name: string;
  proficiency: number; // A number between 0 and 100
}

export interface SkillCategory {
  category: string;
  skills: Skill[]; // Change the skills to an array of Skill objects
}

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", proficiency: 90 },
      { name: "C++", proficiency: 80 },
      { name: "C", proficiency: 70 },
      { name: "MATLAB", proficiency: 85 },
      { name: "SQL", proficiency: 75 },
      { name: "HTML", proficiency: 95 },
      { name: "CSS", proficiency: 90 },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "Scikit-learn", proficiency: 80 },
      { name: "Pandas", proficiency: 85 },
      { name: "PyTorch", proficiency: 70 },
      { name: "Keras", proficiency: 75 },
      { name: "TensorFlow", proficiency: 70 },
      { name: "LangChain", proficiency: 65 },
      { name: "Llama-Index", proficiency: 80 },
      { name: "Hugging Face", proficiency: 80 },
      { name: "Transformers", proficiency: 75 },
      { name: "Flask", proficiency: 80 },
      { name: "NLTK", proficiency: 75 },
      { name: "OpenCV", proficiency: 80 },
      { name: "ROS2 Humble", proficiency: 80 },
      { name: "FastAPI", proficiency: 85 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "GitHub", proficiency: 90 },
      { name: "AWS", proficiency: 80 },
      { name: "Firebase", proficiency: 75 },
      { name: "Docker", proficiency: 80 },
      { name: "Postman", proficiency: 85 },
      { name: "Trello", proficiency: 70 },
      { name: "VS Code", proficiency: 90 },
      { name: "Jira", proficiency: 75 },
    ],
  },
  {
    category: "AI/ML",
    skills: [
      { name: "Neural Nets", proficiency: 85 },
      { name: "GAN", proficiency: 50 },
      { name: "Quantization", proficiency: 80 },
      { name: "RAG", proficiency: 82 },
      { name: "AI Chatbot", proficiency: 75 },
      { name: "Vector Data", proficiency: 80 },
      { name: "CUDA", proficiency: 75 },
      { name: "NLP", proficiency: 80 },
      { name: "ComputerVision", proficiency: 85 },
    ],
  },
  {
    category: "Platforms",
    skills: [
      { name: "AWS CLI", proficiency: 80 },
      { name: "EC2", proficiency: 75 },
      { name: "Linux", proficiency: 80 },
      { name: "Gazebo", proficiency: 60 },
      { name: "Rviz", proficiency: 70 },
      { name: "Simulink", proficiency: 80 },
    ],
  },
];
