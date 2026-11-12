import { BASE_URL, OG_IMAGE } from "@/lib/constants";

const BRAND_NAME = "TIME KAMU";
const FOUNDER_NAME = "Indrajit Bhunia";
const FOUNDER_ALIAS = "INDRA";

export default function StructuredData() {
  const organizationId = `${BASE_URL}/#organization`;
  const personId = `${BASE_URL}/#founder`;
  const websiteId = `${BASE_URL}/#website`;

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      // TIME KAMU - Official Brand
      {
        "@type": "Organization",
        "@id": organizationId,
        name: BRAND_NAME,
        alternateName: "TIME KAMU Official",
        url: BASE_URL,
        image: OG_IMAGE,
        description:
          "TIME KAMU is an independent creative brand founded by Indrajit Bhunia (INDRA), focused on video editing, graphic design, 2D animation and visual storytelling.",
        founder: {
          "@id": personId,
        },
        sameAs: [
          "https://www.instagram.com/time.kamu/",
        ],
      },

      // Founder - Indrajit Bhunia
      {
        "@type": "Person",
        "@id": personId,
        name: FOUNDER_NAME,
        alternateName: FOUNDER_ALIAS,
        url: BASE_URL,
        image: OG_IMAGE,
        description:
          "Indrajit Bhunia, professionally known as INDRA, is an Indian YouTuber, Graphic Designer and Video Editor. He is the founder of TIME KAMU.",
        jobTitle: [
          "YouTuber",
          "Graphic Designer",
          "Video Editor",
          "2D Animator",
        ],
        founderOf: {
          "@id": organizationId,
        },
        worksFor: {
          "@id": organizationId,
        },
        knowsAbout: [
          "Video Editing",
          "Graphic Design",
          "2D Animation",
          "Visual Storytelling",
          "Digital Content Creation",
          "YouTube Content Creation",
        ],
        sameAs: [
          "https://www.instagram.com/time.kamu/",
        ],
      },

      // Official Website
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: BRAND_NAME,
        alternateName: "TIME KAMU Official Website",
        url: BASE_URL,
        description:
          "Official website of TIME KAMU, founded by Indrajit Bhunia (INDRA). Explore creative projects, video editing, graphic design and animation.",
        inLanguage: "en-IN",
        publisher: {
          "@id": organizationId,
        },
        about: {
          "@id": organizationId,
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(
          /</g,
          "\\u003c"
        ),
      }}
    />
  );
}
