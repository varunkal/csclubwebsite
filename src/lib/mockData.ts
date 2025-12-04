export type TeamMember = {
  id: string;
  name: string;
  role: string;
  grade: string;
  bio: string;
  image_url?: string;
  display_order: number;
};

export type CalendarEvent = {
  id: string;
  title: string;
  description: string;
  event_date: string;
  location: string;
  event_type: string;
};

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    role: 'President',
    grade: 'Senior',
    bio: 'Passionate about competitive programming and AI. Leading our team to nationals!',
    display_order: 1,
  },
  {
    id: '2',
    name: 'Sarah Chen',
    role: 'Vice President',
    grade: 'Junior',
    bio: 'Full-stack developer and hackathon enthusiast. Love building web apps!',
    display_order: 2,
  },
  {
    id: '3',
    name: 'Michael Patel',
    role: 'Secretary',
    grade: 'Junior',
    bio: 'Organizer extraordinaire. Keeping us on track and connected.',
    display_order: 3,
  },
  {
    id: '4',
    name: 'Emma Rodriguez',
    role: 'Treasurer',
    grade: 'Sophomore',
    bio: 'Managing our budget and sponsorships. Also into cybersecurity!',
    display_order: 4,
  },
];

export const calendarEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'Weekly Meeting',
    description: 'Regular club meeting to discuss ongoing projects and upcoming competitions',
    event_date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString(),
    location: 'Room 234',
    event_type: 'meeting',
  },
  {
    id: '2',
    title: 'Hackathon Workshop',
    description: 'Learn the basics of hackathons and start building your first project',
    event_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    location: 'Computer Lab',
    event_type: 'workshop',
  },
  {
    id: '3',
    title: 'ACSL Competition',
    description: 'American Computer Science League competition - regional round',
    event_date: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(),
    location: 'Auditorium',
    event_type: 'competition',
  },
  {
    id: '4',
    title: 'College CS Panel',
    description: 'Q&A with college students about CS programs and career paths',
    event_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    location: 'Library',
    event_type: 'workshop',
  },
];
