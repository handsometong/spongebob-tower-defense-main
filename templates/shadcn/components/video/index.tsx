'use client'

import { Video as VideoType } from "@/types/landing";
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

interface VideoProps {
  video: VideoType;
}

const VideoSection = ({ video }: VideoProps) => {
  return (
    <div id={video.id} className="bg-gradient-to-t from-zinc-50 to-white dark:from-zinc-950 dark:to-black relative">
      <div className="absolute bg-[url('/_convertfast/gradient-bg-0.svg')] bg-auto bg-no-repeat z-0 inset-0 top-0 bottom-0 left-0 right-0 grayscale"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary mb-6 drop-shadow-md">
            {video.title}
          </h2>
          {video.description && (
            <p className="text-xl text-muted-foreground mb-8">
              {video.description}
            </p>
          )}
        </div>

        <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
          <YouTube
            videoId={video.youtubeId}
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
      </div>
    </div>
  );
}

export default VideoSection; 