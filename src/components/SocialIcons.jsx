import React from 'react'
import {FaTwitter, FaLinkedin, FaFacebook} from "react-icons/fa"
import { StyledSocialIcons } from './styled/SocialIcons.styled'

export const SocialIcons = () => {
    return (
        <StyledSocialIcons>
            <li>
                <a href="https://twitter.com">
                    <FaTwitter />
                </a>
            </li>

            <li>
                <a href="https://facebook.com">
                    <FaFacebook />
                </a>
            </li>

            <li>
                <a href="https://linkedin.com">
                    <FaLinkedin />
                </a>
            </li>
            
        </StyledSocialIcons>
    )
}
