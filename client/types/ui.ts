declare global {
  interface ValidationErrors {
    [key: string]: string;
  }

  type NavigationLink = {
    label?: string;
    shortLabel?: string;
    href: string;
    icon?: JSX.Element;
    group?: number;
    isAdmin?: boolean;
  };

  type SelectValue = {
    id: string | number;
    name: string;
  };

  type GeneralToastType = "success" | "danger" | "info";
  type GeneralToast = {
    id?: number;
    message: string;
    type: GeneralToastType;
  };
}

export default global;
