import React from 'react'
import { SocialIcon } from 'react-social-icons'
import './SocialMedia.css'

export default function SocialMedia() {
  return (
    <div className='social-media' >
        <SocialIcon url="https://github.com/pilif139" target='blank'/><span>Github</span>
        <SocialIcon url="https://www.instagram.com/pilif____/" target='blank'/><span>Instagram</span>
        <SocialIcon url="https://open.spotify.com/user/nurrs6jhrmtg1s354kv2xyclc" target='blank'/><span>Spotify</span>
        <SocialIcon url="https://twitter.com/pilifffy" target='blank'/><span>Twitter</span>
    </div>
  )
}
