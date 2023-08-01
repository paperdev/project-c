export interface iHistory {
  title: string;
  contents: {
    summary: string;
    description: string;
  }[];
};

export const dataHistory: iHistory[] = [
  {
    title: "Title 123456",
    contents: [
      {
        summary: "summary 1",
        description: "description 1.",
      },
      {
        summary: "summary 2",
        description: "description 2.",
      },
      {
        summary: "summary 3",
        description: "description 3.",
      },
      {
        summary: "summary 4",
        description: "description 4.",
      },
    ],
  },
  {
    title: "Title abcdef",
    contents: [
      {
        summary: "summary a",
        description: "description a.",
      },
      {
        summary: "summary b",
        description: "description b.",
      },
      {
        summary: "summary c",
        description: "description c.",
      },
      {
        summary: "summary d",
        description: "description d.",
      },
    ],
  },
  {
    title: "Something else",
    contents: [
      {
        summary: "something else summary",
        description: "something else description",
      },
    ],
  },
];
