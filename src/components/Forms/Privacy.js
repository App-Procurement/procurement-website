// import * as React from 'react';
// // import Layout from '../../components/layout';
// import styled from 'styled-components';
// // import SEO from '../../components/seo.js';
// import { Helmet } from 'react-helmet';
// import '../../css/tabs.css';

// export class Privacypolicy extends React.Component {
//   componentDidMount() {
//     window.scrollTo(0, 0);
//   }

//   render() {
//     return (
//       <div className='bg-lightgrey'>
//         <PrivacyWrapper>
//           <Helmet>
//             <link
//               rel='canonical'
//               href='https://synectiks.com/privacy-policy/index.html'
//             />
//           </Helmet>
//           {/* <SEO
//             title='SYNECTIKS - Privacy Policy'
//             description='This Privacy Policy describes how Synectiks Inc. and its affiliates ("Synectiks," "we," "our" or "us") collect, use and share information in connection with your use of our websites (including www.synectiks.com), services and applications (collectively, the "Services"). This Privacy Policy (the "Privacy Policy") does not apply to information our customers may process when using our Services.'
//           /> */}

//           <div className='text-black w-100 px-4 text-justify'>
//             <div className='pvt-top-bg'>
//               <p className='w-100 pt-3'>
//                 <h1>SYNECTIKS - Privacy Policy</h1>
//               </p>
//               {/* <p>Revision Date: November 22, 2018</p> */}
//               <p>
//                 This Privacy Policy describes how Synectiks Inc. and its
//                 affiliates ("Synectiks," "we," "our" or "us") collect, use and
//                 share information in connection with your use of our websites
//                 (including www.synectiks.com), services and applications
//                 (collectively, the "Services"). This Privacy Policy (the
//                 "Privacy Policy") does not apply to information our customers
//                 may process when using our Services.
//               </p>
//               <p>
//                 We may collect and receive information about users of our
//                 Services ("users," "you," or "your") from various sources,
//                 including: (i) information you provide through your user account
//                 on the Services (your "Account") if you register for the
//                 Services; (ii) your use of the Services; and (iii) from
//                 third-party websites, services and partners.
//               </p>
//               <p>
//                 We recommend that you read this Privacy Policy in full to ensure
//                 you are fully informed. If you have any questions about this
//                 Privacy Policy or Synectiks data collection, use and disclosure
//                 practices, please contact us at
//                 <a href='mailto:info@synectiks.com' rel='nofollow'>
//                   info@synectiks.com.
//                 </a>
//               </p>
//             </div>
//             <div className='pvt-bg'>
//               <p>
//                 <ol type='1'>
//                   <h3>
//                     <li className='text-left'>Information We Collect</li>
//                   </h3>
//                   <ol type='i'>
//                     <h5>
//                       <li>Site Activity Data</li>
//                     </h5>
//                     <p>
//                       Each time a visitor comes to this website, our web server
//                       collects and logs certain information. These access logs
//                       are kept for a reasonable period of time. These logs
//                       include, but are not restricted to, your machine’s TCP/IP
//                       address, your username (if applicable), date, time and
//                       files accessed. These logs are used solely for
//                       performance, usability, site administration, security
//                       reviews and to help improve the experience of visitors to
//                       our site. They are not sold or shared in any way to
//                       third-party organizations.
//                     </p>
//                     <h5>
//                       <li>Cookies &amp; Similar Technologies</li>
//                     </h5>
//                     <p>
//                       Cookies are small text files placed on your device to
//                       store data that can be recalled by a web server in the
//                       domain that placed the cookie. This data often consists of
//                       a string of numbers and letters that uniquely identifies
//                       your computer, but it can contain other information as
//                       well. Some cookies are placed by third parties acting on
//                       our behalf. We use cookies and similar technologies to
//                       store and honor your preferences and settings, enable you
//                       to sign-in, provide interest-based advertising, combat
//                       fraud, analyze how our products perform and fulfill other
//                       legitimate purposes described below. Our website and
//                       applications also contain web beacons or other similar
//                       technologies, as described below.
//                     </p>
//                     <p>
//                       Synectiks uses cookies and similar technologies for
//                       several purposes, depending on the context or product,
//                       including:
//                     </p>
//                     <p>
//                       <ul>
//                         <li>
//                           <b>Security:&nbsp;</b> We use cookies to process the
//                           information that helps us secure our products, as well
//                           as detect fraud and abuse.
//                         </li>
//                         <li>
//                           <b>Storing Information:&nbsp;</b>We use cookies to
//                           remember the information you shared. When you provide
//                           information to Synectiks, for example when you fill
//                           out a contact form on our website, we store the data
//                           in a cookie for the purpose of remembering the
//                           information you’ve filled out, so that you don’t have
//                           to fill again for future downloads.
//                         </li>
//                         <li>
//                           <b>Social Media:&nbsp;</b>Some of our websites include
//                           social media cookies, including those that enable
//                           users who are logged in to the social media service to
//                           share content via that service.
//                         </li>
//                         <li>
//                           <b>Feedback:&nbsp;</b>Synectiks uses cookies to enable
//                           you to provide feedback on a website.
//                         </li>
//                         <li>
//                           <b>Interest-Based Advertising.</b>Synectiks uses
//                           cookies to collect data about your online activity and
//                           identify your interests so that we can provide
//                           advertising that is the most relevant to you.
//                         </li>
//                         <li>
//                           <b>Analytics:&nbsp;</b>We use first- and third-party
//                           cookies and other identifiers to gather usage and
//                           performance data. For example, we use cookies to count
//                           the number of unique visitors to a web page or service
//                           and to develop other statistics about the operations
//                           of our products.
//                         </li>
//                         <li>
//                           <b>Performance:&nbsp;</b>Synectiks uses cookies to
//                           understand and improve how our products and website
//                           perform. For example, we use cookies to gather data
//                           that helps with load balancing; this helps to ensure
//                           that our websites remain up and running.
//                         </li>
//                       </ul>
//                     </p>
//                     <p>
//                       Third parties can also set cookies when you visit
//                       Synectiks websites. For example:
//                     </p>
//                     <p>
//                       <ul>
//                         <li>
//                           Companies we hire to provide services on our behalf,
//                           such as site analytics, place cookies when you visit
//                           our sites. See opt-out links below.
//                         </li>
//                         <li>
//                           Companies that deliver content, such as videos or
//                           news, place cookies on their own. These companies use
//                           the data they process in accordance with their privacy
//                           policies, which may enable these companies to collect
//                           and combine information about your activities across
//                           websites, apps, or online services.
//                         </li>
//                       </ul>
//                     </p>
//                     <h5>
//                       <li>How to Control Cookies</li>
//                     </h5>
//                     <p>
//                       Most web browsers automatically accept cookies but provide
//                       controls that allow you to block or delete them. Please
//                       refer to your browser’s privacy or help documentation to
//                       find Instructions for blocking or deleting cookies in
//                       other browsers.
//                     </p>
//                   </ol>
//                   <h3>
//                     <li>Information You Provide</li>
//                   </h3>
//                   <ol type='i'>
//                     <p>
//                       <li>
//                         <b>Account Registration:&nbsp;</b> When you register for
//                         an Account, we may ask for your contact information,
//                         including items such as name, company name, address,
//                         email address and telephone number. If you choose to
//                         refer a friend to our Services, we may also collect your
//                         friend’s email address so that we may send them a
//                         referral or promotional code to sign up for our
//                         Services.
//                       </li>
//                     </p>
//                     <p>
//                       <li>
//                         <b>Payment Information:&nbsp;</b>
//                         When you add your financial account information to your
//                         Account, that information is directed to our third-party
//                         payment processor. We do not store your financial
//                         account information on our systems; however, we have
//                         access to and may retain, subscriber information through
//                         our third-party payment processor.
//                       </li>
//                     </p>
//                     <p>
//                       <li>
//                         <b>Communications:&nbsp;</b>
//                         If you contact us directly, we may receive additional
//                         information about you such as your name, email address,
//                         phone number, the contents of the message and/or
//                         attachments you may send us and any other information
//                         you may choose to provide. We may also receive a
//                         confirmation when you open an email from us.
//                       </li>
//                     </p>
//                     <p>
//                       The personal information that you are asked to provide and
//                       the reasons why you are asked to provide it, will be made
//                       clear to you at the point we ask you to provide your
//                       personal information.
//                     </p>
//                   </ol>
//                   <h3>
//                     <li>How We Use Information</li>
//                   </h3>
//                   <p>
//                     We use the information we collect in various ways, including
//                     to:
//                   </p>
//                   <p>
//                     <ul>
//                       <li>Provide, operate and maintain our Services;</li>
//                       <li>Improve, personalize and expand our Services;</li>
//                       <li>Understand and analyze how you use our Services;</li>
//                       <li>
//                         Develop new products, services, features and
//                         functionality;
//                       </li>
//                       <li>
//                         Communicate with you, either directly or through one of
//                         our partners, including for customer service, to provide
//                         you with updates and other information relating to the
//                         Service and for marketing and promotional purposes;
//                       </li>
//                       <li>Process your transactions;</li>
//                       <li>Send you text messages and push notifications;</li>
//                       <li>Find and prevent fraud; and</li>
//                       <li>
//                         For compliance purposes, including enforcing our Terms
//                         of Service, or other legal rights, or as may be required
//                         by applicable laws and regulations or requested by any
//                         judicial process or governmental agency.
//                       </li>
//                     </ul>
//                   </p>
//                   <h3>
//                     <li>How We Share Information</li>
//                   </h3>
//                   <p>
//                     We may share the information we collect in various ways,
//                     including the following:
//                   </p>
//                   <p>
//                     <b>Vendors and Service Providers:</b> We may share
//                     information with third-party vendors and service providers
//                     that provide services on our behalf, such as helping to
//                     provide our Services, for promotional and/or marketing
//                     purposes and to provide you with information relevant to you
//                     such as product announcements, software updates, special
//                     offers, or other information.
//                   </p>
//                   <p>
//                     <b>Aggregate Information:</b> Where legally permissible, we
//                     may use and share information about users with our partners
//                     in aggregated or de-identified form that can’t reasonably be
//                     used to identify you.
//                   </p>
//                   <p>
//                     <b>Third-Party Partners:</b> We also share information about
//                     users with third-party partners in order to receive
//                     additional publicly available information about you.
//                   </p>
//                   <p>
//                     <b>
//                       Information We Share When You Sign Up Through a Referral.
//                     </b>
//                     If you sign up for our Services through a referral from a
//                     friend, we may share information with your referrer to let
//                     them know that you used their referral to sign up for our
//                     Services.
//                   </p>
//                   <p>
//                     <b>Business Transfers:</b>Information may be disclosed and
//                     otherwise transferred to any potential acquirer, successor,
//                     or assignee as part of any proposed merger, acquisition,
//                     debt financing, sale of assets, or similar transaction, or
//                     in the event of insolvency, bankruptcy, or receivership in
//                     which information is transferred to one or more third
//                     parties as one of our business assets.{' '}
//                   </p>
//                   <p>
//                     <b>As Required By Law and Similar Disclosures.</b>We may
//                     also share information to (i) satisfy any applicable law,
//                     regulation, legal process, or governmental request; (ii)
//                     enforce this Privacy Policy and our Terms of Service,
//                     including investigation of potential violations hereof;
//                     (iii) detect, prevent, or otherwise address fraud, security,
//                     or technical issues; (iv) respond to your requests; or (v)
//                     protect our rights, property or safety, our users and the
//                     public. This includes exchanging information with other
//                     companies and organizations for fraud protection and
//                     spam/malware prevention.
//                   </p>
//                   <p>
//                     <b>With Your Consent:</b>We may share information with your
//                     consent.
//                   </p>
//                   <h3>
//                     <li>Our Use of Web Analytics Services</li>
//                   </h3>
//                   <p>
//                     Synectiks website uses technologies from third-party
//                     analytics providers, which help us compile aggregated
//                     statistics about the effectiveness of our promotional
//                     campaigns or other operations. These technologies enable the
//                     analytics providers to set or read their own cookies or
//                     other identifiers on your device, through which they can
//                     collect information about your online activities across
//                     applications, websites or other products. However, we
//                     prohibit these analytics providers from using web beacons on
//                     our sites to collect or access information that directly
//                     identifies you (such as your name or email address). You can
//                     opt out of data collection or use by some of these analytics
//                     providers by clicking the following links:
//                   </p>
//                   <p>
//                     <ol>
//                       <li>
//                         Google Analytics:
//                         <a
//                           rel='noopener noreferrer'
//                           href='https://tools.google.com/dlpage/gaoptout'
//                           target='_blank'>
//                           https://tools.google.com/dlpage/gaoptout
//                         </a>
//                       </li>
//                       <li>
//                         Facebook:
//                         <a
//                           rel='noopener noreferrer'
//                           href='https://www.facebook.com/help/568137493302217'
//                           target='_blank'>
//                           https://www.facebook.com/help/568137493302217
//                         </a>
//                       </li>
//                       <li>
//                         LinkedIn:
//                         <a
//                           rel='noopener noreferrer'
//                           href='https://www.linkedin.com/legal/cookie-policy'
//                           target='_blank'>
//                           https://www.linkedin.com/legal/cookie-policy
//                         </a>
//                       </li>
//                       <li>
//                         Google AdWords:
//                         <a
//                           rel='noopener noreferrer'
//                           href='https://policies.google.com/technologies/ads'
//                           target='_blank'>
//                           https://policies.google.com/technologies/ads
//                         </a>
//                       </li>
//                       <li>
//                         Outbrain Inc.:
//                         <a
//                           rel='noopener noreferrer'
//                           href='https://www.outbrain.com/legal/privacy'
//                           target='_blank'>
//                           https://www.outbrain.com/legal/privacy
//                         </a>
//                       </li>
//                       <li>
//                         Marketo:
//                         <a
//                           rel='noopener noreferrer'
//                           href='https://documents.marketo.com/legal/cookies'
//                           target='_blank'>
//                           https://documents.marketo.com/legal/cookies
//                         </a>
//                       </li>
//                     </ol>
//                   </p>
//                   <h3>
//                     <li>Advertising</li>
//                   </h3>
//                   <p>
//                     Advertising allows us to provide, support and improve some
//                     of our products. Synectiks does not use what you say in
//                     email, chat, video calls or voice mail, or your documents,
//                     photos or other personal files to target ads to you. We use
//                     other data, detailed below, for advertising in our products
//                     and on third-party properties. For example:
//                   </p>
//                   <p>
//                     We may share data we collect with third parties, such as
//                     Marketo, Google Analytics, or Facebook (see below), so that
//                     the ads you see in other sites and apps serviced by these
//                     partners are more relevant and valuable to you.
//                   </p>
//                   <p>
//                     The ads that you see may be selected based on data we
//                     process about you, such as your interests and favorites,
//                     your location, or the content you view.
//                   </p>
//                   <p>
//                     The ads that you see may also be selected based on other
//                     information learned about you over time using demographic
//                     data, location data, search queries, interests and
//                     favorites, usage data from our products and sites, as well
//                     as the sites and apps of our advertisers and partners. We
//                     refer to these ads as “interest-based advertising” in this
//                     statement.
//                   </p>
//                   <h3>
//                     <li>Legal Basis for Processing Personal Information</li>
//                   </h3>
//                   <p>
//                     Synectiks will only use your personal information when the
//                     law allows us to. Most commonly, we will use your personal
//                     information in the following circumstances:
//                   </p>
//                   <p>
//                     <ul>
//                       <li>
//                         Where Synectiks needs to perform the contract, we are
//                         about to enter into or have entered into with you;
//                       </li>
//                       <li>
//                         Where it is necessary for Synectiks' legitimate
//                         interests (or those of a third party) and your interests
//                         and fundamental rights do not override those interests;
//                         and
//                       </li>
//                       <li>
//                         Where Synectiks needs to comply with a legal or
//                         regulatory obligation.
//                       </li>
//                     </ul>
//                   </p>
//                   <h3>
//                     <li>Third-party Services</li>
//                   </h3>
//                   <p>
//                     You may access other third-party services through the
//                     Services, for example by clicking on links to those
//                     third-party services from within the Services. We are not
//                     responsible for the privacy policies and/or practices of
//                     these third-party services and we encourage you to carefully
//                     review their privacy policies.
//                   </p>
//                   <h3>
//                     <li>Security</li>
//                   </h3>
//                   <p>
//                     Synectiks is committed to protecting your information. To do
//                     so, we employ a variety of security technologies and
//                     measures designed to protect information from unauthorized
//                     access, use, or disclosure. The measures we use are designed
//                     to provide a level of security appropriate to the risk of
//                     processing your personal information. However, please bear
//                     in mind that the Internet cannot be guaranteed to be 100%
//                     secure.
//                   </p>
//                   <h3>
//                     <li>Data Retention</li>
//                   </h3>
//                   <p>
//                     We retain personal information we collect from you where we
//                     have an ongoing legitimate business need to do so (for
//                     example, to provide you with a service you have requested or
//                     to comply with applicable legal, tax, or accounting
//                     requirements).
//                   </p>
//                   <p>
//                     When we have no ongoing legitimate business need to process
//                     your personal information, we will either delete or
//                     anonymize it or, if this is not possible (for example,
//                     because your personal information has been stored in backup
//                     archives), then we will securely store your personal
//                     information and isolate it from any further processing until
//                     deletion is possible.
//                   </p>
//                   <h3>
//                     <li>Access</li>
//                   </h3>
//                   <p>
//                     If you are a registered user, you may access certain
//                     information associated with your Account by logging into our
//                     Services or emailing
//                     <a href='mailto:info@synectiks.com' rel='nofollow'>
//                       info@synectiks.com
//                     </a>
//                     . If you terminate your Account, any public activity on your
//                     Account prior to deletion may remain stored on our servers
//                     and may remain accessible to the public.
//                   </p>
//                   <p>
//                     To protect your privacy and security, we may also take
//                     reasonable steps to verify your identity before updating or
//                     removing your information. The information you provide us
//                     may be archived or stored by us periodically according to
//                     backup processes conducted in the ordinary course of
//                     business for disaster recovery purposes. Your ability to
//                     access and correct your information may be temporarily
//                     limited where access and correction could: inhibit
//                     Synectiks' ability to comply with a legal obligation;
//                     inhibit Synectiks' ability to investigate, make or defend
//                     legal claims result in disclosure of personal information
//                     about a third party or result in breach of a contract or
//                     disclosure of trade secrets or other proprietary business
//                     information belonging to Synectiks or a third party.
//                   </p>
//                   <h3>
//                     <li>Your Choices</li>
//                   </h3>
//                   <p>
//                     You can use some of the features of the Services without
//                     registering, thereby limiting the type of information that
//                     we collect.
//                   </p>
//                   <p>
//                     You may unsubscribe from receiving certain promotional
//                     emails from us. If you wish to do so, simply follow the
//                     instructions found at the end of the email. Even if you
//                     unsubscribe, we may still contact you for informational,
//                     transactional, account-related, or similar purposes.
//                   </p>
//                   <p>
//                     Many browsers have an option for disabling cookies, which
//                     may prevent your browser from accepting new cookies or
//                     enable selective use of cookies. Please note that, if you
//                     choose not to accept cookies, some features and the
//                     personalization of our Services may no longer work for you.
//                     You will continue to receive advertising material but it
//                     will not be tailored to your interests.
//                   </p>
//                   <h3>
//                     <li>Children's Privacy</li>
//                   </h3>
//                   <p>
//                     Synectiks does not knowingly collect information from
//                     children under the age of 13 and children under 13 are
//                     prohibited from using our Services. If you learn that a
//                     child has provided us with personal information in violation
//                     of this Privacy Policy, you can alert us at
//                     <a href='mailto:info@synectiks.com' rel='nofollow'>
//                       info@synectiks.com
//                     </a>
//                     .
//                   </p>
//                   <h3>
//                     <li>International Data Transfers</li>
//                   </h3>
//                   <p>
//                     Synectiks is a global business. We may transfer personal
//                     information to countries other than the country in which the
//                     data was originally collected. These countries may not have
//                     the same data protection laws as the country in which you
//                     initially provided the information. When we transfer your
//                     personal information to other countries, we will protect
//                     that information as described in this Privacy Policy.
//                   </p>
//                   <h3>
//                     <li>Changes to this Privacy Policy</li>
//                   </h3>
//                   <p>
//                     This Privacy Policy may be modified from time to time, so
//                     please review it frequently. Changes to this Privacy Policy
//                     will be posted on our websites. If we materially change the
//                     ways in which we use or share personal information
//                     previously collected from you through our Services, we will
//                     notify you through our Services, by email, or other
//                     communication.
//                   </p>
//                   <h3>
//                     <li>Contact Us</li>
//                   </h3>
//                   <p>
//                     If you have any questions or concerns about this Privacy
//                     Policy, please feel free to email us at&nbsp;{' '}
//                     <a href='mailto:info@synectiks.com' rel='nofollow'>
//                       info@synectiks.com
//                     </a>
//                     .
//                   </p>
//                   <p>
//                     The data controller of your personal information is
//                     Synectiks Inc.
//                   </p>
//                 </ol>
//               </p>
//             </div>
//           </div>
//         </PrivacyWrapper>
//       </div>
//     );
//   }
// }

// export default Privacypolicy;

// const PrivacyWrapper = styled.div`
//   p {
//     text-align: left;
//   }
//   ol,
//   ul {
//     padding: 0rem;
//   }
//   padding: 2rem 0rem;
//   @media (min-width: 576px) {
//     padding: 2rem 4rem;
//     ul,
//     ol {
//       padding: 0rem 1rem;
//     }
//   }
// `;
