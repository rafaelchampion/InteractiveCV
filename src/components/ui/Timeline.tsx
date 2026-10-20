import React from 'react';

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative pl-8 sm:pl-10 space-y-6 sm:space-y-8 ${className}`}>
      {children}
    </div>
  );
};

interface TimelineItemProps {
  isLast?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  isLast = false,
  children,
  className = '',
}) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Connecting vertical line segment */}
      {!isLast ? (
        <div
          className="absolute -left-8 sm:-left-10 -translate-x-1/2 top-1/2 w-[2px] h-[calc(100%+1.5rem)] sm:h-[calc(100%+2rem)] z-0 pointer-events-none transition-all duration-300"
          style={{
            background:
              'linear-gradient(to bottom, var(--accent-primary) 0%, var(--accent-secondary) 50%, var(--border-medium) 100%)',
          }}
        />
      ) : (
        <div
          className="absolute -left-8 sm:-left-10 -translate-x-1/2 top-1/2 w-[2px] h-20 z-0 pointer-events-none transition-all duration-300"
          style={{
            background:
              'linear-gradient(to bottom, var(--border-medium) 0%, var(--accent-subtle) 50%, transparent 100%)',
          }}
        />
      )}

      {/* Marker: Centered to the exact vertical midpoint of the card */}
      <div
        className="absolute -left-8 sm:-left-10 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-bg-surface border-2 border-accent-primary shadow-[0_0_8px_var(--accent-glow)] z-10 group-hover:scale-125 group-hover:bg-accent-primary group-hover:shadow-[0_0_14px_var(--accent-primary)] transition-all duration-300"
        style={{
          transition: 'top 0.4s cubic-bezier(0.16, 1, 0.3, 1), transform 0.3s ease, background-color 0.2s',
        }}
      />

      {children}
    </div>
  );
};
