// Utility function to get image path with basePath for static exports
export function getImagePath(src: string): string {
    // Don't modify external URLs
    if (src.startsWith('http://') || src.startsWith('https://') || src.startsWith('data:')) {
        return src;
    }

    // Hardcoded basePath for GitHub Pages deployment
    // For custom domain, this should be empty
    const basePath = '';

    // For relative paths starting with /, prepend basePath
    if (src.startsWith('/')) {
        return `${basePath}${src}`;
    }

    // Return as-is for all other cases
    return src;
}
