const CLI = () => (
  <div className='CLI'>
    <div className='CLI__buttons'>
      <i className='CLI__button' />
      <i className='CLI__button' />
      <i className='CLI__button' />
    </div>
    <div className='CLI__header'>Syncano CLI</div>

    <ul className='CLI__lines'>
      <li className='CLI__line'>$ syncano-cli hot</li>
      <li className='CLI__line CLI__line--break' />
      <li className='CLI__line CLI__line--result'>🔥  Hot deploy started (Hit Ctrl-C to stop)</li>
      <li className='CLI__line CLI__line--break' />
      <li className='CLI__line CLI__line--result'>
         project synced: <span className='CLI__line-time'>14:38:54 1337 ms</span>
      </li>
      <li className='CLI__line CLI__line--result'>
        &nbsp;socket synced: <span className='CLI__line-time'>14:38:54</span>&nbsp;
          <span className='CLI__line-scope'>openweathermap</span>&nbsp;
          <span className='CLI__line-diff'>3545 ms</span>&nbsp;
      </li>
      <li className='CLI__line CLI__line--result'>
        &nbsp;socket synced: <span className='CLI__line-time'>14:38:59</span>&nbsp;
          <span className='CLI__line-scope'>messenger-bot</span>&nbsp;
          <span className='CLI__line-diff'>4144 ms</span>&nbsp;
      </li>
      <li className='CLI__line CLI__line--result'>
        &nbsp;socket synced: <span className='CLI__line-time'>14:39:01</span>&nbsp;
          <span className='CLI__line-scope'>twitter-bot</span>&nbsp;
          <span className='CLI__line-diff'>4238 ms</span>&nbsp;
      </li>
      <li className='CLI__line CLI__line--result'>
        &nbsp;socket synced: <span className='CLI__line-time'>14:39:01</span>&nbsp;
          <span className='CLI__line-scope'>analytics</span>&nbsp;
          <span className='CLI__line-diff'>4238 ms</span>&nbsp;
      </li>
      <li className='CLI__line CLI__line--result'>
        &nbsp;socket synced: <span className='CLI__line-time'>14:39:01</span>&nbsp;
          <span className='CLI__line-scope'>mailgun</span>&nbsp;
          <span className='CLI__line-diff'>2297 ms</span>&nbsp;
      </li>
      {/* TODO: Add animation */}
      <li className='CLI__line CLI__line--result'>waiting...</li>
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
        color: #b3bece;
      }

      .CLI__line-scope {
        color: #b4e6fd;
      }

      .CLI__line-time {
        color: #dad9d7;
      }

      .CLI__line-diff {
        color: #757065;
      }

      .CLI__line--result {
        color: #8b8b8d;
      }

      .CLI__line--break {
        height: 20px;
      }

      .CLI__line--indent {
        margin-left: 12px;
      }
    `}</style>
  </div>
)

export default CLI
