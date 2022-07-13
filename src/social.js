/**
 * @file social.js
 * @author Charles Kellogg
 * 
 * Display list of social links
 */

import LinkBox from "./linkBox";

/**
 * Display social links
 * 
 * @returns The Social component
 */
function Social() {
    return(
        <div>
            <div className="linkGridSpacer" />
            <h1 className="linkGridHead">Social:</h1>
            <section className="linkGrid">
                <LinkBox name="Twitter" id="twitter" link="https://twitter.com/sweetheart_char" />
                <LinkBox name="Instagram" id="instagram" link="https://www.instagram.com/charlie.kellogg/" />
                <LinkBox name="TikTok" id="tiktok" link="https://www.tiktok.com/@absolute_sweetheart" />
                <LinkBox name="Discord" id="discord" link="https://www.discordapp.com/users/417034424262197258" />
            </section>
        </div>
    );
}

export default Social;
