import React from 'react';
import { Link } from 'react-router';
import FAQItem from './FAQItem';

export default () => {
  return (
    <div className="faq">
      <div className="inner">
        <h2>
          <acronym title="Frequently Asked Questions">
            FAQ
          </acronym>
        </h2>
        <div className="faq__items-container">
          <div className="faq__items">
            <FAQItem
              question="What happens if I exceed my usage?"
              answer={
                <p>When you log into your Dashboard, you can set hard limits (absolute) and soft limits
                (warnings/notifications issued). If you actually exceed your usage, overage fees will appear as a
                separate bill at the end of the month (billing period). You can change your plan and limits at any
                time.</p>
              }
            />
            <FAQItem
              question="How is a Script second measured?"
              answer={
                <p>A Script is measured by a Webhook, Schedule, Trigger, and automation. You’re billed for each second a
                Script is run. These are all explained in
                detail <a href="http://docs.syncano.io/docs/faq/#section-what-counts-as-a-script-second-" target="_blank">here</a>.</p>
              }
            />
            <FAQItem
              question="When will I be billed?"
              answer={
                <p>As soon as you're ready to switch to a paid account, choose your plan and simply enter your credit
                card. The bill for the first month is prorated but we still give you the full month’s usage. On the 1st
                of every month, you are billed up front for that entire month's usage. Should you exceed your usage, you
                can always change your plan and/or pay the overage. Your overage will appear as a separate bill at the
                end of that month.</p>
              }
            />
            <FAQItem
              question="What kind of usage metrics will I have access to?"
              answer={
                <p>Usage is accessible in your Dashboard. Easily track the number of API calls and Script executions per
                each Instance (app) on Syncano.</p>
              }
            />
          </div>
        </div>
        <footer className="faq__footer">
          <p><a href="http://docs.syncano.io/docs/faq/">Visit our complete FAQ</a> or <Link to="/help/">contact support</Link> for
          other unanswered questions.</p>
        </footer>
      </div>
    </div>
  );
}
