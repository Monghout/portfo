// No "use client": this page is now a Server Component, so it ships zero
// page-level JavaScript. It's pure HTML + CSS after build.
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Calendar,
  Award,
  Code,
  Palette,
  Database,
  Zap,
  Star,
  Users,
  BookOpen,
  Trophy,
  Target,
  Briefcase,
  Send 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DesktopNav } from "@/home/nav/desktop";
import { MobileNav } from "@/home/nav/mobile";

/* ---------- Static data lives outside the component ---------- */
/* (not re-created on every render) */

const skills: { name: string; level: number; icon: LucideIcon }[] = [

  { name: "UI/UX Design", level: 85, icon: Palette },

 
  { name: "Adobe Creative Suite", level: 88, icon: Palette },
];
const phones = [
  { display: "+855 70 285 245", number: "+85570285245" },
  { display: "+855 17 387 345", number: "+85517387345" },
];
const projects = [
  {
    title: "Sombot",
    description:
      "QR-code based event ticketing platform with real-time analytics and payment integration",
    tech: ["Next.js", "MongoDB", "Stripe Payment APIs", "QR Codes"],
    type: "Team Project",
    status: "Live",
  },
  {
    title: "CamboKet",
    description:
      "Live-streaming eCommerce platform with real-time chat and payment processing",
    tech: [
      "Next.js",
      "Stripe Payment APIs",
      "Stream Chat APIs",
      "Clerk Auth",
      "Mux APIs",
    ],
    type: "Solo Project",
    status: "Live",
  },
];

const achievements: { title: string; icon: LucideIcon; year: string }[] = [
  { title: "50% University Scholarship", icon: Trophy, year: "2021" },
  { title: "Cybersecurity Certification", icon: Award, year: "2024" },
  { title: "Software Development Lifecycle", icon: BookOpen, year: "2024" },
];

/* ---------- Small shared pieces (removes repeated markup) ---------- */

// Solid background instead of backdrop-blur-xl + shadow-2xl.
// Blur and big shadows are the most expensive things to paint on weak GPUs.
// `content-visibility:auto` lets the browser skip rendering off-screen cards
// until the user scrolls near them.
const CARD =
  "bg-card border border-border/50 shadow-sm [content-visibility:auto] [contain-intrinsic-size:auto_300px]";

function IconBox({
  icon: Icon,
  size = "sm",
}: {
  icon: LucideIcon;
  size?: "sm" | "lg";
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-primary/10",
        size === "sm" ? "w-8 h-8 rounded-lg" : "w-12 h-12 rounded-full"
      )}
    >
      <Icon
        className={cn("text-primary", size === "sm" ? "w-4 h-4" : "w-5 h-5")}
      />
    </div>
  );
}

function SectionTitle({
  icon,
  children,
}: {
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
      <IconBox icon={icon} />
      {children}
    </h2>
  );
}

// Plain div instead of the Radix <Progress>, which pulls in client JS.
// Same look, still accessible.
function SkillBar({ value, label }: { value: number; label: string }) {
  return (
    <div
      role="progressbar"
      aria-label={label}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className="h-2 w-full overflow-hidden rounded-full bg-primary/20"
    >
      <div
        className="h-full rounded-full bg-primary"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

/* ---------- Page ---------- */

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="flex-1 overflow-auto">
        <DesktopNav />
        <MobileNav />
      </div>

      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5" />
        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="text-center space-y-6">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/60 p-1">
              {/* next/image: resized, served as WebP/AVIF, and `priority`
                  preloads it since it's the first thing on screen.
                  Width/height reserve space so nothing jumps while loading. */}
              <Image
                src="/pf.jpg"
                alt="Hak Monghout"
                width={120}
                height={120}
                priority
                sizes="120px"
                className="w-full h-full rounded-full bg-background object-cover object-top"
              />
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Hak Monghout
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Software Engineer & Multi-Media Designer with a passion for creating digital experiences.
                <p className="font-bold" color="text-primary">
                 Poster Designer / Video Editor</p>
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <Badge className="px-4 py-2 text-sm">
                  <Zap className="w-4 h-4 mr-2" />
                   Multi-Media Designer
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  <Palette className="w-4 h-4 mr-2" />
                 Software Engineer/UI-UX
                </Badge>
             
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* Contact Information */}
        <Card className={CARD}>
          <CardContent className="p-8">
            <SectionTitle icon={Phone}>Contact Information</SectionTitle>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
                <IconBox icon={Phone} size="lg" />
                <div>
                {phones.map((p) => (
  <p
    key={p.number}
    className="text-sm text-muted-foreground flex items-center gap-2"
  >
    <a href={`tel:${p.number}`}>{p.display}</a>
    <a
      href={`https://t.me/${p.number}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Message ${p.display} on Telegram`}
      className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary hover:bg-primary/20 transition-colors"
    >
      <Send className="w-3 h-3" />

    </a>
  </p>
))}
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
                <IconBox icon={Mail} size="lg" />
                <div className="min-w-0">
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground break-all">
                    <a >
                      hakmonghout2@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
                <IconBox icon={MapPin} size="lg" />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">
                    Phnom Penh, Cambodia, Sangkat Chbar Ampov, Khan Chbar Ampov
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card className={CARD}>
          <CardContent className="p-8">
            <SectionTitle icon={Target}>Skills & Expertise</SectionTitle>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-5 h-5 text-primary" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <SkillBar value={skill.level} label={skill.name} />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card className={CARD}>
          <CardContent className="p-8">
            <SectionTitle icon={Briefcase}>Featured Projects</SectionTitle>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Card
                  key={project.title}
                  className="group border-muted/50 transition-shadow motion-reduce:transition-none hover:shadow-md"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold transition-colors motion-reduce:transition-none group-hover:text-primary">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {project.type}
                          </Badge>
                    
                        </div>
                      </div>
                      {/* Real link instead of a JS onClick + window.open.
                          Works without JS, is keyboard accessible, and is
                          always visible (hover-only icons never show on
                          touch devices). */}
                    
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Education & Achievements */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className={CARD}>
            <CardContent className="p-8">
              <SectionTitle icon={BookOpen}>Education</SectionTitle>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-muted/30">
                  <h3 className="font-semibold">
                    BSc (Hons) Software Engineering with Multimedia
                  </h3>
                  <p className="text-primary font-medium">
                    Limkokwing University of Creative Technology
                  </p>
                  <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      April 2025
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      GPA 3.5
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-muted/30">
                  <h3 className="font-semibold">Languages</h3>
                  <div className="mt-2 space-y-2">
                    <div className="flex justify-between items-center">
                      <span>Khmer</span>
                      <Badge>Native</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>English</span>
                      <Badge>Fluent</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className={CARD}>
            <CardContent className="p-8">
              <SectionTitle icon={Trophy}>Achievements</SectionTitle>
              <div className="space-y-4">
                {achievements.map((a) => (
                  <div
                    key={a.title}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/30"
                  >
                    <IconBox icon={a.icon} size="lg" />
                    <div className="flex-1">
                      <h3 className="font-medium">{a.title}</h3>
                      <p className="text-sm text-muted-foreground">{a.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
    
      </main>
    </div>
  );
}
