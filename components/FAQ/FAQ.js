import React from 'react';
import { Link } from 'react-router';
import FAQItem from './FAQItem';

export default () => {
  return (
    <div className="faq">
      <div className="inner">
        <h2>
          <acronym title="Frequently Asked Questions">FAQ</acronym>
        </h2>
        <div className="faq__items">
          <div className="faq__items__column">
            <FAQItem
              question="What happens if I exceed my usage?"
              answerHTML="<p>When you log into your Dashboard, you can set hard limits (absolute) and soft limits
              (warnings/notifications issued). If you actually exceed your usage, overage fees will in a separate bill
              at the end of the month (billing period). You can change your plan and limits at any time.</p>"
            />
            <FAQItem
              question="How is a Script second measured?"
              answerHTML="<p>A Script is measured by a webhook, schedule, trigger, automation. You’re billed for each
              second a Scripts is run. These are all explained in detail here.</p>"
            />
          </div>
          <div className="faq__items__column">
            <FAQItem
              question="When will I be billed?"
              answerHTML="<p>As soon as you're ready to switch to a paid account, choose your plan and simply enter your
              credit card. The bill for the first month is prorated but we still give you the full month’s usage. On the
              1st of every month, you are billed upfront for that entire month's usage. Should you exceed your usage,
              you can always change your plan and/or pay the overage. Your overage will appear as a separate bill at the
              end of that month.</p>"
            />
            <FAQItem
              question="What kind of usage metrics will I have access to?"
              answerHTML="<p>Usage is accessible in your Dashboard. Easily track the amount of API calls and Scripts
              executions per each instance (app) on Syncano.</p>"
            />
          </div>
        </div>
        <footer className="faq__footer">
          <p><Link to="/pricing/">Visit our FAQ</Link> or <Link to="/pricing/">Contact support</Link> for other
          unanswered questions.</p>
        </footer>
      </div>
    </div>
  );
}
