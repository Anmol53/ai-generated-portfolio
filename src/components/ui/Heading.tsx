import { HTMLAttributes, createElement } from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  gradient?: boolean;
}

const headingClasses = {
  1: 'text-5xl font-bold',
  2: 'text-4xl font-bold',
  3: 'text-3xl font-bold',
  4: 'text-2xl font-bold',
  5: 'text-xl font-bold',
  6: 'text-lg font-bold'
};

export function Heading({ className, level = 2, gradient = false, children, ...props }: HeadingProps) {
  return createElement(
    `h${level}`,
    {
      className: cn(
        headingClasses[level],
        gradient && 'bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400',
        className
      ),
      ...props
    },
    children
  );
} 