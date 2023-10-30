import { ProjectType } from '@/utils/types';

export const projectsData: ProjectType[] = [
  {
    title: 'Cash-IO : Expense Tracker System',
    image: '/assets/projects/cash-io/Cash-IO.png',
    technologies: [
      'Next Js',
      'Next Auth',
      'MongoDB',
      'TypeScript',
      'RTK Query',
      'Tailwind Css',
    ],
    detail:
      'This application is a powerful tool for tracking and managing your financial data. You can easily record your expenses, earnings, and borrowings, and view them in different categories and time periods. You can also create multiple wallets to separate your personal and business finances, or to share them with your family and friends. This application helps you analyze your transactions and make smart decisions for your financial future.',
    sourceCode: {
      code: 'https://github.com/dev-faisal-ahmed/Cash-IO',
      frontEnd: '',
      backEnd: '',
    },
    liveLink: 'https://cash-io.vercel.app',
  },
];
