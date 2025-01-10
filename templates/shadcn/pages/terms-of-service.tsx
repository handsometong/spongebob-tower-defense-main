'use client'

import { Page } from "@/types/landing";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export default function TermsOfService({ page }: { page: Page }) {
  if (!page.termsOfService) return null;

  const { title, sections, lastUpdated } = page.termsOfService;

  const renderContent = (content: string) => (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  );

  return (
    <>
      {page.header && <Header header={page.header} />}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-3xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
              <Link 
                href="/" 
                className="flex items-center gap-1 hover:text-primary transition-colors"
              >
                <Home className="h-4 w-4" />
                Home
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-primary">Terms of Service</span>
            </nav>
            
            <div className="prose prose-sm max-w-none">
              <h1>{title}</h1>
              <p>Last updated: {lastUpdated}</p>
              
              {sections.map((section, index) => (
                <div key={index}>
                  <h2>{section.title}</h2>
                  {section.content && renderContent(section.content)}
                  
                  {section.subsections?.map((subsection, idx) => (
                    <div key={idx}>
                      <h3>{subsection.title}</h3>
                      {subsection.content && renderContent(subsection.content)}
                      {subsection.items && (
                        <ul>
                          {subsection.items.map((item, itemIdx) => (
                            <li key={itemIdx} dangerouslySetInnerHTML={{ __html: item }} />
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                  
                  {section.items && (
                    <ul>
                      {section.items.map((item, idx) => (
                        <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      {page.footer && <Footer footer={page.footer} />}
    </>
  );
} 