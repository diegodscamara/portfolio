import { ButtonHTMLAttributes } from "react";
import { Url } from "url";

export type ButtonProps<T extends keyof JSX.IntrinsicElements = 'button'> = {
  attributes: {
    link?: Url | string;
    target?: string;
    rel?: string;
    title?: string;
    onClick?: () => Promise<void>;
    type?: T extends 'button' ? ButtonHTMLAttributes<HTMLButtonElement>['type'] : 'link';
  };
  variant: 'filled' | 'outlined';
  children: React.ReactNode;
};
