import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "MTM Pro",
    description: "A comprehensive health tracking application for iOS and Android that helps users monitor their fitness goals, nutrition intake, and overall wellness journey.",
    challenges: "Implemented complex real-time syncing between devices while maintaining offline functionality. Created custom charts and visualizations for health metrics that dynamically update.",
    technologies: ["Flutter", "Dart", "Provider", "Firebase", "Cloud Firestore", "Firebase Auth", "Charts", "Hive"],
    role: "Lead Mobile Developer",
    contributions: [
      "Designed and implemented the core architecture using Provider for state management",
      "Built custom UI components for an intuitive health tracking experience",
      "Implemented secure user authentication and data synchronization",
      "Optimized app performance resulting in 40% faster load times"
    ],
    links: {
      live: "https://healthtrackpro.com",
      github: "https://github.com/yourusername/healthtrackpro",
    },
    imageUrl: "src/data/files/mtm_desktop.png"
  },
  {
    id: 2,
    title: "Bird Ads",
    description: "Sponsored advertising application that includes all types of social media",
    challenges: "Implemented a complex filtering system for sustainable products while ensuring smooth image loading and transitions between screens.",
    technologies: ["Flutter", "Dart", "Bloc", "GetIt", "Dio", "SQLite", "Firebase Analytics", "Stripe"],
    role: "Senior Flutter Developer",
    contributions: [
      "Architected the application using BLoC pattern for scalable state management",
      "Developed a robust shopping cart and checkout system integrated with Stripe",
      "Implemented advanced search and filtering capabilities",
      "Reduced app size by 30% through optimization techniques"
    ],
    links: {
      live: "https://bird-ads.com/",
      playStore: "https://play.google.com/store/search?q=bird+ads&c=apps"
    },
    imageUrl: "https://play-lh.googleusercontent.com/o5sve_MwQ2_RH-rFl3jZkpXEFm0_iIWQ-LwxYkn39dwR9-o6gbccuwGNaGAcS5D5Cug=w480-h960-rw"
  },
];