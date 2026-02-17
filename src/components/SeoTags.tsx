import { Helmet } from 'react-helmet-async';

const SeoTags = () => {
  return (
    <Helmet>
      {/* Title */}
      <title>Shivantra | Axelor Theme Designer – Visual UI Customization for Axelor ERP</title>

      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />

      {/* Meta */}
      <meta
        name="description"
        content="Axelor Theme Designer by Shivantra lets you design, preview, and deploy custom Axelor ERP themes visually. A free tool built by an official Axelor partner."
      />
      <meta
        name="keywords"
        content="Shivantra Axelor, Axelor Theme Designer, Axelor ERP theme, Axelor UI customization, Axelor ERP theming, ERP theme builder"
      />
      <meta name="author" content="Shivantra" />

      {/* Canonical */}
      <link rel="canonical" href="https://shivantra.com/axelor-theme-designer" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Shivantra | Axelor Theme Designer" />
      <meta
        property="og:description"
        content="Design, preview, and deploy custom Axelor ERP themes visually. Free tool built by official Axelor partner Shivantra."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://shivantra.com/axelor-theme-designer" />
      <meta property="og:image" content="https://shivantra.com/axelor-theme-designer/og.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Shivantra | Axelor Theme Designer" />
      <meta
        name="twitter:description"
        content="Visual theme designer for Axelor ERP. Build client-ready ERP themes faster."
      />
      <meta name="twitter:image" content="https://shivantra.com/axelor-theme-designer/og.png" />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {`
                    {
                    "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "Axelor Theme Designer",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Web",
                        "description": "Visual theme designer for Axelor ERP to create, preview, and deploy ERP UI themes.",
                        "author": {
                        "@type": "Organization",
                        "name": "Shivantra"
                        },
                        "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                        }
                    }`}
      </script>
    </Helmet>
  );
};

export default SeoTags;
