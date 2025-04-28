import React from 'react';

interface IconProps extends React.SVGAttributes<SVGSVGElement> {
  name: string;
  width?: number;
  height?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({
  name,
  width = 20,
  height = 20,
  color = 'currentColor',
  className = '',
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      fill={color}
      stroke={color}
      color={color}
      {...rest}
    >
      <use href={`/icons/sprites.svg#icon-${name}`} />
    </svg>
  );
};