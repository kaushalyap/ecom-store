import HeadingPage from '../components/HeadingPage/HeadingPage';
import HeadingSection from '../components/HeadingSection/HeadingSection';
import Layout from '../components/Layout';
import SEO from '../components/SEO/SEO';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <main className="lg:mx-auto lg:w-2/3 xl:w-2/5">
        <HeadingPage>Privacy Policy</HeadingPage>

        <HeadingSection extraClasses="uppercase">
          SECTION 1 - WHAT DO WE DO WITH YOUR INFORMATION?
        </HeadingSection>
        <p className="mb-2 tracking-wide text-justify">
          When you purchase something from our store, as part of the buying and
          selling process, we collect the personal information you give us such
          as your name, address and email address.
        </p>
        <p className="mb-2 tracking-wide text-justify">
          When you browse our store, we also automatically receive your
          computer&apos;s internet protocol (IP) address in order to provide us
          with information that helps us learn about your browser and operating
          system.
        </p>
        <p className="tracking-wide text-justify">
          Email marketing (if applicable): With your permission, we may send you
          emails about our store, new products and other updates.
        </p>
        <HeadingSection extraClasses="uppercase">
          SECTION 2 - CONSENT
        </HeadingSection>
        <p className="mb-2 tracking-wide text-justify">
          <b>How do you get my consent?</b>
        </p>
        <p className="mb-2 tracking-wide text-justify">
          When you provide us with personal information to complete a
          transaction, verify your credit card, place an order, arrange for a
          delivery or return a purchase, we imply that you consent to our
          collecting it and using it for that specific reason only. If we ask
          for your personal information for a secondary reason, like marketing,
          we will either ask you directly for your expressed consent, or provide
          you with an opportunity to say no.
        </p>
        <p className="mb-2 tracking-wide text-justify">
          <b>How do I withdraw my consent?</b>
        </p>
        <p className="mb-2 tracking-wide text-justify">
          If after you opt-in, you change your mind, you may withdraw your
          consent for us to contact you, for the continued collection, use or
          disclosure of your information, at anytime, by contacting us by
          emailing:
        </p>
        <p>techstacklk@gmail.com</p>

        <HeadingSection extraClasses="uppercase">
          SECTION 3 - DISCLOSURE
        </HeadingSection>

        <p className="mb-2 tracking-wide text-justify">
          We may disclose your personal information if we are required by law to
          do so or if you violate our Terms of Service.
        </p>

        <HeadingSection extraClasses="uppercase">
          SECTION 4 - E-commerce
        </HeadingSection>

        <p className="mb-2 tracking-wide text-justify">
          Our store is hosted on public cloud. Your data is protected in both
          transit and rest with SSL and AES encryption respectively. They store
          your data on a secure server behind a firewall.
        </p>

        <p className="mb-2 tracking-wide text-justify">Payment:</p>
        <p className="mb-2 tracking-wide text-justify">
          We do not store your payment information, we delegate payment
          functionality to&nbsp;
          <a href="https://www.genie.lk/" className="text-blue-600">
            Dialog Genie
          </a>
          &nbsp; and&nbsp;
          <a href="https://www.mobitel.lk/mcash" className="text-blue-600">
            SLT Mobitel mCash
          </a>
          . They follow industry standard best practices like encrypting payment
          info through the Payment Card Industry Data Security Standard
          (PCI-DSS). PCI-DSS requirements help ensure the secure handling of
          credit card information by our store and its service providers.
        </p>
        <p className="tracking-wide text-justify">
          Your purchase transaction data is stored until you request for
          deletion. This data is use to make better decisions as a business.
        </p>
        <HeadingSection extraClasses="uppercase tracking-wide">
          SECTION 5 - THIRD-PARTY SERVICES
        </HeadingSection>

        <p className="mb-2 tracking-wide text-justify">
          In general, the third-party providers used by us will only collect,
          use and disclose your information to the extent necessary to allow
          them to perform the services they provide to us.
        </p>

        <p className="mb-2 tracking-wide text-justify">
          However, certain third-party service providers, such as payment
          gateways and other payment transaction processors, have their own
          privacy policies in respect to the information we are required to
          provide to them for your purchase-related transactions.
        </p>

        <p className="mb-2 tracking-wide text-justify">
          For these providers, we recommend that you read their privacy policies
          so you can understand the manner in which your personal information
          will be handled by these providers.
        </p>
        <p className="mb-2 tracking-wide text-justify">
          In particular, remember that certain providers may be located in or
          have facilities that are located a different jurisdiction than either
          you or us. So if you elect to proceed with a transaction that involves
          the services of a third-party service provider, then your information
          may become subject to the laws of the jurisdiction(s) in which that
          service provider or its facilities are located.
        </p>

        <p className="mb-2 tracking-wide text-justify">
          As an example, if you are located in Canada and your transaction is
          processed by a payment gateway located in the United States, then your
          personal information used in completing that transaction may be
          subject to disclosure under United States legislation, including the
          Patriot Act.
        </p>
        <p className="mb-2 tracking-wide text-justify">
          Once you leave our store&apos;s website or are redirected to a
          third-party website or application, you are no longer governed by this
          Privacy Policy or our website&apos;s Terms of Service.
        </p>
        <p className="mb-2 italic tracking-wide text-justify">Links</p>
        <p className="mb-2 tracking-wide text-justify">
          When you click on links on our store, they may direct you away from
          our site. We are not responsible for the privacy practices of other
          sites and encourage you to read their privacy statements.
        </p>
        <HeadingSection extraClasses="uppercase">
          SECTION 6 - SECURITY
        </HeadingSection>

        <p className="mb-2 tracking-wide text-justify">
          To protect your personal information, we take reasonable precautions
          and follow industry best practices to make sure it is not
          inappropriately lost, misused, accessed, disclosed, altered or
          destroyed. If you provide us with your credit card information, the
          information is encrypted using secure socket layer technology (SSL)
          and stored with a AES-256 encryption. Although no method of
          transmission over the Internet or electronic storage is 100% secure,
          we follow all PCI-DSS requirements and implement additional generally
          accepted industry standards.
        </p>

        <HeadingSection extraClasses="uppercase">
          SECTION 7 - COOKIES
        </HeadingSection>
        <p className="mb-2 tracking-wide text-justify">
          Here is a list of cookies that we use. We&apos;ve listed them here so
          you that you can choose if you want to opt-out of cookies or not.
        </p>

        <ul className="ml-8 list-disc list-outside">
          <li>
            _session_id, unique token, sessional, Allows us to store information
            about your session (referrer, landing page, etc).
          </li>
          <li>
            _shopify_visit, no data held, Persistent for 30 minutes from the
            last visit, Used by our website provider&apos;s internal stats
            tracker to record the number of visits
          </li>
          <li>
            _shopify_uniq, no data held, expires midnight (relative to the
            visitor) of the next day, Counts the number of visits to a store by
            a single customer. cart, unique token, persistent for 2 weeks,
            Stores information about the contents of your cart.
          </li>
          <li>
            _secure_session_id, unique token, sessional storefront_digest,
            unique token, indefinite If the shop has a password, this is used to
            determine if the current visitor has access.
          </li>
        </ul>

        <HeadingSection extraClasses="uppercase">
          SECTION 8 - AGE OF CONSENT
        </HeadingSection>

        <p className="mb-2 tracking-wide text-justify">
          By using this site, you represent that you are at least the age of
          majority in your state or shop_contact_province_state of residence, or
          that you are the age of majority in your state or
          shop_contact_province_state of residence and you have given us your
          consent to allow any of your minor dependents to use this site.
        </p>

        <HeadingSection extraClasses="uppercase">
          SECTION 9 - CHANGES TO THIS PRIVACY POLICY
        </HeadingSection>

        <p className="tracking-wide text-justify">
          We reserve the right to modify this privacy policy at any time, so
          please review it frequently. Changes and clarifications will take
          effect immediately upon their posting on the website. If we make
          material changes to this policy, we will notify you here that it has
          been updated, so that you are aware of what information we collect,
          how we use it, and under what circumstances, if any, we use and/or
          disclose it. If our store is acquired or merged with another company,
          your information may be transferred to the new owners so that we may
          continue to sell products to you.
        </p>

        <HeadingSection extraClasses="uppercase">
          QUESTIONS AND CONTACT INFORMATION
        </HeadingSection>

        <p className="mb-2 tracking-wide text-justify">
          If you would like to: access, correct, amend or delete any personal
          information we have about you, register a complaint, or simply want
          more information send us an email to following address :
        </p>
        <a className="tracking-wide" href="mailto:techstacklk+legal@gmail.com">
          techstacklk+legal@gmail.com
        </a>
      </main>
    </Layout>
  );
}

export const Head = ({ location }) => (
  <SEO
    title="Privacy Policy"
    description="Know how we protect your privacy when you are on TechStack.LK"
    pathname={location.pathname}
  />
);
