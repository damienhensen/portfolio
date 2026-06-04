type NavItem = {
  label: string;
  to: string;
};

export const navigation: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
];
