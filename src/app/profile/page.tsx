"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  ExternalLink,
  Download,
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
  Globe,
  QrCode,
  ShoppingBag,
} from "lucide-react";
import { DesktopNav } from "@/home/nav/desktop";
import { MobileNav } from "@/home/nav/mobile";
import { EvervaultCard } from "@/components/ui/hover";
import { CollapsedThemeToggle } from "@/components/ui/collapsed-theme-toggle";

export default function ProfilePage() {
  const skills = [
    { name: "React/Next.js", level: 95, icon: Code },
    { name: "TypeScript", level: 90, icon: Code },
    { name: "UI/UX Design", level: 85, icon: Palette },
    { name: "MongoDB", level: 80, icon: Database },
    { name: "Python", level: 75, icon: Code },
    { name: "Adobe Creative Suite", level: 88, icon: Palette },
  ];

  const projects = [
    {
      title: "Sombot",
      description:
        "QR-code based event ticketing platform with real-time analytics and payment integration",
      url: "https://sombot.vercel.app",
      tech: ["Next.js", "MongoDB", "Stripe Payment APIs", "QR Codes"],
      type: "Team Project",
      status: "Live",
    },
    {
      title: "CamboKet",
      description:
        "Live-streaming eCommerce platform with real-time chat and payment processing",
      url: "https://mj-2-camboket.vercel.app",
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

  const achievements = [
    { title: "50% University Scholarship", icon: Trophy, year: "2021" },
    { title: "Cybersecurity Certification", icon: Award, year: "2024" },
    { title: "Software Development Lifecycle", icon: BookOpen, year: "2024" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="flex-1 overflow-auto">
        <DesktopNav />
        <MobileNav />
      </div>{" "}
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {" "}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5" />
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center space-y-6">
            <div className="relative inline-block">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/60 p-1">
                <img
                  src="/pf.jpg"
                  className="w-full h-[120px] display: inline rounded-full bg-background items-center object-cover object-top text-4xl font-bold text-primary"
                ></img>
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Hak Monghout
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Software Engineer & Creative Technologist crafting digital
                experiences that bridge innovation with real-world impact
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                <Badge className="px-4 py-2 text-sm">
                  <Zap className="w-4 h-4 mr-2" />
                  Software Engineer
                </Badge>
                <Badge variant="outline" className="px-4 py-2 text-sm">
                  <Palette className="w-4 h-4 mr-2" />
                  UI/UX Designer
                </Badge>
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <Users className="w-4 h-4 mr-2" />
                  Media
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
        {/* Contact Information */}
        <Card className="bg-background/60 backdrop-blur-xl border-0 shadow-2xl">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              Contact Information
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">
                    +855 70 285 245
                  </p>
                  <p className="text-sm text-muted-foreground">
                    +855 17 387 345
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">
                    monghout.hak0514@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">
                    Phnom Penh, Cambodia
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills Section */}
        <Card className="bg-background/60 backdrop-blur-xl border-0 shadow-2xl">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="w-4 h-4 text-primary" />
              </div>
              Skills & Expertise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
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
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Projects Section */}
        <Card className="bg-background/60 backdrop-blur-xl border-0 shadow-2xl">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-4 h-4 text-primary" />
              </div>
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={project.title}
                  className="group hover:shadow-lg transition-all duration-300 border-muted/50"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {project.type}
                          </Badge>
                          <Badge variant="outline" className="text-xs">
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => window.open(project.url, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
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
          <Card className="bg-background/60 backdrop-blur-xl border-0 shadow-2xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-primary" />
                </div>
                Education
              </h2>
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

          <Card className="bg-background/60 backdrop-blur-xl border-0 shadow-2xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-primary" />
                </div>
                Achievements
              </h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={achievement.title}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <achievement.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {achievement.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-0 shadow-2xl">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always excited to work on innovative projects and collaborate
              with talented teams. Let's discuss how we can bring your ideas to
              life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                className="group"
                onClick={() =>
                  window.open("mailto:monghout.hak0514@gmail.com", "_blank")
                }
              >
                <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Start a Conversation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>{" "}
    </div>
  );
}
