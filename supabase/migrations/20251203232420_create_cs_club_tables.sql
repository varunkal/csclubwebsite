/*
  # Metea Valley CS Club Database Schema

  This migration creates the database structure for the Metea Valley Computer Science Club website.

  ## New Tables

  ### `team_members`
  - `id` (uuid, primary key) - Unique identifier for each team member
  - `name` (text) - Full name of the team member
  - `role` (text) - Role/position in the club (e.g., President, Vice President, Member)
  - `grade` (text) - Grade level (e.g., Freshman, Sophomore, Junior, Senior)
  - `bio` (text) - Short biography or description
  - `image_url` (text, optional) - URL to profile picture
  - `display_order` (integer) - Order to display members (lower numbers first)
  - `created_at` (timestamptz) - Timestamp of when record was created

  ### `calendar_events`
  - `id` (uuid, primary key) - Unique identifier for each event
  - `title` (text) - Event title
  - `description` (text) - Event description
  - `event_date` (timestamptz) - Date and time of the event
  - `location` (text) - Where the event takes place
  - `event_type` (text) - Type of event (meeting, competition, workshop, social)
  - `created_at` (timestamptz) - Timestamp of when record was created

  ### `contact_submissions`
  - `id` (uuid, primary key) - Unique identifier for each submission
  - `name` (text) - Name of person submitting
  - `email` (text) - Email address
  - `subject` (text) - Subject of the message
  - `message` (text) - The message content
  - `status` (text) - Status of submission (new, read, responded)
  - `created_at` (timestamptz) - Timestamp of submission

  ## Security
  - Enable Row Level Security (RLS) on all tables
  - Public read access for team_members and calendar_events
  - Contact submissions can only be inserted by anyone, but only read by authenticated users
*/

-- Create team_members table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  grade text NOT NULL,
  bio text DEFAULT '',
  image_url text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create calendar_events table
CREATE TABLE IF NOT EXISTS calendar_events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text DEFAULT '',
  event_date timestamptz NOT NULL,
  location text DEFAULT '',
  event_type text DEFAULT 'meeting',
  created_at timestamptz DEFAULT now()
);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE calendar_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policies for team_members (public read access)
CREATE POLICY "Anyone can view team members"
  ON team_members FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Authenticated users can manage team members"
  ON team_members FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policies for calendar_events (public read access)
CREATE POLICY "Anyone can view calendar events"
  ON calendar_events FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Authenticated users can manage calendar events"
  ON calendar_events FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policies for contact_submissions
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view contact submissions"
  ON contact_submissions FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update contact submissions"
  ON contact_submissions FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Insert sample team members
INSERT INTO team_members (name, role, grade, bio, display_order) VALUES
('Alex Johnson', 'President', 'Senior', 'Passionate about competitive programming and AI. Leading our team to nationals!', 1),
('Sarah Chen', 'Vice President', 'Junior', 'Full-stack developer and hackathon enthusiast. Love building web apps!', 2),
('Michael Patel', 'Secretary', 'Junior', 'Organizer extraordinaire. Keeping us on track and connected.', 3),
('Emma Rodriguez', 'Treasurer', 'Sophomore', 'Managing our budget and sponsorships. Also into cybersecurity!', 4);

-- Insert sample calendar events
INSERT INTO calendar_events (title, description, event_date, location, event_type) VALUES
('Weekly Meeting', 'Regular club meeting to discuss ongoing projects and upcoming competitions', NOW() + interval '2 days', 'Room 234', 'meeting'),
('Hackathon Workshop', 'Learn the basics of hackathons and start building your first project', NOW() + interval '1 week', 'Computer Lab', 'workshop'),
('ACSL Competition', 'American Computer Science League competition - regional round', NOW() + interval '3 weeks', 'Auditorium', 'competition'),
('College CS Panel', 'Q&A with college students about CS programs and career paths', NOW() + interval '1 month', 'Library', 'workshop');