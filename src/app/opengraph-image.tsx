import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION } from "~/lib/constants";

export const alt = PROJECT_TITLE;
export const size = {
  width: 600,
  height: 400,
};

export const contentType = "image/png";

/*
this Image is rendered using vercel/satori.

Satori supports a limited subset of HTML and CSS features, due to its special use cases. In general, only these static and visible elements and properties that are implemented.
For example, the <input> HTML element, the cursor CSS property are not in consideration. And you can't use <style> tags or external resources via <link> or <script>.
Also, Satori does not guarantee that the SVG will 100% match the browser-rendered HTML output since Satori implements its own layout engine based on the SVG 1.1 spec.
*/
export default async function Image() {
  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col justify-center items-center relative bg-[#0F172A]">
        <div tw="flex absolute top-4 left-4">
          <div tw="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white text-2xl">LB</div>
        </div>
        <h1 tw="text-6xl text-center text-white mb-4">LinkBridge Venice</h1>
        <h3 tw="text-2xl text-blue-200">Bridging Chains, Connecting Services</h3>
      </div>
    ),
    {
      ...size,
    }
  );
}
