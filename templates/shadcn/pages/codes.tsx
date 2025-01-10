'use client'

import { Button } from "@/components/ui/button";
import { Page, CodeReward } from "@/types/landing";
import Header from "../components/header";
import Footer from "../components/footer";
import dynamic from 'next/dynamic'

const YouTube = dynamic<any>(
  async () => {
    const module = await import('react-youtube')
    return module.default
  },
  { 
    ssr: false,
    loading: () => (
      <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden bg-gray-100 animate-pulse" />
    )
  }
)

export default function Codes({ page }: { page: Page }) {
  if (!page.codes) return null;
  
  const { title, howTo, activeCodes, expiredCodes, tips, traitTypes } = page.codes;

  return (
    <>
      {page.header && <Header header={page.header} />}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center mb-8">{title}</h1>
          
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">{howTo.title}</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {howTo.description2}
              </p>
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-xl mb-8">
                <YouTube
                  videoId={howTo.videoId}
                  opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: {
                      autoplay: 0,
                      modestbranding: 1,
                      rel: 0,
                    },
                  }}
                  className="w-full h-full"
                />
              </div>
              
              <p className="text-lg text-muted-foreground mb-6">
                {howTo.description}
              </p>
              
              {howTo.image && (
                <img 
                  src={howTo.image.src} 
                  alt={howTo.image.alt}
                  className="w-full rounded-lg shadow-lg mb-6"
                />
              )}
              
              <div className="bg-card rounded-lg p-6 space-y-4">
                <ol className="list-decimal list-inside space-y-2">
                  {howTo.steps.map((step: string, index: number) => (
                    <li key={`step-${index}`}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Active Codes</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {page.codes.activeCodesDescription}
              </p>
              <div className="bg-card rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-6 py-3 text-left">Code</th>
                      <th className="px-6 py-3 text-left">Reward</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {activeCodes.map((code: CodeReward, index: number) => (
                      <tr key={`active-${code.code}-${index}`} className="hover:bg-muted/50">
                        <td className="px-6 py-4 font-mono">{code.code}</td>
                        <td className="px-6 py-4">{code.reward}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Expired Codes</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {page.codes.inactiveCodesDescription}
              </p>
            
              <div className="bg-card rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-6 py-3 text-left">Code</th>
                      <th className="px-6 py-3 text-left">Previous Reward</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {expiredCodes.map((code: CodeReward, index: number) => (
                      <tr key={`expired-${code.code}-${index}`} className="hover:bg-muted/50">
                        <td className="px-6 py-4 font-mono">{code.code}</td>
                        <td className="px-6 py-4">{code.reward}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="space-y-4 mb-12">
              <h2 className="text-2xl font-bold">Tips for Using Codes</h2>
              <ul className="list-disc list-inside space-y-2">
                {tips.map((tip: string, index: number) => (
                  <li key={`tip-${index}`}>{tip}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 mb-12">
              <h2 className="text-2xl font-bold">Spongebob Tower Defense code rewards and their usage</h2>
              {page.codes.usageImage && (
                <img 
                  src={page.codes.usageImage.src}
                  alt={page.codes.usageImage.alt}
                  className="w-full rounded-lg shadow-lg mb-6"
                />
              )}
              <p className="text-lg text-muted-foreground mb-6">
                {page.codes.usageDescription}
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                {page.codes.usageDescription1}
              </p>
              <ul className="list-disc list-inside space-y-2">
                {traitTypes.map((traitType: string, index: number) => (
                  <li key={`traitType-${index}`}>{traitType}</li>
                ))}
              </ul>
            </div>
            <div className="space-y-4 mb-12">
              <h2 className="text-2xl font-bold">Here’s how to fix issues with SpongeBob Tower Defense codes</h2>
              {page.codes.fixImage && (
                <img 
                  src={page.codes.fixImage.src}
                  alt={page.codes.fixImage.alt}
                  className="w-full rounded-lg shadow-lg mb-6"
                />
              )}
              <p className="text-lg text-muted-foreground mb-6">
              {page.codes.fixDescription1}

              </p>
              <p className="text-lg text-muted-foreground mb-6">
              {page.codes.fixDescription2}
              </p>
            </div>
            <div className="space-y-4 mb-12">
              <h2 className="text-2xl font-bold">Where to find new SpongeBob Tower Defense codes</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {page.codes.findDescription1}
              </p>
              
              <div className="flex flex-col space-y-4">
                {page.codes.socialLinks.map((link, index) => (
                  <a
                    key={`social-${index}`}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary hover:underline"
                  >
                    <span>{link.icon}</span>
                    <span>{link.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      {page.footer && <Footer footer={page.footer} />}
    </>
  );
} 