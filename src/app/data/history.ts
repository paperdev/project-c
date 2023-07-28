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
        summary: "summary 123456",
        description: "description 123456.",
      },
      {
        summary: "summary 123456",
        description: "description 123456.",
      },
    ],
  },
  {
    title: "Title abcdef",
    contents: [
      {
        summary: "summary abcdef",
        description: "description abcdef.",
      },
      {
        summary: "summary abcdef",
        description: "description abcdef.",
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
