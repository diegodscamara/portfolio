export type ButtonProps = {
  attributes: {
    link?: string;
    target?: string;
    rel?: string;
    title?: string;
    onClick?: () => Promise<void>;
  };
  variant: 'filled' | 'outlined';
  children: React.ReactNode;
};