import Books from "@/icons/react/Books";
import type { TimeLineElement } from "@/types/timeLineElement.type";

export const education: TimeLineElement[] = [
  {
    icon: Books,
    date: "August 2017 - June 2021",
    title: "BACHELOR´S DEGREE IN INTERNATIONAL RELATIONS",
    description: "San Francisco de Quito University",
    links: [
      {
        title: "View Bachelor's Degree",
        href: "/docs/título usfs.pdf"
      }
    ]
  },
  {
    icon: Books,
    date: "2015 - 2016",
    title: "HIGH SCHOOL SCIENCE DEGREE",
    description: "JUAN LEÓN MERA LA SALLE HIGH SCHOOL",
    links: [
      {
        title: "View High School Degree",
        href: "/docs/Titulobachiller.pdf"
      }
    ]
  },
  {
    icon: Books,
    date: "Middle School | 2014 - 2015",
    title: "KAOHSIUNG CITY HAIQING ADVANCED INDUSTRIAL AND COMMERCIAL VOCATIONAL SCHOOL",
    description: "高雄市 立 海青 高級 工商 職業 學校",
    links: [
      {
        title: "View Middle School Degree",
        href: "/docs/Kaohsiung.pdf"
      }
    ]
  }
];
