import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import DotField from './components/DotField';
import StaggeredMenu from './components/StaggeredMenu';
import SplitText from './components/SplitText';
import BorderGlow from './components/BorderGlow';
import ScrollFloat from './components/ScrollFloat';
import ProjectAccordion from './components/ProjectAccordion';
import SkillSection from './components/SkillSection';
import TestimonialSection from './components/TestimonialSection';
import LoadingScreen from './components/LoadingScreen';
import { AnimatePresence } from 'framer-motion';
import { Button } from './components/ui/button';
import { SmoothCursor } from './components/ui/smooth-cursor';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import {
  Cube,
  GlobeHemisphereWest,
  Database,
  Robot,
  GithubLogo,
  LinkedinLogo,
  Code,
  GitBranch,
  Sparkle,
  Hexagon,
  CodeBlock,
  Cloud,
  HardDrives,
  Folder,
  ShieldCheck,
  EnvelopeSimple,
  Phone,
  WhatsappLogo
} from "@phosphor-icons/react";

if (typeof window !== 'undefined' && !window.__lenis) {
  window.__lenis = new Lenis({ anchors: true });
}

gsap.registerPlugin(ScrollTrigger);

const menuItems = [
  { label: 'Skills', ariaLabel: 'View skills section', link: '#skills' },
  { label: 'Projects', ariaLabel: 'View projects section', link: '#projects' },
  { label: 'Experience', ariaLabel: 'View experience section', link: '#experience' },
  { label: 'Achievements', ariaLabel: 'View achievements and insights section', link: '#reviews' },
  { label: 'Contact', ariaLabel: 'Contact section', link: '#contact' }
];

const socialItems = [
  { label: 'GitHub', link: 'https://github.com/MuhammadMinhaj229' },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/muhammadminhaj229/' },
  { label: 'WhatsApp', link: 'https://wa.me/919908597337' },
  { label: 'Call', link: 'tel:+919908597337' }
];

const socialIconMap = {
  GitHub: GithubLogo,
  LinkedIn: LinkedinLogo,
  WhatsApp: WhatsappLogo,
  Call: Phone
};

const newSkillsData = [
  {
    category: "DATA & AUTOMATION",
    items: [
      { name: "Python", icon: Hexagon, color: "#3776AB" },
      { name: "Data Cleaning", icon: Database, color: "#22d3ee" },
      { name: "Pandas", icon: HardDrives, color: "#150458" },
      { name: "FastAPI", icon: Cloud, color: "#009688" },
      { name: "Streamlit", icon: Sparkle, color: "#FF4B4B" },
      { name: "Automation Flows", icon: GitBranch, color: "#a855f7" }
    ]
  },
  {
    category: "WEB & FULL-STACK",
    items: [
      { name: "Next.js", icon: CodeBlock, color: "#ffffff" },
      { name: "React", icon: GlobeHemisphereWest, color: "#61DAFB" },
      { name: "Node.js", icon: Hexagon, color: "#43853d" },
      { name: "Tailwind CSS", icon: Sparkle, color: "#38bdf8" },
      { name: "REST APIs", icon: Cloud, color: "#007ACC" },
      { name: "TypeScript", icon: Code, color: "#3178C6" }
    ]
  },
  {
    category: "DATABASE & CLOUD",
    items: [
      { name: "MongoDB", icon: Folder, color: "#47A248" },
      { name: "PostgreSQL", icon: Database, color: "#336791" },
      { name: "SQL", icon: Database, color: "#F29111" },
      { name: "Vercel", icon: Cloud, color: "#ffffff" },
      { name: "Cloudinary", icon: Cloud, color: "#3448C5" }
    ]
  },
  {
    category: "AI & QUALITY",
    items: [
      { name: "AI Feature QA", icon: ShieldCheck, color: "#a855f7" },
      { name: "Sanad AI Testing", icon: Robot, color: "#d63aff" },
      { name: "Scikit-Learn", icon: Sparkle, color: "#F7931E" },
      { name: "Git & GitHub", icon: GithubLogo, color: "#ffffff" }
    ]
  }
];

const projectItems = [
  {
    label: 'Web Development & Cloud',
    title: 'DOHAD INDIA PLATFORM',
    description:
      'Maintained the official DOHaD India web platform at PHFI, handling continuous content deployments, GitHub workflows, Vercel cloud hosting, MongoDB database operations, and Cloudinary media optimization for international medical research dissemination.',
    stack: ['Next.js', 'Vercel', 'MongoDB', 'Cloudinary'],
    link: 'https://github.com/MuhammadMinhaj229',
    demo: 'https://www.linkedin.com/in/muhammadminhaj229/',
    color: '#120F17',
    icon: GlobeHemisphereWest,
    media: { type: 'image', url: '/photos/dohad.jpg' }
  },
  {
    label: 'Python Automation & Tools',
    title: 'DATA AUTOMATION STUDIO',
    description:
      'Engineered an automated Python data validation studio at PHFI to streamline research datasets, eliminating manual spreadsheets through automated QA filters, anomaly detection, statistical cleaning, and instant reporting.',
    stack: ['Python', 'Pandas', 'Data QA', 'Streamlit'],
    link: 'https://github.com/MuhammadMinhaj229',
    demo: 'https://www.linkedin.com/in/muhammadminhaj229/',
    color: '#120F17',
    icon: Database,
    media: { type: 'image', url: '/photos/automation_studio.jpg' }
  },
  {
    label: 'Environmental Data & ML',
    title: 'AIR QUALITY AI ENGINE',
    description:
      'Real-time environmental monitoring and prediction dashboard tracking 15 major Indian cities. Ingests live OpenAQ REST APIs, uses machine learning regressors to forecast AQI indices and generate proactive public health alerts.',
    stack: ['FastAPI', 'Machine Learning', 'OpenAQ API', 'Vercel'],
    link: 'https://github.com/MuhammadMinhaj229/indian-air-quality-prediction',
    demo: 'https://indian-air-quality-prediction.vercel.app',
    color: '#120F17',
    icon: Cloud,
    media: { type: 'image', url: '/photos/air_quality.jpg' }
  },
  {
    label: 'Computer Vision & Deep Learning',
    title: 'TERRAIN CLASSIFIER',
    description:
      'Edge-optimized computer vision classifier utilizing MobileNetV2 transfer learning to categorize terrain topologies (Desert, Forest, Mountain, Plains) in real time with high accuracy, designed for lightweight deployment on rovers and aerial drones.',
    stack: ['MobileNetV2', 'TensorFlow', 'Streamlit', 'Python'],
    link: 'https://github.com/MuhammadMinhaj229/vision-based-terrain-classification',
    demo: 'https://vision-based-terrain-classification-bfzfgwhcu8npbf6lyipfyh.streamlit.app/',
    color: '#120F17',
    icon: Cube,
    media: { type: 'image', url: '/photos/terrain.jpg' }
  },
  {
    label: 'Predictive Modeling & Analytics',
    title: 'CUSTOMER INTELLIGENCE',
    description:
      'Machine learning customer analytics application combining RFM clustering and predictive churn modeling to isolate high-value cohorts and deliver actionable retention strategies for modern businesses.',
    stack: ['Scikit-Learn', 'K-Means', 'Streamlit', 'Python'],
    link: 'https://github.com/MuhammadMinhaj229/customer-segmentation',
    demo: 'https://customer-segmentation-efb7gqwwg2sqdzpymxxbz5.streamlit.app/',
    color: '#120F17',
    icon: Robot,
    media: { type: 'image', url: '/photos/customer_segmentation.jpg' }
  },
  {
    label: 'Natural Language Processing',
    title: 'NLP REVIEW INTELLIGENCE',
    description:
      'Sentiment and keyword analysis tool for high-volume customer reviews. Automatically detects common product pain points, classifies user intent, and extracts actionable product feedback for engineering teams.',
    stack: ['NLP', 'DistilBERT', 'Streamlit', 'Python'],
    link: 'https://github.com/MuhammadMinhaj229/nlp-review-intelligence',
    demo: 'https://nlp-review-intelligence-l4vsrtkyi828h8s2dyjxhr.streamlit.app/',
    color: '#120F17',
    icon: CodeBlock,
    media: { type: 'image', url: '/photos/nlp_review.jpg' }
  }
];

const MilestonesFlowItems = [
  {
    link: 'https://www.linkedin.com/in/muhammadminhaj229/',
    text: 'SANAD AI',
    marqueeText: 'EJADAH AI LABS · SANAD AI FEATURE TESTER · 10/2026-PRESENT',
  },
  {
    link: 'https://www.linkedin.com/in/muhammadminhaj229/',
    text: 'PHFI',
    marqueeText: 'PUBLIC HEALTH FOUNDATION OF INDIA · WEB DEV & DATA AUTOMATION · 09/2026-PRESENT',
  },
  {
    link: 'https://alif-growth.netlify.app/',
    text: 'ALIF GROWTH',
    marqueeText: 'ALIF GROWTH MEDIA · FOUNDER & AUTOMATION LEAD · 03/2026-PRESENT',
  },
  {
    link: 'https://vaagdevi.edu.in/',
    text: 'B.TECH CSE',
    marqueeText: 'VAAGDEVI COLLEGE (JNTUH) · B.TECH CSE (DATA SCIENCE) · 2022-2026',
  }
];

const contactEmail = 'minhajmuhammad229@gmail.com';
const contactPhone = '+91 9908597337';

function App() {
  const appRef = useRef(null);
  const dotFieldRef = useRef(null);
  const lanyardRef = useRef(null);
  const heroRef = useRef(null);
  const bioRef = useRef(null);
  const ctaRef = useRef(null);
  const skillsSectionRef = useRef(null);
  const skillsMenuRef = useRef(null);
  const skillsDividerRef = useRef(null);
  const winsSectionRef = useRef(null);
  const projectsGridSectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });

  useGSAP(
    () => {
      const lenis = window.__lenis;

      lenis.on('scroll', ScrollTrigger.update);

      const lenisRaf = (time) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(lenisRaf);
      gsap.ticker.lagSmoothing(0);

      gsap.set([bioRef.current, ctaRef.current], { autoAlpha: 0, y: 24 });

      const introTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      introTl
        .from(dotFieldRef.current, { autoAlpha: 0, duration: 1.1 })
        .from(lanyardRef.current, { autoAlpha: 0, x: 40, duration: 0.9 }, 0.15)
        .from(heroRef.current, { autoAlpha: 0, y: 20, duration: 0.8 }, 0.25)
        .to(bioRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.45)
        .to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.6 }, 0.55);

      if (lanyardRef.current) {
        gsap.to(lanyardRef.current, {
          y: 8,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }

      gsap.set(skillsMenuRef.current, { autoAlpha: 0, y: 40 });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: skillsSectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        })
        .to(skillsMenuRef.current, { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power3.out' });

      if (skillsDividerRef.current) {
        gsap.fromTo(
          skillsDividerRef.current,
          { rotate: 0 },
          {
            rotate: 360,
            ease: 'none',
            scrollTrigger: {
              trigger: skillsSectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2
            }
          }
        );
      }

      return () => {
        gsap.ticker.remove(lenisRaf);
        lenis.off('scroll', ScrollTrigger.update);
      };
    },
    { scope: appRef }
  );

  const handleAnimationComplete = () => {
    // SplitText letter animation complete
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ state: 'submitting', message: '' });

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${contactEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          name: formData.get('name'),
          phone: formData.get('phone'),
          email: formData.get('email'),
          message: formData.get('message'),
          _subject: `New Portfolio Inquiry from ${formData.get('name')}`
        })
      });

      if (response.ok) {
        setFormStatus({
          state: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        form.reset();
      } else {
        setFormStatus({
          state: 'error',
          message: 'Failed to send message. Please email me directly.'
        });
      }
    } catch {
      setFormStatus({
        state: 'error',
        message: 'Network error. Please email me directly.'
      });
    }
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const updateMobileState = () => setIsMobile(mediaQuery.matches);
    updateMobileState();
    mediaQuery.addEventListener('change', updateMobileState);
    return () => mediaQuery.removeEventListener('change', updateMobileState);
  }, []);

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden relative bg-white">
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      {!isLoading && <SmoothCursor />}
      
      {/* Hero Section Container */}
      <div 
        ref={appRef} 
        id="me" 
        className={`w-full min-h-[100svh] bg-white overflow-hidden relative max-w-[100vw] flex flex-col justify-center ${isLoading ? 'h-screen overflow-hidden' : ''}`}
      >
        <div ref={dotFieldRef} className="absolute inset-0 z-0 pointer-events-none">
          <DotField
            dotRadius={1.5}
            dotSpacing={14}
            bulgeStrength={67}
            glowRadius={160}
            sparkle
            waveAmplitude={0}
            cursorRadius={0}
            cursorForce={0.1}
            bulgeOnly
            gradientFrom="#A855F7"
            gradientTo="#5227FF"
            glowColor="transparent"
            faceImageSrc="/profile.png"
          />
        </div>

        {/* Floating Menu Header */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-visible">
          <StaggeredMenu
            position="right"
            items={menuItems}
            socialItems={socialItems}
            displaySocials
            displayItemNumbering={false}
            menuButtonColor="#000000"
            changeMenuColorOnOpen={false}
            colors={['#B497CF', '#5227FF']}
            accentColor="#5227FF"
          />
        </div>

        {/* Hero Content Grid */}
        <div className="relative z-10 min-h-[100svh] text-black pointer-events-none flex items-center">
          <div className="mx-auto grid min-h-[100svh] w-full max-w-[1600px] grid-cols-1 lg:grid-cols-2 items-center">
            <div
              ref={heroRef}
              className="w-full min-h-[100svh] px-4 sm:px-8 md:px-10 flex flex-col justify-center items-center lg:items-start pointer-events-auto relative z-20 pt-16 pb-12 sm:pt-20 sm:pb-16"
            >
              {/* Mobile Profile Avatar */}
              <div className="lg:hidden flex items-center justify-center mb-5 sm:mb-6">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-[3px] border-white shadow-[0_8px_24px_rgba(0,0,0,0.15)] ring-2 ring-purple-600/30">
                  <img
                    src="/profile.png"
                    alt="Mohammed Minhaj profile"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-[clamp(1.85rem,7.8vw,4.5rem)] font-extrabold tracking-tight leading-[1.05] text-center lg:text-left max-w-5xl mx-auto lg:mx-0 text-black pb-1 sm:pb-2">
                <SplitText
                  text="MOHAMMED MINHAJ"
                  className=""
                  delay={20}
                  duration={1.0}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 30 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="inherit"
                  onLetterAnimationComplete={handleAnimationComplete}
                  showCallback
                />
              </h1>

              {/* Bio & Intro */}
              <div
                ref={bioRef}
                className="mt-3 sm:mt-4 ml-0 sm:ml-1 md:ml-2 pr-0 sm:pr-4 md:pr-16 text-[clamp(0.95rem,3.6vw,1.4rem)] text-black/75 max-w-3xl mx-auto lg:mx-0 leading-relaxed tracking-tight text-center lg:text-left"
              >
                <p className="font-semibold">
                  Data & Business Automation Analyst focused on <span style={{ color: '#5227FF' }}>Python</span>, <span style={{ color: '#5227FF' }}>Next.js</span>, and <span style={{ color: '#5227FF' }}>AI Automation</span>, building automated research workflows, intelligent tools, and scalable web solutions.
                </p>

                {/* CTAs */}
                <div ref={ctaRef} className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
                  <div data-cta-btn className="w-full sm:w-auto">
                    <BorderGlow
                      className="!p-0 !rounded-full w-full sm:w-auto"
                      borderRadius={999}
                      backgroundColor="#ffffff"
                      colors={['#22d3ee', '#a855f7', '#f472b6']}
                      glowColor="265 85 70"
                      glowRadius={24}
                      glowIntensity={0.9}
                      fillOpacity={0.45}
                    >
                      <a
                        href="/resume.pdf"
                        download="Mohammed_Minhaj_Mahmood_Resume.pdf"
                        className="pointer-events-auto block w-full sm:w-auto"
                      >
                        <Button
                          size="lg"
                          className="w-full sm:w-auto text-sm sm:text-base px-7 h-12 rounded-full bg-black text-white border border-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/60 shadow-md font-bold"
                        >
                          Download Resume
                        </Button>
                      </a>
                    </BorderGlow>
                  </div>

                  <div className="pointer-events-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 pt-1 sm:pt-0">
                    {socialItems.map(item => {
                      const Icon = socialIconMap[item.label] || Code;
                      return (
                        <BorderGlow
                          key={item.label}
                          className="!p-0 !rounded-full w-11 h-11 sm:w-12 sm:h-12"
                          borderRadius={999}
                          backgroundColor="#ffffff"
                          colors={['#22d3ee', '#a855f7', '#f472b6']}
                          glowColor="265 85 70"
                          glowRadius={16}
                          glowIntensity={0.85}
                          fillOpacity={0.45}
                        >
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={item.label}
                            className="inline-flex h-full w-full items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm"
                          >
                            <Icon size={19} weight="bold" />
                          </a>
                        </BorderGlow>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Profile Tile (Desktop Only) */}
            <div ref={lanyardRef} className="pointer-events-auto relative hidden min-h-[100svh] items-center justify-center pl-10 md:pl-20 pt-10 lg:flex">
              <div className="relative w-full max-w-[420px] aspect-[3/4] overflow-hidden rounded-[36px] border-[6px] border-white p-[8px] shadow-[0_0_0_2px_rgba(0,0,0,0.2),0_26px_56px_rgba(0,0,0,0.22)] bg-neutral-900">
                <img
                  src="/profile.png"
                  alt="Mohammed Minhaj profile"
                  className="block w-full h-full rounded-[30px] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section ref={skillsSectionRef} id="skills" className="relative z-30 min-h-[28svh] sm:min-h-[34svh] md:h-[56svh] bg-[#120F17] text-white flex items-center overflow-hidden">
        <div ref={skillsMenuRef} className="w-full flex items-center justify-start px-4 sm:px-6 md:px-10 py-6 sm:py-8">
          <div className="flex w-full items-center justify-between gap-4">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="top bottom"
              scrollEnd="bottom 50%"
              stagger={0.03}
              containerClassName="m-0 overflow-hidden"
              textClassName="text-left text-white uppercase font-extrabold tracking-tight text-[clamp(2.1rem,9vw,4.5rem)] sm:text-[clamp(3.5rem,13vw,7.5rem)] md:text-[clamp(4.8rem,15vw,13rem)] leading-none whitespace-nowrap"
            >
              Skills
            </ScrollFloat>
            <img
              ref={skillsDividerRef}
              src="/icons/AbstractShape.png"
              alt="decorative shape"
              className="pointer-events-none w-14 h-14 sm:w-20 sm:h-20 md:w-36 md:h-36 lg:w-48 lg:h-48 object-contain shrink-0"
            />
          </div>
        </div>
      </section>

      <section className="relative z-30 min-h-[35svh] md:min-h-screen bg-[#120F17] text-white py-8 sm:py-12 md:py-20 overflow-hidden">
        <SkillSection skillsData={newSkillsData} />
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-30 min-h-[40svh] md:min-h-[70svh] bg-white text-black pt-16 sm:pt-24 md:pt-36 overflow-hidden">
        <div className="w-full flex items-center justify-start px-4 sm:px-6 md:px-10 py-8 sm:py-12 md:py-16">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="top bottom"
            scrollEnd="bottom 50%"
            stagger={0.03}
            containerClassName="m-0 overflow-hidden"
            textClassName="text-left text-black uppercase font-extrabold tracking-tight text-[clamp(2.1rem,9vw,4.5rem)] sm:text-[clamp(3.5rem,13vw,7.5rem)] md:text-[clamp(4.8rem,15vw,13rem)] leading-none whitespace-nowrap"
          >
            Projects
          </ScrollFloat>
        </div>
      </section>

      <section ref={projectsGridSectionRef} className="relative z-30 w-full bg-white text-black pointer-events-auto pt-6 sm:pt-12 pb-12 sm:pb-24 overflow-hidden">
        <ProjectAccordion items={projectItems} />
      </section>

      {/* Experience & Milestones Section */}
      <section ref={winsSectionRef} id="experience" className="relative z-30 min-h-[28svh] sm:min-h-[35svh] md:min-h-[80svh] bg-[#120F17] text-white flex items-center overflow-hidden">
        <div className="w-full flex items-center justify-start px-4 sm:px-6 md:px-10 py-6 sm:py-8">
          <div className="flex w-full items-center justify-between">
            <ScrollFloat
              animationDuration={1}
              ease="back.inOut(2)"
              scrollStart="top bottom"
              scrollEnd="bottom 50%"
              stagger={0.03}
              containerClassName="m-0 overflow-hidden"
              textClassName="text-left text-white uppercase font-extrabold tracking-tight text-[clamp(1.9rem,8vw,4rem)] sm:text-[clamp(3rem,12vw,6.8rem)] md:text-[clamp(4.2rem,14vw,11rem)] leading-none whitespace-nowrap"
            >
              Experience
            </ScrollFloat>
          </div>
        </div>
      </section>

      <section className="relative z-30 min-h-[35svh] bg-[#120F17] text-white pb-16 sm:pb-24 md:pb-32 w-full overflow-hidden">
        <div className="flex flex-col px-4 sm:px-6 md:px-10 w-full">
          {MilestonesFlowItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className={`event-item pt-6 pb-5 sm:pt-10 sm:pb-7 md:pt-14 md:pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4 md:gap-6 group hover:bg-white/[0.04] transition-colors ${idx !== 0 ? 'border-t border-white/10' : ''}`}
            >
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="text-[clamp(1.35rem,5.5vw,2.4rem)] md:text-[3.8rem] font-extrabold uppercase tracking-tight text-gray-200 group-hover:text-white transition-colors select-none leading-tight break-words">
                  {item.text}
                </h3>
                <p className="text-[11px] sm:text-xs md:text-sm text-gray-400 font-mono tracking-wide leading-relaxed break-words">
                  {item.marqueeText}
                </p>
              </div>
              <div className="self-start sm:self-auto px-3.5 py-1 sm:px-4 sm:py-2 rounded-full border border-white/20 text-xs sm:text-sm font-semibold text-gray-300 group-hover:border-white group-hover:text-white transition-all shrink-0">
                View ↗
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="relative z-40 min-h-[25svh] sm:min-h-[30svh] md:min-h-[75svh] bg-white text-black flex items-center overflow-hidden">
        <div className="w-full flex items-center justify-start px-4 sm:px-6 md:px-10 py-6 sm:py-8">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="top bottom"
            scrollEnd="bottom 50%"
            stagger={0.03}
            containerClassName="m-0 overflow-hidden"
            textClassName="text-left text-black uppercase font-extrabold tracking-tight text-[clamp(2.1rem,9vw,4.5rem)] sm:text-[clamp(3.5rem,13vw,7.5rem)] md:text-[clamp(4.8rem,15vw,13rem)] leading-none whitespace-nowrap"
          >
            Achievements
          </ScrollFloat>
        </div>
      </section>

      <TestimonialSection />

      {/* Contact Section */}
      <section id="contact" className="relative z-30 min-h-[100svh] overflow-hidden bg-[#120F17] text-white flex items-center py-10 sm:py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1400px] px-3 sm:px-6 md:px-10 relative">
          <div className="bg-[#0B0C10] text-white rounded-2xl md:rounded-[2rem] shadow-[0_24px_80px_rgba(0,0,0,0.5)] px-4 py-8 sm:p-6 lg:p-8 border border-white/5 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6">
              
              {/* Left Side: Info */}
              <div className="p-3 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-6 sm:gap-8 lg:gap-12 justify-center">
                <div>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-white text-black text-xs sm:text-sm font-semibold mb-4 sm:mb-6 shadow-sm">
                    Get in touch
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-[3.5rem] font-bold tracking-tight leading-[1.1] mb-4 sm:mb-6">
                    Let's build something<br className="hidden sm:inline" /> great together.
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
                    Open to full-time roles, data engineering, and automation collaborations. Drop a message or reach out directly on WhatsApp or call!
                  </p>
                </div>
                
                <div className="flex flex-col gap-4 sm:gap-6 text-gray-300">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <GlobeHemisphereWest size={20} weight="regular" className="text-white" />
                    </div>
                    <div>
                      <p className="text-white text-sm sm:text-base">Hyderabad, Telangana, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <EnvelopeSimple size={20} weight="regular" className="text-white" />
                    </div>
                    <div className="min-w-0">
                      <a href={`mailto:${contactEmail}`} className="text-sm sm:text-base text-white hover:underline transition-colors break-all">{contactEmail}</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Phone size={20} weight="regular" className="text-white" />
                    </div>
                    <div>
                      <a href={`tel:${contactPhone.replace(/\s+/g, '')}`} className="text-sm sm:text-base text-white hover:underline transition-colors">{contactPhone}</a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                      <WhatsappLogo size={20} weight="regular" className="text-[#25D366]" />
                    </div>
                    <div>
                      <a href="https://wa.me/919908597337" target="_blank" rel="noreferrer" className="text-sm sm:text-base text-[#25D366] hover:underline transition-colors font-medium">Chat on WhatsApp</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="bg-white text-black p-5 sm:p-7 md:p-10 rounded-2xl md:rounded-[1.5rem] shadow-xl flex flex-col justify-center self-center w-full">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-5 sm:mb-8">Send a message</h3>
                
                <form onSubmit={handleContactSubmit} className="space-y-3.5 sm:space-y-4">
                  <div>
                    <Input
                      id="contact-name"
                      name="name"
                      placeholder="Your Name *"
                      required
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 sm:py-5 text-base focus-visible:ring-1 focus-visible:ring-black focus-visible:border-black transition-all text-black placeholder:text-gray-500 shadow-sm"
                    />
                  </div>
                  
                  <div>
                    <Input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone number"
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 sm:py-5 text-base focus-visible:ring-1 focus-visible:ring-black focus-visible:border-black transition-all text-black placeholder:text-gray-500 shadow-sm"
                    />
                  </div>
                  
                  <div>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="Email address *"
                      required
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 sm:py-5 text-base focus-visible:ring-1 focus-visible:ring-black focus-visible:border-black transition-all text-black placeholder:text-gray-500 shadow-sm"
                    />
                  </div>
                  
                  <div>
                    <Textarea
                      id="contact-message"
                      name="message"
                      placeholder="Message *"
                      rows={4}
                      required
                      className="resize-none w-full bg-white border border-gray-200 rounded-xl px-4 py-3 sm:py-5 text-base focus-visible:ring-1 focus-visible:ring-black focus-visible:border-black transition-all text-black placeholder:text-gray-500 shadow-sm"
                    />
                  </div>
                  
                  <div className="pt-2 flex flex-col items-start">
                    <Button
                      type="submit"
                      disabled={formStatus.state === 'submitting'}
                      className="w-full sm:w-auto px-8 rounded-xl bg-[#0B0C10] text-white font-bold hover:bg-black transition-colors py-5 text-base shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {formStatus.state === 'submitting' ? 'Sending...' : 'Send Message'}
                    </Button>
                    {formStatus.message && (
                      <p className={`mt-3 text-sm font-medium ${formStatus.state === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                        {formStatus.message}
                      </p>
                    )}
                  </div>
                </form>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
