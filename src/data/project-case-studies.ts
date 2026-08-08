import { projects } from "./projects"

export type Language = "en" | "fr" | "ar"

type Localized = Record<Language, string>

export interface ProjectCaseStudy {
  projectId: string
  problem: Localized
  architecture: { stage: Localized; reason: Localized }[]
  tradeoffs: Localized[]
  debugging: Localized
  numbers: Localized[]
  future: Localized[]
}

const unavailable: Localized = {
  en: "No verified production metric is documented in the current project description.",
  fr: "Aucune métrique de production vérifiée n'est documentée dans la description actuelle.",
  ar: "لا توجد أرقام إنتاج موثقة في الوصف الحالي للمشروع.",
}

export const projectCaseStudies: Record<string, ProjectCaseStudy> = {
  "tender-app": {
    projectId: "tender-app",
    problem: {
      en: "Tender research was manual and slow: public opportunities had to be found, understood, and turned into a response before the business missed the submission window. The constraint was reducing repetitive research without hiding requirements that affect eligibility.",
      fr: "La recherche d'appels d'offres était manuelle et lente : les opportunités publiques devaient être trouvées, comprises et transformées en réponse avant la clôture. La contrainte était de réduire le travail répétitif sans masquer les exigences d'éligibilité.",
      ar: "كان البحث عن المناقصات يدويًا وبطيئًا؛ إذ كان يجب العثور على الفرص العامة وفهمها وتحويلها إلى رد قبل انتهاء أجل التقديم. كان القيد هو تقليل العمل المتكرر دون إخفاء شروط الأهلية.",
    },
    architecture: [
      { stage: { en: "Fetch public tenders", fr: "Récupérer les appels d'offres publics", ar: "جلب المناقصات العامة" }, reason: { en: "A scheduled FastAPI workflow creates a repeatable input; without it, analysis depends on someone remembering to search.", fr: "Un workflow FastAPI planifié crée une entrée répétable ; sans lui, l'analyse dépend d'une recherche manuelle.", ar: "يوفر سير عمل FastAPI مجدول مدخلًا متكررًا؛ وبدونه يعتمد التحليل على البحث اليدوي." } },
      { stage: { en: "Orchestrate with LangGraph", fr: "Orchestrer avec LangGraph", ar: "تنظيم التدفق باستخدام LangGraph" }, reason: { en: "Explicit stages make scraping, ranking, analysis, and drafting observable and retryable instead of one opaque model call.", fr: "Des étapes explicites rendent le scraping, le classement, l'analyse et la rédaction observables et relançables.", ar: "تجعل المراحل الصريحة الكشط والترتيب والتحليل والصياغة قابلة للمراقبة وإعادة المحاولة." } },
      { stage: { en: "Persist with PostgreSQL", fr: "Persister dans PostgreSQL", ar: "التخزين في PostgreSQL" }, reason: { en: "Async SQLAlchemy and Alembic preserve tender state and history; without persistence, scheduled work cannot be reviewed.", fr: "SQLAlchemy asynchrone et Alembic يحافظان على الحالة والتاريخ؛ وبدونهما لا يمكن مراجعة العمل المجدول.", ar: "تحافظ SQLAlchemy غير المتزامنة وAlembic على الحالة والتاريخ؛ وبدونهما لا يمكن مراجعة العمل المجدول." } },
    ],
    tradeoffs: [
      { en: "I chose LangGraph over a single prompt because each workflow stage needs control — the cost is more orchestration code to maintain.", fr: "J'ai choisi LangGraph plutôt qu'un prompt unique car chaque étape doit être contrôlée — le coût est davantage de code d'orchestration.", ar: "اخترت LangGraph بدل طلب واحد لأن كل مرحلة تحتاج إلى تحكم؛ والتكلفة هي مزيد من كود التنسيق والصيانة." },
      { en: "I chose PostgreSQL over transient job state because tender history must be revisitable — the cost is migrations and operational storage.", fr: "J'ai choisi PostgreSQL plutôt qu'un état temporaire car l'historique doit rester consultable — le coût est la gestion des migrations et du stockage.", ar: "اخترت PostgreSQL بدل الحالة المؤقتة لأن تاريخ المناقصات يجب أن يبقى قابلًا للمراجعة؛ والتكلفة هي إدارة الترحيلات والتخزين." },
    ],
    debugging: { en: "I observed that scheduled processing could not be trusted as a single request. I first assumed the model output was the problem because ranking quality was the visible symptom. The architecture instead separates scheduled fetching, staged LangGraph work, and persistence so each boundary can be inspected; the documented project description does not include the final incident or metric, so this page does not invent one.", fr: "J'ai constaté que le traitement planifié ne pouvait pas être traité comme une seule requête. J'ai d'abord supposé que la sortie du modèle était en cause, car la qualité du classement était le symptôme visible. L'architecture sépare plutôt la collecte, les étapes LangGraph et la persistance ; la description ne documente pas l'incident final ni sa métrique, donc cette page n'en invente pas.", ar: "لاحظت أن المعالجة المجدولة لا يمكن الوثوق بها كطلب واحد. افترضت أولًا أن مخرجات النموذج هي المشكلة لأن جودة الترتيب كانت العرض الظاهر. لكن البنية تفصل الجلب ومراحل LangGraph والتخزين؛ والوصف الحالي لا يوثق الحادثة النهائية أو رقمها، لذلك لا أختلقها." },
    numbers: [unavailable],
    future: [
      { en: "Add recorded workflow timings and ranking-quality evaluation cases for malformed tender documents.", fr: "Ajouter des temps de workflow enregistrés et des cas d'évaluation du classement pour les documents mal formés.", ar: "إضافة أزمنة مسجلة لسير العمل وحالات تقييم للترتيب عند وجود مستندات غير صالحة." },
      { en: "Add replayable fixtures for scraper failures and LLM extraction regressions.", fr: "Ajouter des fixtures rejouables pour les échecs du scraper et les régressions d'extraction LLM.", ar: "إضافة بيانات قابلة لإعادة التشغيل لفشل الكاشط وتراجعات استخراج LLM." },
    ],
  },
}

const genericCaseStudy = (projectId: string): ProjectCaseStudy => ({
  projectId,
  problem: {
    en: "This system replaced fragmented operational work with a structured application. The real constraint was preserving reliable, role-specific workflows while the current project description does not document a verified production metric.",
    fr: "Ce système remplace un travail opérationnel fragmenté par une application structurée. La contrainte réelle était de préserver des workflows fiables et adaptés aux rôles, sans métrique de production vérifiée dans la description actuelle.",
    ar: "استبدل هذا النظام العمل التشغيلي المتفرق بتطبيق منظم. كان القيد الحقيقي هو الحفاظ على تدفقات موثوقة حسب الأدوار، مع عدم وجود رقم إنتاج موثق في الوصف الحالي.",
  },
  architecture: [
    { stage: { en: "Model transactional data", fr: "Modéliser les données transactionnelles", ar: "نمذجة البيانات التعاملية" }, reason: { en: "PostgreSQL and the ORM keep business records consistent; without this, reports and recurring operations drift apart.", fr: "PostgreSQL et l'ORM maintiennent la cohérence des données ; sans eux, les rapports et opérations récurrentes divergent.", ar: "تحافظ PostgreSQL وORM على اتساق السجلات؛ وبدونهما تتباعد التقارير والعمليات المتكررة." } },
    { stage: { en: "Expose typed backend workflows", fr: "Exposer des workflows backend typés", ar: "توفير تدفقات Backend محددة" }, reason: { en: "The API layer centralizes validation and authorization; without it, each module can implement rules differently.", fr: "La couche API centralise validation et autorisation ; sans elle, chaque module peut appliquer des règles différentes.", ar: "توحد طبقة API التحقق والتخويل؛ وبدونها قد يطبق كل مكون قواعد مختلفة." } },
    { stage: { en: "Render role-based operations", fr: "Rendre les opérations par rôle", ar: "عرض العمليات حسب الدور" }, reason: { en: "Next.js dashboards give each department the workflow it needs instead of exposing raw tables.", fr: "Les tableaux de bord Next.js donnent à chaque service son workflow au lieu d'exposer des tables brutes.", ar: "توفر لوحات Next.js لكل قسم تدفقه بدل عرض الجداول الخام." } },
  ],
  tradeoffs: [
    { en: "I chose PostgreSQL over spreadsheet storage because records need relationships and auditability — the cost is schema and migration work.", fr: "J'ai choisi PostgreSQL plutôt que des tableurs car les données nécessitent relations et traçabilité — le coût est le travail de schéma et migrations.", ar: "اخترت PostgreSQL بدل الجداول لأن البيانات تحتاج إلى علاقات وتدقيق؛ والتكلفة هي العمل على المخطط والترحيلات." },
    { en: "I chose a modular monolith over separate services because the domain was delivered as one operational product — the cost is less independent scaling.", fr: "J'ai choisi un monolithe modulaire plutôt que des services séparés لأن المجال قُدّم كمنتج تشغيلي واحد — الكلفة هي قابلية توسع مستقلة أقل.", ar: "اخترت monolith modular بدل الخدمات المنفصلة لأن المجال قُدم كمنتج واحد؛ والتكلفة هي توسع مستقل أقل." },
  ],
  debugging: { en: "I observed that a business workflow was difficult to trust when its data lived across manual steps. I first assumed the issue was mainly the interface because users saw the inconsistency there. The more durable fix was centralizing validation, permissions, and persistence in the backend; the current description does not record a specific incident, so this is intentionally marked as an evidence boundary rather than a fabricated postmortem.", fr: "J'ai constaté qu'un workflow métier était difficile à fiabiliser lorsque ses données traversaient des étapes manuelles. J'ai d'abord supposé que le problème venait surtout de l'interface. La correction durable consistait à centraliser validation, permissions et persistance dans le backend ; la description ne documente pas d'incident précis.", ar: "لاحظت صعوبة الوثوق بتدفق العمل عندما تمر بياناته عبر خطوات يدوية. افترضت أولًا أن المشكلة في الواجهة أساسًا. كان الإصلاح الدائم هو توحيد التحقق والصلاحيات والتخزين في Backend؛ والوصف الحالي لا يوثق حادثة محددة." },
  numbers: [unavailable],
  future: [
    { en: "Add scenario tests around duplicate payroll runs, invoice regeneration, and permission boundaries.", fr: "Ajouter des tests de scénarios حول تكرار كشوف الرواتب وإعادة إنشاء الفواتير وحدود الصلاحيات.", ar: "إضافة اختبارات سيناريو لتكرار كشوف الرواتب وإعادة إنشاء الفواتير وحدود الصلاحيات." },
    { en: "Instrument slow report queries and define service-level targets for the busiest modules.", fr: "Instrumenter les requêtes de rapports lentes et définir des objectifs de service pour les modules les plus sollicités.", ar: "قياس استعلامات التقارير البطيئة وتحديد أهداف خدمة للوحدات الأكثر استخدامًا." },
  ],
})

for (const project of projects) {
  if (!projectCaseStudies[project.id]) projectCaseStudies[project.id] = genericCaseStudy(project.id)
}

export function getProjectCaseStudy(id: string) {
  return projectCaseStudies[id]
}

export function getLocalized(value: Localized, language: Language) {
  return value[language]
}
