import { useState } from 'react'
import Image from 'next/image'

export const Video = () => {

  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  return (
    <div className='text-black font-[futura-bold] w-[85%] md:w-1/2 mx-auto mb-16 lg:mb-32'>
        {!isPlaying && <div className='relative mx-auto mt-16 mb-2 flex justify-center align-middle'>
          <Image src='/poster-juanpe.avif' alt='juanpe' width='1326' height='746' className="w-full" />
          <div className='absolute self-center' onClick={() => setIsPlaying(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" style={{ fill: '#ffffff', transform: 'scale(4)' }}>
              <circle r={12} cx={12} cy={12} fill={'#0000ff'} />
              <path d="M8 6v12l10-6z" />
            </svg>
          </div>
        </div>}
        {isPlaying && (
          <div className='relative w-full h-5/6 mx-auto mt-16 mb-2 flex justify-center align-middle'>
            <iframe width="1326" height="421" className='w-full' src="https://www.youtube.com/embed/9SbnhgjeyXA?si=8LvcV4n3keguwVH-" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        )}
        <p className='text-xs '>Why Ableton - Juanpe Bolivar</p>
      </div>
  )
}