import Remarkable from 'react-remarkable'

const Markdown = ({content}) => (
  <div>
    <Remarkable source={content} />

    <style jsx>{`
      div :global(h2),
      div :global(h3),
      div :global(h4),
      div :global(h5),
      div :global(h6) {
        margin-top: 40px;
        font-weight: 500;
        color: #0b0f15;
      }

      div :global(h2) {
        font-weight: bold;
        font-size: 28px;
        border-bottom: 2px solid #e5e5e5;
        padding-bottom: 10px;
        color: #0b0f15;
        margin-top: 40px;
      }

      div :global(h3) {
        border-bottom: 1px solid #e5e5e5;
        padding-bottom: 5px;
      }

      div :global(h3) + :global(h4),
      div :global(h4) + :global(h5),
      div :global(h5) + :global(h6) {
        margin-top: 20px;
      }

      div :global(h2) + :global(h3) {
        margin-top: 35px;
      }

      div :global(p) {
        font-size: 14px;
        line-height: 1.57;
        color: #8d9299;
        margin-top: 15px;
        word-break: break-all;
      }

      div :global(p:first-of-type) {
        font-size: 24px;
        font-weight: 300;
        line-height: 1.33;
        color: #2f3339;
        margin-top: 0;
      }

      div :global(ol) {
        counter-reset: section;
      }

      div :global(ol) :global(li) {
        margin-bottom: 15px;
      }

      div :global(ol) > :global(li:before) {
          counter-increment: section;
          content: counter(section) ". ";
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: #444;
      }

      div :global(ol),
      div :global(ul) {
        color: #8d9299;
        list-style: none;
        margin-top: 15px;
        margin-bottom: 15px;
      }

      div :global(ul) :global(li::before) {
        font-family: FontAwesome;
        content: '\\f00c';
        font-size: 12px;
        margin-right: 10px;
      }

      div :global(pre),
      div :global(p) :global(code) {
        background-color: #f5f6f9;
        border-radius: 3px;
        font-family: 'PT Mono';
        font-weight: bold;
        font-size: 14px;
        color: #2f3339;
      }

      div :global(p) :global(code) {
        padding: 2px 5px;
      }

      div :global(pre) {
        border-left: 16px solid rgba(141, 146, 153, 0.1);
        padding: 30px;
        max-height: 300px;
        overflow: auto;
        margin-top: 30px;
      }

      div :global(table) {
        text-align: left;
        font-size: 14px;
        width: 100%;
        margin-top: 15px;
        border-collapse: collapse;
        border: 1px solid #e5e5e5;
        border-radius: 5px;
      }

      div :global(th) {
        padding: 12px 15px 12px 15px;
        font-size: 14px;
        font-weight: bold;
        color: #0b0f15;
        table-layout: fixed;
        background-color: #fafafa;
        border-top: 1px solid #e5e5e5;
        border-left: 1px solid #e5e5e5;
      }

      div :global(td) {
        padding: 8px 15px 8px 15px;
        border-left: 1px solid #e5e5e5;
        border-top: 1px solid #e5e5e5;
      }

      div :global(th:first-child),
      div :global(td:first-child) {
        border-left: 0;
      }

      div :global(strong) {
        color: #0b0f15;
      }
    `}</style>
  </div>
)

export default Markdown
