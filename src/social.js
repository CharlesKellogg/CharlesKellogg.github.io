/**
 * @file social.js
 * @author Charles Kellogg
 * 
 * Display list of social links
 */

 import LinkBox from "./linkBox";

 /**
  * Display social links
  * @returns The Social component
  */
 function Social() {
     return(
         <div>
             <div className="linkGridSpacer" />
             <h1 className="linkGridHead">Social:</h1>
             <section className="linkGrid">
                 <LinkBox name="Twitter" link="https://twitter.com/sweetheart_char" />
                 <LinkBox name="Instagram" link="https://www.instagram.com/charlie.kellogg/" />
                 <LinkBox name="TikTok" link="https://www.tiktok.com/@absolute_sweetheart" />
                 <LinkBox name="Discord" link="https://www.discordapp.com/users/417034424262197258" />
             </section>
         </div>
     );
 }
 
 export default Social;
 