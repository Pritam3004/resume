/*  ============================================================
 *  resumeData.js - Bilingual resume content (EN / ES)
 *  Updated: May 2026 — synced with PritamPawar_2026_v2.docx
 *
 *  Structure per language:
 *    header        → Name & occupation shown at the top
 *    sidebar       → Greeting, contact details, social links
 *    tabs          → Each tab section of the resume
 *    footer        → Footer text
 *    ui            → UI labels (tab titles handled inside tabs)
 *  ============================================================ */

var resumeData = {

  /* ─────────────── ENGLISH ─────────────── */
  "en": {

    "header": {
      "name": { "first": "Pritam", "last": "Pawar" },
      "occupation": "Microsoft 365 & SharePoint Solutions Architect"
    },

    "sidebar": {
      "greeting": {
        "title": "Hello!",
        "text": "Microsoft 365 Solutions Architect with 15+ years of experience designing and delivering enterprise-grade platforms for UN agencies, global consultancies, and Fortune 500 clients. Specialised in SharePoint Online architecture, Power Platform governance, and Azure integration."
      },
      "contact": {
        "phone": "+34 663 324 985",
        "email": "pritam.p1207@gmail.com",
        "address": { "street": "Valencia", "city": "Spain", "zip": "" }
      },
      "social": [
        { "platform": "linkedin", "url": "https://linkedin.com/in/pritam304/", "icon": "fa-brands fa-linkedin" },
        { "platform": "github", "url": "https://github.com/pritam3004", "icon": "fa-brands fa-github" }
      ]
    },

    "ui": {
      "contactDetails": "Contact details",
      "phone": "Phone:",
      "email": "Email:",
      "address": "Address:",
      "sendMessage": "Send me a message",
      "getSocial": "Get social",
      "pdfResume": "PDF Resume"
    },

    "tabs": {

      "profile": {
        "title": "Profile",
        "quote": {
          "text": "The best way to predict the future is to create it.",
          "author": "Peter Drucker"
        },
        "sections": [
          {
            "heading": "Professional Summary",
            "paragraphs": [
              "Microsoft 365 Solutions Architect with 15+ years of experience designing and delivering enterprise-grade platforms for UN agencies, global consultancies, and Fortune 500 clients. Specialised in SharePoint Online architecture, Power Platform governance, and Azure integration — leading cross-functional teams of up to 6 through full project lifecycles with budgets exceeding $550K.",
              "Proven track record of driving digital transformation, reducing operational costs, and improving system performance by 50%+. Scrum Master with deep expertise in translating complex business requirements into scalable, secure, and future-proof technical solutions."
            ]
          },
          {
            "heading": "Key Achievements",
            "paragraphs": [],
            "items": [
              "Nominated for Innovation Award at the United Nations for a Finance Application serving 400+ users across multiple agencies",
              "Improved page load performance by 50%+ on a Microsoft internal intranet through global caching architecture",
              "Led the migration of 1,000+ site collections (SharePoint 2013 → Online) for an entire UN organisation with zero data loss",
              "Saved 10+ engineering hours/week by establishing CI/CD pipelines and automated deployment workflows",
              "Managed $550K+ project budgets, delivering solutions on time and within scope across 4 concurrent workstreams"
            ]
          },
          {
            "heading": "Core Strengths",
            "paragraphs": [],
            "items": [
              "Enterprise Solution Architecture & Design",
              "SharePoint Online & Power Platform Governance",
              "Azure Integration & Serverless Architecture",
              "Full Project Lifecycle Management ($550K+ budgets)",
              "Agile / Scrum Leadership (teams of 6)",
              "Security Architecture (Zero Trust, Entra ID, CSP)",
              "Cloud Migration & Information Architecture",
              "Performance Optimisation & Scalability"
            ]
          },
          {
            "heading": "Certifications",
            "paragraphs": [],
            "items": [
              "Core Solutions of Microsoft SharePoint Server — 70-331 (Microsoft)",
              "Microsoft Power Platform Fundamentals — PL-900 (Microsoft)"
            ]
          },
          {
            "heading": "Languages",
            "paragraphs": [],
            "items": [
              "English — Fluent (professional working language)",
              "Spanish — A1 (beginner, actively learning)"
            ]
          }
        ]
      },

      "education": {
        "title": "Education & Certifications",
        "entries": [
          {
            "heading": "Bachelor of Engineering",
            "subtitle": "Mumbai University, India — 2006",
            "description": "",
            "items": []
          },
          {
            "heading": "Core Solutions of Microsoft SharePoint Server",
            "subtitle": "Microsoft Certification — 70-331",
            "description": "",
            "items": []
          },
          {
            "heading": "Microsoft Power Platform Fundamentals",
            "subtitle": "Microsoft Certification — PL-900",
            "description": "",
            "items": []
          }
        ]
      },

      "skills": {
        "title": "Skills",
        "categories": [
          {
            "heading": "Cloud & Platforms",
            "items": [
              "Microsoft Azure (Functions, Logic Apps, App Services, Key Vault)",
              "Microsoft 365 & SharePoint Online / On-Premises",
              "Power Platform (Power Apps, Power Automate, Copilot Studio, AI Builder)",
              "Dataverse"
            ]
          },
          {
            "heading": "Architecture & Security",
            "items": [
              "Solution Architecture & Design",
              "Microsoft Graph API",
              "Microsoft Entra ID & Zero Trust",
              "Conditional Access & Sensitivity Labels",
              "Content Security Policy (CSP)",
              "Information Architecture & Taxonomy",
              "SharePoint Premium (Syntex)"
            ]
          },
          {
            "heading": "Development",
            "items": [
              "C# / ASP.NET / MVC",
              "JavaScript / TypeScript",
              "React / SPFx",
              "Python",
              "PowerShell / PnP PowerShell",
              "HTML5 / CSS3"
            ]
          },
          {
            "heading": "Integration & Data",
            "items": [
              "RESTful API Design & Integration",
              "Microsoft Graph",
              "Web Services & Data Connectors",
              "SQL Server & Database Management",
              "Dataverse"
            ]
          },
          {
            "heading": "DevOps & Tooling",
            "items": [
              "Azure DevOps (CI/CD Pipelines)",
              "Bicep / ARM Templates",
              "Git / Bitbucket",
              "Jira",
              "Sharegate (Migration)"
            ]
          },
          {
            "heading": "Leadership & Methodology",
            "items": [
              "Scrum Master (Agile / SAFe)",
              "Solution Architecture Advisory",
              "Cross-Functional Team Leadership (up to 6)",
              "Stakeholder Management",
              "Risk Assessment & Governance",
              "ALM & Release Management"
            ]
          }
        ]
      },

      "work": {
        "title": "Work Experience",
        "entries": [
          {
            "heading": "Solutions Architect",
            "subtitle": "UNOPS — January 2026 – Present — Geneva, Switzerland (Remote from Valencia)",
            "description": "Serving UN clients (MRMS platform) on financial and budget applications for 400+ end-users across multiple agencies. Leading a team of 6 (4 developers, QA, UI/UX) with a project budget of ~$550K.",
            "items": [
              "Overhauled solution architecture to enforce modern security standards — migrated authentication to Microsoft Entra ID, implemented CSP headers, and integrated Azure Key Vault with certificate-based auth, reducing security vulnerabilities by 80%",
              "Deployed Azure Functions for scalable serverless operations, resolving performance bottlenecks and delivering 40% improvement in API response times",
              "Restructured Power Platform environments with managed solutions and proper ALM governance, enabling reliable multi-environment deployment pipelines across Dev/Test/Prod",
              "Optimised Power Automate flows and Canvas Apps — improving reliability and maintainability while automating redundant processes using AI Builder capabilities",
              "Planned UI/UX modernisation roadmap leveraging Microsoft Graph and Copilot Studio integration for next-generation user experiences",
              "Established CI/CD best practices using Azure DevOps, saving 10+ hours/week in manual deployment effort and reducing release risk",
              "Led sprint planning, backlog refinement, and retrospectives as Scrum Master, ensuring on-time delivery of quarterly milestones",
              "Evaluated emerging technologies (Copilot for M365, SharePoint Premium) and recommended adoption strategies to keep the platform future-proof"
            ]
          },
          {
            "heading": "Technical Architect & Scrum Master",
            "subtitle": "Larsen & Toubro Infotech (LTInfotech) — March 2017 – December 2025 — Geneva, Switzerland",
            "description": "Clients: UNICC, WHO, UNCTAD | Delivered 7+ mission-critical applications for UN agencies.",
            "items": [
              "Spearheaded design and delivery of 7+ enterprise applications for UN agencies (UNICC, WHO, UNCTAD), leading teams through full project lifecycles from requirements to production support",
              "Architected scalable solutions using Microsoft 365, SharePoint Online, Power Platform, Azure Functions, and Logic Apps — aligning technical strategies with organisational goals",
              "Built a Finance Application on SharePoint Online with SPFx and Power Automate serving 400+ users — nominated for UN Innovation Award for its impact on efficiency and collaboration",
              "Led the migration of 1,000+ site collections from SharePoint 2013 to SharePoint Online using Sharegate, completing on schedule with zero data loss and minimal user disruption",
              "Delivered a WHO mobile application leveraging AWS cloud for authentication and secure public access",
              "Developed custom integration tools including a Lotus Notes migration utility, and built Microsoft Graph-based solutions for cross-platform data interoperability",
              "Facilitated Agile ceremonies as Scrum Master — sprint planning, daily standups, reviews, and retrospectives — driving a culture of continuous improvement across distributed teams",
              "Automated CI/CD pipelines using Azure DevOps, reducing deployment time from hours to minutes and ensuring reliable, repeatable releases"
            ]
          },
          {
            "heading": "Technical Lead & Senior Developer",
            "subtitle": "Capgemini — March 2011 – March 2017 — Mumbai, India",
            "description": "Clients: Nestlé, Swiss financial institutions | Progressed from Senior Developer to Technical Lead.",
            "items": [
              "Led a Swiss banking client project, developing ASP.NET and JavaScript widgets integrated with external databases via web services, serving 200+ internal users",
              "Built a unified SSO authentication system enabling single sign-on across multiple sites for internal and external users, reducing login friction by 60%",
              "Developed a Nestlé custom site using .NET with SQL backend and RESTful APIs, enhancing data accessibility and user experience for 500+ employees",
              "Implemented global caching on a Microsoft internal intranet, reducing page load time by 50% — adopted as a best-practice pattern across the division",
              "Managed data migration from Lotus Notes to SharePoint file shares using Quest tools, ensuring secure and accurate transfer of 10,000+ documents",
              "Improved application performance through UI optimisation, request throttling, and backend query tuning"
            ]
          },
          {
            "heading": "SharePoint Consultant",
            "subtitle": "Wipro (Deployed at Microsoft) — August 2006 – March 2011 — Hyderabad, India",
            "description": "",
            "items": [
              "Supported Microsoft clients with SharePoint Farm administration, server recovery, and infrastructure enhancements across multi-server topologies",
              "Automated site provisioning, SQL backups, and file-share maintenance using PowerShell scripts, reducing manual operations by 70%",
              "Performed SQL mirroring, failover clustering, and domain infrastructure setup including load balancers and Web Front Ends"
            ]
          }
        ]
      },

      "projects": {
        "title": "Key Projects",
        "entries": [
          {
            "heading": "MRMS Finance Application — United Nations",
            "subtitle": "SharePoint Online · SPFx · Power Automate · Microsoft Graph",
            "description": "Designed and built a mission-critical Finance Application serving 400+ users across UN agencies. Implemented complex budget calculations, automated document generation, and role-based security. Nominated for UN Innovation Award.",
            "items": []
          },
          {
            "heading": "Organisation-Wide SharePoint Migration — WHO",
            "subtitle": "SharePoint 2013 → SharePoint Online · Sharegate · PowerShell",
            "description": "Led end-to-end migration of 1,000+ site collections with zero data loss. Planned migration waves, conducted risk assessments, trained 50+ site owners, and delivered on a 6-month timeline.",
            "items": []
          },
          {
            "heading": "Modern Intranet Portal — UNCTAD",
            "subtitle": "SharePoint Online · SPFx · Responsive Design",
            "description": "Architected and delivered a visually engaging Intranet Portal replacing a legacy system, with responsive design for 1,000+ staff accessing from any device.",
            "items": []
          },
          {
            "heading": "Global Caching Architecture — Microsoft Internal",
            "subtitle": "ASP.NET · Performance Engineering · Caching Patterns",
            "description": "Implemented a global caching layer on Microsoft's internal intranet, reducing page load times by 50%+. Pattern was adopted as divisional best practice.",
            "items": []
          }
        ]
      }
    },

    "footer": { "text": "Pritam Pawar — Resume 2026" }

  },

  /* ─────────────── ESPAÑOL ─────────────── */
  "es": {

    "header": {
      "name": { "first": "Pritam", "last": "Pawar" },
      "occupation": "Arquitecto de Soluciones Microsoft 365 y SharePoint"
    },

    "sidebar": {
      "greeting": {
        "title": "¡Hola!",
        "text": "Arquitecto de Soluciones Microsoft 365 con más de 15 años de experiencia diseñando y entregando plataformas empresariales para agencias de la ONU, consultoras globales y clientes Fortune 500. Especializado en arquitectura SharePoint Online, gobernanza Power Platform e integración Azure."
      },
      "contact": {
        "phone": "+34 663 324 985",
        "email": "pritam.p1207@gmail.com",
        "address": { "street": "Valencia", "city": "España", "zip": "" }
      },
      "social": [
        { "platform": "linkedin", "url": "https://linkedin.com/in/pritam304/", "icon": "fa-brands fa-linkedin" },
        { "platform": "github", "url": "https://github.com/pritam3004", "icon": "fa-brands fa-github" }
      ]
    },

    "ui": {
      "contactDetails": "Datos de contacto",
      "phone": "Teléfono:",
      "email": "Correo:",
      "address": "Dirección:",
      "sendMessage": "Envíame un mensaje",
      "getSocial": "Redes sociales",
      "pdfResume": "CV en PDF"
    },

    "tabs": {

      "profile": {
        "title": "Perfil",
        "quote": {
          "text": "La mejor manera de predecir el futuro es crearlo.",
          "author": "Peter Drucker"
        },
        "sections": [
          {
            "heading": "Resumen Profesional",
            "paragraphs": [
              "Arquitecto de Soluciones Microsoft 365 con más de 15 años de experiencia diseñando y entregando plataformas empresariales para agencias de la ONU, consultoras globales y clientes Fortune 500. Especializado en arquitectura SharePoint Online, gobernanza Power Platform e integración Azure — liderando equipos multifuncionales de hasta 6 personas a lo largo de ciclos de vida completos de proyectos con presupuestos superiores a $550K.",
              "Trayectoria comprobada en transformación digital, reducción de costes operativos y mejora del rendimiento de sistemas en más de un 50%. Scrum Master con profunda experiencia traduciendo requisitos empresariales complejos en soluciones técnicas escalables, seguras y preparadas para el futuro."
            ]
          },
          {
            "heading": "Logros Clave",
            "paragraphs": [],
            "items": [
              "Nominado al Premio de Innovación en las Naciones Unidas por una Aplicación Financiera que sirve a más de 400 usuarios en múltiples agencias",
              "Mejoré el rendimiento de carga de páginas en más de un 50% en una intranet interna de Microsoft mediante arquitectura de caché global",
              "Lideré la migración de más de 1.000 colecciones de sitios (SharePoint 2013 → Online) para toda una organización de la ONU sin pérdida de datos",
              "Ahorré más de 10 horas de ingeniería/semana estableciendo pipelines CI/CD y flujos de despliegue automatizados",
              "Gestioné presupuestos de proyecto de más de $550K, entregando soluciones a tiempo y dentro del alcance en 4 flujos de trabajo concurrentes"
            ]
          },
          {
            "heading": "Fortalezas Clave",
            "paragraphs": [],
            "items": [
              "Arquitectura y Diseño de Soluciones Empresariales",
              "Gobernanza de SharePoint Online y Power Platform",
              "Integración Azure y Arquitectura Serverless",
              "Gestión Completa del Ciclo de Vida del Proyecto (presupuestos de $550K+)",
              "Liderazgo Agile / Scrum (equipos de 6)",
              "Arquitectura de Seguridad (Zero Trust, Entra ID, CSP)",
              "Migración en la Nube y Arquitectura de Información",
              "Optimización del Rendimiento y Escalabilidad"
            ]
          },
          {
            "heading": "Certificaciones",
            "paragraphs": [],
            "items": [
              "Core Solutions of Microsoft SharePoint Server — 70-331 (Microsoft)",
              "Microsoft Power Platform Fundamentals — PL-900 (Microsoft)"
            ]
          },
          {
            "heading": "Idiomas",
            "paragraphs": [],
            "items": [
              "Inglés — Fluido (idioma profesional de trabajo)",
              "Español — A1 (principiante, aprendiendo activamente)"
            ]
          }
        ]
      },

      "education": {
        "title": "Educación y Certificaciones",
        "entries": [
          {
            "heading": "Ingeniería (Licenciatura)",
            "subtitle": "Universidad de Mumbai, India — 2006",
            "description": "",
            "items": []
          },
          {
            "heading": "Core Solutions of Microsoft SharePoint Server",
            "subtitle": "Certificación Microsoft — 70-331",
            "description": "",
            "items": []
          },
          {
            "heading": "Microsoft Power Platform Fundamentals",
            "subtitle": "Certificación Microsoft — PL-900",
            "description": "",
            "items": []
          }
        ]
      },

      "skills": {
        "title": "Habilidades",
        "categories": [
          {
            "heading": "Nube y Plataformas",
            "items": [
              "Microsoft Azure (Functions, Logic Apps, App Services, Key Vault)",
              "Microsoft 365 y SharePoint Online / On-Premises",
              "Power Platform (Power Apps, Power Automate, Copilot Studio, AI Builder)",
              "Dataverse"
            ]
          },
          {
            "heading": "Arquitectura y Seguridad",
            "items": [
              "Arquitectura y Diseño de Soluciones",
              "Microsoft Graph API",
              "Microsoft Entra ID y Zero Trust",
              "Acceso Condicional y Etiquetas de Sensibilidad",
              "Content Security Policy (CSP)",
              "Arquitectura de Información y Taxonomía",
              "SharePoint Premium (Syntex)"
            ]
          },
          {
            "heading": "Desarrollo",
            "items": [
              "C# / ASP.NET / MVC",
              "JavaScript / TypeScript",
              "React / SPFx",
              "Python",
              "PowerShell / PnP PowerShell",
              "HTML5 / CSS3"
            ]
          },
          {
            "heading": "Integración y Datos",
            "items": [
              "Diseño e Integración de APIs RESTful",
              "Microsoft Graph",
              "Servicios Web y Conectores de Datos",
              "SQL Server y Gestión de Bases de Datos",
              "Dataverse"
            ]
          },
          {
            "heading": "DevOps y Herramientas",
            "items": [
              "Azure DevOps (Pipelines CI/CD)",
              "Bicep / ARM Templates",
              "Git / Bitbucket",
              "Jira",
              "Sharegate (Migración)"
            ]
          },
          {
            "heading": "Liderazgo y Metodología",
            "items": [
              "Scrum Master (Agile / SAFe)",
              "Asesoría en Arquitectura de Soluciones",
              "Liderazgo de Equipos Multifuncionales (hasta 6)",
              "Gestión de Partes Interesadas",
              "Evaluación de Riesgos y Gobernanza",
              "ALM y Gestión de Releases"
            ]
          }
        ]
      },

      "work": {
        "title": "Experiencia Laboral",
        "entries": [
          {
            "heading": "Arquitecto de Soluciones",
            "subtitle": "UNOPS — Enero 2026 – Presente — Ginebra, Suiza (Remoto desde Valencia)",
            "description": "Sirviendo a clientes de la ONU (plataforma MRMS) en aplicaciones financieras y presupuestarias para más de 400 usuarios finales en múltiples agencias. Liderando un equipo de 6 (4 desarrolladores, QA, UI/UX) con un presupuesto de ~$550K.",
            "items": [
              "Rediseñé la arquitectura de la solución para aplicar estándares modernos de seguridad — migré la autenticación a Microsoft Entra ID, implementé cabeceras CSP e integré Azure Key Vault con autenticación basada en certificados, reduciendo vulnerabilidades de seguridad en un 80%",
              "Desplegué Azure Functions para operaciones serverless escalables, resolviendo cuellos de botella y logrando una mejora del 40% en los tiempos de respuesta de API",
              "Reestructuré los entornos de Power Platform con soluciones gestionadas y gobernanza ALM adecuada, habilitando pipelines de despliegue multi-entorno fiables en Dev/Test/Prod",
              "Optimicé flujos de Power Automate y Canvas Apps — mejorando fiabilidad y mantenibilidad al automatizar procesos redundantes usando capacidades de AI Builder",
              "Planifiqué una hoja de ruta de modernización UI/UX aprovechando Microsoft Graph e integración con Copilot Studio para experiencias de usuario de próxima generación",
              "Establecí mejores prácticas de CI/CD usando Azure DevOps, ahorrando más de 10 horas/semana en esfuerzo de despliegue manual y reduciendo el riesgo de lanzamiento",
              "Dirigí la planificación de sprints, refinamiento del backlog y retrospectivas como Scrum Master, asegurando la entrega a tiempo de hitos trimestrales",
              "Evalué tecnologías emergentes (Copilot para M365, SharePoint Premium) y recomendé estrategias de adopción para mantener la plataforma preparada para el futuro"
            ]
          },
          {
            "heading": "Arquitecto Técnico y Scrum Master",
            "subtitle": "Larsen & Toubro Infotech (LTInfotech) — Marzo 2017 – Diciembre 2025 — Ginebra, Suiza",
            "description": "Clientes: UNICC, OMS, UNCTAD | Entregué más de 7 aplicaciones críticas para agencias de la ONU.",
            "items": [
              "Lideré el diseño y entrega de más de 7 aplicaciones empresariales para agencias de la ONU (UNICC, OMS, UNCTAD), dirigiendo equipos a lo largo de ciclos de vida completos desde requisitos hasta soporte en producción",
              "Diseñé soluciones escalables usando Microsoft 365, SharePoint Online, Power Platform, Azure Functions y Logic Apps — alineando estrategias técnicas con objetivos organizacionales",
              "Construí una Aplicación Financiera en SharePoint Online con SPFx y Power Automate sirviendo a más de 400 usuarios — nominada para el Premio de Innovación de la ONU por su impacto en eficiencia y colaboración",
              "Lideré la migración de más de 1.000 colecciones de sitios de SharePoint 2013 a SharePoint Online usando Sharegate, completando a tiempo con cero pérdida de datos y mínima interrupción de usuarios",
              "Entregué una aplicación móvil para la OMS aprovechando AWS cloud para autenticación y acceso público seguro",
              "Desarrollé herramientas de integración personalizadas incluyendo una utilidad de migración de Lotus Notes, y construí soluciones basadas en Microsoft Graph para interoperabilidad multiplataforma",
              "Facilité ceremonias Agile como Scrum Master — planificación de sprints, standups diarios, revisiones y retrospectivas — impulsando una cultura de mejora continua en equipos distribuidos",
              "Automaticé pipelines CI/CD usando Azure DevOps, reduciendo el tiempo de despliegue de horas a minutos y asegurando lanzamientos fiables y repetibles"
            ]
          },
          {
            "heading": "Líder Técnico y Desarrollador Senior",
            "subtitle": "Capgemini — Marzo 2011 – Marzo 2017 — Mumbai, India",
            "description": "Clientes: Nestlé, instituciones financieras suizas | Progresé de Desarrollador Senior a Líder Técnico.",
            "items": [
              "Lideré un proyecto para un cliente bancario suizo, desarrollando widgets ASP.NET y JavaScript integrados con bases de datos externas mediante servicios web, sirviendo a más de 200 usuarios internos",
              "Construí un sistema SSO unificado habilitando inicio de sesión único en múltiples sitios para usuarios internos y externos, reduciendo la fricción de login en un 60%",
              "Desarrollé un sitio personalizado para Nestlé usando .NET con backend SQL y APIs RESTful, mejorando la accesibilidad de datos y experiencia de usuario para más de 500 empleados",
              "Implementé caché global en una intranet interna de Microsoft, reduciendo el tiempo de carga de páginas en un 50% — adoptado como patrón de buenas prácticas en toda la división",
              "Gestioné la migración de datos de Lotus Notes a archivos compartidos de SharePoint usando herramientas Quest, asegurando la transferencia segura y precisa de más de 10.000 documentos",
              "Mejoré el rendimiento de aplicaciones mediante optimización de UI, throttling de peticiones y ajuste de consultas backend"
            ]
          },
          {
            "heading": "Consultor SharePoint",
            "subtitle": "Wipro (Desplegado en Microsoft) — Agosto 2006 – Marzo 2011 — Hyderabad, India",
            "description": "",
            "items": [
              "Apoyé a clientes de Microsoft con administración de Farm SharePoint, recuperación de servidores y mejoras de infraestructura en topologías multi-servidor",
              "Automaticé el aprovisionamiento de sitios, copias de seguridad SQL y mantenimiento de archivos compartidos usando scripts PowerShell, reduciendo operaciones manuales en un 70%",
              "Realicé SQL mirroring, failover clustering y configuración de infraestructura de dominio incluyendo balanceadores de carga y Web Front Ends"
            ]
          }
        ]
      },

      "projects": {
        "title": "Proyectos Clave",
        "entries": [
          {
            "heading": "Aplicación Financiera MRMS — Naciones Unidas",
            "subtitle": "SharePoint Online · SPFx · Power Automate · Microsoft Graph",
            "description": "Diseñé y construí una Aplicación Financiera de misión crítica sirviendo a más de 400 usuarios en agencias de la ONU. Implementé cálculos presupuestarios complejos, generación automatizada de documentos y seguridad basada en roles. Nominada para el Premio de Innovación de la ONU.",
            "items": []
          },
          {
            "heading": "Migración de SharePoint Organizacional — OMS",
            "subtitle": "SharePoint 2013 → SharePoint Online · Sharegate · PowerShell",
            "description": "Lideré la migración completa de más de 1.000 colecciones de sitios sin pérdida de datos. Planifiqué oleadas de migración, realicé evaluaciones de riesgo, formé a más de 50 propietarios de sitios y entregué en un plazo de 6 meses.",
            "items": []
          },
          {
            "heading": "Portal de Intranet Moderno — UNCTAD",
            "subtitle": "SharePoint Online · SPFx · Diseño Responsive",
            "description": "Diseñé y entregué un Portal de Intranet visualmente atractivo reemplazando un sistema heredado, con diseño responsive para más de 1.000 empleados accediendo desde cualquier dispositivo.",
            "items": []
          },
          {
            "heading": "Arquitectura de Caché Global — Microsoft Interno",
            "subtitle": "ASP.NET · Ingeniería de Rendimiento · Patrones de Caché",
            "description": "Implementé una capa de caché global en la intranet interna de Microsoft, reduciendo los tiempos de carga de páginas en más de un 50%. El patrón fue adoptado como buena práctica divisional.",
            "items": []
          }
        ]
      }
    },

    "footer": { "text": "Pritam Pawar — Currículum 2026" }

  }

};
