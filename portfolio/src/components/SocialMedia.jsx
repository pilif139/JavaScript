import React from 'react'
import { SocialIcon } from 'react-social-icons'
import './styles/SocialMedia.css'

export default function SocialMedia() {
  return (
    <div className='social-media' >
        <SocialIcon url="https://github.com/pilif139" target='blank'/><a href="https://github.com/pilif139" target='blank'>Github</a>
        <SocialIcon url="https://www.instagram.com/pilif____/" target='blank'/><a href="https://www.instagram.com/pilif____/" target='blank'>Instagram</a>
        <SocialIcon url="https://open.spotify.com/user/nurrs6jhrmtg1s354kv2xyclc" target='blank'/><a href="https://open.spotify.com/user/nurrs6jhrmtg1s354kv2xyclc" target='blank'>Spotify</a>
        <SocialIcon url="https://twitter.com/pilifffy" target='blank'/><a href="https://twitter.com/pilifffy" target='blank'>Twitter</a>
    </div>
  )
}
