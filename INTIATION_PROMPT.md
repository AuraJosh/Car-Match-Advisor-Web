Role: You are the Senior Creative Developer & UI/UX Architect defined in the MASTER_DESIGN_SYSTEM.md.

Context: I am initiating a new web project. Your goal is to architect the perfect solution based on my requirements while strictly adhering to the Master Design System (Vite + React + Tailwind + Framer Motion).


1. Project Specifications
If any of the following fields are not filled in, use the MASTER_DESIGN_SYSTEM.md to come up with an option that matches the filled in specifications.

Project Name: [CarMatchAdvisor (CMA): A high-end, independent car-buying consultancy brand using the tagline "Expert Car-Buying Advice Made Simple.]

Sector/Industry: [Automotive Tech & Personal Services: A specialized niche focusing on unbiased, fee-for-service vehicle procurement advice, operating independently of car dealerships and commissions. ]

Pages: [Landing Page (Home): Features a large-text hero section ("Expert Car-Buying Advice Made Simple"), a "Start Now" CTA, and a secondary "Pay once, get it done right" sub-header.

Process Section (How It Works): A three-stage visual guide: 1. Input Needs (Questionnaire), 2. Expert Analysis (3-5 options), 3. Final Report (Personalized results).

About Tab (Unified): A combined section featuring the "Why Choose CMA" value propositions (Unbiased, Expert Advice, Time/Money Savings, Tailored Results) followed by the "About Us" mission statement.

Pricing & Add-ons: A dual-card layout comparing "Standard" (£19.99) and "Premium" (£49.99) with integrated logic for the "Extra Car" shortlist add-on (£6.60 for Standard / £9.99 for Premium).

Social Proof & Support: A "What People Say" testimonials grid and a minimalist "Contact Our Team" footer including a name/email/message form and direct contact details. ]

Design/Style Ideas and References: [Modern Minimalist Aesthetic: Utilizing a high-contrast palette of deep navy blue and crisp white to evoke "Authority" and "Trust" (as seen in the CMA branding assets).

AuraAI Transition Reference: A "Single Page Application" feel where clicking CTAs moves the user through sections smoothly without the friction of loading entirely new URLs.

Authority Typography: Using bold, large serif fonts for headers to establish expertise, paired with clean sans-serif small text for readability and instructions.

UX Hierarchy: A layout prioritized for conversion, where every CTA funnels into the pricing choice before the questionnaire begins.]

Primary Goal: [Streamlined Conversion: To convert overwhelmed car buyers into confident owners by providing a professional 3-5 car shortlist, eliminating dealership stress and hours of research. ]

Specific Features Required: [Conditional Pricing Logic: A dynamic questionnaire page that recognizes the user's selected tier and displays the corresponding "Extra Car" add-on price as a tickbox above the final "Pay Now" CTA.

Tiered Deliverables: Standard tier provides a 3-car shortlist with pros/cons; Premium tier unlocks phone/text support, in-depth safety/reliability comparisons, and 3 days of post-consultation follow-ups.

Integrated Lead Capture: A functional contact form and a "Start Your Car Match" funnel designed to collect budget, lifestyle, and driving needs.

Unbiased Consultation Engine: A backend logic (or manual expert process) that identifies 3-5 cars based on real-world data and expert knowledge rather than dealership algorithms. ]

Text Content Source/s: [ ]


2. The Mandate
You must read and strictly follow MASTER_DESIGN_SYSTEM.md for every decision regarding layout, typography, color, animation, and code structure.

Anti-Pattern Check: Ensure no "forbidden" colors, gradients, or layouts (Section 8) are used.

Deployment Target: All code must be compatible with GitHub Pages (Client-side routing, Vite build).


3. Required Outputs
Before writing any code, you must populate the two specific strategy files:

A. PLAN.md (The Blueprint)
Create a highly detailed specification document. It must be so precise that if I gave this file to a completely different AI or developer, they would build the exact same website.

Include: Exact color hex codes (defined by the Protocol), Font choices (from the System), Component hierarchy, Animation logic (Framer Motion behavior), and Responsive stacking rules.

Include: A detailed "Section-by-Section" breakdown of each page.

B. TASKS.md (The Roadmap)
Break the execution of the Plan into tasks, grouped into Build Stages. These could include but are not limited to:

- Setup & Core Structure (Vite setup, Tailwind config, Fonts, Global CSS).

- Component Library (Buttons, Cards, Navbar, Footer).

- Page Assembly (Hero, Features, Contact).

- Polish & Interaction (Framer Motion, Mobile Menu, SEO tags, Texture overlays).

- Deployment (GitHub Pages).

Requirement: Group tasks logically so I can check your work after each stage.


4. Execution Rule
DO NOT start coding Build Stage 1 yet.
Output the PLAN.md and TASKS.md files first. Wait for my approval and adjustments before proceeding to code.