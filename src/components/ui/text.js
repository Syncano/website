const Text = ({children}) => (
  <div>
    {children}
    <style jsx>{`
      div :global(h2),
      div :global(h3),
      div :global(h4),
      div :global(h5),
      div :global(h6) {
        color: #0b0d11;
        font-weight: 500;
      }

      div :global(h2) {
        font-size: 24px;
      }

      div :global(h3) {
        font-size: 18px;
      }

      div :global(h4) {
        font-size: 16px;
      }

      div :global(h5),
      div :global(h6) {
        font-size: 14px;
        letter-spacing: 1px;
        text-transform: uppercase;
      }

      div :global(h2) + :global(p),
      div :global(h3) + :global(p),
      div :global(h4) + :global(p),
      div :global(h5) + :global(p),
      div :global(h6) + :global(p) {
        margin-top: 15px;
      }

      div :global(p) + :global(h2),
      div :global(p) + :global(h3),
      div :global(p) + :global(h4),
      div :global(p) + :global(h5),
      div :global(p) + :global(h6) {
        margin-top: 40px;
      }

      div :global(p) {
        font-size: 14px;
        line-height: 1.57;
        color: #8d9299;
      }

      div :global(p) + :global(p) {
        margin-top: 15px;
      }

      div :global(p) :global(a) {
        color: #2c59c5;
        font-weight: 500;
        text-decoration: none;
      }

      div :global(ol) {
        counter-reset: section;
      }

      div :global(ol) :global(li) {
        margin-bottom: 15px;
      }

      div :global(li) > :global(h3) {
        display: inline-block;
      }

      div :global(ol) > :global(li:before) {
          counter-increment: section;
          content: counter(section) ". ";
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: #444;
      }

      div :global(ol) :global(ol) {
        counter-reset: subsection;
        margin-left: 30px;
      }

      div :global(ol) :global(ol) :global(li:before) {
        margin-left: 0;
        counter-increment: subsection;
        content: counter(section) "." counter(subsection) ". ";
      }

      div :global(ol) :global(ol) :global(ol) {
        counter-reset: subsubsection;
        margin-top: 15px;
      }

      div :global(ol) :global(ol) :global(ol) :global(li:before) {
        margin-left: 0;
        counter-increment: subsubsection;
        content: counter(section) "." counter(subsection) "." counter(subsubsection) ". ";
      }

      div :global(ol),
      div :global(ul) {
        font-size: 14px;
        line-height: 1.86;
        color: #8d9299;
        list-style: none;
        margin-top: 15px;
        margin-bottom: 15px;
      }

      div :global(ul) :global(li::before) {
        content: '\\2022';
        margin-right: 5px;
      }
    `}</style>
  </div>
)

export default Text
