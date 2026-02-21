'use client';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

const FALLBACK_IMAGES: Record<string, string> = {
  saas: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  productivity: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop',
  design: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop',
  ai: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
  default: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
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
