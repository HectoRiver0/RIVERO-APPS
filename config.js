/*
  RIVERO APP'S — CONFIGURACIÓN DE ENLACES

  Sustituye las URL de ejemplo por los enlaces reales.
  Puedes usar:
  - Google Drive
  - Google Docs
  - Google Forms
  - Google Sites
  - Microsoft Teams
  - OneDrive
  - cualquier otra URL pública o institucional.

  Ejemplo:
  url: "https://drive.google.com/..."
*/

const APP_CONFIG = {
  quickActions: [
    { label: "LIBERACIONES", icon: "📋", url: "https://sites.google.com/view/accesosapps/p%C3%A1gina-principal" }
  ],

  categories: [
    {
      id: "analisis",
      title: "301 · ANÁLISIS",
      icon: "📐",
      links: [
        { label: "Actividades", icon: "📝", url: "https://forms.gle/7u6AmfaGLjgzqVho8" },
        { label: "Material", icon: "📚", url: "#" },
        { label: "Prácticas", icon: "⚙️", url: "#" },
        { label: "Evaluaciones", icon: "📊", url: "#" }
      ]
    },
    {
      id: "torno",
      title: "302 · TORNO",
      icon: "🔧",
      links: [
        { label: "Actividades", icon: "📝", url: "https://forms.gle/WMmb36Lo3ReB5xhR9" },
        { label: "Material", icon: "📚", url: "#" },
        { label: "Prácticas", icon: "⚙️", url: "#" },
        { label: "Evaluaciones", icon: "📊", url: "#" }
      ]
    },
    {
      id: "electro",
      title: "501 · ELECTRO",
      icon: "⚡",
      links: [
        { label: "Actividades", icon: "📝", url: "https://forms.gle/iairm6zDkKugpkFRA" },
        { label: "Material", icon: "📚", url: "#" },
        { label: "Prácticas", icon: "⚡", url: "#" },
        { label: "Evaluaciones", icon: "📊", url: "#" }
      ]
    }
  ]
};