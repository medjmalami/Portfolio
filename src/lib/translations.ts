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
  "hero.description": {
    en: "I design backend systems and AI pipelines — from queue-driven microservices to LangGraph-based agentic workflows. My work spans NestJS/Node.js services, RabbitMQ-based architectures, and RAG/agentic AI systems. Open to backend and AI engineering roles.",
    fr: "Je conçois des systèmes backend et des pipelines IA — des microservices orientés files d'attente aux workflows agentiques basés sur LangGraph. Mon travail couvre les services NestJS/Node.js, les architectures basées sur RabbitMQ, et les systèmes RAG/IA agentique. Ouvert aux postes d'ingénieur backend et IA.",
    ar: "أصمم أنظمة خلفية (Backend) وخطوط معالجة للذكاء الاصطناعي — من الخدمات المصغرة القائمة على قوائم الانتظار إلى أنظمة العمل الوكيلية القائمة على LangGraph. يشمل عملي خدمات NestJS/Node.js، بنى قائمة على RabbitMQ، وأنظمة RAG والذكاء الاصطناعي الوكيلي. متاح لوظائف هندسة الخلفية والذكاء الاصطناعي.",
  },
  "hero.role": {
    en: "Backend Engineer · Applied AI & Agentic Systems",
    fr: "Ingénieur Backend · IA Appliquée & Systèmes Agentiques",
    ar: "مهندس Backend · الذكاء الاصطناعي التطبيقي والأنظمة العاملة",
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
  "about.description1": {
    en: "I'm a backend engineer with three years of experience building APIs, queue-driven services, and data-heavy systems in Node.js, NestJS, and PostgreSQL. Over the past year I've moved into applied AI — integrating LLM agent pipelines, RAG systems, and vector search into production backend architectures rather than working on model research. ",
    fr: "Je suis ingénieur backend avec trois ans d'expérience dans la création d'API, de services orientés files d'attente et de systèmes de données complexes en Node.js, NestJS et PostgreSQL. Au cours de la dernière année, je me suis orienté vers l'IA appliquée — intégrant des pipelines d'agents LLM, des systèmes RAG et la recherche vectorielle dans des architectures backend en production. Je suis actuellement stagiaire Ingénieur IA chez ZetaBox et je dirige le département Web de GDSC Enetcom.",
    ar: "أنا مهندس Backend لدي ثلاث سنوات من الخبرة في بناء واجهات برمجة التطبيقات (APIs) والخدمات القائمة على قوائم الانتظار والأنظمة الغنية بالبيانات باستخدام Node.js وNestJS وPostgreSQL. خلال العام الماضي، انتقلت إلى الذكاء الاصطناعي التطبيقي — دمج خطوط عمل وكلاء LLM وأنظمة RAG والبحث المتجهي في بنى Backend الإنتاجية. أعمل حاليًا كمتدرب مهندس ذكاء اصطناعي في ZetaBox، وأقود قسم الويب في GDSC Enetcom.",
  },
  "about.description2": {
    en: "My core stack is Node.js, NestJS, PostgreSQL, RabbitMQ, and Docker. On the AI side I work with LangGraph, FastAPI, and RAG pipelines using vector stores like pgvector, FAISS, and ChromaDB. I care about the same things in both worlds: clear service boundaries, async job design, and systems that stay correct under load — not just demos that work once.",
    fr: "Ma stack principale est Node.js, NestJS, PostgreSQL, RabbitMQ et Docker. Côté IA, je travaille avec LangGraph, FastAPI et des pipelines RAG utilisant des bases vectorielles comme pgvector, FAISS et ChromaDB. Je m'intéresse aux mêmes principes dans les deux domaines : des limites de service claires, une conception asynchrone des tâches, et des systèmes qui restent corrects sous charge.",
    ar: "تقنياتي الأساسية هي Node.js وNestJS وPostgreSQL وRabbitMQ وDocker. أما في جانب الذكاء الاصطناعي، فأعمل مع LangGraph وFastAPI وخطوط RAG باستخدام قواعد بيانات متجهية مثل pgvector وFAISS وChromaDB. أهتم بنفس المبادئ في المجالين: حدود خدمات واضحة، تصميم مهام غير متزامنة، وأنظمة تبقى صحيحة تحت الضغط.",
  },
  "about.education": {
    en: "Engineering Degree in Software Engineering, ISIMS Sfax (expected 2028)",
    fr: "Diplôme d'Ingénieur en Génie Logiciel, ISIMS Sfax (obtention prévue en 2028)",
    ar: "شهادة هندسة في هندسة البرمجيات، ISIMS صفاقس (التخرج المتوقع 2028)",
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
    en: "A full-stack payroll management system for employees. Features include employee salary tracking, payslip generation, and secure authentication.",
    fr: "Un système de gestion de paie complet pour les employés. Comprend le suivi des salaires, la génération de bulletins de paie et une authentification sécurisée.",
    ar: "نظام شامل لإدارة رواتب الموظفين. يشمل تتبع الرواتب، إنشاء كشوف الرواتب، وتوفير تسجيل دخول آمن.",
  },
  "projects.chatapp.title": {
    en: "Real-Time Chat Application",
    fr: "Application de Chat en Temps Réel",
    ar: "تطبيق الدردشة الفورية",
  },
  "projects.chatapp.description": {
    en: "A real-time chat app with group messaging and notifications. Built to practice OAuth and Socket.io while learning secure authentication.",
    fr: "Une application de chat en temps réel avec discussions de groupe et notifications. Réalisée pour pratiquer OAuth et Socket.io tout en apprenant l'authentification sécurisée.",
    ar: "تطبيق دردشة فوري يدعم الدردشة الجماعية والإشعارات. تم تطويره لتعلم OAuth وSocket.io مع ممارسة المصادقة الآمنة.",
  },
  "projects.erp.title": {
    en: "Complete ERP Solution",
    fr: "Solution ERP Complète",
    ar: "حل تخطيط موارد المؤسسات الكامل",
  },
  "projects.erp.description": {
    en: "A comprehensive ERP system with 7 integrated modules: Admin, HR, Commercial, Finance, Stock, Purchase, and Marketing. Features include PDF invoice generation, attendance tracking, and business analytics.",
    fr: "Un système ERP complet avec 7 modules intégrés : Admin, RH, Commercial, Finance, Stock, Achats et Marketing. Comprend la génération de factures PDF, le suivi des présences et des analyses commerciales.",
    ar: "نظام تخطيط موارد شامل يضم 7 وحدات: الإدارة، الموارد البشرية، التجارة، المالية، المخزون، المشتريات، والتسويق. يتضمن إنشاء فواتير PDF، تتبع الحضور، وتحليلات الأعمال.",
  },
  "projects.ecoshield.title": {
    en: "EcoShield AI - Smart City Platform",
    fr: "EcoShield AI - Plateforme Ville Intelligente",
    ar: "EcoShield AI - منصة المدن الذكية",
  },
  "projects.ecoshield.description": {
    en: "AI-powered platform for smart water infrastructure combining cybersecurity and energy optimization. Implements LSTM models for real-time FDI attack detection and pump power optimization with live monitoring dashboard. Built for AI Night Challenge hackathon.",
    fr: "Plateforme alimentée par l'IA pour infrastructures d'eau intelligentes combinant cybersécurité et optimisation énergétique. Implémente des modèles LSTM pour la détection d'attaques FDI en temps réel et l'optimisation de puissance avec tableau de bord en direct. Développé pour le hackathon AI Night Challenge.",
    ar: "منصة مدعومة بالذكاء الاصطناعي للبنية التحتية الذكية للمياه تجمع بين الأمن السيبراني وتحسين الطاقة. تطبق نماذج LSTM للكشف عن هجمات FDI في الوقت الفعلي وتحسين طاقة المضخات مع لوحة مراقبة حية. تم تطويرها لهاكاثون AI Night Challenge.",
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
    en: "I'm a Full Stack Developer based in Sfax, Tunisia, available for freelance projects and remote work worldwide. Whether you need a React application, Node.js API development, or full-stack consulting, I'd love to hear from you.",
    fr: "Je suis un développeur Full Stack basé à Sfax, Tunisie, disponible pour des projets freelance et du travail à distance dans le monde entier. Que vous ayez besoin d'une application React, d'un développement d'API Node.js ou de conseil full-stack, n'hésitez pas à me contacter.",
    ar: "أنا مطور ويب متكامل مقيم في صفاقس، تونس، متاح للمشاريع الحرة والعمل عن بعد في جميع أنحاء العالم. سواء كنت بحاجة إلى تطبيق React أو تطوير API Node.js أو استشارات full-stack، يسعدني التواصل معك.",
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
