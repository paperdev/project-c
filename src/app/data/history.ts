export interface iHistory {
  companyName: string;
  contents: {
    beginDate: string;
    endDate: string;
    description: string;
  }[];
};

export const dataHistory: iHistory[] = [
  {
    companyName: 'Company a',
    contents: [
      {
        beginDate: '2015-01',
        endDate: '2020-12',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae et doloribus est vero non, quidem rerum ipsa mollitia assumenda delectus quis dicta voluptatum accusantium totam officiis enim qui, repellendus alias. Dolore voluptas perspiciatis numquam consequuntur corporis reprehenderit, ipsam iusto blanditiis, molestiae rem aliquam vero culpa veritatis cumque non doloremque id ab odit. Omnis, rem ipsam qui nostrum recusandae voluptas optio!',
      },
    ],
  },
  {
    companyName: 'Company b',
    contents: [
      {
        beginDate: '2000-01',
        endDate: '2014-12',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae et doloribus est vero non, quidem rerum ipsa mollitia assumenda delectus quis dicta voluptatum accusantium totam officiis enim qui, repellendus alias. Dolore voluptas perspiciatis numquam consequuntur corporis reprehenderit, ipsam iusto blanditiis, molestiae rem aliquam vero culpa veritatis cumque non doloremque id ab odit. Omnis, rem ipsam qui nostrum recusandae voluptas optio!',
      },
    ],
  },
];
