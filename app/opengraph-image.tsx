import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";
export const alt = "Vercel Contacts Directory";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function Image() {
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
          fontFamily: "Geist, system-ui, -apple-system, sans-serif",
        }}
      >
        <div style={{ fontSize: 128, marginBottom: 20 }}>▲</div>
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
          name: "Geist",
          data: await fetch(
            new URL("https://vercel.com/font/geist-sans/Geist-Regular.woff")
          ).then((res) => res.arrayBuffer()),
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
