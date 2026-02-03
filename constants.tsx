
import { UserProfile, Skill } from './types';

export const SKILL_OPTIONS: Skill[] = [
  "UI/UX Design", "React Development", "Python/Backend", "Graphic Design", 
  "Video Editing", "Content Writing", "SEO", "Social Media Marketing",
  "Music Production", "Public Speaking", "Photography", "Translation",
  "Data Analysis", "Project Management", "Illustration", "Mobile Dev"
];

export const MOCK_USERS: UserProfile[] = [
  {
    id: "user-2",
    name: "Lila Chen",
    avatar: "https://picsum.photos/seed/lila/200/200",
    bio: "Computer Science major at GUC. I build fast React apps and love solving complex algorithms.",
    skillsOffered: ["React Development", "Python/Backend", "Data Analysis"],
    skillsNeeded: ["UI/UX Design", "Graphic Design"],
    rating: 4.9,
    sessionsCompleted: 12,
    verified: true
  },
  {
    id: "user-3",
    name: "Omar Zayed",
    avatar: "https://picsum.photos/seed/omar/200/200",
    bio: "Freelance Creative Director. Expert in brand identity and visual storytelling.",
    skillsOffered: ["UI/UX Design", "Graphic Design", "Illustration"],
    skillsNeeded: ["SEO", "Content Writing"],
    rating: 4.8,
    sessionsCompleted: 25,
    verified: true
  },
  {
    id: "user-4",
    name: "Sarah Miller",
    avatar: "https://picsum.photos/seed/sarah/200/200",
    bio: "Passionate about content that converts. Helping brands tell their story through high-quality video.",
    skillsOffered: ["Video Editing", "Photography", "Content Writing"],
    skillsNeeded: ["React Development", "Mobile Dev"],
    rating: 4.7,
    sessionsCompleted: 8
  },
  {
    id: "user-5",
    name: "Ahmed Khalil",
    avatar: "https://picsum.photos/seed/ahmed/200/200",
    bio: "Marketing student and SEO enthusiast. Let's get your project noticed!",
    skillsOffered: ["SEO", "Social Media Marketing", "Content Writing"],
    skillsNeeded: ["Python/Backend", "Data Analysis"],
    rating: 4.5,
    sessionsCompleted: 15
  },
  {
    id: "user-6",
    name: "Elena Ross",
    avatar: "https://picsum.photos/seed/elena/200/200",
    bio: "UX Researcher by day, illustrator by night. Looking to upgrade my web dev skills.",
    skillsOffered: ["UI/UX Design", "Illustration"],
    skillsNeeded: ["React Development", "Mobile Dev"],
    rating: 5.0,
    sessionsCompleted: 3
  }
];

export const CURRENT_USER: UserProfile = {
  id: "user-1",
  name: "Alex Dev",
  avatar: "https://picsum.photos/seed/alex/200/200",
  bio: "Full-stack enthusiast looking to swap my coding skills for design help.",
  skillsOffered: ["React Development", "Python/Backend", "Project Management"],
  skillsNeeded: ["UI/UX Design", "Video Editing", "Social Media Marketing"],
  rating: 4.9,
  sessionsCompleted: 5,
  verified: false
};
