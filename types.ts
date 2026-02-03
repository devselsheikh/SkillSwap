
export type Skill = string;

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  skillsOffered: Skill[];
  skillsNeeded: Skill[];
  rating: number;
  sessionsCompleted: number;
  location?: string;
  verified?: boolean;
  endorsements?: Record<Skill, number>;
}

export interface Job {
  id: string;
  posterId: string;
  posterName: string;
  title: string;
  description: string;
  skillRequired: Skill;
  skillOffered: Skill;
  timestamp: number;
}

export interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: number;
  type?: 'text' | 'schedule_request' | 'schedule_confirm' | 'swap_request';
  meta?: any;
}

export interface ChatSession {
  id: string;
  participants: [string, string];
  messages: Message[];
  status: 'active' | 'archived';
}

export interface MatchResult {
  user: UserProfile;
  score: number;
  commonOffered: Skill[]; // Skills they offer that I need
  commonNeeded: Skill[];  // Skills they need that I offer
}
