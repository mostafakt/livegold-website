import React from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';

export interface ImageProps extends Omit<NextImageProps, 'src'> {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
    priority?: boolean;
    quality?: number;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
}

const Image: React.FC<ImageProps> = ({
    src,
    alt,
    width,
    height,
    className,
    priority = false,
    quality = 75,
    placeholder = 'empty',
    blurDataURL,
    ...rest
}) => (
    <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={' max-w-full h-auto  '+className}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        {...rest}
    />
);

export default Image;