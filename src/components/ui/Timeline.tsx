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
        // Solid line between items, smoothly expanding with card height
        <div
          className="absolute -left-8 sm:-left-10 -translate-x-1/2 top-[32px] sm:top-[38px] w-[2px] h-[calc(100%+1.5rem)] sm:h-[calc(100%+2rem)] z-0 pointer-events-none transition-all duration-300"
          style={{
            background: 'var(--accent-primary)',
          }}
        />
      ) : (
        // Fade line occurring exclusively on the oldest item
        <div
          className="absolute -left-8 sm:-left-10 -translate-x-1/2 top-[32px] sm:top-[38px] w-[2px] h-20 z-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, var(--border-medium) 0%, transparent 100%)',
          }}
        />
      )}

      {/* Marker: Centered with the item title at the top of the card */}
      <div
        className="absolute -left-8 sm:-left-10 -translate-x-1/2 top-[32px] sm:top-[38px] -translate-y-1/2 w-4 h-4 rounded-full bg-bg-surface border-2 border-accent-primary shadow-[0_0_8px_var(--accent-glow)] z-10 group-hover:scale-125 group-hover:bg-accent-primary group-hover:shadow-[0_0_14px_var(--accent-primary)] transition-all duration-300"
      />

      {children}
    </div>
  );
};
