import { iProfile, iProfileAll } from '@/shared/interface/profile';
import { iTag } from '@/shared/interface/tag';
import { iSummary } from '@/shared/interface/summary';
import { iHistory } from '@/shared/interface/history';

let profile: iProfile = {
  name: 'Kevin',
  avatar: 'https://github.com/paperdev.png',
  jobTitle: 'Mobile game server developer',
  github: 'https://github.com/paperdev',
  linkedin: 'https://www.linkedin.com/in/paperdev',
  email: 'paperdev0@gmail.com',
};

let tags: iTag[] = [
  {
    name: 'Nodejs',
  },
  {
    name: 'Nextjs',
  },
  {
    name: 'Nestjs',
  },
  {
    name: 'Game',
  },
  {
    name: 'Server',
  },
  {
    name: 'Backend',
  },
  {
    name: 'AWS',
  },
]

let summary: iSummary = {
  contents: `I'm Kevin, a developer which has 9 years of experience in mobile game server development.`
};

let history: iHistory[] = [
  {
    companyName: 'Project A',
    beginYear: 2022,
    beginMonth: 4,
    endYear: 2023,
    endMonth: 6,
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae et doloribus est vero non, quidem rerum ipsa mollitia assumenda delectus quis dicta voluptatum accusantium totam officiis enim qui, repellendus alias. Dolore voluptas perspiciatis numquam consequuntur corporis reprehenderit, ipsam iusto blanditiis, molestiae rem aliquam vero culpa veritatis cumque non doloremque id ab odit. Omnis, rem ipsam qui nostrum recusandae voluptas optio!'
  },
  {
    companyName: 'Project B',
    beginYear: 2019,
    beginMonth: 4,
    endYear: 2021,
    endMonth: 6,
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae et doloribus est vero non, quidem rerum ipsa mollitia assumenda delectus quis dicta voluptatum accusantium totam officiis enim qui, repellendus alias. Dolore voluptas perspiciatis numquam consequuntur corporis reprehenderit, ipsam iusto blanditiis, molestiae rem aliquam vero culpa veritatis cumque non doloremque id ab odit. Omnis, rem ipsam qui nostrum recusandae voluptas optio!'
  },
  {
    companyName: 'Project C',
    beginYear: 2014,
    beginMonth: 5,
    endYear: 2017,
    endMonth: 8,
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae et doloribus est vero non, quidem rerum ipsa mollitia assumenda delectus quis dicta voluptatum accusantium totam officiis enim qui, repellendus alias. Dolore voluptas perspiciatis numquam consequuntur corporis reprehenderit, ipsam iusto blanditiis, molestiae rem aliquam vero culpa veritatis cumque non doloremque id ab odit. Omnis, rem ipsam qui nostrum recusandae voluptas optio!'
  },
  {
    companyName: 'Project D',
    beginYear: 2014,
    beginMonth: 1,
    endYear: 2014,
    endMonth: 4,
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae et doloribus est vero non, quidem rerum ipsa mollitia assumenda delectus quis dicta voluptatum accusantium totam officiis enim qui, repellendus alias. Dolore voluptas perspiciatis numquam consequuntur corporis reprehenderit, ipsam iusto blanditiis, molestiae rem aliquam vero culpa veritatis cumque non doloremque id ab odit. Omnis, rem ipsam qui nostrum recusandae voluptas optio!'
  },
  {
    companyName: 'Project E',
    beginYear: 2013,
    beginMonth: 3,
    endYear: 2013,
    endMonth: 12,
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae et doloribus est vero non, quidem rerum ipsa mollitia assumenda delectus quis dicta voluptatum accusantium totam officiis enim qui, repellendus alias. Dolore voluptas perspiciatis numquam consequuntur corporis reprehenderit, ipsam iusto blanditiis, molestiae rem aliquam vero culpa veritatis cumque non doloremque id ab odit. Omnis, rem ipsam qui nostrum recusandae voluptas optio!'
  },
  {
    companyName: 'Project F',
    beginYear: 2011,
    beginMonth: 7,
    endYear: 2012,
    endMonth: 9,
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae et doloribus est vero non, quidem rerum ipsa mollitia assumenda delectus quis dicta voluptatum accusantium totam officiis enim qui, repellendus alias. Dolore voluptas perspiciatis numquam consequuntur corporis reprehenderit, ipsam iusto blanditiis, molestiae rem aliquam vero culpa veritatis cumque non doloremque id ab odit. Omnis, rem ipsam qui nostrum recusandae voluptas optio!'
  }
];

let profileAll: iProfileAll = {
  profile: profile,
  tags: tags,
  summary: summary,
  history: history,
}
export {
  profileAll
}