/*  ============================================================
 *  resumeData.js — Bilingual resume content (EN / ES)
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
      "occupation": "Technical Architect & Senior Developer"
    },

    "sidebar": {
      "greeting": {
        "title": "Hello!",
        "text": "Microsoft 365 Architect and Senior Developer with 15+ years of experience delivering enterprise solutions across global organisations. Passionate about digital transformation, solution architecture, and leading high-performing agile teams."
      },
      "contact": {
        "phone": "+34 663 324 985",
        "email": "pritam.p1207@gmail.com",
        "address": { "street": "Valencia", "city": "Spain", "zip": "" }
      },
      "social": [
        { "platform": "linkedin", "url": "https://linkedin.com/in/pritam304/", "icon": "fa-brands fa-linkedin" }
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
              "Microsoft 365 Architect and Senior Developer with 15+ years of experience in delivering end-to-end enterprise solutions. Skilled in leading full project lifecycles — from architecture and development to deployment and support.",
              "Experienced Scrum Master with strong client-facing skills and a collaborative, agile mindset. Expert in Microsoft 365, SharePoint, Power Platform, and Azure. Proficient in building custom applications and automating complex business processes.",
              "Trusted advisor to stakeholders, translating business needs into scalable technical solutions. Known for technical leadership, innovation, and a passion for digital transformation."
            ]
          },
          {
            "heading": "Core Strengths",
            "paragraphs": [],
            "items": [
              "Enterprise Solution Architecture & Design",
              "Full Project Lifecycle Management",
              "Agile / Scrum Leadership",
              "Client Stakeholder Advisory",
              "Cloud Migration & Governance",
              "Performance Optimisation & Scalability"
            ]
          },
          {
            "heading": "Certifications",
            "paragraphs": [],
            "items": [
              "Core Solutions SharePoint Server — 70-331 (Microsoft)",
              "Microsoft Office 365 Power Platform — PL-900 (Microsoft)"
            ]
          },
          {
            "heading": "Languages",
            "paragraphs": [
              "English — Fluent (read, write, and speak)"
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
            "heading": "Core Solutions SharePoint Server",
            "subtitle": "Microsoft Certification — 70-331",
            "description": "",
            "items": []
          },
          {
            "heading": "Microsoft Office 365 Power Platform",
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
              "Microsoft Azure (Functions, Logic Apps, DevOps)",
              "Amazon Web Services (AWS)",
              "Microsoft 365 & SharePoint Online",
              "Power Platform (Power Apps, Power Automate, Power Virtual Agents, AI Builder)"
            ]
          },
          {
            "heading": "Programming & Frameworks",
            "items": [
              "C# / ASP.NET / MVC",
              "JavaScript / TypeScript",
              "React / Angular / SPFx",
              "Python",
              "PowerShell",
              "HTML5 / CSS3"
            ]
          },
          {
            "heading": "Integration & APIs",
            "items": [
              "RESTful API Design & Integration",
              "Web Services & Data Connectors",
              "SQL Server & Database Management"
            ]
          },
          {
            "heading": "DevOps & Tools",
            "items": [
              "Azure DevOps (CI/CD Pipelines)",
              "Bitbucket / Jira",
              "Sharegate (Migration)",
              "SharePoint Designer / Nintex"
            ]
          },
          {
            "heading": "Leadership & Methodology",
            "items": [
              "Scrum Master & Agile Ceremonies",
              "Solution Architecture & Technical Advisory",
              "Cross-Functional Team Leadership",
              "Risk Assessment & Governance"
            ]
          }
        ]
      },

      "work": {
        "title": "Work Experience",
        "entries": [
          {
            "heading": "Technical Architect",
            "subtitle": "Larsen & Toubro Infotech — March 2017 – Present",
            "description": "",
            "items": [
              "Spearheaded the design and development of enterprise-grade applications, proof of concepts, and custom tools, leading cross-functional teams through full project lifecycles — from planning and requirements gathering to delivery and support.",
              "Architected and implemented scalable solutions using Microsoft 365, SharePoint, Power Platform (Power Automate, Power Apps), Azure Functions, and Logic Apps, aligning technical strategies with business goals.",
              "Played a key role in application architecture, transforming complex business processes into robust technical solutions, conducting risk assessments, and providing strategic technical guidance to stakeholders.",
              "Acted as Scrum Master, facilitating Agile ceremonies including sprint planning, daily standups, reviews, and retrospectives, fostering a culture of collaboration and continuous improvement.",
              "Delivered 7+ mission-critical applications for UNICC, including a mobile app for WHO leveraging AWS cloud for authentication and secure access.",
              "Developed custom tools for data extraction and integration, including a Lotus Notes migration utility, and utilised third-party platforms for seamless system interoperability.",
              "Proficient in DevOps practices, automating deployments using CI/CD pipelines to ensure efficient and reliable delivery."
            ]
          },
          {
            "heading": "Technical Lead & Developer",
            "subtitle": "Capgemini — March 2011 – March 2017",
            "description": "",
            "items": [
              "Advanced from Senior Developer to Technical Lead, delivering solutions across diverse sectors with a focus on performance and scalability.",
              "Led a Swiss client project, developing ASP.NET and JavaScript widgets that pulled data from external databases via web services.",
              "Built a unified authentication system enabling single sign-on across multiple sites for internal and external users.",
              "Managed data migration from Lotus Notes to file shares using Quest tools, ensuring secure and accurate transfer.",
              "Developed a cloud-based AngularJS application with SQL backend and RESTful APIs, enhancing data access and user experience.",
              "Improved application performance through UI optimisation, throttling, and backend tuning.",
              "Customised SharePoint using SharePoint Designer and Nintex, delivering no-code enhancements to layouts, themes, and workflows."
            ]
          },
          {
            "heading": "SharePoint Consultant",
            "subtitle": "Wipro — August 2006 – March 2011",
            "description": "",
            "items": [
              "Worked as a consultant at Microsoft, supporting clients with Farm-level activities, server-down situations, and enhancement activities.",
              "Involved in setting up domains and server setups, including domain controllers, Web Front Ends, databases, and load balancers.",
              "Performed data restore, SQL mirroring, and SQL failover clustering.",
              "Automated site creation, SQL data, and file-share backups using PowerShell and stsadm scripts.",
              "Created sites using site templates and developed custom site definitions.",
              "Conducted site-level activities including bug fixes, workflow optimisation, page enhancements, and performance tuning."
            ]
          }
        ]
      },

      "projects": {
        "title": "Key Projects",
        "entries": [
          {
            "heading": "Finance Application — United Nations",
            "subtitle": "Office 365 · SPFx · Power Automate",
            "description": "Built a prominent Finance Application on the Office 365 platform, enhanced using SPFx customisation. Successfully integrated automation, complex calculations, and document generation while promoting seamless collaboration with emphasis on data security.",
            "items": [
              "Nominated for an Innovation Award at the United Nations"
            ]
          },
          {
            "heading": "Modern Intranet Portal",
            "subtitle": "SharePoint Online · SPFx · Responsive Design",
            "description": "Led the development of a visually engaging Intranet Portal incorporating modern design elements to replace the legacy version. Implemented responsive design enabling seamless access from any device.",
            "items": []
          },
          {
            "heading": "Large-Scale SharePoint Migration",
            "subtitle": "SharePoint 2013 → SharePoint Online · Sharegate",
            "description": "Led the migration of over 1,000 sites from SharePoint 2013 to SharePoint Online. Planned the migration timeline, conducted risk assessments, and collaborated with cross-functional teams.",
            "items": []
          },
          {
            "heading": "Global Caching — Microsoft Intranet",
            "subtitle": "ASP.NET · Performance Engineering",
            "description": "Implemented global caching on a Microsoft Intranet site, reducing page loading time by 50%.",
            "items": []
          },
          {
            "heading": "Executive Search Application",
            "subtitle": "SharePoint Search · Custom UI",
            "description": "Implemented a rich search application for senior management with crawl-based search, configured to requirements with a modern UI for result presentation.",
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
      "occupation": "Arquitecto Técnico y Desarrollador Senior"
    },

    "sidebar": {
      "greeting": {
        "title": "¡Hola!",
        "text": "Arquitecto Microsoft 365 y Desarrollador Senior con más de 15 años de experiencia entregando soluciones empresariales en organizaciones globales. Apasionado por la transformación digital, la arquitectura de soluciones y el liderazgo de equipos ágiles de alto rendimiento."
      },
      "contact": {
        "phone": "+34 663 324 985",
        "email": "pritam.p1207@gmail.com",
        "address": { "street": "Valencia", "city": "España", "zip": "" }
      },
      "social": [
        { "platform": "linkedin", "url": "https://linkedin.com/in/pritam304/", "icon": "fa-brands fa-linkedin" }
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
              "Arquitecto Microsoft 365 y Desarrollador Senior con más de 15 años de experiencia en la entrega de soluciones empresariales de extremo a extremo. Experto en liderar ciclos de vida completos de proyectos — desde la arquitectura y el desarrollo hasta la implantación y el soporte.",
              "Scrum Master experimentado con sólidas habilidades de cara al cliente y una mentalidad colaborativa y ágil. Experto en Microsoft 365, SharePoint, Power Platform y Azure. Competente en la creación de aplicaciones personalizadas y la automatización de procesos de negocio complejos.",
              "Asesor de confianza para las partes interesadas, traduciendo necesidades de negocio en soluciones técnicas escalables. Reconocido por su liderazgo técnico, innovación y pasión por la transformación digital."
            ]
          },
          {
            "heading": "Fortalezas Clave",
            "paragraphs": [],
            "items": [
              "Arquitectura y Diseño de Soluciones Empresariales",
              "Gestión Completa del Ciclo de Vida del Proyecto",
              "Liderazgo Agile / Scrum",
              "Asesoramiento a Partes Interesadas",
              "Migración y Gobernanza en la Nube",
              "Optimización del Rendimiento y Escalabilidad"
            ]
          },
          {
            "heading": "Certificaciones",
            "paragraphs": [],
            "items": [
              "Core Solutions SharePoint Server — 70-331 (Microsoft)",
              "Microsoft Office 365 Power Platform — PL-900 (Microsoft)"
            ]
          },
          {
            "heading": "Idiomas",
            "paragraphs": [
              "Inglés — Fluido (lectura, escritura y conversación)"
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
            "heading": "Core Solutions SharePoint Server",
            "subtitle": "Certificación Microsoft — 70-331",
            "description": "",
            "items": []
          },
          {
            "heading": "Microsoft Office 365 Power Platform",
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
              "Microsoft Azure (Functions, Logic Apps, DevOps)",
              "Amazon Web Services (AWS)",
              "Microsoft 365 y SharePoint Online",
              "Power Platform (Power Apps, Power Automate, Power Virtual Agents, AI Builder)"
            ]
          },
          {
            "heading": "Programación y Frameworks",
            "items": [
              "C# / ASP.NET / MVC",
              "JavaScript / TypeScript",
              "React / Angular / SPFx",
              "Python",
              "PowerShell",
              "HTML5 / CSS3"
            ]
          },
          {
            "heading": "Integración y APIs",
            "items": [
              "Diseño e Integración de APIs RESTful",
              "Servicios Web y Conectores de Datos",
              "SQL Server y Gestión de Bases de Datos"
            ]
          },
          {
            "heading": "DevOps y Herramientas",
            "items": [
              "Azure DevOps (Pipelines CI/CD)",
              "Bitbucket / Jira",
              "Sharegate (Migración)",
              "SharePoint Designer / Nintex"
            ]
          },
          {
            "heading": "Liderazgo y Metodología",
            "items": [
              "Scrum Master y Ceremonias Ágiles",
              "Arquitectura de Soluciones y Asesoría Técnica",
              "Liderazgo de Equipos Multifuncionales",
              "Evaluación de Riesgos y Gobernanza"
            ]
          }
        ]
      },

      "work": {
        "title": "Experiencia Laboral",
        "entries": [
          {
            "heading": "Arquitecto Técnico",
            "subtitle": "Larsen & Toubro Infotech — Marzo 2017 – Presente",
            "description": "",
            "items": [
              "Lideré el diseño y desarrollo de aplicaciones empresariales, pruebas de concepto y herramientas personalizadas, dirigiendo equipos multifuncionales a lo largo de ciclos de vida completos — desde la planificación y recopilación de requisitos hasta la entrega y soporte.",
              "Diseñé e implementé soluciones escalables utilizando Microsoft 365, SharePoint, Power Platform (Power Automate, Power Apps), Azure Functions y Logic Apps, alineando estrategias técnicas con objetivos de negocio.",
              "Desempeñé un papel clave en la arquitectura de aplicaciones, transformando procesos de negocio complejos en soluciones técnicas robustas, realizando evaluaciones de riesgos y proporcionando orientación técnica estratégica.",
              "Actué como Scrum Master, facilitando ceremonias Ágiles incluidas sprint planning, standups diarios, revisiones y retrospectivas, fomentando una cultura de colaboración y mejora continua.",
              "Entregué más de 7 aplicaciones críticas para UNICC, incluyendo una aplicación móvil para la OMS aprovechando AWS para autenticación y acceso seguro.",
              "Desarrollé herramientas personalizadas para extracción e integración de datos, incluyendo una utilidad de migración de Lotus Notes, y utilicé plataformas de terceros para la interoperabilidad del sistema.",
              "Competente en prácticas DevOps, automatizando despliegues mediante pipelines CI/CD para garantizar una entrega eficiente y fiable."
            ]
          },
          {
            "heading": "Líder Técnico y Desarrollador",
            "subtitle": "Capgemini — Marzo 2011 – Marzo 2017",
            "description": "",
            "items": [
              "Progresé de Desarrollador Senior a Líder Técnico, entregando soluciones en diversos sectores con enfoque en rendimiento y escalabilidad.",
              "Lideré un proyecto para un cliente suizo, desarrollando widgets ASP.NET y JavaScript que extraían datos de bases de datos externas mediante servicios web.",
              "Construí un sistema de autenticación unificado que permitía inicio de sesión único en múltiples sitios para usuarios internos y externos.",
              "Gestioné la migración de datos de Lotus Notes a archivos compartidos usando herramientas Quest, garantizando una transferencia segura y precisa.",
              "Desarrollé una aplicación AngularJS en la nube con backend SQL y APIs RESTful, mejorando el acceso a datos y la experiencia de usuario.",
              "Mejoré el rendimiento de aplicaciones mediante optimización de UI, throttling y ajuste del backend.",
              "Personalicé SharePoint usando SharePoint Designer y Nintex, entregando mejoras sin código en diseños, temas y flujos de trabajo."
            ]
          },
          {
            "heading": "Consultor SharePoint",
            "subtitle": "Wipro — Agosto 2006 – Marzo 2011",
            "description": "",
            "items": [
              "Trabajé como consultor en Microsoft, apoyando a clientes con actividades a nivel de Farm, situaciones de servidores caídos y actividades de mejora.",
              "Participé en la configuración de dominios y servidores, incluyendo controladores de dominio, Web Front Ends, bases de datos y balanceadores de carga.",
              "Realicé restauraciones de datos, SQL mirroring y SQL failover clustering.",
              "Automaticé la creación de sitios, datos SQL y copias de seguridad de archivos compartidos usando scripts de PowerShell y stsadm.",
              "Creé sitios usando plantillas y desarrollé definiciones de sitio personalizadas.",
              "Realicé actividades a nivel de sitio incluyendo corrección de errores, optimización de flujos de trabajo, mejoras de páginas y ajuste de rendimiento."
            ]
          }
        ]
      },

      "projects": {
        "title": "Proyectos Clave",
        "entries": [
          {
            "heading": "Aplicación Financiera — Naciones Unidas",
            "subtitle": "Office 365 · SPFx · Power Automate",
            "description": "Construí una destacada Aplicación Financiera en la plataforma Office 365, mejorada con personalización SPFx. Integré con éxito automatización, cálculos complejos y generación de documentos, promoviendo la colaboración con énfasis en la seguridad de datos.",
            "items": [
              "Nominado para un Premio a la Innovación en las Naciones Unidas"
            ]
          },
          {
            "heading": "Portal de Intranet Moderno",
            "subtitle": "SharePoint Online · SPFx · Diseño Responsive",
            "description": "Lideré el desarrollo de un Portal de Intranet visualmente atractivo incorporando elementos de diseño moderno para reemplazar la versión heredada. Implementé diseño responsive permitiendo acceso desde cualquier dispositivo.",
            "items": []
          },
          {
            "heading": "Migración de SharePoint a Gran Escala",
            "subtitle": "SharePoint 2013 → SharePoint Online · Sharegate",
            "description": "Lideré la migración de más de 1.000 sitios de SharePoint 2013 a SharePoint Online. Planifiqué el cronograma de migración, realicé evaluaciones de riesgos y colaboré con equipos multifuncionales.",
            "items": []
          },
          {
            "heading": "Caché Global — Intranet de Microsoft",
            "subtitle": "ASP.NET · Ingeniería de Rendimiento",
            "description": "Implementé caché global en un sitio Intranet de Microsoft, reduciendo el tiempo de carga de páginas en un 50%.",
            "items": []
          },
          {
            "heading": "Aplicación de Búsqueda Ejecutiva",
            "subtitle": "SharePoint Search · UI Personalizada",
            "description": "Implementé una aplicación de búsqueda avanzada para la alta dirección con búsqueda basada en rastreo, configurada según requisitos con una UI moderna para la presentación de resultados.",
            "items": []
          }
        ]
      }
    },

    "footer": { "text": "Pritam Pawar — Currículum 2026" }

  }

};
