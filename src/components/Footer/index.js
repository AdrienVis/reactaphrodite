import React from 'react'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink} from './FooterElements' 
const Footer = () => {
return(
<>
<FooterContainer>
<FooterWrap>
<FooterLinksContainer>
<FooterLinksWrapper>
<FooterLinkItems>
<FooterLinkTitle>
<FooterLink to="/about us">Footer</FooterLink>
</FooterLinkTitle>
</FooterLinkItems>
</FooterLinksWrapper>
</FooterLinksContainer>
</FooterWrap>
</FooterContainer>
</>
)
}

export default Footer
