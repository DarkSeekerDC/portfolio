import Link from "@/icons/react/Link";
import type { TimeLineElement } from "@/types/timeLineElement.type";
import TimeLine from "./TimeLine";
import TimeLineItem from "./TimeLineItem";

interface ExperienceTimeLineProps {
  data: TimeLineElement[];
}

export default function ExperienceTimeLine({ data }: ExperienceTimeLineProps) {
  return (
    <TimeLine className="max-w-3xl">
      {data.map((timeLine) => (
        <TimeLineItem key={timeLine.title}>
          {timeLine.icon && (
            <TimeLineItem.Icon>
              <timeLine.icon />
            </TimeLineItem.Icon>
          )}
          <TimeLineItem.Date>{timeLine.date}</TimeLineItem.Date>
          <TimeLineItem.Title>{timeLine.title}</TimeLineItem.Title>
          <TimeLineItem.Description>{timeLine.description}</TimeLineItem.Description>
          {timeLine.responsibilities && (
            <TimeLineItem.Content>
              <ul>
                {timeLine.responsibilities?.map((responsibility) => (
                  <li key={responsibility} className="list-disc">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </TimeLineItem.Content>
          )}
          {timeLine.links && (
            <TimeLineItem.Content>
              {timeLine.links?.map((link) => (
                <a
                  key={link.href}
                  target="_blank"
                  className="flex gap-3 rounded-lg p-1 transition-colors duration-300 hover:bg-red-200/50"
                  href={link.href}
                >
                  <Link />
                  {link.title}
                </a>
              ))}
            </TimeLineItem.Content>
          )}
        </TimeLineItem>
      ))}
    </TimeLine>
  );
}
