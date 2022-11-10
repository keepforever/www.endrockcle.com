import clsx from 'clsx';
import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const EndRockGradientText: React.FC<Props> = ({
  children,
  className,
}) => {
  return (
    <span
      className={clsx(
        // "inline-block bg-gradient-to-r from-erc-yellow to-erc-red bg-clip-text font-extrabold tracking-tight text-transparent",
        'inline-block bg-gradient-to-r from-erc-red to-erc-yellow bg-clip-text font-extrabold tracking-tight text-transparent',
        className
      )}
    >
      {children}
    </span>
  );
};
