/**
 * Khan Institute — Core Interactive Engine & Bilingual Translation
 * Author: Khan Institute Tech Team
 * Description: Vanilla JS controller for i18n (English/Bengali), WhatsApp admissions,
 *              interactive course catalog, gallery lightbox modal, and responsive mobile nav.
 */

/* ==========================================================================
   CONFIGURABLE CONSTANTS
   ========================================================================== */
const INSTITUTE_WHATSAPP_NUMBER = '917501288478'; // Primary admissions WhatsApp (Development Manager)
const DIRECTOR_WHATSAPP_NUMBER  = '918926789705'; // Managing Director WhatsApp

/* ==========================================================================
   BILINGUAL TRANSLATION DICTIONARY (EN & BN)
   ========================================================================== */
const translations = {
  en: {
    // Top Bar & Meta
    top_notice: "Admissions Open for New Batches 2026 — Dholahat, South 24 Parganas",
    top_call: "Call Us: +91 7501288478",
    top_timing: "Mon - Sat: 9:00 AM - 6:00 PM",

    // Brand
    brand_name: "KHAN INSTITUTE",
    brand_tagline: "Vocational & Skill Training Center",

    // Navigation
    nav_home: "Home",
    nav_courses: "Courses",
    nav_gallery: "Gallery",
    nav_contact: "Contact Us",
    btn_apply_now: "Apply Now",
    btn_explore_courses: "Explore Courses",

    // Hero Section (Home)
    hero_badge: "Govt. Registered & ISO Certified Vocational Institute",
    hero_title_1: "Empower Your Future with",
    hero_title_highlight: "Practical Skill Education",
    hero_subtitle: "Khan Institute provides job-ready technical and vocational training in Dholahat. Learn Computer, Tailoring, Beautician, Spoken English, and more with expert guidance and certification.",
    hero_btn_explore: "View All Courses",
    hero_btn_wa: "Apply via WhatsApp",
    stat_courses: "10+ Courses",
    stat_courses_sub: "Practical Vocational Programs",
    stat_students: "1000+ Students",
    stat_students_sub: "Trained & Certified",
    stat_certified: "100% Practical",
    stat_certified_sub: "Hands-on Workshop Labs",
    floating_card_title: "Career-Ready Skills",
    floating_card_sub: "Government aligned certification",

    // Why Choose Us
    features_tag: "Why Choose Us",
    features_title: "Building Real Skills for Real Opportunities",
    features_subtitle: "We bridge the gap between education and employment with modern labs and community-first vocational programs.",
    feat_1_title: "Certified Curriculum",
    feat_1_desc: "Industry-aligned syllabus designed to give students practical knowledge that leads to immediate employment.",
    feat_2_title: "Expert Local Mentors",
    feat_2_desc: "Compassionate, highly experienced trainers committed to nurturing every learner's individual talents.",
    feat_3_title: "Modern Practical Labs",
    feat_3_desc: "Air-conditioned computer lab, dedicated tailoring machines, beauty salon kits, and culinary stations.",
    feat_4_title: "Self-Employment & Job Aid",
    feat_4_desc: "Guidance on freelancing, opening small businesses, boutique tailoring, or getting corporate/local jobs.",

    // Featured Courses Section (Home)
    featured_tag: "Popular Programs",
    featured_title: "Featured Vocational Courses",
    featured_subtitle: "Choose from our high-demand courses designed for students, job seekers, and homemakers.",
    btn_view_all_courses: "View All 11 Courses",

    // About Section (Home)
    about_tag: "About Khan Institute",
    about_title: "Committed to Elevating Youth & Community in South 24 Parganas",
    about_desc_1: "Founded with the mission to empower local students with practical, income-generating skills, Khan Institute is located in Dholahat. We believe quality vocational education should be accessible and affordable to all.",
    about_desc_2: "From foundational computer literacy and competitive exam coaching to self-sustaining artisan crafts like tailoring and beautician training, we nurture talent right at the grassroots.",
    about_check_1: "Recognized certificates upon course completion",
    about_check_2: "Affordable fee structure with installment options",
    about_check_3: "Special batches for women, school students & working youth",
    about_badge_years: "Years of Trust",

    // CTA Banner
    cta_title: "Ready to Upgrade Your Skills & Career?",
    cta_desc: "New batches are enrolling this week. Contact our counselors or submit a quick WhatsApp application today!",
    cta_btn_apply: "Fill Application Form",
    cta_btn_call: "Call Development Manager",

    // Courses Page
    courses_hero_tag: "Comprehensive Programs",
    courses_hero_title: "Explore Our Vocational & Skills Training Courses",
    courses_hero_subtitle: "Select a program that matches your ambition. Practical training, low batch sizes, and individual attention guaranteed.",
    course_badge_popular: "Popular",
    course_badge_job: "Job Oriented",
    course_badge_creative: "Creative Art",
    course_badge_career: "Career Focus",
    btn_quick_apply: "Quick Apply",
    pill_practical: "Practical Labs",
    pill_cert: "Certificate",
    pill_flexible: "Flexible Hours",

    // Course Titles & Descriptions
    c1_title: "Computer Applications",
    c1_category: "IT & Digital Skills",
    c1_desc: "Comprehensive computer training including Basic, DITA, DCA, MS Office, Internet, and Tally ERP for office jobs.",
    
    c2_title: "Abacus & Mental Maths",
    c2_category: "Child Development",
    c2_desc: "Brain development, speed calculation, memory enhancement, and photographic memory for school students.",

    c3_title: "Tailoring & Dress Designing",
    c3_category: "Fashion & Self-Employment",
    c3_desc: "Cutting, stitching, pattern making, modern garment design, blouse styling, and boutique management.",

    c4_title: "Professional Beautician Course",
    c4_category: "Beauty & Wellness",
    c4_desc: "Bridal makeup, skin care, hair styling, threading, facials, and beauty parlor setup management.",

    c5_title: "Spoken English & Communication",
    c5_category: "Language & Personality",
    c5_desc: "Fluency training, grammar basics, everyday conversation, interview preparation, and public speaking confidence.",

    c6_title: "Mehendi & Henna Artistry",
    c6_category: "Creative Arts",
    c6_desc: "Traditional, Arabic, Rajasthani, and Bridal Mehendi designs. Hands-on practice for weddings & festive freelance.",

    c7_title: "Drawing & Fine Arts",
    c7_category: "Visual Arts",
    c7_desc: "Pencil sketching, watercolor, pastel shading, and creative painting for children and art enthusiasts.",

    c8_title: "Cake Making & Bakery Arts",
    c8_category: "Culinary & Baking",
    c8_desc: "Baking sponge cakes, whipping cream icing, fondant decorations, pastries, cookies, and home bakery setup.",

    c9_title: "Karate & Self Defense",
    c9_category: "Physical Fitness & Defense",
    c9_desc: "Martial arts training, discipline, fitness conditioning, belt gradation, and personal self-defense techniques.",

    c10_title: "Competitive Exam Coaching",
    c10_category: "Govt. Job Preparation",
    c10_desc: "Focused foundation coaching for WB Police, Rail, SSC, Group C/D, and other government competitive examinations.",

    c11_title: "Other Vocational Skills",
    c11_category: "Specialized Training",
    c11_desc: "Special workshops, short-term artisan skills, digital literacy, and custom training requested by learners.",

    // Application Form Section
    form_section_tag: "Direct Admission Portal",
    form_section_title: "Apply Online via WhatsApp",
    form_section_subtitle: "Submit your details below. Our admissions coordinator will immediately connect with you on WhatsApp.",
    form_side_title: "How It Works",
    form_side_desc: "Fast, hassle-free admission without lengthy paper forms. Send your query directly to our manager.",
    step_1_title: "Fill Application Form",
    step_1_desc: "Enter your name, father's name, preferred course & mobile number.",
    step_2_title: "Automatic WhatsApp Format",
    step_2_desc: "Your application is formatted into an official admission message.",
    step_3_title: "Instant Confirmation",
    step_3_desc: "Our counselors confirm your batch timing, fees, and orientation date.",
    
    label_name: "Student's Full Name",
    placeholder_name: "Enter student's full name",
    err_name: "Please enter a valid student name (min. 3 letters)",

    label_father: "Father's / Guardian's Name",
    placeholder_father: "Enter father or guardian name",
    err_father: "Please enter father's or guardian's name",

    label_course: "Apply for Course",
    placeholder_course: "-- Select Course --",
    err_course: "Please select a course to apply for",

    label_phone: "Mobile Number (WhatsApp preferred)",
    placeholder_phone: "10-digit mobile number (e.g. 9876543210)",
    err_phone: "Please enter a valid 10-digit Indian mobile number",

    label_notes: "Additional Note / Preferred Batch (Optional)",
    placeholder_notes: "e.g. Morning batch or weekend preference",

    form_wa_notice: "You will be redirected to WhatsApp to send your application to our admissions desk.",
    btn_submit_app: "Submit Application on WhatsApp",

    // Gallery Page
    gallery_hero_tag: "Campus Life & Training",
    gallery_hero_title: "Glimpse of Khan Institute",
    gallery_hero_subtitle: "Take a visual tour through our practical training sessions, workshops, student achievements, and events.",
    filter_all: "All Photos",
    filter_labs: "Computer & Classrooms",
    filter_workshops: "Vocational Workshops",
    filter_events: "Ceremonies & Activities",
    
    // Gallery Captions
    g1_title: "High-Tech Computer Lab",
    g1_desc: "Students practicing typing, office software, and digital literacy.",
    g2_title: "Tailoring & Garment Workshop",
    g2_desc: "Hands-on stitching, pattern cutting, and dress designing classes.",
    g3_title: "Professional Beautician Practice",
    g3_desc: "Skin care, bridal makeup, and parlor styling sessions.",
    g4_title: "Abacus & Mental Maths",
    g4_desc: "Young learners mastering speed calculations and mental focus.",
    g5_title: "Karate Training & Grading",
    g5_desc: "Discipline, fitness, and self-defense for youth & girls.",
    g6_title: "Cake Making & Baking Class",
    g6_desc: "Students learning professional baking and cake decoration.",
    g7_title: "Certificate Distribution Ceremony",
    g7_desc: "Honoring successful graduates with government-aligned certificates.",
    g8_title: "Interactive Classroom Session",
    g8_desc: "Spoken English and competitive coaching guidance in progress.",

    // Contact Page
    contact_hero_tag: "Get In Touch",
    contact_hero_title: "Contact Khan Institute",
    contact_hero_subtitle: "Have questions about courses, fees, or batch timings? Call us or visit our Dholahat campus.",
    
    card_dm_title: "Development Manager",
    card_dm_name: "Sakir Hossain Khan",
    card_dm_role: "Admissions, Course Inquiries & Student Support",
    card_dm_phone: "7501288478",

    card_md_title: "Managing Director",
    card_md_name: "Sharif Hossain Khan",
    card_md_role: "Institute Governance & Institutional Partnerships",
    card_md_phone: "8926789705",

    btn_call_now: "Call Direct",
    btn_wa_chat: "WhatsApp Chat",

    address_card_title: "Institute Campus & Location",
    addr_label: "Address",
    addr_val: "Khan Institute, Dholahat, South 24 Parganas, West Bengal — Pin: 743399",
    hours_label: "Office Hours",
    hours_val: "Monday – Saturday: 9:00 AM – 6:00 PM (Closed on Sunday)",
    email_label: "Inquiries",
    email_val: "contact@khaninstitute.in",
    map_notice: "Easily accessible from Dholahat market & main road.",

    // Footer
    footer_about: "Khan Institute is a dedicated vocational and skill-training center committed to empowering youth in Dholahat, South 24 Parganas through practical, career-oriented education.",
    footer_links_title: "Quick Navigation",
    footer_courses_title: "Top Courses",
    footer_contact_title: "Campus Contacts",
    footer_rights: "All Rights Reserved. Khan Institute, Dholahat."
  },

  bn: {
    // Top Bar & Meta
    top_notice: "নতুন ব্যাচের ভর্তি চলছে ২০২৬ — ঢোলাহাট, দক্ষিণ ২৪ পরগনা",
    top_call: "যোগাযোগ: +91 7501288478",
    top_timing: "সোম - শনি: সকাল ৯:০০ - সন্ধ্যা ৬:০০",

    // Brand
    brand_name: "খান ইনস্টিটিউট",
    brand_tagline: "বৃত্তিমূলক ও কর্মমুখী প্রশিক্ষণ কেন্দ্র",

    // Navigation
    nav_home: "হোম",
    nav_courses: "কোর্সসমূহ",
    nav_gallery: "গ্যালারি",
    nav_contact: "যোগাযোগ",
    btn_apply_now: "ভর্তি আবেদন",
    btn_explore_courses: "সব কোর্স দেখুন",

    // Hero Section (Home)
    hero_badge: "সরকারি স্বীকৃত ও আইএসও মানসম্পন্ন প্রশিক্ষণ কেন্দ্র",
    hero_title_1: "দক্ষতা অর্জনে গড়ুন আপনার",
    hero_title_highlight: "উজ্জ্বল ভবিষ্যৎ",
    hero_subtitle: "ঢোলাহাটে খান ইনস্টিটিউট দিচ্ছে বাস্তবমুখী ও কর্মসংস্থানমূলক প্রশিক্ষণ। কম্পিউটার, সেলাই, বিউটিশিয়ান, স্পোকেন ইংলিশ সহ বহু বিষয়ে দক্ষ প্রশিক্ষকের সাহায্যে শিখুন এবং সার্টিফিকেট নিন।",
    hero_btn_explore: "সব কোর্স দেখুন",
    hero_btn_wa: "হোয়াটসঅ্যাপে আবেদন",
    stat_courses: "১০+ কোর্স",
    stat_courses_sub: "কর্মমুখী বৃত্তিমূলক প্রোগ্রাম",
    stat_students: "১০০০+ শিক্ষার্থী",
    stat_students_sub: "প্রশিক্ষিত ও সনদপ্রাপ্ত",
    stat_certified: "১০০% প্র্যাকটিক্যাল",
    stat_certified_sub: "হাতে-কলমে ল্যাব প্রশিক্ষণ",
    floating_card_title: "কর্মমুখী বাস্তব শিক্ষা",
    floating_card_sub: "স্বীকৃত সার্টিফিকেট প্রদান",

    // Why Choose Us
    features_tag: "আমাদের বৈশিষ্ট্য",
    features_title: "বাস্তব দক্ষতার মাধ্যমে নতুন কর্মসংস্থানের পথ",
    features_subtitle: "আমরা আধুনিক ল্যাব এবং সুলভ পাঠ্যক্রমের মাধ্যমে স্থানীয় তরুণ ও শিক্ষার্থীদের আত্মনির্ভরশীল করে তুলি।",
    feat_1_title: "স্বীকৃত পাঠ্যক্রম",
    feat_1_desc: "শিল্পক্ষেত্রের উপযোগী পাঠ্যসূচি যা শিক্ষার্থীদের তাত্ক্ষণিক কর্মসংস্থান বা স্বাবলম্বী হতে সাহায্য করে।",
    feat_2_title: "অভিজ্ঞ স্থানীয় শিক্ষক",
    feat_2_desc: "অভিজ্ঞ এবং যত্নবান প্রশিক্ষকগণ প্রতিটি ছাত্র-ছাত্রীর প্রতি আলাদা নজর দিয়ে শিক্ষা দেন।",
    feat_3_title: "আধুনিক প্র্যাকটিক্যাল ল্যাব",
    feat_3_desc: "শীতাতপ নিয়ন্ত্রিত কম্পিউটার ল্যাব, নিজস্ব সেলাই মেশিন এবং পেশাদার বিউটি কেয়ার সরঞ্জাম।",
    feat_4_title: "স্বনির্ভরতা ও কর্মসহায়তা",
    feat_4_desc: "নিজস্ব ব্যবসা, বুটিক, ফ্রিল্যান্সিং বা স্থানীয় চাকুরীর জন্য সঠিক পরামর্শ ও দিকনির্দেশনা।",

    // Featured Courses Section (Home)
    featured_tag: "জনপ্রিয় প্রোগ্রাম",
    featured_title: "আমাদের প্রধান বৃত্তিমূলক কোর্সসমূহ",
    featured_subtitle: "ছাত্র-ছাত্রী ও গৃহিণীদের জন্য উপযোগী স্বল্পমেয়াদী ও দীর্ঘমেয়াদী বিশেষ কোর্স।",
    btn_view_all_courses: "সব ১১টি কোর্স দেখুন",

    // About Section (Home)
    about_tag: "খান ইনস্টিটিউট সম্পর্কে",
    about_title: "দক্ষিণ ২৪ পরগনার যুবসমাজ ও স্থানীয় মানুষের ক্ষমতায়নে নিবেদিত",
    about_desc_1: "ঢোলাহাটে অবস্থিত খান ইনস্টিটিউট স্থানীয় শিক্ষার্থীদের ব্যবহারিক ও উপার্জনের উপযোগী দক্ষতায় পারদর্শী করে তোলার লক্ষ্যে প্রতিষ্ঠিত। আমরা বিশ্বাস করি গুণমানসম্পন্ন কারিগরি শিক্ষা সবার সাধ্যের মধ্যে হওয়া উচিত।",
    about_desc_2: "কম্পিউটার সাক্ষরতা এবং সরকারি পরীক্ষার প্রস্তুতি থেকে শুরু করে দর্জিবিজ্ঞান ও বিউটি পার্লার কোর্সের মতো আত্মকর্মসংস্থানমূলক কাজে আমরা শিক্ষার্থীদের গড়ে তুলি।",
    about_check_1: "কোর্স শেষে স্বীকৃত সার্টিফিকেট প্রদান",
    about_check_2: "সাশ্রয়ী ফি ও কিস্তিতে পরিশোধের সুযোগ",
    about_check_3: "মহিলা, শিক্ষার্থী ও চাকরিপ্রার্থীদের জন্য বিশেষ ব্যাচ",
    about_badge_years: "বছরের আস্থা ও সাফল্য",

    // CTA Banner
    cta_title: "নিজের দক্ষতাকে আরও বাড়িয়ে তুলতে প্রস্তুত?",
    cta_desc: "এই সপ্তাহে নতুন ব্যাচের ভর্তি চলছে। সরাসরি কথা বলুন আমাদের কাউন্সিলরদের সাথে অথবা এখনই আবেদন করুন!",
    cta_btn_apply: "ভর্তি ফর্ম পূরণ করুন",
    cta_btn_call: "ম্যানেজারকে ফোন করুন",

    // Courses Page
    courses_hero_tag: "প্রশিক্ষণ কর্মসূচি",
    courses_hero_title: "আমাদের বৃত্তিমূলক ও কর্মমুখী কোর্সসমূহ",
    courses_hero_subtitle: "আপনার আগ্রহ অনুযায়ী কোর্স নির্বাচন করুন। প্রতিটি কোর্সে রয়েছে হাতে-কলমে প্র্যাকটিক্যাল এবং অভিজ্ঞ প্রশিক্ষক।",
    course_badge_popular: "জনপ্রিয়",
    course_badge_job: "কর্মমুখী",
    course_badge_creative: "সৃজনশীল",
    course_badge_career: "ক্যারিয়ার",
    btn_quick_apply: "আবেদন করুন",
    pill_practical: "হাতে-কলমে ল্যাব",
    pill_cert: "সার্টিফিকেট",
    pill_flexible: "সুবিধাজনক সময়",

    // Course Titles & Descriptions
    c1_title: "কম্পিউটার অ্যাপ্লিকেশন",
    c1_category: "আইটি ও ডিজিটাল দক্ষতা",
    c1_desc: "বেসিক, ডিটা (DITA), ডিসিএ, মাইক্রোসফট অফিস, ইন্টারনেট এবং ট্যালি ইআরপি (Tally ERP) সহ অফিস কোর্সের সম্পূর্ণ প্রশিক্ষণ।",
    
    c2_title: "অ্যাবাকাস ও মানসিক গণিত",
    c2_category: "মেধা ও মস্তিষ্ক বিকাশ",
    c2_desc: "ছোটদের মানসিক একাগ্রতা, স্মৃতিশক্তি ও দ্রুত নির্ভুল গণনার জন্য আন্তর্জাতিক মানের অ্যাবাকাস প্রশিক্ষণ।",

    c3_title: "দর্জিবিজ্ঞান ও ড্রেস ডিজাইনিং",
    c3_category: "ফ্যাশন ও স্বাবলম্বন",
    c3_desc: "কাটিং, সেলাই, প্যাটার্ন তৈরি, আধুনিক ব্লাউজ ও পোশাক ডিজাইনিং এবং বুটিক পরিচালনার পূর্ণাঙ্গ প্রশিক্ষণ।",

    c4_title: "প্রফেশনাল বিউটিশিয়ান কোর্স",
    c4_category: "বিউটি ও রূপচর্চা",
    c4_desc: "ব্রাইডাল মেকআপ, স্কিন কেয়ার, হেয়ার স্টাইলিং, ফেসিয়াল ও নিজস্ব পার্লার প্রতিষ্ঠার জন্য পূর্ণাঙ্গ প্রশিক্ষণ।",

    c5_title: "স্পোকেন ইংলিশ ও ব্যক্তিত্ব বিকাশ",
    c5_category: "ভাষা ও যোগাযোগ দক্ষতা",
    c5_desc: "সহজ উপায়ে সাবলীল ইংরেজি কথোপকথন, ব্যাকরণ, ইন্টারভিউ প্রস্তুতি ও জনসমক্ষে কথা বলার আত্মবিশ্বাস।",

    c6_title: "মেহেন্দি আর্ট ও ডিজাইন",
    c6_category: "সৃজনশীল শিল্প",
    c6_desc: "ঐতিহ্যবাহী, অ্যারাবিক, রাজস্থানি ও ব্রাইডাল মেহেন্দি নকশা। বিয়ে ও উৎসবে উপার্জনের চমৎকার সুযোগ।",

    c7_title: "অঙ্কন ও চারুকলা (ড্রয়িং)",
    c7_category: "দৃশ্যমান শিল্পকলা",
    c7_desc: "পেন্সিল স্কেচ, জলরং, প্যাস্টেল ও সৃজনশীল ছবি আঁকা—শিশুদের জন্য বিশেষ যত্নসহকারে শেখানো হয়।",

    c8_title: "কেক তৈরি ও বেকারি আর্ট",
    c8_category: "রন্ধন ও বেকিং শিল্প",
    c8_desc: "স্পঞ্জ কেক তৈরি, হুইপড ক্রিম আইসিং, ফন্ড্যান্ট ডেকোরেশন, পেস্ট্রি ও ঘরে বসে হোম-বেকারি তৈরির কৌশল।",

    c9_title: "কারাতে ও আত্মরক্ষা প্রশিক্ষণ",
    c9_category: "শারীরিক সুস্থতা ও আত্মরক্ষা",
    c9_desc: "মার্শাল আর্ট, আত্মরক্ষা কৌশল, শৃঙ্খলা, শারীরিক সুস্থতা এবং নিয়মিত বেল্ট পরীক্ষা ও সনদপত্র।",

    c10_title: "চাকরির পরীক্ষার প্রস্তুতি",
    c10_category: "সরকারি চাকরির প্রস্তুতি",
    c10_desc: "পশ্চিমবঙ্গ পুলিশ, রেলওয়ে, এসএসসি, গ্রুপ সি ও ডি পরীক্ষার জন্য বিশেষ কোচিং ও দিকনির্দেশনা।",

    c11_title: "অন্যান্য বৃত্তিমূলক কোর্স",
    c11_category: "বিশেষ কারিগরি শিক্ষা",
    c11_desc: "স্বল্পমেয়াদী ওয়ার্কশপ, হস্তশিল্প ও স্থানীয় চাহিদা অনুযায়ী বিশেষ কারিগরি ও বৃত্তিমূলক কোর্স।",

    // Application Form Section
    form_section_tag: "সরাসরি ভর্তি পোর্টাল",
    form_section_title: "হোয়াটসঅ্যাপে অনলাইনে আবেদন করুন",
    form_section_subtitle: "নিচের ফর্মটি পূরণ করুন। আমাদের ভর্তি সমন্বয়কারী সরাসরি আপনার সাথে হোয়াটসঅ্যাপে যোগাযোগ করবেন।",
    form_side_title: "আবেদন পদ্ধতি",
    form_side_desc: "ঝামেলাহীন ও দ্রুত ভর্তি প্রক্রিয়া। আপনার তথ্য সরাসরি আমাদের ম্যানেজারের কাছে পৌঁছে যাবে।",
    step_1_title: "ফর্ম পূরণ করুন",
    step_1_desc: "আপনার নাম, অভিভাবকের নাম, পছন্দের কোর্স ও মোবাইল নম্বর দিন।",
    step_2_title: "অটো হোয়াটসঅ্যাপ ফরম্যাট",
    step_2_desc: "আপনার তথ্য দিয়ে একটি সুসংগঠিত আবেদন বার্তা তৈরি হবে।",
    step_3_title: "তাৎক্ষণিক নিশ্চিতকরণ",
    step_3_desc: "আমাদের কাউন্সিলর ব্যাচের সময়, ফি ও তারিখ জানিয়ে আপনাকে নিশ্চিত করবেন।",
    
    label_name: "শিক্ষার্থীর পুরো নাম",
    placeholder_name: "শিক্ষার্থীর নাম লিখুন",
    err_name: "অনুগ্রহ করে সঠিক নাম লিখুন (কমপক্ষে ৩ অক্ষর)",

    label_father: "পিতা / অভিভাবকের নাম",
    placeholder_father: "পিতা বা অভিভাবকের নাম লিখুন",
    err_father: "অনুগ্রহ করে অভিভাবকের নাম লিখুন",

    label_course: "যে কোর্সের জন্য আবেদন করছেন",
    placeholder_course: "-- কোর্স নির্বাচন করুন --",
    err_course: "অনুগ্রহ করে একটি কোর্স নির্বাচন করুন",

    label_phone: "মোবাইল নম্বর (হোয়াটসঅ্যাপ নম্বর)",
    placeholder_phone: "১০ সংখ্যার মোবাইল নম্বর (যেমন: 9876543210)",
    err_phone: "অনুগ্রহ করে সঠিক ১০ সংখ্যার ভারতীয় মোবাইল নম্বর দিন",

    label_notes: "অতিরিক্ত বার্তা / পছন্দের সময় (ঐচ্ছিক)",
    placeholder_notes: "যেমন: সকাল বা ছুটির দিনের ব্যাচ পছন্দ",

    form_wa_notice: "আবেদন পাঠানোর জন্য আপনাকে হোয়াটসঅ্যাপে রিডাইরেক্ট করা হবে।",
    btn_submit_app: "হোয়াটসঅ্যাপে আবেদন পাঠান",

    // Gallery Page
    gallery_hero_tag: "ক্যাম্পাস ও প্রশিক্ষণ",
    gallery_hero_title: "খান ইনস্টিটিউটের এক ঝলক",
    gallery_hero_subtitle: "আমাদের প্র্যাকটিক্যাল ল্যাব, সেলাই ওয়ার্কশপ, ক্লাস ও সফল শিক্ষার্থীদের বিভিন্ন মুহূর্ত দেখুন।",
    filter_all: "সকল ছবি",
    filter_labs: "কম্পিউটার ও ক্লাসরুম",
    filter_workshops: "বৃত্তিমূলক কর্মশালা",
    filter_events: "অনুষ্ঠান ও সমাবর্তন",
    
    // Gallery Captions
    g1_title: "আধুনিক কম্পিউটার ল্যাব",
    g1_desc: "শিক্ষার্থীরা টাইপিং ও অফিস সফটওয়্যার প্রশিক্ষণ গ্রহণ করছে।",
    g2_title: "দর্জিবিজ্ঞান ও পোশাক তৈরি কর্মশালা",
    g2_desc: "হাতে-কলমে কাটিং, সেলাই ও ফ্যাশন ডিজাইনিং ক্লাস।",
    g3_title: "প্রফেশনাল বিউটি কেয়ার সেশন",
    g3_desc: "স্কিন কেয়ার, ব্রাইডাল মেকআপ ও পার্লার দক্ষতার প্রশিক্ষণ।",
    g4_title: "অ্যাবাকাস ও মানসিক গণিত ক্লাস",
    g4_desc: "ছোট শিক্ষার্থীরা দ্রুত হিসাব ও মেধা বিকাশের কৌশল শিখছে।",
    g5_title: "কারাতে ও আত্মরক্ষা মহড়া",
    g5_desc: "শৃঙ্খলা, ফিটনেস ও আত্মরক্ষার কৌশল অনুশীলন করছে ছাত্রীরা।",
    g6_title: "কেক তৈরি ও ডেকোরেশন ক্লাস",
    g6_desc: "পেশাদার পেস্ট্রি তৈরি ও কেক ডেকোরেশনের বাস্তব পাঠ।",
    g7_title: "সার্টিফিকেট বিতরণ অনুষ্ঠান",
    g7_desc: "উত্তীর্ণ শিক্ষার্থীদের হাতে সরকারি মানসম্পন্ন সনদপত্র তুলে দেওয়া হচ্ছে।",
    g8_title: "মনোযোগপূর্ণ ক্লাসরুম সেশন",
    g8_desc: "স্পোকেন ইংলিশ ও চাকরির পরীক্ষার প্রস্তুতিমূলক পাঠদান।",

    // Contact Page
    contact_hero_tag: "যোগাযোগ করুন",
    contact_hero_title: "খান ইনস্টিটিউটে স্বাগতম",
    contact_hero_subtitle: "কোর্স ফি, ব্যাচের সময় বা ভর্তির বিষয়ে যেকোনো প্রশ্নে সরাসরি কথা বলুন অথবা আমাদের সেন্টারে আসুন।",
    
    card_dm_title: "ডেভেলপমেন্ট ম্যানেজার",
    card_dm_name: "শাকির হোসেন খান",
    card_dm_role: "ভর্তি, কোর্স সংক্রান্ত তথ্য ও ছাত্র সহায়তা",
    card_dm_phone: "7501288478",

    card_md_title: "ম্যানেজিং ডিরেক্টর",
    card_md_name: "শরিফ হোসেন খান",
    card_md_role: "ইনস্টিটিউট পরিচালনা ও প্রাতিষ্ঠানিক সমন্বয়",
    card_md_phone: "8926789705",

    btn_call_now: "সরাসরি কল করুন",
    btn_wa_chat: "হোয়াটসঅ্যাপ চ্যাট",

    address_card_title: "ইনস্টিটিউট ক্যাম্পাস ও অবস্থান",
    addr_label: "ঠিকানা",
    addr_val: "খান ইনস্টিটিউট, ঢোলাহাট, দক্ষিণ ২৪ পরগনা, পশ্চিমবঙ্গ — পিন: ৭৪৩৩৯৯",
    hours_label: "অফিস সময়",
    hours_val: "সোমবার – শনিবার: সকাল ৯:০০ – সন্ধ্যা ৬:০০ (রবিবার বন্ধ)",
    email_label: "ইমেল অনুসন্ধান",
    email_val: "contact@khaninstitute.in",
    map_notice: "ঢোলাহাট বাজার ও প্রধান রাস্তা থেকে সহজে যোগাযোগযোগ্য।",

    // Footer
    footer_about: "খান ইনস্টিটিউট ঢোলাহাট, দক্ষিণ ২৪ পরগনার একটি নিবেদিত বৃত্তিমূলক প্রশিক্ষণ কেন্দ্র, যা স্থানীয় যুবসমাজ ও গৃহিণীদের বাস্তবসম্মত কর্মমুখী শিক্ষায় স্বাবলম্বী করে তোলে।",
    footer_links_title: "প্রয়োজনীয় লিঙ্ক",
    footer_courses_title: "প্রধান কোর্সসমূহ",
    footer_contact_title: "ক্যাম্পাস যোগাযোগ",
    footer_rights: "সর্বস্বত্ব সংরক্ষিত। খান ইনস্টিটিউট, ঢোলাহাট।"
  }
};

/* ==========================================================================
   STATE MANAGEMENT & INITIALIZATION
   ========================================================================== */
let currentLanguage = localStorage.getItem('khan_lang') || 'en';

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initStickyHeader();
  initMobileDrawer();
  initApplicationForm();
  initGalleryLightbox();
  initScrollAnimations();
  initScrollToTop();
  handleUrlCoursePreSelect();
});

/* ==========================================================================
   BILINGUAL SYSTEM
   ========================================================================== */
function initLanguage() {
  applyLanguage(currentLanguage);

  const toggleButtons = document.querySelectorAll('.lang-toggle-btn');
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentLanguage = (currentLanguage === 'en') ? 'bn' : 'en';
      localStorage.setItem('khan_lang', currentLanguage);
      applyLanguage(currentLanguage);
    });
  });
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  if (lang === 'bn') {
    document.body.classList.add('lang-bn');
  } else {
    document.body.classList.remove('lang-bn');
  }

  // Update text content with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  // Update HTML content if data-i18n-html exists
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update input/select placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  // Update language toggle pill states
  document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
    const enPill = btn.querySelector('.pill-en');
    const bnPill = btn.querySelector('.pill-bn');
    if (enPill && bnPill) {
      if (lang === 'en') {
        enPill.classList.add('active');
        bnPill.classList.remove('active');
      } else {
        bnPill.classList.add('active');
        enPill.classList.remove('active');
      }
    }
  });

  // Trigger custom event
  document.dispatchEvent(new CustomEvent('languageUpdated', { detail: { lang } }));
}

/* ==========================================================================
   STICKY HEADER & SCROLL TO TOP
   ========================================================================== */
function initStickyHeader() {
  const header = document.querySelector('.header-nav');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

function initScrollToTop() {
  const btn = document.querySelector('.scroll-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ==========================================================================
   MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileDrawer() {
  const openBtn = document.querySelector('.mobile-toggle');
  const closeBtn = document.querySelector('.mobile-close-btn');
  const backdrop = document.querySelector('.mobile-nav-backdrop');
  const drawer = document.querySelector('.mobile-drawer');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!openBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.add('active');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  openBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  navLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   APPLICATION FORM & WHATSAPP REDIRECT (COURSES PAGE)
   ========================================================================== */
function initApplicationForm() {
  const form = document.getElementById('admissionForm');
  if (!form) return;

  const studentNameInput = document.getElementById('studentName');
  const fatherNameInput = document.getElementById('fatherName');
  const courseSelect = document.getElementById('courseSelect');
  const mobileInput = document.getElementById('mobileNumber');
  const notesInput = document.getElementById('notes');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Validate Student Name
    const sName = studentNameInput.value.trim();
    const errNameEl = document.getElementById('errStudentName');
    if (sName.length < 3) {
      studentNameInput.classList.add('is-invalid');
      if (errNameEl) errNameEl.classList.add('show');
      isValid = false;
    } else {
      studentNameInput.classList.remove('is-invalid');
      if (errNameEl) errNameEl.classList.remove('show');
    }

    // Validate Father's Name
    const fName = fatherNameInput.value.trim();
    const errFatherEl = document.getElementById('errFatherName');
    if (fName.length < 3) {
      fatherNameInput.classList.add('is-invalid');
      if (errFatherEl) errFatherEl.classList.add('show');
      isValid = false;
    } else {
      fatherNameInput.classList.remove('is-invalid');
      if (errFatherEl) errFatherEl.classList.remove('show');
    }

    // Validate Course Selected
    const course = courseSelect.value.trim();
    const errCourseEl = document.getElementById('errCourse');
    if (!course) {
      courseSelect.classList.add('is-invalid');
      if (errCourseEl) errCourseEl.classList.add('show');
      isValid = false;
    } else {
      courseSelect.classList.remove('is-invalid');
      if (errCourseEl) errCourseEl.classList.remove('show');
    }

    // Validate Mobile Number (10 digits Indian mobile)
    const phone = mobileInput.value.trim().replace(/\D/g, '');
    const errPhoneEl = document.getElementById('errMobile');
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      mobileInput.classList.add('is-invalid');
      if (errPhoneEl) errPhoneEl.classList.add('show');
      isValid = false;
    } else {
      mobileInput.classList.remove('is-invalid');
      if (errPhoneEl) errPhoneEl.classList.remove('show');
    }

    if (!isValid) {
      // Focus first invalid element
      const firstInvalid = form.querySelector('.is-invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    const notes = notesInput ? notesInput.value.trim() : '';

    // Construct formatted WhatsApp message
    const waMessage = 
`🎓 *KHAN INSTITUTE — ADMISSION APPLICATION*
━━━━━━━━━━━━━━━━━━━━━━
👤 *Student's Name:* ${sName}
👨‍👧 *Father's Name:* ${fName}
📚 *Applied Course:* ${course}
📞 *Mobile Number:* ${phone}
${notes ? `💬 *Additional Note:* ${notes}\n` : ''}━━━━━━━━━━━━━━━━━━━━━━
📍 _Submitted via Khan Institute official website (khaninstitute.in)_
📅 _Dholahat, South 24 Parganas_`;

    const waUrl = `https://wa.me/${INSTITUTE_WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;

    // Open WhatsApp in a new window/tab
    window.open(waUrl, '_blank');

    // Friendly on-screen feedback
    alert(currentLanguage === 'bn' 
      ? 'ধন্যবাদ! আপনার আবেদনের তথ্য দিয়ে হোয়াটসঅ্যাপ খোলা হচ্ছে। মেসেজটি সেন্ড করে সরাসরি ইনস্টিটিউটের সাথে যুক্ত হোন।' 
      : 'Thank you! WhatsApp is opening with your formatted application. Please hit Send to submit directly to Khan Institute.');
  });

  // Clear validation styling on typing
  [studentNameInput, fatherNameInput, mobileInput].forEach(input => {
    if (!input) return;
    input.addEventListener('input', () => {
      input.classList.remove('is-invalid');
      const errEl = input.parentElement.querySelector('.form-feedback');
      if (errEl) errEl.classList.remove('show');
    });
  });

  if (courseSelect) {
    courseSelect.addEventListener('change', () => {
      courseSelect.classList.remove('is-invalid');
      const errEl = courseSelect.parentElement.querySelector('.form-feedback');
      if (errEl) errEl.classList.remove('show');
    });
  }
}

/* ==========================================================================
   PRE-SELECT COURSE FROM LINK OR BUTTON (AUTO SCROLL & FILL)
   ========================================================================== */
function handleUrlCoursePreSelect() {
  const urlParams = new URLSearchParams(window.location.search);
  const courseParam = urlParams.get('course');
  const courseSelect = document.getElementById('courseSelect');
  const applySection = document.getElementById('apply');

  if (courseParam && courseSelect) {
    // Attempt match
    for (let opt of courseSelect.options) {
      if (opt.value.toLowerCase().includes(courseParam.toLowerCase()) || 
          courseParam.toLowerCase().includes(opt.value.toLowerCase())) {
        courseSelect.value = opt.value;
        break;
      }
    }

    if (applySection) {
      setTimeout(() => {
        applySection.scrollIntoView({ behavior: 'smooth' });
        applySection.classList.add('highlight-pulse');
      }, 300);
    }
  }

  // Handle in-page buttons with .btn-prefill-course
  document.querySelectorAll('.btn-prefill-course').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetCourse = btn.getAttribute('data-course');
      if (courseSelect && targetCourse) {
        courseSelect.value = targetCourse;
        if (applySection) {
          applySection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

/* ==========================================================================
   GALLERY LIGHTBOX & FILTERING (GALLERY PAGE)
   ========================================================================== */
function initGalleryLightbox() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modal = document.getElementById('lightboxModal');
  if (!galleryItems.length || !modal) return;

  const modalImg = modal.querySelector('.lightbox-img');
  const modalTitle = modal.querySelector('.lightbox-title');
  const modalDesc = modal.querySelector('.lightbox-desc');
  const modalCounter = modal.querySelector('.lightbox-counter');
  const closeBtn = modal.querySelector('.lightbox-close-btn');
  const prevBtn = modal.querySelector('.lightbox-nav-btn.prev');
  const nextBtn = modal.querySelector('.lightbox-nav-btn.next');

  let currentActiveList = Array.from(galleryItems);
  let currentIndex = 0;

  // Filter functionality
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      galleryItems.forEach(item => {
        if (filter === 'all' || item.getAttribute('data-category') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      currentActiveList = Array.from(galleryItems).filter(item => item.style.display !== 'none');
    });
  });

  // Open Lightbox
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      currentIndex = currentActiveList.indexOf(item);
      if (currentIndex === -1) currentIndex = 0;
      updateModalContent();
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function updateModalContent() {
    if (!currentActiveList[currentIndex]) return;
    const currentItem = currentActiveList[currentIndex];
    const imgEl = currentItem.querySelector('img');
    const titleEl = currentItem.querySelector('.gallery-overlay h4');
    const descEl = currentItem.querySelector('.gallery-overlay p');

    modalImg.src = imgEl.getAttribute('src');
    modalImg.alt = imgEl.getAttribute('alt') || 'Gallery Photo';
    modalTitle.textContent = titleEl ? titleEl.textContent : '';
    modalDesc.textContent = descEl ? descEl.textContent : '';
    modalCounter.textContent = `${currentIndex + 1} / ${currentActiveList.length}`;
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function showNext() {
    currentIndex = (currentIndex + 1) % currentActiveList.length;
    updateModalContent();
  }

  function showPrev() {
    currentIndex = (currentIndex - 1 + currentActiveList.length) % currentActiveList.length;
    updateModalContent();
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (nextBtn) nextBtn.addEventListener('click', showNext);
  if (prevBtn) prevBtn.addEventListener('click', showPrev);

  // Close when clicking modal backdrop
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
}

/* ==========================================================================
   SCROLL REVEAL OBSERVER
   ========================================================================== */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}
