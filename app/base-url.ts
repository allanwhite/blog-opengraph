// export default function getBaseUrl() {
//   return process.env.NEXT_PUBLIC_SITE_URL ?? process.env.NEXT_PUBLIC_VERCEL_URL
// };
import { PROD_URL } from "@/lib/constants";
// export const getBaseUrl = () => {
//   if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production")
//     return PROD_URL;
//   if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview")
//     return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
//   return "http://localhost:3000";
// };

export const getBaseUrl = () => {
  if (process.env.NODE_ENV === "development") {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  }
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview")
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;
  return "http://localhost:3000";
};

// const getBaseUrl = 'http://localhost:3000';