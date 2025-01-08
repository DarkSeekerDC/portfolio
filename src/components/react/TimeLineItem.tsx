import type { ReactNode } from "react";

interface ElementProps {
  children?: ReactNode;
}

const TimeLineIcon = ({ children }: ElementProps) => {
  return (
    <span className="absolute -start-3 flex h-[19px] w-[19px] items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-[#f4f3ee] dark:ring-gray-900">
      {children}
    </span>
  );
};

const TimeLineDate = ({ children }: ElementProps) => {
  return (
    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{children}</time>
  );
};

const TimeLineTitle = ({ children }: ElementProps) => {
  return <h3 className="text-lg font-semibold text-gray-900">{children}</h3>;
};

const TimeLineDescription = ({ children }: ElementProps) => {
  return (
    <p className="mb-4 text-pretty text-base font-normal text-gray-500 dark:text-gray-400">{children}</p>
  );
};
const TimeLineContent = ({ children }: ElementProps) => {
  return <div className="flex gap-2">{children}</div>;
};

interface TimeLineItemProps {
  useCustomIcon?: boolean;
  children?: ReactNode;
}

export default function TimeLineItem({ children }: TimeLineItemProps) {
  return <li className="mb-10 ms-8">{children}</li>;
}

TimeLineItem.Icon = TimeLineIcon;
TimeLineItem.Date = TimeLineDate;
TimeLineItem.Title = TimeLineTitle;
TimeLineItem.Description = TimeLineDescription;
TimeLineItem.Content = TimeLineContent;
