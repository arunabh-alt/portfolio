import { Project } from '../types';

export const projectsData: Project[] = [
  {
    title: "RAG-based LLMs for Medical Chatbot",
    description: "Evaluated performance of three open-source LLMs in medical question-answering context using RAG, quantization, and PEFT. Developed an AI medical chatbot achieving 57% accuracy on USMLE MCQs.",
    technologies: ["PyTorch", "FAISS", "LangChain", "Transformers", "Flask", "JavaScript"],
    githubUrl: "https://github.com/arunabh-alt/Comparative-Analysis-of-RAG-based-LLMs-for-Medical-Chatbot"
  },
  {
    title: "Image-Text Matching Multi-Model Classifier",
    description: "Developed 4 image-caption matching classifiers achieving 86% test accuracy on Flickr8K using ResNet50 vision encoder and CNN text embedding.",
    technologies: ["TensorFlow", "Keras", "Transformers"],
    githubUrl: "https://github.com/arunabh-alt/Image-Text-Match-Deep-Learning-Models.git"
  },
  {
    title: "Warehouse Robot Trajectory Optimization",
    description: "Implemented value-based RL algorithms in a PyGame warehouse simulation for real-time robot learning, achieving 76% accuracy with human-in-the-loop feedback.",
    technologies: ["Python", "PyGame", "Reinforcement Learning"],
    githubUrl: "https://arxiv.org/abs/2407.11671v1"
  },
  {
    title: "Super-Mario-Bros AI Agent",
    description: "Trained AI agents with PPO, DQN, and A2C algorithms on Super Mario Bros 2 environment using various deep learning frameworks.",
    technologies: ["PyTorch", "OpenAI Gym", "Stable Baselines3"],
    githubUrl: "https://github.com/arunabh-alt/Super_Mario_Bros_Deep_Reinforcement_Learning_Agent.git"
  }
];