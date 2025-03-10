import { FC } from 'react';
import React from 'react';
import { IconRobot, IconDots } from '@tabler/icons-react';

export const ChatLoader: FC = () => {
  return (
    <div
      style={{
        color: '#F7FAFC',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        backgroundColor: '#151515',
        overflowWrap: 'anywhere',
      }}
    >
      <div
        style={{
          fontSize: '1rem',
          gap: '1rem',
          maxWidth: '56rem',
          padding: '2rem',
          margin: 'auto',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <div
          style={{
            fontWeight: 'bold',
            minWidth: '40px',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <IconRobot size={30} />

          <IconDots className={`${'animate-pulse'} ml-3`} />
        </div>
      </div>
    </div>
  );
};
