/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'gatsby';

const Faqs = [
  {
    question: 'Where is my order?',
    answer: (
      <p className="text-justify">
        You will receive an email containing the invoice associated with the
        order as soon as the order is placed, you will also receive a WhatsApp
        message about the order confirmation too. Once the order is dispatched
        you will receive an email, WhatsApp message notifying you that. If you
        are in doubt in any case you can contact us.
      </p>
    ),
  },
  {
    question: 'How the order disputes are handled?',
    answer: (
      <p className="text-justify">
        Rarely multiple customers may place order on an item, where there is
        only one item available in the inventory, this leads to order dispute.
        In such case customer who did not received the item will receive the
        full refund with no questions asked. You can read more about this in
        our&nbsp;
        <Link to="/refund-policy" className="text-blue-600">
          refund policy
        </Link>
      </p>
    ),
  },
  {
    question: 'Can I cancel or change my order?',
    answer: (
      <p className="text-justify">
        You cannot cancel or change the order once it is placed, so be careful
        when placing the order
      </p>
    ),
  },
  {
    question: 'I am not sure whether this product suitable for me?',
    answer: (
      <p className="text-justify">
        If you are in doubt whether to order an item or not, or does not have
        required technical expertise, you can can contact us, in oder to know
        whether the item is an good fit for your use case. We will give our
        honest opinion about the product for your use case, since we value
        customer happiness over sales.
      </p>
    ),
  },
  {
    question: 'How can claim warranties for a purchased item?',
    answer: (
      <p className="text-justify">
        If the warranty for you item is not yet expired, you should notify us
        about that by contacting us, then we will ask you to send item to a
        particular address using currier service or submit the item in person to
        the provided address.
      </p>
    ),
  },
  {
    question: 'Can TechStack.LK be trusted?',
    answer: (
      <p className="text-justify">
        <b>Absolutely you can trust us</b>, we are a Sri Lankan registered
        business with the name TechStack Holdings (Pvt) Ltd.
      </p>
    ),
  },
  {
    question: 'Is my payment info secured?',
    answer: (
      <p className="text-justify">
        We do not store your payment info, payment only happen through&nbsp;
        <a className="text-blue-600" href="https://www.genie.lk/">
          Dialog Genie
        </a>
        &nbsp; and&nbsp;
        <a className="text-blue-600" href="https://www.mobitel.lk/mcash">
          SLT Mobitel mCash
        </a>
        &nbsp; where Dialog and Mobitel handles, secure your payment info
        according to industry standards.
      </p>
    ),
  },
  {
    question: 'What payment methods do you accept?',
    answer: (
      <p className="text-justify">
        We use&nbsp;
        <a className="text-blue-600" href="https://www.genie.lk/">
          Dialog Genie
        </a>
        &nbsp; and&nbsp;
        <a className="text-blue-600" href="https://www.mobitel.lk/mcash">
          SLT Mobitel mCash
        </a>
        . Dialog Genie accept Visa and Master - Credit or Debit cards, current
        or savings accounts and eZ Cash wallet. You can pay using mCash by
        topping up your account.
      </p>
    ),
  },
  {
    question: 'How does the item deliveries happen?',
    answer: (
      <p className="text-justify">
        We will send you the either through a currier service or postal
        department parcel service, which one we use depend on the value of the
        item.
      </p>
    ),
  },
  {
    question: 'How many days to deliver?',
    answer: (
      <p className="text-justify">
        This depend on the delivery method we go with for a particular item, if
        it is a costly item it will be delivered through currier service, which
        may take day or two, otherwise through postal department parcel service
        which will take up to 3 or 4 days depending on your shipping address.
      </p>
    ),
  },
  {
    question: 'Do you offer tech support?',
    answer: (
      <p className="text-justify">
        We will help you through simple tech issues (ex: installation, basic
        use) via the phone or WhatsApp, other than that we will not help you
        with advance tech support, for that you may refer the item manual or
        manufacturer&apos;s website
      </p>
    ),
  },
];

export default Faqs;
