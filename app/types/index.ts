export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export type Model = {
  id: number
  name: string
  description: string
  likes: number
  image: string
  category: string
  dateAdded: string
};

export type ModelPageProps = {
  params : Promise<{
    id: string
  }>
};
export type CategoryPageProps = {
  params : Promise<{
    slug: string
  }>;
  searchParams: Promise<{
    q?: string
  }>;
};

export type ModelsPageProps = {
  searchParams: Promise<{
    q?: string
  }>
};

export type ModelsLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export type ModelCardProps = {
  model: Model,
  index?: number
};

export type ModelVisualProps = {
  model: Model;
  className?: string;
};

export type PillProps = {
  children: React.ReactNode,
  className?: string
};

export type ModelsGridProps = {
  models: Model[]
};

export type CategoriesNavbarProps = {
  categories: Category[]
};

export type Category = {
  displayName: string,
  slug: string
};

export type CategoriesData = {
  categories: Category[]
};

export type GetModelsParams = {
  category?: string
};

export type ModelSearchProps = {
  defaultValue?: string;
  action?: string;
};

export type NavbarItem = {
  href: string;
  label: string;
};

export type NavbarProps = {
  items?: NavbarItem[];
};

export type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
};