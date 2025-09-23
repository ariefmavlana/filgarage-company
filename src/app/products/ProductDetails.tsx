"use client";

// Analytics declarations for better TypeScript support
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

interface ProductDetailsProps {
  name: string;
  features?: string[];
  usage?: string;
}

export default function ProductDetails({ name, features = [], usage }: ProductDetailsProps) {
  // Analytics tracking helper
  const trackProductDetails = (productName: string) => {
    try {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', 'product_more_details', { product_name: productName });
      }
      
      // Facebook Pixel
      if (window.fbq) {
        window.fbq('trackCustom', 'ProductMoreDetails', { product_name: productName });
      }
    } catch (error) {
      console.warn('Analytics tracking failed:', error);
    }
  };

  const handleToggle = (e: React.SyntheticEvent<HTMLDetailsElement>) => {
    const opened = (e.target as HTMLDetailsElement).open;
    if (opened) {
      trackProductDetails(name);
    }
  };

  return (
    <details className="mt-5 group" onToggle={handleToggle}>
      <summary className="cursor-pointer inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-black py-2 hover:text-primary transition-colors">
        <span className="underline">Detail Lengkap</span>
        <span className="text-xs">(klik untuk melihat)</span>
      </summary>
      <div className="mt-2 sm:mt-3 text-sm text-gray-800">
        {features && features.length > 0 && (
          <div className="mb-4">
            <div className="font-semibold text-primary mb-2">✨ Fitur Unggulan</div>
            <ul className="list-disc pl-5 mt-1 space-y-1">
              {features.map((feature, index) => (
                <li key={`${name}-feature-${index}`} className="text-gray-700">{feature}</li>
              ))}
            </ul>
          </div>
        )}
        {usage && (
          <div>
            <div className="font-semibold text-primary mb-2">📋 Cara Penggunaan</div>
            <p className="mt-1 text-gray-700 leading-relaxed">{usage}</p>
          </div>
        )}
      </div>
    </details>
  );
}