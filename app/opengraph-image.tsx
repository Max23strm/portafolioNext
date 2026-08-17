import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Maximiliano Ovejak — Fullstack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #005779 0%, #0a4f6a 45%, #071d36 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 80,
            display: "flex",
            alignItems: "center",
            gap: 12,
            color: "#d42b80",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#d42b80",
            }}
          />
          Portfolio
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          Maximiliano Ovejak
        </div>
        <div
          style={{
            fontSize: 44,
            fontWeight: 500,
            color: "#cfd8dc",
            marginTop: 12,
          }}
        >
          Fullstack Developer
        </div>
        <div
          style={{
            display: "flex",
            gap: 14,
            marginTop: 48,
            fontSize: 26,
            color: "#cfd8dc",
          }}
        >
          <span>Next.js</span>
          <span>·</span>
          <span>TypeScript</span>
          <span>·</span>
          <span>React</span>
          <span>·</span>
          <span>Node.js</span>
          <span>·</span>
          <span>Go</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
