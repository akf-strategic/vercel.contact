import { ImageResponse } from "next/og";

export const alt = "Vercel Contacts Directory";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Fetch font data
  const fontData = await fetch(
    "https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2"
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "Inter",
        }}
      >
        <div style={{ marginBottom: 40 }}>
          <svg
            height="128"
            viewBox="0 0 16 16"
            width="128"
            style={{ color: "white" }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 1L16 15H0L8 1Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div style={{ fontSize: 48, marginBottom: 10 }}>
          Vercel Contacts Directory
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#666",
            textAlign: "center",
            maxWidth: "80%",
          }}
        >
          Community-maintained contacts for Vercel technologies and products
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
