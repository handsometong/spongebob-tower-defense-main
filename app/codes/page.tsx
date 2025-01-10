import { Metadata } from 'next'
import Codes from "@/templates/shadcn/pages/codes";
import { page } from "@/data/demo";

export const metadata: Metadata = {
  title: 'Spongebob Tower Defense Codes: Active & Latest Rewards',
  description: 'Discover the latest Spongebob Tower Defense codes for Roblox! Maximize rewards, unlock exclusive items, and enhance your gameplay today!',
  alternates: {
    canonical: 'https://spongebobtowerdefense.cc',
  },
  openGraph: {
    title: 'Spongebob Tower Defense Codes: Active & Latest Rewards',
    description: 'Discover the latest Spongebob Tower Defense codes for Roblox! Maximize rewards, unlock exclusive items, and enhance your gameplay today!',
    type: 'website',
    url: 'https://spongebobtowerdefense.cc',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spongebob Tower Defense Codes: Active & Latest Rewards',
    description: 'Discover the latest Spongebob Tower Defense codes for Roblox! Maximize rewards, unlock exclusive items, and enhance your gameplay today!',
  },
}

export default function CodesPage() {
  return <Codes page={page} />;
} 