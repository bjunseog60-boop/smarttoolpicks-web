'use client';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

const FALLBACK_IMAGES: Record<string, string> = {
  saas: '/images/categories/ai-tools.svg',
  productivity: '/images/categories/productivity.svg',
  design: '/images/categories/design-tools.svg',
  ai: '/images/categories/ai-tools.svg',
  'project-management': '/images/categories/project-management.svg',
  'crm-sales': '/images/categories/crm-sales.svg',
  'marketing-tools': '/images/categories/marketing-tools.svg',
  collaboration: '/images/categories/collaboration.svg',
  default: '/images/categories/productivity.svg',
};

interface SafeImageProps extends Omit<ImageProps, 'onError'> {
  category?: string;
  fallbackSrc?: string;
}

export default function SafeImage({ category, fallbackSrc, src, alt, ...props }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      const fallback = fallbackSrc
        || FALLBACK_IMAGES[category || '']
        || FALLBACK_IMAGES.default;
      setImgSrc(fallback);
      setHasError(true);
    }
  };

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={handleError}
    />
  );
}
