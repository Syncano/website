const CLI = () => (
  <div className='CLI'>
    <div className='CLI__buttons'>
      <i className='CLI__button' />
      <i className='CLI__button' />
      <i className='CLI__button' />
    </div>
    <div className='CLI__header'>Syncano CLI</div>

    <ul className='CLI__lines'>
      <li className='CLI__line'>~/my-proj $ ls </li>
      <li className='CLI__line CLI__line--result'>package.json index.js lib static</li>
      <li className='CLI__line'>~/my-proj $ now</li>
      <li className='CLI__line CLI__line--result'>&gt; Ready! https://my-proj-hj1v2m.now.sh</li>
      <li className='CLI__line CLI__line--result CLI__line--indent'>(copied to clipboard) [440ms] </li>
      <li className='CLI__line CLI__line--result'>&gt; Upload [============] 100% 5.7s</li>
      <li className='CLI__line CLI__line--result'>&gt; Sync complete (1.38) [5702ms]</li>
      <li className='CLI__line'>~/my-proj $</li>
    </ul>

    <style jsx>{`
      .CLI {
        text-align: left;
        border-radius: 6px;
        background-color: #0b0f15;
        box-shadow: 0 5px 50px 0 rgba(0, 0, 0, 0.35);
        min-height: 100%;
        width: 100%;
        position: relative;
      }

      .CLI__buttons {
        position: absolute;
        top: 12px;
        left: 12px;
      }

      .CLI__button {
        display: inline-block;
        vertical-align: top;
        margin-right: 4px;
        border-radius: 4px;
        width: 8px;
        height: 8px;
        background-color: #3e434a
      }

      .CLI__header {
        text-align: center;
        padding: 10px 0;
        font-size: 12px;
        color: #3e434a;
        font-weight: 500;
      }

      .CLI__lines {
        list-style: none;
        padding: 30px 40px 0;
        font-size: 14px;
        line-height: 20px;
        font-family: Courier;
        font-weight: bold;
        letter-spacing: .1em;
        color: #3e434a;
      }

      .CLI__line--result {
        color: #707781;
      }

      .CLI__line--indent {
        margin-left: 12px;
      }
    `}</style>
  </div>
)

export default CLI
