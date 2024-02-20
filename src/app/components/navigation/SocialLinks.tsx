import { SlSocialInstagram, SlSocialTwitter, SlEnvolope } from "react-icons/sl";

export default function SocialLinks() {
    return (
        <>
            <nav aria-label="Social Links" className="socialFooterLinks">
                <a href="https://www.instagram.com/alpharedux" target="_blank" aria-label="Instagram Page for AlphaRedux, opens in new window" >
                    <SlSocialInstagram />
                </a>
                <a href="https://twitter.com/_alpharedux_" target="_blank" aria-label="Twitter Page for AlphaRedux, opens in new window">
                    <SlSocialTwitter />
                </a>
                <a href="mailto:alphareduxgaming@gmail.com" aria-label="Email AlphaRedux, opens in native Mail App" >
                    <SlEnvolope />
                </a>
            </nav>
        </>
    )
};