const config = {
  title: "Aissa | Cybersecurity & AI Developer",
  description: {
    long: "Explore the portfolio of Aissa, a young cybersecurity enthusiast and AI developer. Specializing in ethical hacking, penetration testing, OSINT, automation with AI, and building innovative security tools. Discover my pentesting labs, AI-powered scripts, and cybersecurity projects.",
    short:
      "Portfolio of Aissa, young cybersecurity & AI developer. Pentesting, ethical hacking, AI automation, and security tools.",
  },
  keywords: [
    "Aissa",
    "portfolio",
    "cybersecurity",
    "ethical hacking",
    "penetration testing",
    "AI developer",
    "artificial intelligence",
    "pentesting",
    "OSINT",
    "Kali Linux",
    "Metasploit",
    "automation",
    "security tools",
    "Next.js",
    "Python",
    "AI automation",
    "LLMs",
  ],
  author: "Aissa",
  email: "aissa@example.com",
  site: "https://aissa-portfolio.vercel.app",

  // for github stars button
  githubUsername: "aissa",
  githubRepo: "portfolio-3d",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/aissa",
    linkedin: "https://www.linkedin.com/in/aissa/",
    instagram: "https://www.instagram.com/aissa",
    facebook: "https://www.facebook.com/aissa/",
    github: "https://github.com/aissa",
  },
};
export { config };
