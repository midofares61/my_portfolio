import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Bird Technologies",
    position: "Mid-level Flutter Developer",
    period: "2023 - Present",
    responsibilities: [
      "Lead a team of 5 developers in building cross-platform mobile applications",
      "Design and implement complex UI components and animations",
      "Mentor junior developers and conduct code reviews",
      "Collaborate with product managers and designers to refine product requirements"
    ],
    achievements: [
      "Reduced app startup time by 45% through performance optimizations",
      "Implemented CI/CD pipeline that decreased deployment time by 60%",
      "Led the migration from setState to Riverpod, improving code maintainability",
      "Successfully delivered 3 major applications with 4.8+ star ratings"
    ],
    teamSize: "8 (5 developers, 2 designers, 1 product manager)"
  },
  // {
  //   id: 2,
  //   company: "AppCraft Industries",
  //   position: "Flutter Developer",
  //   period: "2021 - 2023",
  //   responsibilities: [
  //     "Developed and maintained cross-platform applications for iOS and Android",
  //     "Implemented state management solutions using Provider and Bloc",
  //     "Created custom widgets and animations for enhanced user experience",
  //     "Integrated RESTful APIs and local databases"
  //   ],
  //   achievements: [
  //     "Built a finance app that reached 100,000+ downloads in 6 months",
  //     "Reduced app crash rate by 80% through comprehensive error handling",
  //     "Implemented localization support for 12 languages",
  //     "Created reusable component library that increased development speed by 30%"
  //   ],
  //   teamSize: "6 (3 developers, 2 designers, 1 QA engineer)"
  // },
  {
    id: 2,
    company: "Sintac Code",
    position: "Junior Mobile Developer",
    period: "2022 - 2023",
    responsibilities: [
      "Assisted in the development of Flutter applications for small businesses",
      "Fixed bugs and implemented new features in existing applications",
      "Created UI components based on designer specifications",
      "Participated in daily stand-ups and sprint planning"
    ],
    achievements: [
      "Successfully fixed 200+ bugs within first year of employment",
      "Contributed to the development of a component library used across projects",
      "Improved app performance by implementing efficient state management",
      "Received recognition for exceptional problem-solving skills"
    ],
    teamSize: "4 (2 developers, 1 designer, 1 project manager)"
  }
];