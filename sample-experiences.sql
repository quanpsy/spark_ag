-- Sample Experiences for ExperienceHub

-- Experience 1: Watercolor Painting
INSERT INTO experiences (title, description, category, difficulty_level, estimated_time, budget_required, instructions, video_links, materials, tags, success_criteria)
VALUES (
  'Watercolor Sunset Landscape',
  'Create a beautiful watercolor sunset with simple techniques perfect for beginners. Discover the meditative joy of painting.',
  'Creative Arts',
  'beginner',
  '45 minutes',
  'low',
  '{
    "intro": "Watercolor is forgiving and beautiful - perfect for beginners! Let the colors flow and blend naturally.",
    "steps": [
      {"step": 1, "title": "Set up your space", "description": "Lay out materials on a flat surface. Fill cup with clean water. Protect your surface with newspaper.", "tip": "Tape paper down to prevent warping"},
      {"step": 2, "title": "Wet your paper", "description": "Using clean water and large brush, wet entire top half of paper evenly."},
      {"step": 3, "title": "Paint the sky", "description": "While wet, add yellow at bottom, then orange, then red/pink at top. Let blend naturally.", "tip": "Less water = more vibrant colors"},
      {"step": 4, "title": "Add silhouettes", "description": "Once dry, paint dark tree or mountain silhouettes using black or dark blue."},
      {"step": 5, "title": "Final touches", "description": "Add small details like birds or stars. Sign your artwork!"}
    ]
  }',
  '[
    {"title": "Watercolor Sunset Tutorial for Beginners", "url": "https://youtube.com/watch?v=example1", "duration": "12:45"},
    {"title": "Basic Watercolor Techniques", "url": "https://youtube.com/watch?v=example2", "duration": "8:20"}
  ]',
  ARRAY['Basic watercolor set (12 colors)', 'Watercolor paper or heavy cardstock', '2 brushes (1 large, 1 small)', 'Cup of water', 'Paper towel', 'Masking tape (optional)'],
  ARRAY['creative', 'indoor', 'solo', 'relaxing', 'artistic', 'beginner-friendly'],
  ARRAY['Created a blended sunset sky', 'Added silhouette elements', 'Experienced watercolor flow', 'Completed your first painting']
);

-- Experience 2: Meditation Practice
INSERT INTO experiences (title, description, category, difficulty_level, estimated_time, budget_required, instructions, video_links, materials, tags, success_criteria)
VALUES (
  'Mindful Breathing Meditation',
  'Learn the fundamentals of meditation through simple breathing exercises. Reduce stress and improve focus.',
  'Wellness & Mindfulness',
  'beginner',
  '20 minutes',
  'low',
  '{
    "intro": "Meditation is a practice of presence. There is no wrong way to meditate - just breathe and be.",
    "steps": [
      {"step": 1, "title": "Find your space", "description": "Choose a quiet spot. Sit comfortably on a chair or cushion with your back straight.", "tip": "You don''t need to sit cross-legged"},
      {"step": 2, "title": "Set a timer", "description": "Start with 10 minutes. Use a gentle alarm sound."},
      {"step": 3, "title": "Focus on breath", "description": "Close your eyes. Notice your natural breathing. Count 1 on inhale, 2 on exhale, up to 10, then repeat."},
      {"step": 4, "title": "Notice thoughts", "description": "When your mind wanders (it will!), gently return focus to breath. No judgment.", "tip": "Wandering mind is normal - it''s the practice of returning that matters"},
      {"step": 5, "title": "Close gently", "description": "When timer sounds, take 3 deep breaths. Open eyes slowly. Notice how you feel."}
    ]
  }',
  '[
    {"title": "Beginner Meditation Guide", "url": "https://youtube.com/watch?v=example3", "duration": "15:30"}
  ]',
  ARRAY['Quiet space', 'Timer or meditation app', 'Comfortable seat or cushion'],
  ARRAY['wellness', 'indoor', 'solo', 'relaxing', 'mental-health', 'beginner-friendly'],
  ARRAY['Completed 10 minutes of meditation', 'Practiced returning attention to breath', 'Experienced moments of calm']
);

-- Experience 3: Cooking - Homemade Pasta
INSERT INTO experiences (title, description, category, difficulty_level, estimated_time, budget_required, instructions, video_links, materials, tags, success_criteria)
VALUES (
  'Fresh Homemade Pasta from Scratch',
  'Make authentic Italian pasta using just flour and eggs. Impress yourself and others with this timeless skill.',
  'Culinary Arts',
  'intermediate',
  '1 hour 30 minutes',
  'low',
  '{
    "intro": "Making pasta from scratch is easier than you think and incredibly rewarding!",
    "steps": [
      {"step": 1, "title": "Make the dough", "description": "Mix 2 cups flour with 3 eggs. Knead for 10 minutes until smooth and elastic.", "tip": "Dough should be firm but pliable"},
      {"step": 2, "title": "Rest the dough", "description": "Wrap in plastic wrap. Let rest 30 minutes at room temperature."},
      {"step": 3, "title": "Roll it out", "description": "Divide into 4 pieces. Roll each very thin (1-2mm) using rolling pin or pasta machine."},
      {"step": 4, "title": "Cut your pasta", "description": "Dust with flour. Fold and cut into fettuccine strips or desired shape."},
      {"step": 5, "title": "Cook fresh", "description": "Boil salted water. Cook pasta 2-3 minutes. Toss with butter and parmesan."}
    ]
  }',
  '[
    {"title": "How to Make Fresh Pasta", "url": "https://youtube.com/watch?v=example4", "duration": "18:20"}
  ]',
  ARRAY['2 cups all-purpose flour', '3 large eggs', 'Salt', 'Rolling pin or pasta machine', 'Large pot', 'Butter and parmesan for serving'],
  ARRAY['culinary', 'indoor', 'solo', 'creative', 'skill-building', 'italian'],
  ARRAY['Made pasta dough from scratch', 'Successfully rolled and cut pasta', 'Cooked and enjoyed fresh pasta']
);

-- Experience 4: Urban Photography Walk
INSERT INTO experiences (title, description, category, difficulty_level, estimated_time, budget_required, instructions, video_links, materials, tags, success_criteria)
VALUES (
  'Street Photography Adventure',
  'Explore your neighborhood with fresh eyes. Capture interesting moments, architecture, and street life.',
  'Photography & Visual Arts',
  'beginner',
  '1 hour',
  'low',
  '{
    "intro": "Photography is about seeing. Your smartphone camera is all you need to start!",
    "steps": [
      {"step": 1, "title": "Choose your route", "description": "Pick a neighborhood or area you want to explore. Early morning or golden hour (before sunset) has best light."},
      {"step": 2, "title": "Look for patterns", "description": "Notice repeating shapes, colors, textures. Photograph interesting doors, windows, shadows.", "tip": "Get low or high for unique angles"},
      {"step": 3, "title": "Capture moments", "description": "Watch for interesting people, interactions, or movements. Be respectful and discreet."},
      {"step": 4, "title": "Play with composition", "description": "Use rule of thirds. Frame subjects with foreground elements. Try different perspectives."},
      {"step": 5, "title": "Review and select", "description": "Choose your best 5-10 photos. Notice what makes them work."}
    ]
  }',
  '[
    {"title": "Street Photography Tips for Beginners", "url": "https://youtube.com/watch?v=example5", "duration": "14:15"}
  ]',
  ARRAY['Smartphone or camera', 'Comfortable walking shoes', 'Charged battery'],
  ARRAY['photography', 'outdoor', 'solo', 'creative', 'exploration', 'urban'],
  ARRAY['Took 30+ photos on your walk', 'Experimented with different angles', 'Selected your favorite shots', 'Noticed details you usually miss']
);

-- Experience 5: Journaling Practice
INSERT INTO experiences (title, description, category, difficulty_level, estimated_time, budget_required, instructions, video_links, materials, tags, success_criteria)
VALUES (
  'Creative Morning Pages',
  'Start a journaling practice with stream-of-consciousness morning pages. Clear your mind and boost creativity.',
  'Writing & Reflection',
  'beginner',
  '30 minutes',
  'low',
  '{
    "intro": "Morning pages are three pages of longhand writing, strictly stream-of-consciousness. There is no wrong way to do them.",
    "steps": [
      {"step": 1, "title": "Set up early", "description": "Do this first thing in morning before checking phone. Have notebook and pen ready.", "tip": "Keep materials by your bed"},
      {"step": 2, "title": "Write three pages", "description": "Write whatever comes to mind. Don''t stop to think or edit. Just keep pen moving."},
      {"step": 3, "title": "No censoring", "description": "Write complaints, dreams, random thoughts, to-do lists - anything. No one will read this.", "tip": "If stuck, write \"I don''t know what to write\" until something comes"},
      {"step": 4, "title": "Don''t reread", "description": "Close the notebook when done. Don''t read what you wrote."},
      {"step": 5, "title": "Reflect briefly", "description": "Notice how you feel. Clearer? Calmer? More energized?"}
    ]
  }',
  '[
    {"title": "Morning Pages Explained", "url": "https://youtube.com/watch?v=example6", "duration": "10:45"}
  ]',
  ARRAY['Notebook or journal', 'Pen', 'Quiet morning time'],
  ARRAY['writing', 'indoor', 'solo', 'reflective', 'creative', 'morning-routine'],
  ARRAY['Wrote three full pages', 'Practiced stream-of-consciousness', 'Completed without self-editing', 'Noticed mental clarity']
);

-- Experience 6: Beginner Yoga Flow
INSERT INTO experiences (title, description, category, difficulty_level, estimated_time, budget_required, instructions, video_links, materials, tags, success_criteria)
VALUES (
  '20-Minute Gentle Yoga Flow',
  'Learn basic yoga poses and create a simple flow. Improve flexibility, strength, and mind-body connection.',
  'Fitness & Movement',
  'beginner',
  '30 minutes',
  'low',
  '{
    "intro": "Yoga is a practice, not a performance. Listen to your body and move at your own pace.",
    "steps": [
      {"step": 1, "title": "Prepare your space", "description": "Clear area for yoga mat. Wear comfortable clothes. Have water nearby."},
      {"step": 2, "title": "Warm up", "description": "Start in child''s pose. Take 5 deep breaths. Move to cat-cow for 1 minute.", "tip": "Move with your breath"},
      {"step": 3, "title": "Sun salutations", "description": "Do 3 rounds slowly: mountain pose, forward fold, plank, cobra, downward dog, forward fold, mountain."},
      {"step": 4, "title": "Standing poses", "description": "Try warrior 1, warrior 2, and triangle pose. Hold each 5 breaths per side."},
      {"step": 5, "title": "Cool down", "description": "Seated forward fold, supine twist, final savasana (5 minutes lying flat)."}
    ]
  }',
  '[
    {"title": "Beginner Yoga Flow", "url": "https://youtube.com/watch?v=example7", "duration": "22:30"}
  ]',
  ARRAY['Yoga mat or towel', 'Comfortable clothing', 'Water bottle', 'Quiet space'],
  ARRAY['fitness', 'indoor', 'solo', 'wellness', 'flexibility', 'beginner-friendly'],
  ARRAY['Completed full 20-minute flow', 'Learned basic yoga poses', 'Connected breath with movement', 'Felt body awareness']
);

-- Experience 7: Plant Propagation
INSERT INTO experiences (title, description, category, difficulty_level, estimated_time, budget_required, instructions, video_links, materials, tags, success_criteria)
VALUES (
  'Propagate Your First Houseplant',
  'Learn to grow new plants from cuttings. Start your indoor garden and share plants with friends.',
  'Gardening & Nature',
  'beginner',
  '45 minutes',
  'low',
  '{
    "intro": "Plant propagation is like magic - watching roots grow from a simple cutting is incredibly satisfying!",
    "steps": [
      {"step": 1, "title": "Choose your plant", "description": "Pothos, spider plant, or philodendron are easiest. Look for healthy stems with 3-4 leaves.", "tip": "Ask friends for cuttings - most plant lovers are happy to share!"},
      {"step": 2, "title": "Take cuttings", "description": "Cut 4-6 inch stems just below a node (where leaf meets stem). Remove bottom leaves."},
      {"step": 3, "title": "Prepare containers", "description": "Fill clear glass jars with room temperature water. Place cuttings so nodes are submerged."},
      {"step": 4, "title": "Find the right spot", "description": "Place in bright, indirect light. Change water weekly.", "tip": "Clear containers let you watch roots grow!"},
      {"step": 5, "title": "Wait and observe", "description": "Roots appear in 1-3 weeks. Plant in soil when roots are 2-3 inches long."}
    ]
  }',
  '[
    {"title": "How to Propagate Houseplants", "url": "https://youtube.com/watch?v=example8", "duration": "16:40"}
  ]',
  ARRAY['Healthy houseplant for cuttings', 'Clean scissors or pruning shears', 'Clear glass jars or containers', 'Water', 'Small pots with soil (for later)'],
  ARRAY['gardening', 'indoor', 'solo', 'nature', 'sustainable', 'beginner-friendly'],
  ARRAY['Successfully took plant cuttings', 'Set up propagation station', 'Learned about plant nodes', 'Started watching for root growth']
);

-- Experience 8: Bread Baking
INSERT INTO experiences (title, description, category, difficulty_level, estimated_time, budget_required, instructions, video_links, materials, tags, success_criteria)
VALUES (
  'No-Knead Artisan Bread',
  'Bake professional-looking artisan bread with minimal effort. Fill your home with the aroma of fresh bread.',
  'Culinary Arts',
  'beginner',
  '3 hours (mostly waiting)',
  'low',
  '{
    "intro": "This no-knead method produces bakery-quality bread with just 4 ingredients and minimal work!",
    "steps": [
      {"step": 1, "title": "Mix the dough", "description": "Combine 3 cups flour, 1.5 cups water, 1/4 tsp yeast, 1.5 tsp salt. Stir until shaggy. Cover with plastic wrap.", "tip": "Use a large bowl - dough will rise significantly"},
      {"step": 2, "title": "First rise", "description": "Let sit at room temperature 12-18 hours until doubled and bubbly."},
      {"step": 3, "title": "Shape the dough", "description": "Flour surface. Turn out dough. Fold edges to center. Let rest 15 minutes."},
      {"step": 4, "title": "Second rise", "description": "Shape into ball. Place on floured towel. Cover. Rise 2 hours until doubled."},
      {"step": 5, "title": "Bake", "description": "Preheat Dutch oven at 450°F for 30 min. Drop in dough. Cover. Bake 30 min. Uncover. Bake 15 min until golden."}
    ]
  }',
  '[
    {"title": "No-Knead Bread Recipe", "url": "https://youtube.com/watch?v=example9", "duration": "8:15"}
  ]',
  ARRAY['3 cups all-purpose flour', 'Water', 'Yeast', 'Salt', 'Large bowl', 'Dutch oven or heavy pot with lid', 'Kitchen towel'],
  ARRAY['culinary', 'indoor', 'solo', 'skill-building', 'baking', 'patience'],
  ARRAY['Mixed bread dough successfully', 'Completed both rises', 'Baked your first loaf', 'Enjoyed fresh homemade bread']
);

-- Experience 9: Stargazing
INSERT INTO experiences (title, description, category, difficulty_level, estimated_time, budget_required, instructions, video_links, materials, tags, success_criteria)
VALUES (
  'Beginner Stargazing Night',
  'Learn to identify constellations and appreciate the night sky. Connect with the cosmos from your backyard.',
  'Nature & Science',
  'beginner',
  '1 hour',
  'low',
  '{
    "intro": "The night sky has inspired humans for millennia. Tonight, you''ll learn to read the stars!",
    "steps": [
      {"step": 1, "title": "Check conditions", "description": "Choose a clear night with minimal moon. Check weather and moon phase. Download stargazing app.", "tip": "New moon nights are darkest and best for stars"},
      {"step": 2, "title": "Find dark spot", "description": "Get away from city lights if possible. Let eyes adjust to darkness for 20 minutes."},
      {"step": 3, "title": "Find the Big Dipper", "description": "Look north. Find the distinctive ladle shape. Use it to locate North Star (Polaris)."},
      {"step": 4, "title": "Identify constellations", "description": "Use app to find Orion, Cassiopeia, or seasonal constellations. Trace patterns with finger."},
      {"step": 5, "title": "Watch for satellites", "description": "Look for steady moving lights (satellites) vs twinkling stars. Spot shooting stars if lucky!"}
    ]
  }',
  '[
    {"title": "Stargazing for Beginners", "url": "https://youtube.com/watch?v=example10", "duration": "19:50"}
  ]',
  ARRAY['Stargazing app (SkyView, Star Walk)', 'Blanket or reclining chair', 'Red flashlight (to preserve night vision)', 'Warm clothing'],
  ARRAY['nature', 'outdoor', 'solo', 'science', 'nighttime', 'contemplative'],
  ARRAY['Identified 3+ constellations', 'Located the North Star', 'Spent time under the stars', 'Used stargazing app successfully']
);

-- Experience 10: Digital Declutter
INSERT INTO experiences (title, description, category, difficulty_level, estimated_time, budget_required, instructions, video_links, materials, tags, success_criteria)
VALUES (
  'Phone & Email Digital Detox',
  'Organize your digital life. Clean up your phone, email, and create healthier tech habits.',
  'Productivity & Organization',
  'beginner',
  '1 hour',
  'low',
  '{
    "intro": "Digital clutter creates mental clutter. A clean digital space brings surprising peace of mind!",
    "steps": [
      {"step": 1, "title": "Delete unused apps", "description": "Go through all apps. Delete anything unused in 3+ months. Be ruthless!", "tip": "You can always reinstall if needed"},
      {"step": 2, "title": "Organize remaining apps", "description": "Create folders by category. Keep only essentials on home screen."},
      {"step": 3, "title": "Unsubscribe from emails", "description": "Open email. Unsubscribe from 20+ newsletters you don''t read. Use unroll.me or similar.", "tip": "If you haven''t opened it in months, unsubscribe"},
      {"step": 4, "title": "Clear notifications", "description": "Turn off non-essential notifications. Keep only calls, messages, and critical apps."},
      {"step": 5, "title": "Delete photos", "description": "Delete blurry, duplicate, or unnecessary photos. Back up favorites to cloud."}
    ]
  }',
  '[
    {"title": "Digital Declutter Guide", "url": "https://youtube.com/watch?v=example11", "duration": "13:25"}
  ]',
  ARRAY['Smartphone', 'Computer (optional)', '1 hour of focused time'],
  ARRAY['productivity', 'indoor', 'solo', 'organization', 'digital-wellness', 'declutter'],
  ARRAY['Deleted 10+ unused apps', 'Unsubscribed from 20+ emails', 'Organized phone home screen', 'Reduced notifications', 'Felt digital relief']
);
