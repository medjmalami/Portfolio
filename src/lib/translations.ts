type Translations = {
  [key: string]: {
    en: string
    fr: string
    ar: string
  }
}

export const translations: Translations = {
  // Navigation
  "nav.about": {
    en: "About",
    fr: "À propos",
    ar: "نبذة عني",
  },
  "nav.skills": {
    en: "Skills",
    fr: "Compétences",
    ar: "المهارات",
  },
  "nav.projects": {
    en: "Projects",
    fr: "Projets",
    ar: "المشاريع",
  },
  "nav.certificates": {
    en: "Certificates",
    fr: "Certificats",
    ar: "الشهادات",
  },
  "nav.contact": {
    en: "Contact",
    fr: "Contact",
    ar: "اتصل بي",
  },
  "nav.hireMe": {
    en: "Hire Me",
    fr: "Embauche",
    ar: "وظفني",
  },

  // Hero Section
  "hero.intro": {
    en: "Hi, I'm",
    fr: "Bonjour, je suis",
    ar: "مرحبًا، أنا",
  },
  "hero.role": {
    en: "Backend Engineer · AI Engineering",
    fr: "Ingénieur Backend · Ingénierie IA",
    ar: "مهندس Backend · هندسة الذكاء الاصطناعي",
  },
  "hero.description": {
    en: "I build scalable backend systems and AI-powered applications, combining strong foundations in APIs, microservices, and distributed workflows with modern LLM technologies, RAG pipelines, and agentic systems. Open to backend and AI engineering opportunities.",
    fr: "Je construis des systèmes backend évolutifs et des applications basées sur l'IA, en combinant une solide expertise en API, microservices et architectures distribuées avec les technologies modernes des LLM, les pipelines RAG et les systèmes agentiques. Ouvert aux opportunités en ingénierie backend et IA.",
    ar: "أبني أنظمة Backend قابلة للتوسع وتطبيقات مدعومة بالذكاء الاصطناعي، من خلال الجمع بين خبرة قوية في واجهات البرمجة (APIs) والخدمات المصغرة والأنظمة الموزعة، مع تقنيات LLM الحديثة وخطوط عمل RAG والأنظمة الوكيلية. منفتح على فرص هندسة Backend وهندسة الذكاء الاصطناعي.",
  },
  "hero.location": {
    en: "Sfax, Tunisia | Available for Remote Work",
    fr: "Sfax, Tunisie | Disponible pour travail à distance",
    ar: "صفاقس، تونس | متاح للعمل عن بعد",
  },
  "hero.viewWork": {
    en: "View My Work",
    fr: "Voir mon travail",
    ar: "عرض أعمالي",
  },
  "hero.contactMe": {
    en: "Contact Me",
    fr: "Me contacter",
    ar: "اتصل بي",
  },

  // About Section
  "about.title": {
    en: "About Me",
    fr: "À propos de moi",
    ar: "نبذة عني",
  },
  "about.journey": {
    en: "My Journey",
    fr: "Mon parcours",
    ar: "مسيرتي",
  },
  "about.description": {
    en: "I'm a backend engineer specializing in building scalable APIs, microservices, and data-intensive systems. With three years of experience in Node.js and PostgreSQL, I've worked on designing reliable backend architectures, asynchronous workflows, and services built for real-world usage. Recently, I've expanded into applied AI engineering, building LLM-powered systems, RAG pipelines, and agent workflows using Python, FastAPI, and LangGraph. I enjoy solving complex engineering problems by combining strong backend foundations with modern AI capabilities.",
    fr: "Je suis ingénieur backend spécialisé dans la conception d'API évolutives, de microservices et de systèmes intensifs en données. Avec trois ans d'expérience en Node.js et PostgreSQL, j'ai travaillé sur la conception d'architectures backend fiables, de flux de travail asynchrones et de services conçus pour des usages réels. Récemment, j'ai élargi mes compétences vers l'ingénierie IA appliquée en développant des systèmes basés sur les LLM, des pipelines RAG et des workflows d'agents avec Python, FastAPI et LangGraph. J'aime résoudre des problèmes d'ingénierie complexes en combinant des bases solides en backend avec les capacités offertes par l'IA moderne.",
    ar: "أنا مهندس Backend متخصص في بناء واجهات برمجة التطبيقات القابلة للتوسع، والخدمات المصغرة، والأنظمة المعتمدة على كميات كبيرة من البيانات. لدي ثلاث سنوات من الخبرة في Node.js وPostgreSQL، حيث عملت على تصميم بنى Backend موثوقة، وتدفقات عمل غير متزامنة، وخدمات موجهة للاستخدام الحقيقي. مؤخرًا، وسّعت خبرتي نحو هندسة الذكاء الاصطناعي التطبيقي من خلال بناء أنظمة مدعومة بـ LLM، وخطوط عمل RAG، وسير عمل الوكلاء باستخدام Python وFastAPI وLangGraph. أستمتع بحل المشكلات الهندسية المعقدة من خلال الجمع بين أساس قوي في Backend وقدرات الذكاء الاصطناعي الحديثة.",
  },

  // Experience Section
  "nav.experience": { en: "Experience", fr: "Expérience", ar: "الخبرة" },
  "experience.title": { en: "Experience", fr: "Expérience", ar: "الخبرة" },

  "experience.zetabox.role": {
    en: "AI Engineer Intern",
    fr: "Stagiaire Ingénieur IA",
    ar: "متدرب مهندس ذكاء اصطناعي",
  },
  "experience.zetabox.org": { en: "ZetaBox", fr: "ZetaBox", ar: "ZetaBox" },
  "experience.zetabox.period": {
    en: "June 2026 – August 2026",
    fr: "Juin 2026 – Août 2026",
    ar: "يونيو 2026 – أغسطس 2026",
  },
  "experience.zetabox.bullet1": {
    en: "Built a tender processing pipeline on a FastAPI backend, using LangGraph to orchestrate scraping, LLM-based ranking and analysis with Gemini, and proposal drafting.",
    fr: "Développement d'un pipeline de traitement d'appels d'offres sur un backend FastAPI, utilisant LangGraph pour orchestrer le scraping, l'analyse et le classement par LLM avec Gemini, et la rédaction de propositions.",
    ar: "بناء خط معالجة لعروض المناقصات على خلفية FastAPI، باستخدام LangGraph لتنظيم عملية الكشط، والتحليل والترتيب بواسطة نموذج Gemini، وصياغة العروض.",
  },
  "experience.zetabox.bullet2": {
    en: "Implemented scheduling with APScheduler integrated into FastAPI's lifespan, and persistence with async SQLAlchemy and PostgreSQL, including async Alembic migrations.",
    fr: "Mise en œuvre de la planification avec APScheduler intégré au cycle de vie de FastAPI, et de la persistance avec SQLAlchemy asynchrone et PostgreSQL, incluant des migrations Alembic asynchrones.",
    ar: "تنفيذ الجدولة باستخدام APScheduler المدمج في دورة حياة FastAPI، والتخزين الدائم باستخدام SQLAlchemy غير المتزامن وPostgreSQL، بما في ذلك ترحيلات Alembic غير المتزامنة.",
  },

  "experience.gdsc.role": { en: "Software Engineering Department Lead", fr: "Responsable Département Génie Logiciel", ar: "قائد قسم هندسة البرمجيات" },
  "experience.gdsc.org": { en: "GDSC Enetcom", fr: "GDSC Enetcom", ar: "GDSC Enetcom" },
  "experience.gdsc.period": { en: "2026 – Present", fr: "2026 – Présent", ar: "2026 – حاليًا" },
  "experience.gdsc.bullet1": {
    en: "Independently design and teach the Software Engineering curriculum for GDSC Enetcom's Software Engineering track.",
    fr: "Conception et enseignement indépendants du programme Génie Logiciel pour la filière Génie Logiciel de GDSC Enetcom.",
    ar: "أصمم وأدرّس بشكل مستقل منهج هندسة البرمجيات لمسار هندسة البرمجيات في GDSC Enetcom.",
  },

  "experience.freelance.role": {
    en: "Software Engineer",
    fr: "Ingénieur logiciel",
    ar: "مهندس برمجيات",
  },
  "experience.freelance.org": { en: "Freelance", fr: "Freelance", ar: "Freelance" },
  "experience.freelance.period": { en: "2025 – Present", fr: "2025 – Présent", ar: "2025 – حاليًا" },
  "experience.freelance.bullet1": {
    en: "Deliver backend and full-stack systems for industrial-sector clients, owning requirements gathering, architecture, and deployment end to end.",
    fr: "Développement de systèmes backend et full-stack pour des clients du secteur industriel, avec prise en charge de la collecte des besoins, de l'architecture et du déploiement de bout en bout.",
    ar: "تطوير أنظمة خلفية وأنظمة متكاملة لعملاء في القطاع الصناعي، مع تولّي جمع المتطلبات وتصميم البنية المعمارية والنشر من البداية إلى النهاية.",
  },

  "experience.freelance.bullet2": {
    en: "Built an ERP system (admin, inventory, sales, HR, finance, commercial, marketing) and a payroll automation system for a live industrial client, currently in production use.",
    fr: "Conception d'un système ERP (administration, stock, ventes, RH, finance, commercial, marketing) et d'un système d'automatisation de la paie pour un client industriel réel, actuellement utilisés en production.",
    ar: "بناء نظام ERP (الإدارة، المخزون، المبيعات، الموارد البشرية، المالية، التجارة، التسويق) ونظام لأتمتة الرواتب لعميل صناعي حقيقي، وهما مستخدمان حاليًا في بيئة الإنتاج.",
  },

  // Skills Section
  "skills.title": {
    en: "My Skills",
    fr: "Mes compétences",
    ar: "مهاراتي",
  },
  "skills.frontend": {
    en: "Frontend",
    fr: "Front-end",
    ar: "واجهة المستخدم",
  },
  "skills.frontend.description": {
    en: "Component-based architecture, state management, form handling, responsive UI, SEO, and frontend performance optimization",
    fr: "Architecture par composants, gestion d'état, gestion des formulaires, UI responsive, SEO et optimisation des performances frontend",
    ar: "بنية قائمة على المكونات، إدارة الحالة، معالجة النماذج، واجهة مستخدم متجاوبة، SEO، وتحسين أداء الواجهة",
  },
  "skills.backend": {
    en: "Backend",
    fr: "Back-end",
    ar: "الخلفية",
  },
  "skills.backend.description": {
    en: "API design, authentication, real-time systems, transactional data modeling, indexing & query optimization, replication and sharding fundamentals",
    fr: "Conception d'API, authentification, systèmes temps réel, modélisation transactionnelle, indexation et optimisation des requêtes, fondamentaux de réplication et sharding",
    ar: "تصميم API، المصادقة، الأنظمة الفورية، نمذجة البيانات التعاملية، الفهرسة وتحسين الاستعلامات، أساسيات النسخ والتجزئة",
  },
  "skills.devops": {
    en: "DevOps",
    fr: "DevOps",
    ar: "عمليات التطوير",
  },
  "skills.devops.description": {
    en: "CI/CD, containerization, version control, cloud storage, system administration, and Linux-based development environments",
    fr: "CI/CD, conteneurisation, contrôle de version, stockage cloud, administration système et environnements de développement basés sur Linux",
    ar: "CI/CD، الحاويات، التحكم في الإصدارات، التخزين السحابي، إدارة الأنظمة، وبيئات التطوير المعتمدة على Linux",
  },
  "skills.ai": { en: "AI ", fr: "IA ", ar: "الذكاء الاصطناعي" },
  "skills.ai.description": {
    en: "LLM agent orchestration, retrieval-augmented generation, vector search, and Python-based AI services",
    fr: "Orchestration d'agents LLM, génération augmentée par récupération, recherche vectorielle et services IA en Python",
    ar: "تنظيم وكلاء LLM، التوليد المعزز بالاسترجاع، البحث المتجهي، وخدمات الذكاء الاصطناعي القائمة على بايثون",
  },


  // Certificates Section
  "certificates.title": {
    en: "Certificates",
    fr: "Certificats",
    ar: "الشهادات",
  },
  "certificates.view": {
    en: "View Certificate",
    fr: "Voir le certificat",
    ar: "عرض الشهادة",
  },
  "certificates.backend.name": {
    en: "Back End Development and APIs",
    fr: "Developpement Back End et APIs",
    ar: "تطوير الخلفية وواجهات برمجة التطبيقات",
  },
  "certificates.bigdata.name": {
    en: "Software Architecture for Big Data",
    fr: "Architecture logicielle pour le Big Data",
    ar: "هندسة البرمجيات للبيانات الضخمة",
  },
  "certificates.cloudSolutionArchitect.name": {
    en: "AWS Cloud Solution Architect",
    fr: "Architecte de solutions cloud AWS",
    ar: "مهندس حلول سحابية AWS",
  },
  "certificates.ragAgentic.name": {
    en: "RAG and Agentic AI Professional Certificate",
    fr: "Certificat Professionnel RAG et IA Agentique",
    ar: "شهادة احترافية في RAG والذكاء الاصطناعي الوكيلي",
  },

  // Projects Section
  "projects.title": {
    en: "My Projects",
    fr: "Mes projets",
    ar: "مشاريعي",
  },
  "projects.payroll.title": {
    en: "Employees Payroll Management System",
    fr: "Système de Gestion de la Paie des Employés",
    ar: "نظام إدارة رواتب الموظفين",
  },
  "projects.payroll.description": {
    en: "Backend-driven payroll platform handling salary calculation, payslip generation, and role-based access control. Designed the data model to support recurring pay cycles and audit history rather than one-off calculations.",
    fr: "Plateforme de paie orientée backend gérant le calcul des salaires, la génération de bulletins de paie et le contrôle d'accès basé sur les rôles. Modèle de données conçu pour prendre en charge les cycles de paie récurrents et l'historique d'audit.",
    ar: "منصة رواتب قائمة على الخلفية تدير حساب الرواتب وإنشاء كشوف الرواتب والتحكم في الوصول حسب الأدوار. صممت نموذج البيانات لدعم دورات الدفع المتكررة وسجل التدقيق بدلاً من الحسابات لمرة واحدة.",
  },
  "projects.tenderapp.title": {

    en: "TenderApp - AI Tender Management Platform",

    fr: "TenderApp - Plateforme IA de Gestion des Appels d'Offres",

    ar: "TenderApp - منصة إدارة المناقصات بالذكاء الاصطناعي",

  },

  "projects.tenderapp.description": {

    en: "AI-powered platform that automates tender discovery, analysis, and proposal generation. Fetches public tenders, classifies opportunities, extracts requirements, and generates tailored proposal drafts using AI workflows. Designed to help businesses reduce manual research time and improve their tender response process.",

    fr: "Plateforme alimentée par l'IA qui automatise la recherche, l'analyse et la génération de propositions pour les appels d'offres. Récupère les appels d'offres publics, classe les opportunités, extrait les exigences et génère des brouillons de propositions personnalisés grâce à des workflows IA. Conçue pour aider les entreprises à réduire le temps de recherche manuel et à améliorer leur processus de réponse aux appels d'offres.",

    ar: "منصة مدعومة بالذكاء الاصطناعي تعمل على أتمتة البحث عن المناقصات وتحليلها وإنشاء الع��وض. تقوم بجلب المناقصات العامة، وتصنيف الفرص، واستخراج المتطلبات، وإنشاء مسودات عروض مخصصة باستخدام سير عمل الذكاء الاصطناعي. صُممت لمساعدة الشركات على تقليل وقت البحث اليدوي وتحسين عملية الاستجابة للمناقصات.",

  },
  "projects.erp.title": {
    en: "Complete ERP Solution",
    fr: "Solution ERP Complète",
    ar: "حل تخطيط موارد المؤسسات الكامل",
  },
  "projects.erp.description": {
    en: "7-module ERP system (Admin, HR, Commercial, Finance, Stock, Purchase, Marketing) for an industrial client, replacing spreadsheet-based operations. Includes PDF invoice generation, attendance tracking, and role-based dashboards across departments.",
    fr: "Système ERP à 7 modules (Admin, RH, Commercial, Finance, Stock, Achats, Marketing) pour un client industriel, remplaçant des opérations basées sur des tableurs. Comprend la génération de factures PDF, le suivi des présences et des tableaux de bord par rôle.",
    ar: "نظام ERP بسبع وحدات (الإدارة، الموارد البشرية، التجارة، المالية، المخزون، المشتريات، التسويق) لعميل صناعي، ليحل محل العمليات القائمة على جداول البيانات. يشمل إنشاء فواتير PDF، تتبع الحضور، ولوحات تحكم حسب الأدوار.",
  },
  "projects.ecoshield.title": {
    en: "EcoShield AI - Smart City Platform",
    fr: "EcoShield AI - Plateforme Ville Intelligente",
    ar: "EcoShield AI - منصة المدن الذكية",
  },
  "projects.ecoshield.description": {
    en: "AI-powered security and optimization platform for smart water infrastructure. Uses an LSTM model to detect false data injection (FDI) attacks on sensor streams in real time and optimizes pump power based on live readings, with per-sensor JWT authentication and AES-256 encrypted keys. Built for the AI Night Challenge hackathon.",
    fr: "Plateforme de sécurité et d'optimisation alimentée par l'IA pour les infrastructures d'eau intelligentes. Utilise un modèle LSTM pour détecter en temps réel les attaques par injection de fausses données (FDI) sur les flux de capteurs et optimise la puissance des pompes selon les lectures en direct, avec authentification JWT par capteur et clés chiffrées AES-256. Développé pour le hackathon AI Night Challenge.",
    ar: "منصة أمان وتحسين مدعومة بالذكاء الاصطناعي للبنية التحتية الذكية للمياه. تستخدم نموذج LSTM للكشف الفوري عن هجمات حقن البيانات الزائفة (FDI) على تدفقات المستشعرات وتحسين طاقة المضخات بناءً على القراءات الحية، مع مصادقة JWT لكل مستشعر ومفاتيح مشفرة AES-256. طُوّرت لهاكاثوني AI Night Challenge.",
  },
  "projects.liveDemo": {
    en: "Live Demo",
    fr: "Démo en ligne",
    ar: "عرض حي",
  },
  "projects.code": {
    en: "Code",
    fr: "Code",
    ar: "الكود",
  },
  "projects.clientProject": {
    en: "Client Project",
    fr: "Projet Client",
    ar: "مشروع لعميل",
  },

  // Project detail pages
  "projects.caseStudy": { en: "Engineering case study", fr: "Étude de cas technique", ar: "دراسة حالة هندسية" },
  "projects.back": { en: "Back to projects", fr: "Retour aux projets", ar: "العودة إلى المشاريع" },
  "projects.viewDetails": { en: "View case study", fr: "Voir l'étude de cas", ar: "عرض دراسة الحالة" },
  "projects.noLiveDemo": { en: "No verified live demo", fr: "Aucune démo en ligne vérifiée", ar: "لا يوجد عرض حي موثق" },
  "projects.privateRepo": { en: "Private or unavailable repository", fr: "Dépôt privé ou indisponible", ar: "مستودع خاص أو غير متاح" },
  "projects.problem": { en: "The problem", fr: "Le problème", ar: "المشكلة" },
  "projects.architecture": { en: "Architecture", fr: "Architecture", ar: "البنية المعمارية" },
  "projects.tradeoffs": { en: "Trade-offs", fr: "Compromis", ar: "المفاضلات" },
  "projects.debugging": { en: "Failure / debugging story", fr: "Incident / débogage", ar: "قصة الفشل والتصحيح" },
  "projects.numbers": { en: "Real numbers", fr: "Chiffres réels", ar: "أرقام حقيقية" },
  "projects.future": { en: "What I'd change with more time", fr: "Ce que je changerais avec plus de temps", ar: "ما سأغيره بوقت إضافي" },

  // Contact Section
  "contact.title": {
    en: "Get In Touch",
    fr: "Contactez-moi",
    ar: "تواصل معي",
  },
  "contact.info": {
    en: "Contact Information",
    fr: "Informations de contact",
    ar: "معلومات الاتصال",
  },
  "contact.description": {
    en: "I'm a backend engineer working on APIs, queue-driven services, and AI-integrated systems, based in Sfax, Tunisia. Open to backend and AI engineering roles, remote or on-site, as well as select freelance projects.",
    fr: "Je suis ingénieur backend travaillant sur des API, des services orientés files d'attente et des systèmes intégrant l'IA, basé à Sfax, Tunisie. Ouvert aux postes d'ingénieur backend et IA, à distance ou sur site, ainsi qu'à certains projets freelance.",
    ar: "أنا مهندس Backend أعمل على واجهات برمجة التطبيقات والخدمات القائمة على قوائم الانتظار والأنظمة المدمجة بالذكاء الاصطناعي، مقيم في صفاقس، تونس. متاح لوظائف هندسة الخلفية والذكاء الاصطناعي، عن بعد أو في الموقع، وكذلك لمشاريع مستقلة مختارة.",
  },
  "contact.location": {
    en: "Sfax, Tunisia",
    fr: "Sfax, Tunisie",
    ar: "صفاقس، تونس",
  },
  "contact.name": {
    en: "Name",
    fr: "Nom",
    ar: "الاسم",
  },
  "contact.email": {
    en: "Email",
    fr: "Email",
    ar: "البريد الإلكتروني",
  },
  "contact.subject": {
    en: "Subject",
    fr: "Sujet",
    ar: "الموضوع",
  },
  "contact.message": {
    en: "Message",
    fr: "Message",
    ar: "الرسالة",
  },
  "contact.send": {
    en: "Send Message",
    fr: "Envoyer le message",
    ar: "إرسال الرسالة",
  },
  "contact.namePlaceholder": {
    en: "Your Name",
    fr: "Votre nom",
    ar: "اسمك",
  },
  "contact.emailPlaceholder": {
    en: "your.email@example.com",
    fr: "votre.email@exemple.com",
    ar: "بريدك@مثال.com",
  },
  "contact.subjectPlaceholder": {
    en: "How can I help you?",
    fr: "Comment puis-je vous aider ?",
    ar: "كيف يمكنني مساعدتك؟",
  },
  "contact.messagePlaceholder": {
    en: "Your message here...",
    fr: "Votre message ici...",
    ar: "رسالتك هنا...",
  },

  // Footer
  "footer.rights": {
    en: "All Rights Reserved",
    fr: "Tous droits réservés",
    ar: "جميع الحقوق محفوظة",
  },

  // Theme & Language
  "theme.light": {
    en: "Light",
    fr: "Clair",
    ar: "فاتح",
  },
  "theme.dark": {
    en: "Dark",
    fr: "Sombre",
    ar: "داكن",
  },
  "theme.system": {
    en: "System",
    fr: "Système",
    ar: "النظام",
  },
  "language.en": {
    en: "English",
    fr: "Anglais",
    ar: "الإنجليزية",
  },
  "language.fr": {
    en: "French",
    fr: "Français",
    ar: "الفرنسية",
  },
  "language.ar": {
    en: "Arabic",
    fr: "Arabe",
    ar: "العربية",
  },
}

export function getTranslation(key: string, language: "en" | "fr" | "ar"): string {
  if (!translations[key]) {
    console.warn(`Translation key not found: ${key}`)
    return key
  }
  return translations[key][language]
}
