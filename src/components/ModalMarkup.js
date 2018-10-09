import React from 'react';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';
import thlLogo from '../assets/svg/THL18-horiz-logo-white.svg';
import { H1, H2, P } from '../styles/styledComponents/elements';

import { Button } from '../styles/styledComponents/elements';

const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 90%;
  max-width: 40rem;
  height: 100%;
  padding: 3em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: 'Raleway';
  transform: none;

  p {
    width: 100%;
    font-weight: 500;
    font-size: 1.2em;
    line-height: 1.5;
  }
`;

const ShortHR = styled.hr`
  background: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.6);
  width: 95%;
  max-width: 10em;
`;

const Intro = styled.h4`
  text-align: center;
  line-height: 1.8;
  font-size: 1.2rem;
  margin: 0 0 1.45rem;
  font-weight: 700;
`;

export const AboutTHLMarkup = (
  <FlexCenter>
    <Container className="container--aboutTHL">
      <SVG style={{
        width: '75%',
        maxWidth: '450px'
      }} src={thlLogo} />
      <ShortHR />
      <Intro>
        The Humane League’s mission is to reduce the suffering of as many
        animals as possible, as effectively as possible.
      </Intro>
      <P>
        We work to reform the way farm animals are treated while also inspiring
        people to make more compassionate food choices. Our strategy includes
        hard-hitting corporate campaigns and wide-ranging outreach and education
        programs, supported by an extensive network of organizations, activists
        and supporters around the world.
      </P>
      <br />
      <br />
      <P>
        In the US, we have on-the-ground organizers in major cities across the
        country. These grassroots staff build and strengthen local communities
        of changemakers that support our work and spread our message, amplifying
        our ability to create meaningful change for farm animals.
      </P>
      <br />
      <br />
      <P>
        Internationally, we have offices in Mexico, the UK and Japan, where we
        are engaged in region-specific initiatives that are creating positive
        results. Our reach extends globally with the Open Wing Alliance.
      </P>
      <br />
      <Intro>
        Animals don’t have to suffer. Get involved to create the change.
      </Intro>
      <br />
      <a target="_blank" href="https://thehumaneleague.org/get-involved">
        <Button className="jqeSHb">Create change</Button>
      </a>
    </Container>
  </FlexCenter>
);
export const ContestRulesMarkup = (
  <FlexCenter>
    <Container>
      <H1 className="ezHLp">Official Rules</H1>
      <br />
      <br />
      <H2 className="lbxZsZ">NO PURCHASE NECESSARY TO ENTER OR WIN. VOID WHERE PROHIBITED. VALID IN THE 50 UNITED STATES, PUERTO RICO, GUAM, AND THE DISTRICT
OF COLUMBIA ONLY. ENTRY IN THIS CONTEST CONSTITUTES YOUR ACCEPTANCE OF THESE OFFICIAL RULES.</H2>
      <H2 style={{ color: '#EF4446', textAlign: 'left', width: '100%', marginBottom: '0.3em' }} className="lbxZsZ">ELIGIBILITY</H2>
      <P style={{ lineHeight: '2' }} className="jwaJmu">The McDonald’s Campaign Nationwide Art Show (“Art Show”) is open to all professional and amateur artists who have reached the age of majority in their jurisdiction of residence at the time of entry. Trustees, Board Members, Employees, interns, or partners of The Humane League (“THL”), as well as the immediate family (spouse, parents, siblings, and children) and household members of those employees, are not eligible to enter.</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">By submitting an entry to the Art Show, entrants certify that their participation in this Art Show is not illegal or in violation of any law, regulation, treaty, or administrative act, and that the laws of their governing jurisdiction of residence at the time of entry do not prohibit or restrict the receipt of any Prize under this Art Show.</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">The Humane League reserves the right to reject any entry if, in The Humane League’s sole discretion, the laws of an applicable jurisdiction, including but not limited to the entrant’s jurisdiction of residence at the time of entry, would prohibit or limit The Humane League from proceeding with the Art Show as intended or the consideration or awarding of any Prize would impose additional administrative, tax, operational, or legal burdens on The Humane League.</P>
      <H2 style={{ color: '#EF4446', textAlign: 'left', width: '100%', marginBottom: '0.3em' }} className="lbxZsZ">SPONSOR</H2>
      <P style={{ lineHeight: '2' }} className="jwaJmu">The McDonald’s Campaign Nationwide Art Show is sponsored by The Humane League, P.O. Box 10476, Rockville, MD  20849 (“Sponsor”).</P>
      <H2 style={{ color: '#EF4446', textAlign: 'left', width: '100%', marginBottom: '0.3em' }} className="lbxZsZ">ENTRY PERIOD</H2>
      <P style={{ lineHeight: '2' }} className="jwaJmu">The entry period for submissions to the Art Show begins at 12:00am on August 27, 2018, and ends at 11:59pm on September 25, 2018, Eastern Daylight Time (the “Entry Period”). Entries submitted before or after the Entry Period will not be eligible. Sponsor’s computer is the official time-keeping device for the Art Show.</P>
      <H2 style={{ color: '#EF4446', textAlign: 'left', width: '100%', marginBottom: '0.3em' }} className="lbxZsZ">VOTING PERIOD</H2>
      <P style={{ lineHeight: '2' }} className="jwaJmu">The public vote for the winners begins at 12:00am on September 26, 2018, and ends at 11:59pm Eastern Daylight Time on October 24, 2018 (the “Voting Period”). Votes submitted before or after the Voting Period will not be eligible. Sponsor’s computer is the official time-keeping device for the Art Show.</P>
      <H2 style={{ color: '#EF4446', textAlign: 'left', width: '100%', marginBottom: '0.3em' }} className="lbxZsZ">WHAT TO ENTER</H2>
      <P style={{ lineHeight: '2' }} className="jwaJmu">The Humane League’s mission is to reduce animal suffering by creating change at all levels. The McDonald’s Campaign Nationwide Art Show is meant to raise awareness about the extreme cruelty endured by broiler chickens in McDonald’s supply chain, and to hopefully push them to adopt a meaningful welfare policy.</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">The Humane League’s “I’m Not Lovin’ It” campaign highlights McDonald’s failure to address the practice of selectively breeding chickens to grow unnaturally large at a rapid rate, approximately six times faster than chickens grow naturally.  The Humane League is asking McDonald’s to implement higher, science-based animal welfare standards for the chickens in its supply chain by switching to healthier breeds of birds, providing more room for the chickens to move, monitoring air and litter quality, and providing environmental enrichments.  Visit our campaign site to learn more:  <a style={{ textDecoration: 'underline' }} target="_blank" href="https://imnotlovinit.com">https://imnotlovinit.com</a></P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">Submissions for the Art Show must relate to the cruel treatment of chickens raised for meat in McDonald’s supply chain.  Eligible mediums:  2-dimensional art, including photography, drawings, paintings, digital, and mixed media.</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu"><em>If you choose to include people in your submission, you are responsible for obtaining the necessary releases from the individuals depicted and must be able to provide copies of those releases to The Humane League upon request.</em></P>
      <P style={{ lineHeight: '2', fontWeight: 'bold' }} className="jwaJmu">The following submissions are ineligible:</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">Submissions that violate or infringe upon another person’s rights, including but not limited to copyright and photographs of persons without the necessary consent required by law in your jurisdiction. The Humane League reserves the right to require entrants to submit evidence of the subject’s legal consent to be photographed for any submitted photograph, which may include a signed waiver from the subject. NOTE: Waiver requirements vary by jurisdiction, and the entrant is responsible for obtaining a legally enforceable waiver from any photographed subject.</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">Images that involve the willful harassment of animals, or damage to the environment by the photographer/artist.</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">Images that involve putting any individual or animal in danger.</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">The Humane League shall determine entry eligibility in its sole and absolute discretion.</P>
      <H2 style={{ color: '#EF4446', textAlign: 'left', width: '100%', marginBottom: '0.3em' }} className="lbxZsZ">HOW TO ENTER</H2>
      <P style={{ lineHeight: '2' }} className="jwaJmu">NO PURCHASE NECESSARY TO ENTER OR WIN.  One high quality photo of your art must be submitted via email to <a style={{ textDecoration: 'underline' }} href="mailto:rblack@thehumaneleague.org">rblack@thehumaneleague.org.</a> Please include your name and contact information, including email address, with your submission.</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">One (1) submission per person. Sponsor reserves the right to reject any entries that do not comply with these Official Rules. By entering, you indicate your unconditional agreement to, and acceptance of, these Official Rules and Sponsor’s decisions, which are final and binding. You cannot win a prize unless you comply with all requirements in these Official Rules.</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">Entrants may be asked to supplement their submission with more explanation about the submission or to provide a higher resolution version of the photo anytime during the contest period.</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">Winners will be determined by online voting by the public on the submissions displayed on www.thehumaneleague.org starting September 26, 2018 through October 25, 2018.</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">One (1) Grand Prize winner, one (1) Second Place winner, and one (1) Third Place winner will be awarded.</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">All judging decisions are final. Please do not contact us about the status of entries or judging.</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">The Humane League will notify the winner via the contact information provided at the time of entry on October 29, 2018.</P>
      <H2 style={{ color: '#EF4446', textAlign: 'left', width: '100%', marginBottom: '0.3em' }} className="lbxZsZ">POTENTIAL WINNER REQUIREMENTS</H2>
      <P style={{ lineHeight: '2' }} className="jwaJmu">Except where prohibited, a potential winner may be required to complete and return an affidavit of eligibility, including proof of age, and liability/publicity release within 10 calendar days. If a potential winner fails to return these documents on time, an alternate potential winner may be selected in his/her place.</P>
      <H2 style={{ color: '#EF4446', textAlign: 'left', width: '100%', marginBottom: '0.3em' }} className="lbxZsZ">PRIZES</H2>
      <P style={{ lineHeight: '2' }} className="jwaJmu">The Humane League will award the following prizes:</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">All award winners will receive mention on The Humane League’s digital presences.</P>
      <P style={{ lineHeight: '2', fontWeight: 'bold' }} className="jwaJmu">One (1) Overall grand prize winner will receive:</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">Gift card from Herbivorous Butcher valued at $100 USD <br /> Total Value: $100 USD </P>
      <P style={{ lineHeight: '2', fontWeight: 'bold' }} className="jwaJmu">One (1) Second place winner will receive:</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">THL Swag Bag:  bumper sticker, t-shirt, pins, stickers, water bottle, tote bag <br /> Total Value: $55 USD </P>
      <P style={{ lineHeight: '2', fontWeight: 'bold' }} className="jwaJmu">One (1) Third place winner will receive:</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">THL T-shirt <br /> Total Value: $20 USD </P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">To the maximum extent permissible by law, all winners are responsible for paying any taxes and any and all other costs and expenses associated with claiming the awards, including but not limited to customs fees, taxes, and any other administrative costs, if applicable. If the prize value equals or exceeds $600, prior to the award of any prize the winner will need to complete, sign and return an IRS W-9 form and/or any applicable tax forms for awarding the prize in the winner’s jurisdiction. Any prize details not specified above will be determined by Sponsor, in its sole discretion. A prize may not be transferred and must be accepted as awarded. A winner may not request cash or a substitute prize; however, Sponsor reserves the right to substitute a prize with another prize of equal or greater value if the prize is not available for any reason, as determined by Sponsor, in its sole discretion.</P>
      <H2 style={{ color: '#EF4446', textAlign: 'left', width: '100%', marginBottom: '0.3em' }} className="lbxZsZ">YOUR RIGHTS</H2>
      <P style={{ lineHeight: '2', fontWeight: 'bold' }} className="jwaJmu">You will retain all rights to any art you submit—including ownership if applicable.</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">If you submit art to the Art Show, you grant The Humane League and its related entities such as affiliates and subsidiaries a royalty-free, non-exclusive right in perpetuity to:</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">Display the art on The Humane League websites.</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">Allow third parties to share the photograph on social media.
</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">Use the photograph on the Internet and in Social Media in support of our mission.</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">Use the photograph in The Humane League’s and its related entities’ internal and external communications materials including but not limited to web sites and web publications, fact sheets, fundraising publications, advertising, multimedia, presentation and membership services, and annual report.
Provide your photograph to other individuals and organizations for use related to THL and its related entities in news stories, social media, newsletters, reports, slide shows, displays, web pages, videos, membership premiums, and the like.
</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">Use, in connection with the Art Show, your name, city, state, and country of residence in promotions and other publications.</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">Retain a digital copy of your photograph that will be archived and accessible to The Humane League and its related entities’ staff via THL’s internal online photo archive.</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">The Humane League and its related entities will endeavor to credit all photographs with the credit “Person’s Name” when the full name is available.</P>
      <H2 style={{ color: '#EF4446', textAlign: 'left', width: '100%', marginBottom: '0.3em' }} className="lbxZsZ">GENERAL CONDITIONS</H2>
      <P style={{ lineHeight: '2' }} className="jwaJmu">In the event that the operation, security, or administration of the Art Show is impaired in any way, Sponsor may, in its sole discretion, either: (a) suspend the Art Show to address the impairment and then resume the Art Show; or (b) award the prize(s) from among the eligible entries received up to the time of the impairment. Sponsor reserves the right, in its sole discretion, to disqualify and seek damages from any individual who tampers with the operation of the Art Show, violates these Official Rules, or acts in a disruptive or unsportsmanlike manner. Sponsor’s failure to enforce any term of these Official Rules shall not constitute a waiver of that provision. Proof of sending any communication to Sponsor by mail shall not be deemed proof of receipt of that communication by Sponsor. In the event of a dispute as to the owner of an online entry, the authorized account holder of the e-mail address used to enter will be deemed to be the owner. The Art Show is subject to federal, state, and local laws and regulations and is void where prohibited.</P>
      <H2 style={{ color: '#EF4446', textAlign: 'left', width: '100%', marginBottom: '0.3em' }} className="lbxZsZ">RELEASE AND LIMITATIONS OF LIABILITY</H2>
      <P style={{ lineHeight: '2' }} className="jwaJmu">By entering, you agree to release and hold harmless Sponsor, their respective parent, subsidiaries, affiliates, and each of their respective officers, directors, employees, and agents (the “Released Parties”) from and against any claim or cause of action arising out of participation in the Art Show or receipt or use of any prize, including, but not limited to: (a) unauthorized human intervention in the Art Show; (b) technical errors; (c) printing errors; (d) late or undelivered mail; (e) errors in the administration of the Art Show; or (f) injury or damage to persons or property. You waive the right to claim any attorneys’ fees and any damages whatsoever, including, but not limited to, punitive, consequential, direct, or indirect damages.</P>
      <H2 style={{ color: '#EF4446', textAlign: 'left', width: '100%', marginBottom: '0.3em' }} className="lbxZsZ">E-SUPPORTER</H2>
      <P style={{ lineHeight: '2' }} className="jwaJmu">When you enter, you will automatically become an e-supporter of The Humane League. This includes special event invitations, digital messages, and a monthly e-newsletter. You may cancel and unsubscribe at any time.</P>
      <H2 style={{ color: '#EF4446', textAlign: 'left', width: '100%', marginBottom: '0.3em' }} className="lbxZsZ">PRIVACY AND PUBLICITY</H2>
      <P style={{ lineHeight: '2' }} className="jwaJmu">Any information you submit as part of the Art Show will be used in accordance with Sponsor’s Privacy Policy. The information you provide when you enter is provided to Sponsor. Except where prohibited, you consent to Sponsor’s use of your name in any list of winners (if applicable) and/or for promotional purposes in any media without further payment or consideration.</P>
      <H2 style={{ color: '#EF4446', textAlign: 'left', width: '100%', marginBottom: '0.3em' }} className="lbxZsZ">DISPUTES</H2>
      <P style={{ lineHeight: '2' }} className="jwaJmu">You agree that any and all disputes, claims and causes of action arising out of, or connected with, the Art Show or any prize awarded shall be resolved individually, without resort to any form of class action, and exclusively by the appropriate court located in Pennsylvania. All issues and questions concerning the construction, validity, interpretation and enforceability of these Official Rules, your rights and obligations, or the rights and obligations of Sponsor in connection with the Art Show, shall be governed by, and construed in accordance with, the laws of Pennsylvania, without giving effect to any choice of law or conflict of law rules (whether of Pennsylvania or any other jurisdiction), which would cause the application of the laws of any jurisdiction other than Pennsylvania.</P>
      <H2 style={{ color: '#EF4446', textAlign: 'left', width: '100%', marginBottom: '0.3em' }} className="lbxZsZ">WINNERS</H2>
      <P style={{ lineHeight: '2' }} className="jwaJmu">Winners will be announced on <a style={{ textDecoration: 'underline' }} href="https://www.thehumaneleague.org">www.thehumaneleague.org.</a> by 11:59pm Eastern Daylight Time on October 29, 2018.</P>
      <P style={{ lineHeight: '2' }} className="jwaJmu">To request a winners list by mail, send a self-addressed, stamped envelope with your request to The Humane League, McDonald’s Campaign Nationwide Art Show, P.O. Box 10476, Rockville, MD 20849. Requests must be received by November 29, 2018.</P>
      <H2 style={{ color: '#EF4446', textAlign: 'left', width: '100%', marginBottom: '0.3em' }} className="lbxZsZ">QUESTIONS</H2>
      <P style={{ lineHeight: '2' }} className="jwaJmu">Questions and inquiries about contest rules can be emailed to <a style={{ textDecoration: 'underline' }} href="mailto:rblack@thehumaneleague.org">rblack@thehumaneleague.org.</a></P>
    </Container>
  </FlexCenter>
);
