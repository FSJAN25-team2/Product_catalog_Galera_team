import React from 'react';
import classNames from 'classnames';
import './Heading.scss';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4';

interface HeadingProps {
  level: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  uppercase?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({ 
  level, 
  children, 
  className = '',
  uppercase = false,
}) => {
  const Tag = level;
  
  const headingClass = classNames(
    'heading',
    `heading--${level}`,
    { 'heading--uppercase': uppercase },
    className
  );
  
  return (
    <Tag className={headingClass}>
      {children}
    </Tag>
  );
}; 