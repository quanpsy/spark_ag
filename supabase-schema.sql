-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- User Profiles Table
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  personality_data JSONB NOT NULL,
  preferences JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Experiences Table
CREATE TABLE experiences (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  difficulty_level TEXT NOT NULL CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')),
  estimated_time TEXT NOT NULL,
  budget_required TEXT NOT NULL CHECK (budget_required IN ('low', 'medium', 'high')),
  instructions JSONB NOT NULL,
  video_links JSONB,
  resource_links JSONB,
  materials TEXT[],
  tags TEXT[],
  success_criteria TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Weekly Packages Table
CREATE TABLE weekly_packages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  start_date DATE NOT NULL,
  end_date DATE NOT NULL,
  experiences TEXT[] NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('active', 'completed', 'expired')) DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- User Progress Table
CREATE TABLE user_progress (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  package_id UUID REFERENCES weekly_packages(id) ON DELETE CASCADE,
  experience_id UUID REFERENCES experiences(id) ON DELETE CASCADE,
  day_number INTEGER NOT NULL,
  completed BOOLEAN DEFAULT FALSE,
  completion_date TIMESTAMP WITH TIME ZONE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, package_id, day_number)
);

-- Indexes for better performance
CREATE INDEX idx_user_profiles_user_id ON user_profiles(user_id);
CREATE INDEX idx_weekly_packages_user_id ON weekly_packages(user_id);
CREATE INDEX idx_weekly_packages_status ON weekly_packages(status);
CREATE INDEX idx_user_progress_user_id ON user_progress(user_id);
CREATE INDEX idx_user_progress_package_id ON user_progress(package_id);
CREATE INDEX idx_experiences_category ON experiences(category);
CREATE INDEX idx_experiences_tags ON experiences USING GIN(tags);

-- Enable Row Level Security
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE weekly_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_profiles
CREATE POLICY "Users can view their own profile"
  ON user_profiles FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
  ON user_profiles FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile"
  ON user_profiles FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for weekly_packages
CREATE POLICY "Users can view their own packages"
  ON weekly_packages FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own packages"
  ON weekly_packages FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for user_progress
CREATE POLICY "Users can view their own progress"
  ON user_progress FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own progress"
  ON user_progress FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own progress"
  ON user_progress FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for experiences
CREATE POLICY "All authenticated users can view experiences"
  ON experiences FOR SELECT
  TO authenticated
  USING (true);
