import React from 'react'
import { SOCIAL_MEDIA_LINKS} from '../constants'

const Footer = () => {
  return (
    <div className="mb-8 mt-20">
        <div className="flex items-center justify-center">
            <figure>
                <div className='mb-10 h-3 w-12 bg-yellow-400'></div>
            </figure>

        </div>
        <div className="flex items-center justify-center gap-8">
            {SOCIAL_MEDIA_LINKS.map((link,index)=>(
                <a key={index} href={link.href} target="_blank"rel="noopener noreferrer">
                    {link.icon}
                </a>
            ))}
        </div>
        <p></p>
    </div>
  )
}

export default Footer