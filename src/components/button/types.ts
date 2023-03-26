import { Url } from "url";

export type ButtonProps = {
  attributes: {
    link?: Url | string;
    target?: string;
    rel?: string;
    title?: string;
    onClick?: () => Promise<void>;
  };
  variant: 'filled' | 'outlined';
  children: React.ReactNode;
};