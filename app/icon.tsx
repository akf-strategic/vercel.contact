import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <svg
          height="24"
          viewBox="0 0 16 16"
          width="24"
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
    ),
    {
      ...size,
    }
  );
}
