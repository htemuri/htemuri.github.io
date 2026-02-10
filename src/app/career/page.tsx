import { Badge } from "@/components/ui/badge";
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

// const timelineData: TimelineData[] = [
//   {
//     title: "First Job out of College!",
//     description: (
//       <p>
//         After a bunch of applications and interviews, I finally got an offer
//         from BAH for the position of <strong>Data Scientist</strong>.
//       </p>
//     ),
//     date: new Date("2021-06-03"),
//     variant: "default",
//   },
//   {
//     title: "Benched 😔",
//     description: (
//       <p>
//         Unfortunately the project fell through before I could even start, so I
//         "sat" on the bench looking for any new role. I wasn't getting much luck.
//       </p>
//     ),
//     variant: "outline",
//   },
//   {
//     title: "Landed a project at the CDC",
//     description: (
//       <p>
//         My wonderful career manager allowed me to interview for his project
//         which was about a new initiative of moving CDC from on-prem to the
//         cloud. I had joined{" "}
//         <Link
//           href={
//             "https://www.cdc.gov/data-modernization/php/technologies/edav.html"
//           }
//           className="underline text-blue-300"
//         >
//           EDAV
//         </Link>{" "}
//         in its infancy!
//       </p>
//     ),
//     date: new Date("2021-08-02"),
//     variant: "default",
//   },
//   {
//     title: "Customer Success",
//     description: (
//       <p>
//         I spent my first few months at EDAV learning about our services, the
//         basics of Azure - specifically Entra ID group management.
//       </p>
//     ),
//     variant: "outline",
//   },
//   {
//     title: "Linux System Admin",
//     description: (
//       <p>
//         By chance, the technical lead caught wind of me using Linux at home and
//         offered me to be the sysadmin for one of the servers. I happily accepted
//         and spent many months asking a lot of questions.
//       </p>
//     ),
//     variant: "outline",
//   },
//   {
//     title: "Being curious",
//     description: (
//       <p>
//         Whenever I wasn't debugging a server issue or trying to implement a
//         feature for the service hosted on the server, I spent my time helping
//         others with their tasks and exploring what could be automated with
//         Python.
//       </p>
//     ),
//     variant: "outline",
//   },
//   {
//     title: "Writing my first real Webapp",
//     description: (
//       <p>
//         It was around the time that I had proven to my tech lead that I could
//         handle more complicated projects, that he suggested I work on a
//         monitoring service that featured alerting and a service status page to
//         users.
//       </p>
//     ),
//     variant: "outline",
//   },
//   {
//     title: "In the weeds...",
//     description: (
//       <p>
//         I spent my time learning as much as I could of HTML/CSS/JS and the
//         library of my choice, React. I learned from reading the Mozilla guides +
//         the documentation on react.dev.
//       </p>
//     ),
//     variant: "outline",
//   },
//   {
//     title: "First CI/CD pipeline",
//     description: (
//       <p>
//         I had heard of CICD, but never had any hands on experience with until I
//         had to figure out how to deploy my code to an Azure App service. I chose
//         GitHub actions because I didn't want to use Azure Devops.
//       </p>
//     ),
//     variant: "outline",
//   },
//   {
//     title: "Leave of Absence",
//     description: (
//       <p>
//         It had only been around a year, but I had grown so much already. All
//         that nonstop grinding kinda burnt me out a bit, however, and I decided
//         to take about 3 months off self studying Linux and Networking basics.
//       </p>
//     ),
//     date: new Date("2022-10-01"),
//     variant: "destructive",
//   },
//   {
//     title: "Return to a new EDAV",
//     description: (
//       <p>
//         When I had returned, the team structure had been massively reworked and
//         I was placed in the <strong>Reliability Team</strong>. Because of my
//         self-learning, I became WAY better at troubleshooting linux and
//         networking related issues.
//       </p>
//     ),
//     variant: "outline",
//   },
//   {
//     title: "Promotion to Senior Consultant",
//     description: (
//       <p>
//         At this point I was spread pretty thin, so I began doing knowledge
//         transfers to the other teams to spread the workload. I began focusing
//         more on infrastructure and building tools.
//       </p>
//     ),
//     date: new Date("2023-04-02"),
//     variant: "default",
//   },
//   {
//     title: "Troubleshooting guy",
//     description: (
//       <p>
//         My days were spent either writing code for a tool/automation or in
//         meetings to help resolve blockers, troubleshoot pressing problems, or
//         teach others.
//       </p>
//     ),
//     variant: "outline",
//   },
//   {
//     title: "Architecting Solutions",
//     description: (
//       <p>
//         As I grew more proficient with Azure + networking + automation, my focus
//         shifted to designing solutions to infrastructure problems the team was
//         facing. I wrote a monitoring webapp, a customer lifecycle tracking
//         webapp, and a REST API to work with Active Directory objects (which
//         allowed for automating massive toil).
//       </p>
//     ),
//     variant: "outline",
//   },
//   {
//     title: "Better documentation",
//     description: (
//       <p>
//         I began to explore solutions to issues related to documentation.
//         Switching to markdown was a goal for more than a couple team members 🙂.{" "}
//         <Link href={"https://nextra.site/"} className="underline text-blue-300">
//           Nextra
//         </Link>{" "}
//         or{" "}
//         <Link
//           href={"https://docusaurus.io/"}
//           className="underline text-blue-300"
//         >
//           Docusaurus
//         </Link>{" "}
//         &gt;&gt; Sharepoint + Word
//       </p>
//     ),
//     variant: "outline",
//   },
//   {
//     title: "Transitioning to K8s",
//     description: (
//       <p>
//         We wanted to be able to scale more efficiently, so I explored container
//         registries, AKS, helm charts, and argoCD. This seemed like a great
//         solution for hosting all of our internal apps and services, and we
//         already had a couple team members with experience in the tech.
//       </p>
//     ),
//     variant: "outline",
//   },
//   {
//     title: "Current Sabbatical",
//     description: (
//       <p>
//         I had learned a lot from EDAV, but I could feel myself stagnating, so I
//         decided to learn about things I wouldn't pick up on the job. I'm
//         tracking that progress in my personal blog:{" "}
//         <Link href={"/0xBADC0DE"} className="">
//           <code className="text-cyan-300 underline">0xBADC0DE</code>
//         </Link>
//       </p>
//     ),
//     variant: "current",
//   },
// ];

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
      <div className="flex flex-col gap-3 lg:max-w-5/8 lg:w-1/2 pl-6 max-lg:pr-5 pt-4 max-lg:py-3">
        <div className="flex items-center">
          <h1 className="font-medium text-xl">Booz Allen Hamilton (BAH)</h1>
          <div className="grow" />
          <span className="text-neutral-500 text-xl">2021-Current</span>
        </div>
        <p className="text-neutral-400 text-pretty leading-7">
          My time at BAH has been a wild ride, full of new experiences and great
          mentors/coworkers. As my first job out of college, I couldn't have
          asked for a better project to learn as much as I did. I left college
          thinking I wanted to get into data science, but my time at the CDC
          shifted my career trajectory to where it is today - Platform
          Engineering. I’ve included this timeline primarily as a personal
          roadmap to look back on the milestones that shaped me.
        </p>
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
          className="pl-0 items-end"
          vertItemSpacing={140}
          // vertItemMaxWidth={250}
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
      <div className="h-full w-full px-3 overflow-auto lg:hidden">
        <Timeline
          orientation="vertical"
          // alternating={false}
          alignment="bottom/right"
          className=""
          vertItemSpacing={110}
          vertItemMaxWidth={250}
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
