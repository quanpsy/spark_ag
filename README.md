# ExperienceHub - AI-Powered Experience Discovery

An AI-powered application that curates personalized weekly experiences for users based on their personality, interests, and preferences. Users interact with an AI interface to share information about themselves and receive a tailored 7-day package of new experiences to try.

## Features

- 🤖 **AI Onboarding**: Conversational chat interface powered by Claude AI
- 🎯 **Personalized Matching**: AI-powered experience curation based on user profile
- 📅 **Weekly Packages**: 7-day curated experience calendars
- 📝 **Detailed Guides**: Step-by-step instructions, video tutorials, and resources
- ✅ **Progress Tracking**: Mark experiences as complete and track your journey
- 🎨 **Beautiful UI**: Modern, gradient-rich design with smooth animations

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **AI**: Anthropic Claude API
- **State Management**: Zustand
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account
- Anthropic API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/experience-discovery-app.git
   cd experience-discovery-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Copy `.env.example` to `.env.local` and fill in your credentials:
   ```bash
   cp .env.example .env.local
   ```

   Required variables:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ANTHROPIC_API_KEY=your_anthropic_api_key
   ```

4. **Set up Supabase database**

   - Create a new Supabase project at [supabase.com](https://supabase.com)
   - Go to SQL Editor in your Supabase dashboard
   - Run the schema from `supabase-schema.sql`
   - Run the sample data from `sample-experiences.sql`

5. **Run the development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
experience-discovery-app/
├── app/                      # Next.js app directory
│   ├── (auth)/              # Authentication pages
│   │   ├── login/
│   │   └── signup/
│   ├── (main)/              # Main application pages
│   │   ├── chat/
│   │   ├── dashboard/
│   │   ├── experience/[id]/
│   │   └── profile/
│   ├── api/                 # API routes
│   │   ├── chat/
│   │   ├── profile/
│   │   └── generate-package/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/              # React components
│   ├── ui/                  # Base UI components
│   ├── ChatInterface.tsx
│   ├── ExperienceCard.tsx
│   ├── Navigation.tsx
│   └── WeeklyCalendar.tsx
├── lib/                     # Utility libraries
│   ├── supabase/
│   └── utils.ts
├── store/                   # Zustand state management
├── types/                   # TypeScript type definitions
├── public/                  # Static assets
├── supabase-schema.sql      # Database schema
└── sample-experiences.sql   # Sample data
```

## Database Schema

### Tables

- **user_profiles**: User personality data and preferences
- **experiences**: Curated experience database
- **weekly_packages**: Generated weekly experience packages
- **user_progress**: User completion tracking

See `supabase-schema.sql` for complete schema with RLS policies.

## Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables in Vercel dashboard
   - Deploy!

3. **Environment Variables in Vercel**
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `ANTHROPIC_API_KEY`

## Usage Guide

### For Users

1. **Sign Up**: Create an account with email and password
2. **AI Onboarding**: Chat with AI to build your profile
3. **Get Your Week**: Receive 7 personalized experiences
4. **Daily Discovery**: Unlock and complete one experience per day
5. **Track Progress**: Mark experiences complete and request new weeks

### For Developers

#### Adding New Experiences

Insert experiences directly into Supabase:

```sql
INSERT INTO experiences (title, description, category, difficulty_level, estimated_time, budget_required, instructions, materials, tags, success_criteria)
VALUES (
  'Your Experience Title',
  'Description...',
  'Category',
  'beginner',
  '30 minutes',
  'low',
  '{"intro": "...", "steps": [...]}',
  ARRAY['material1', 'material2'],
  ARRAY['tag1', 'tag2'],
  ARRAY['criteria1', 'criteria2']
);
```

#### Customizing AI Prompts

Edit system prompts in:
- `/app/api/chat/route.ts` - Onboarding conversation
- `/app/api/generate-package/route.ts` - Experience matching

## Features Roadmap

### Phase 1: MVP ✅
- [x] Authentication
- [x] AI chat onboarding
- [x] Experience database
- [x] Weekly package generation
- [x] Experience detail pages
- [x] Progress tracking

### Phase 2: Enhanced Features
- [ ] Improved AI conversation flow
- [ ] Completion badges and rewards
- [ ] Experience notes/journal
- [ ] Expand experience database to 100+
- [ ] Email reminders

### Phase 3: Community
- [ ] User reviews and tips
- [ ] Photo sharing
- [ ] Social challenges
- [ ] Referral system

### Phase 4: Advanced
- [ ] Learning algorithm
- [ ] Custom difficulty adjustment
- [ ] Calendar integration
- [ ] Mobile app

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Support

For issues or questions:
- Open an issue on GitHub
- Contact: your-email@example.com

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [Supabase](https://supabase.com/)
- AI by [Anthropic Claude](https://www.anthropic.com/)
- Icons by [Lucide](https://lucide.dev/)

---

**Made with ❤️ for people who want to discover new passions**
