import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Timeline, {
  TimelineItem,
  TimelineItemDate,
  TimelineItemTitle,
  TimelineItemDescription,
  TimelineData,
} from "@/components/ui/timeline";
import Link from "next/link";

const timelineData: TimelineData[] = [
  {
    title: "First Job out of College!",
    description: (
      <p>
        The post-grad hunt ended here! I joined BAH as a{" "}
        <strong>Data Scientist</strong>, eager to put my degree to work.
      </p>
    ),
    date: new Date("2021-06-03"),
    variant: "default",
  },
  {
    title: "Benched 😔",
    description: (
      <p>
        A rocky start... my project fell through before I began. It was a
        stressful few weeks of "sitting on the bench" searching for a home.
      </p>
    ),
    variant: "outline",
  },
  {
    title: "Landed a project at the CDC",
    description: (
      <p>
        My manager took a chance on me for a new cloud initiative. I joined{" "}
        <Link
          href={
            "https://www.cdc.gov/data-modernization/php/technologies/edav.html"
          }
          className="underline text-blue-300"
        >
          EDAV
        </Link>{" "}
        just as it was starting to take shape.
      </p>
    ),
    date: new Date("2021-08-02"),
    variant: "default",
  },
  {
    title: "Customer Success",
    description: (
      <p>
        Early days were all about soaking up Azure basics and learning how to
        actually support a growing user base.
      </p>
    ),
    variant: "outline",
  },
  {
    title: "Linux System Admin",
    description: (
      <p>
        A lucky break! My tech lead noticed my love for home-lab Linux and let
        me run with a server. I spent months asking a million questions.
      </p>
    ),
    variant: "outline",
  },
  {
    title: "Being curious",
    description: (
      <p>
        I started hunting for things to fix. If I wasn't debugging, I was
        writing Python scripts to make my teammates' lives easier.
      </p>
    ),
    variant: "outline",
  },
  {
    title: "Writing my first real Webapp",
    description: (
      <p>
        My lead challenged me to build a monitoring service. This was the first
        time I felt like I was building something "real."
      </p>
    ),
    variant: "outline",
  },
  {
    title: "In the weeds...",
    description: (
      <p>
        Deep in the React and MDN docs. It was a lot of trial, error, and "aha!"
        moments as I taught myself modern web dev.
      </p>
    ),
    variant: "outline",
  },
  {
    title: "First CI/CD pipeline",
    description: (
      <p>
        The shift from "it works on my machine" to automated deployments. I
        chose GitHub Actions and never looked back.
      </p>
    ),
    variant: "outline",
  },
  {
    title: "Leave of Absence",
    description: (
      <p>
        A year of grinding led to burnout. I stepped away for 3 months to reset,
        fall back in love with Linux, and finally learn some networking basics.
      </p>
    ),
    date: new Date("2022-10-01"),
    variant: "destructive",
  },
  {
    title: "Return to a new EDAV",
    description: (
      <p>
        Came back refreshed and joined the <strong>Reliability Team</strong>. My
        self-study during the break really boosted my troubleshooting ability.
      </p>
    ),
    variant: "outline",
  },
  {
    title: "Promotion to Senior Consultant",
    description: (
      <p>
        A proud milestone. I shifted from just "doing tasks" to mentoring others
        and building the core tools we relied on.
      </p>
    ),
    date: new Date("2023-04-02"),
    variant: "default",
  },
  {
    title: "Troubleshooting guy",
    description: (
      <p>
        Became the go-to for blockers. I loved the mix of deep-dive debugging
        and helping the team move faster.
      </p>
    ),
    variant: "outline",
  },
  {
    title: "Architecting Solutions",
    description: (
      <p>
        Began designing full systems, like a custom API to kill manual toil.
        This is where I really focused on engineering instead of sys/cloud
        admin.
      </p>
    ),
    variant: "outline",
  },
  {
    title: "Better documentation",
    description: (
      <p>
        Waging war on Sharepoint word docs 😋! More than a couple of my
        teammates wanted Markdown, so I deployed{" "}
        <Link href={"https://nextra.site/"} className="underline text-blue-300">
          Nextra
        </Link>{" "}
        to kick start that effort.
      </p>
    ),
    variant: "outline",
  },
  {
    title: "Transitioning to K8s",
    description: (
      <p>
        Explored AKS, Helm, and ArgoCD to scale our internal services and
        improve deployment efficiency.
      </p>
    ),
    variant: "outline",
  },
  {
    title: "Current Sabbatical",
    description: (
      <p>
        Stepping back to keep growing. I’m currently exploring things I wouldn't
        pick up on the job and documenting it all at{" "}
        <Link href={"/0xBADC0DE"}>
          <code className="text-cyan-300 underline">0xBADC0DE</code>
        </Link>
        .
      </p>
    ),
    variant: "current",
  },
];

const generalSkills = [
  "typescript",
  "python",
  "golang",
  "linux",
  "networking",
  "web-development",
  "api-development",
  "iac",
];
const azureSkills = [
  "graph-api",
  "entraid",
  "iam",
  "rbac",
  "app-services",
  "vm-management",
  "vnets",
  "dns-zones",
  "privatelink",
  "storage-accounts",
  "databricks",
  "app-gateway",
  "aks",
  "container-apps",
];

export default function CareerPage() {
  return (
    <div className="flex max-lg:flex-col h-full items-stretch w-full">
      <div className="h-full overflow-y-auto flex flex-col gap-3 lg:max-w-5/8 lg:w-1/2 pl-6 max-lg:pr-5 pt-4 max-lg:py-3 lg:pr-4">
        <div className="flex items-center">
          {/* <h1 className="font-medium text-xl">Booz Allen Hamilton (BAH)</h1> */}
          <img src="/Booz_Allen_Hamilton_logo.svg" />
          <div className="grow" />
          <span className="text-neutral-500 text-lg">2021 - Current</span>
        </div>
        <p className="text-neutral-400 text-pretty leading-7">
          My time at BAH has been a wild ride, full of new experiences and great
          mentors/coworkers. As my first job out of college, I couldn't have
          asked for a better project to learn as much as I did. I left college
          thinking I wanted to get into data science, but my time at the CDC
          shifted my career trajectory to where it is today - Platform
          Engineering.
        </p>
        <span>Summary of responsibilities:</span>
        <p className="flex flex-col gap-1 text-neutral-400 text-pretty">
          <span>
            - Designed and built internal monitoring and status tooling,
            including outage alerting, uptime tracking, and user-facing status
            pages
          </span>
          <span>
            - Built internal applications to manage user lifecycle workflows,
            including onboarding, inactivity tracking, and automated offboarding
          </span>
          <span>
            - Reduced operational toil through automation, including
            programmatic management of directory services and access controls
          </span>
          <span>
            - Served as a system administrator for Linux-based cloud
            infrastructure in production environments
          </span>
          <span>
            - Architected and operated infrastructure for public-facing
            applications on Azure, with a focus on automation and scalability
          </span>
          <span>
            - Provided technical mentorship and guidance in automation,
            networking, and infrastructure
          </span>
          <span>
            - Acted as a subject matter expert for a data science SaaS platform,
            supporting adoption, reliability, and team enablement
          </span>
        </p>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="lg:hidden hover:cursor-pointer py-3"
              variant={"outline"}
            >
              Open Timeline
            </Button>
          </DialogTrigger>
          <DialogContent className="h-full max-w-screen py-2 overflow-hidden">
            <DialogHeader className="py-3 overflow-hidden flex items-center">
              <DialogTitle className="py-3">Timeline</DialogTitle>
              <div className="overflow-y-auto">
                <Timeline
                  orientation="vertical"
                  alternating={false}
                  alignment="bottom/right"
                  className="pl-0 flex items-center"
                  vertItemSpacing={160}
                  vertItemMaxWidth={270}
                  noCards
                >
                  {timelineData.map((item, idx) => (
                    <TimelineItem
                      key={idx}
                      variant={item.variant}
                      className="text-left p-3"
                    >
                      {item.date && (
                        <TimelineItemDate className="pt-4">
                          {item.date.toDateString()}
                        </TimelineItemDate>
                      )}
                      <TimelineItemTitle>{item.title}</TimelineItemTitle>
                      <TimelineItemDescription>
                        {item.description}
                      </TimelineItemDescription>
                    </TimelineItem>
                  ))}
                </Timeline>
              </div>
            </DialogHeader>
            <div className="lg:hidden"></div>
          </DialogContent>
        </Dialog>
        <div className="flex gap-3 py-2 items-start">
          <span className="text-green-300">Skills</span>
          <div className="flex flex-wrap gap-2">
            {generalSkills.map((skill) => {
              return (
                <Badge key={skill} variant={"outline"}>
                  {skill}
                </Badge>
              );
            })}
          </div>
        </div>
        <div className="flex gap-3 items-start">
          <span className="text-blue-300">Azure</span>
          <div className="flex flex-wrap gap-2">
            {azureSkills.map((skill) => {
              return (
                <Badge key={skill} variant={"outline"}>
                  {skill}
                </Badge>
              );
            })}
          </div>
        </div>
      </div>
      <div className="h-full w-1/2 overflow-y-auto overflow-x-hidden max-lg:hidden">
        <Timeline
          orientation="vertical"
          alternating={false}
          alignment="bottom/right"
          className="pl-0 items-start"
          vertItemSpacing={140}
          noCards
        >
          {timelineData.map((item, idx) => (
            <TimelineItem
              key={idx}
              variant={item.variant}
              className="text-center p-3"
            >
              {item.date && (
                <TimelineItemDate className="pt-4">
                  {item.date.toDateString()}
                </TimelineItemDate>
              )}
              <TimelineItemTitle>{item.title}</TimelineItemTitle>
              <TimelineItemDescription>
                {item.description}
              </TimelineItemDescription>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
}
