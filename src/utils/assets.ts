export const getAssetPath = (path: string): string => {
  const isProd = process.env.NODE_ENV === 'production';
  const prefix = isProd ? '/InteractiveCV' : '';
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${prefix}${cleanPath}`;
};
