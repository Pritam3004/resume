/*  ============================================================
 *  resumeData.js — Edit your resume content here!
 *
 *  Structure:
 *    header        → Name & occupation shown at the top
 *    sidebar       → Greeting, contact details, social links
 *    tabs          → Each tab section of the resume:
 *      profile     → Professional summary & core strengths
 *      education   → Degrees & certifications
 *      skills      → Technical & soft skill categories
 *      work        → Work experience entries
 *      projects    → Key project highlights
 *      awards      → Certifications & languages
 *    footer        → Footer text
 *  ============================================================ */

var resumeData = {

  "header": {
    "name": {
      "first": "Pritam",
      "last": "Pawar"
    },
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
      "address": {
        "street": "Valencia",
        "city": "Spain",
        "zip": ""
      }
    },
    "social": [
      { "platform": "linkedin", "url": "https://linkedin.com/in/pritam304/", "icon": "entypo-linkedin-circled" }
    ]
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

  "footer": {
    "text": "Pritam Pawar — Resume 2026"
  }

};
