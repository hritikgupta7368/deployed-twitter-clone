import React from 'react';
import dynamic from 'next/dynamic';

const TimeAgo = dynamic(() => import('react-timeago'), { ssr: false });

const formatter = (value, unit, suffix) => {
  if (unit === 'second') {
    return 'just now';
  }
  return `${value} ${unit}${value !== 1 ? 's' : ''} ${suffix}`;
};

const TimeElapsed = ({ createdAt }) => {
  return <TimeAgo date={createdAt} formatter={formatter}/>;
};

export default TimeElapsed;
