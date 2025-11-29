import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { SiPython, SiLinux, SiDocker, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Ver Demo
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  linux: {
    title: "Linux",
    bg: "black",
    fg: "white",
    icon: <SiLinux />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  bash: {
    title: "Bash",
    bg: "black",
    fg: "white",
    icon: <span>Bash</span>,
  },
  nmap: {
    title: "Nmap",
    bg: "black",
    fg: "white",
    icon: <span>Nmap</span>,
  },
  kali: {
    title: "Kali Linux",
    bg: "black",
    fg: "white",
    icon: <SiLinux />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  react: {
    title: "React",
    bg: "black",
    fg: "white",
    icon: <SiReact />,
  },
  nextjs: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <SiNextdotjs />,
  },
  tailwind: {
    title: "Tailwind CSS",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  ai: {
    title: "AI APIs",
    bg: "black",
    fg: "white",
    icon: <span>AI</span>,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "pentest-lab",
    category: "Pentesting Lab",
    title: "Lab de Pentesting Local",
    src: "/assets/projects-screenshots/pentest-lab/1.png",
    screenshots: ["1.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.kali,
        PROJECT_SKILLS.linux,
        PROJECT_SKILLS.docker,
        PROJECT_SKILLS.nmap,
      ],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Laboratorio local de pentesting montado con VirtualBox y VMware.
            Incluye máquinas vulnerables (Metasploitable, DVWA, Vulnhub) para
            practicar técnicas de hacking ético en un entorno controlado.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Configuración</TypographyH3>
          <p className="font-mono mb-2">
            Lab compuesto por múltiples VMs ejecutándose en paralelo:
          </p>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li>Kali Linux: Máquina atacante con todas las herramientas</li>
            <li>Metasploitable 2: Sistema intencionalmente vulnerable</li>
            <li>DVWA: Aplicación web para practicar web hacking</li>
            <li>Red aislada para evitar exposición accidental</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Prácticas Realizadas</TypographyH3>
          <p className="font-mono mb-2">
            Escaneo de puertos con Nmap, explotación con Metasploit,
            inyecciones SQL, XSS, y análisis de tráfico con Wireshark.
          </p>

          <TypographyH3 className="my-4 mt-8">Aprendizajes</TypographyH3>
          <p className="font-mono mb-2">
            Configuración de redes virtuales, comprensión de vulnerabilidades
            comunes (OWASP Top 10), y práctica ética sin riesgos legales.
          </p>
        </div>
      );
    },
  },
  {
    id: "nmap-automation",
    category: "Automation Script",
    title: "Nmap Automation Script",
    src: "/assets/projects-screenshots/nmap-automation/1.png",
    screenshots: ["1.png"],
    skills: {
      frontend: [],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.bash,
        PROJECT_SKILLS.nmap,
      ],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Script automatizado en Python para realizar reconocimiento de red
            con Nmap. Genera reportes en múltiples formatos y detecta
            servicios vulnerables de forma automática.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Características</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li>Escaneo de rangos de IP configurables</li>
            <li>Detección de sistemas operativos y versiones de servicios</li>
            <li>Generación de reportes HTML, XML y TXT</li>
            <li>Modo sigiloso para evitar detección</li>
            <li>Análisis automático de CVEs conocidos</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Tecnologías</TypographyH3>
          <p className="font-mono mb-2">
            Python 3, biblioteca python-nmap, argparse para CLI, y Jinja2 para
            templates de reportes.
          </p>

          <TypographyH3 className="my-4 mt-8">Uso Práctico</TypographyH3>
          <p className="font-mono mb-2">
            Ahorra tiempo en auditorías de red al automatizar el
            reconocimiento inicial. Útil para identificar puertos abiertos y
            servicios potencialmente vulnerables.
          </p>
        </div>
      );
    },
  },
  {
    id: "ai-prompt-assistant",
    category: "AI Tool",
    title: "Prompt Assistant para Hacking Ético",
    src: "/assets/projects-screenshots/ai-prompt/1.png",
    screenshots: ["1.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.nextjs,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.ai],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Asistente basado en IA (API de OpenAI/Claude) que ayuda a generar
            comandos, explicaciones de vulnerabilidades y sugerencias de
            explotación para pentesting ético.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Funcionalidades</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li>Generación de comandos Nmap personalizados</li>
            <li>Explicaciones de CVEs y vectores de ataque</li>
            <li>Sugerencias de payloads para testing de XSS/SQLi</li>
            <li>Modo educativo con explicaciones detalladas</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Stack Tecnológico</TypographyH3>
          <p className="font-mono mb-2">
            Frontend con Next.js 14 + Tailwind CSS. Backend con Python FastAPI
            y integración con APIs de LLMs (OpenAI, Anthropic).
          </p>

          <TypographyH3 className="my-4 mt-8">Objetivo</TypographyH3>
          <p className="font-mono mb-2">
            Acelerar el aprendizaje en ciberseguridad mediante IA. No reemplaza
            el conocimiento técnico, sino que actúa como tutor interactivo.
          </p>
        </div>
      );
    },
  },
  {
    id: "wordlist-generator",
    category: "Security Tool",
    title: "Generador de Wordlists Inteligente",
    src: "/assets/projects-screenshots/wordlist/1.png",
    screenshots: ["1.png"],
    skills: {
      frontend: [],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.ai],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Herramienta que genera wordlists personalizadas para ataques de
            fuerza bruta y password cracking. Usa IA para predecir patrones de
            contraseñas basándose en información del objetivo.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Características</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li>Generación basada en datos personales (nombres, fechas)</li>
            <li>Análisis de contraseñas filtradas públicamente</li>
            <li>Algoritmos de mutación de palabras (leet speak, etc.)</li>
            <li>Predicción con ML de patrones comunes</li>
            <li>Configuración de complejidad y longitud</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Casos de Uso</TypographyH3>
          <p className="font-mono mb-2">
            Útil en auditorías de seguridad para testing de políticas de
            contraseñas. Ayuda a identificar contraseñas débiles en sistemas
            corporativos (con autorización).
          </p>

          <TypographyH3 className="my-4 mt-8">Ética</TypographyH3>
          <p className="font-mono mb-2">
            Herramienta exclusivamente para pentesting autorizado y educación.
            Incluye disclaimer y documentación sobre uso ético.
          </p>
        </div>
      );
    },
  },
  {
    id: "osint-dashboard",
    category: "OSINT Tool",
    title: "Dashboard de OSINT",
    src: "/assets/projects-screenshots/osint/1.png",
    screenshots: ["1.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.nextjs,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.ai],
    },
    live: "#",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Plataforma web que centraliza herramientas de OSINT (Open Source
            Intelligence) para recopilación de información pública. Integra
            APIs de redes sociales, buscadores y bases de datos públicas.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Módulos</TypographyH3>
          <ul className="list-disc ml-6 font-mono mb-4">
            <li>
              Búsqueda en redes sociales (Twitter, LinkedIn, Instagram)
            </li>
            <li>Análisis de metadata de imágenes (EXIF)</li>
            <li>Whois lookups y DNS enumeration</li>
            <li>Google dorking automatizado</li>
            <li>Timeline de actividad digital del objetivo</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Tecnología</TypographyH3>
          <p className="font-mono mb-2">
            Next.js para el frontend con visualizaciones interactivas. Backend
            en Python con Scrapy y Beautiful Soup para web scraping ético.
          </p>

          <TypographyH3 className="my-4 mt-8">Privacidad</TypographyH3>
          <p className="font-mono mb-2">
            Toda la información recopilada es pública y legal. No se usa para
            stalking ni invasión de privacidad. Enfocado en investigación de
            seguridad.
          </p>
        </div>
      );
    },
  },
];

export default projects;
