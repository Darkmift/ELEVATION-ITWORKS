import React, { ReactNode } from 'react';
import { Build } from '../../types';

type ReactNodeProps = {
  children: ReactNode;
  classNames?: string;
};

const Table: React.FC<ReactNodeProps> = ({ children, classNames }) => {
  let classes = classNames || '';
  classes += ' text-left font-gordita';
  return <table className={classes}>{children}</table>;
};

const THeader: React.FC<ReactNodeProps> = ({ children, classNames }) => {
  const classes = classNames || '';
  return <thead className={classes}>{children}</thead>;
};

type RowNodeProps = {
  children: ReactNode;
  classNames?: string;
  rowType?: string;
};

const TR: React.FC<RowNodeProps> = ({ children, rowType, classNames }) => {
  let classes = classNames || '';
  classes += ' border-b border-solid border-gray-300 ';
  if (rowType === 'header') {
    classes += ' bg-[#DFE5E7] rounded-t-[2px] h-[40px]';
  }
  return <tr className={classes}>{children}</tr>;
};

const TH: React.FC<ReactNodeProps> = ({ children, classNames }) => {
  let classes = classNames || '';
  classes = 'font-medium text-[13px] text-[#525765] p-[12px]';
  if (children == 'Status') {
    classes += ' w-136px';
  }
  return <th className={classes}>{children}</th>;
};

const svgSuccess = (
  <svg viewBox="0 0 18 18" fill="none" className="w-[18px] h-[18px] mr-[2px]">
    <path
      d="M9.00001 0.666687C4.41667 0.666687 0.666672 4.41669 0.666672 9.00002C0.666672 13.5834 4.41667 17.3334 9.00001 17.3334C13.5833 17.3334 17.3333 13.5834 17.3333 9.00002C17.3333 4.41669 13.5833 0.666687 9.00001 0.666687ZM12.5 7.58335L8.50001 11.5834C8.16667 11.9167 7.66667 11.9167 7.33334 11.5834L5.50001 9.75002C5.16667 9.41669 5.16667 8.91669 5.50001 8.58335C5.83334 8.25002 6.33334 8.25002 6.66667 8.58335L7.91667 9.83335L11.3333 6.41669C11.6667 6.08335 12.1667 6.08335 12.5 6.41669C12.8333 6.75002 12.8333 7.25002 12.5 7.58335Z"
      fill="#00D2A2"
    />
  </svg>
);

const svgFailed = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path
      d="M9.00001 0.666687C4.41667 0.666687 0.666672 4.41669 0.666672 9.00002C0.666672 13.5834 4.41667 17.3334 9.00001 17.3334C13.5833 17.3334 17.3333 13.5834 17.3333 9.00002C17.3333 4.41669 13.5833 0.666687 9.00001 0.666687ZM12.0833 10.9167C12.4167 11.25 12.4167 11.75 12.0833 12.0834C11.75 12.4167 11.25 12.4167 10.9167 12.0834L9.00001 10.1667L7.08334 12.0834C6.75001 12.4167 6.25001 12.4167 5.91667 12.0834C5.58334 11.75 5.58334 11.25 5.91667 10.9167L7.83334 9.00002L5.91667 7.08335C5.58334 6.75002 5.58334 6.25002 5.91667 5.91669C6.25001 5.58335 6.75001 5.58335 7.08334 5.91669L9.00001 7.83335L10.9167 5.91669C11.25 5.58335 11.75 5.58335 12.0833 5.91669C12.4167 6.25002 12.4167 6.75002 12.0833 7.08335L10.1667 9.00002L12.0833 10.9167Z"
      fill="#E12828"
    />
  </svg>
);

const svgCancelled = (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.00001 0.666687C4.41667 0.666687 0.666672 4.41669 0.666672 9.00002C0.666672 13.5834 4.41667 17.3334 9.00001 17.3334C13.5833 17.3334 17.3333 13.5834 17.3333 9.00002C17.3333 4.41669 13.5833 0.666687 9.00001 0.666687ZM12.0833 10.9167C12.4167 11.25 12.4167 11.75 12.0833 12.0834C11.75 12.4167 11.25 12.4167 10.9167 12.0834L9.00001 10.1667L7.08334 12.0834C6.75001 12.4167 6.25001 12.4167 5.91667 12.0834C5.58334 11.75 5.58334 11.25 5.91667 10.9167L7.83334 9.00002L5.91667 7.08335C5.58334 6.75002 5.58334 6.25002 5.91667 5.91669C6.25001 5.58335 6.75001 5.58335 7.08334 5.91669L9.00001 7.83335L10.9167 5.91669C11.25 5.58335 11.75 5.58335 12.0833 5.91669C12.4167 6.25002 12.4167 6.75002 12.0833 7.08335L10.1667 9.00002L12.0833 10.9167Z"
      fill="#374A50"
      fillOpacity="0.5" // Modified attribute name from fill-opacity to fillOpacity
    />
  </svg>
);

const TD: React.FC<ReactNodeProps & { status?: Build['status'] | '' }> = ({ children, classNames, status }) => {
  const mappingObj = {
    success: { svg: svgSuccess, color: '#00D2A2' },
    failed: { svg: svgFailed, color: '#E12828' },
    cancelled: { svg: svgCancelled, color: '#374A5080' },
  };

  let imgNode = <></>;
  let classes = classNames || '';

  const displayDataMap = mappingObj[status?.toString().toLowerCase() as keyof typeof mappingObj];

  if (displayDataMap) {
    classes += ` text-[12px] text-[${displayDataMap.color}]`;
    imgNode = displayDataMap.svg;
  }

  return (
    <td className={classes}>
      {imgNode}
      {children}
    </td>
  );
};

const TBody: React.FC<ReactNodeProps> = ({ children, classNames }) => {
  const classes = classNames || '';
  return <tbody className={classes}>{children}</tbody>;
};

// eslint-disable-next-line react-refresh/only-export-components
export { Table, TR, TH, TD, TBody, THeader };
