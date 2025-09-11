"use client";

export default function ProductDetails({ name, features = [], usage }: { name: string; features?: string[]; usage?: string }) {
  return (
    <details className="mt-5 group" onToggle={(e) => {
      const opened = (e.target as HTMLDetailsElement).open;
      if (opened) {
        try { (window as any).gtag && (window as any).gtag('event', 'product_more_details', { product_name: name }); } catch {}
        try { (window as any).fbq && (window as any).fbq('trackCustom', 'ProductMoreDetails', { product_name: name }); } catch {}
      }
    }}>
      <summary className="cursor-pointer inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-black py-2">
        <span className="underline">More Details</span>
      </summary>
      <div className="mt-2 sm:mt-3 text-sm text-gray-800">
        {features && features.length > 0 && (
          <div className="mb-3">
            <div className="font-semibold">Key Features</div>
            <ul className="list-disc pl-5 mt-1">
              {features.map((f) => (
                <li key={`${name}-${f}`}>{f}</li>
              ))}
            </ul>
          </div>
        )}
        {usage && (
          <div>
            <div className="font-semibold">Usage</div>
            <p className="mt-1">{usage}</p>
          </div>
        )}
      </div>
    </details>
  );
}


