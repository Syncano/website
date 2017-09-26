import GitHubButton from 'react-github-button'

export default props => (
  <span>
    <GitHubButton {...props} />

    <style jsx global>{`
      span {
        display: inline-block;
      }

      .github-btn {
        font: bold 11px/14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
        height: 20px;
        overflow: hidden;
      }
      .gh-btn,
      .gh-count,
      .gh-ico {
        float: left;
      }
      .gh-btn,
      .gh-count {
        padding: 2px 5px 2px 4px;
        color: #333;
        text-decoration: none;
        white-space: nowrap;
        cursor: pointer;
        border-radius: 3px;
      }
      .gh-btn {
        background-color: #eee;
        background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #fcfcfc), color-stop(100%, #eee));
        background-image: -webkit-linear-gradient(top, #fcfcfc 0, #eee 100%);
        background-image: -moz-linear-gradient(top, #fcfcfc 0, #eee 100%);
        background-image: -ms-linear-gradient(top, #fcfcfc 0, #eee 100%);
        background-image: -o-linear-gradient(top, #fcfcfc 0, #eee 100%);
        background-image: linear-gradient(to bottom, #fcfcfc 0, #eee 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#fcfcfc', endColorstr='#eeeeee', GradientType=0);
        background-repeat: no-repeat;
        border: 1px solid #d5d5d5;
      }
      .gh-btn:hover,
      .gh-btn:focus {
        text-decoration: none;
        background-color: #ddd;
        background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, #eee), color-stop(100%, #ddd));
        background-image: -webkit-linear-gradient(top, #eee 0, #ddd 100%);
        background-image: -moz-linear-gradient(top, #eee 0, #ddd 100%);
        background-image: -ms-linear-gradient(top, #eee 0, #ddd 100%);
        background-image: -o-linear-gradient(top, #eee 0, #ddd 100%);
        background-image: linear-gradient(to bottom, #eee 0, #ddd 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#eeeeee', endColorstr='#dddddd', GradientType=0);
        border-color: #ccc;
      }
      .gh-btn:active {
        background-image: none;
        background-color: #dcdcdc;
        border-color: #b5b5b5;
        box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15);
      }
      .gh-ico {
        width: 14px;
        height: 14px;
        margin-right: 4px;
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQwcHgiIGhlaWdodD0iNDBweCIgdmlld0JveD0iMTIgMTIgNDAgNDAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMTIgMTIgNDAgNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGZpbGw9IiMzMzMzMzMiIGQ9Ik0zMiAxMy40Yy0xMC41IDAtMTkgOC41LTE5IDE5YzAgOC40IDUuNSAxNS41IDEzIDE4YzEgMC4yIDEuMy0wLjQgMS4zLTAuOWMwLTAuNSAwLTEuNyAwLTMuMiBjLTUuMyAxLjEtNi40LTIuNi02LjQtMi42QzIwIDQxLjYgMTguOCA0MSAxOC44IDQxYy0xLjctMS4yIDAuMS0xLjEgMC4xLTEuMWMxLjkgMC4xIDIuOSAyIDIuOSAyYzEuNyAyLjkgNC41IDIuMSA1LjUgMS42IGMwLjItMS4yIDAuNy0yLjEgMS4yLTIuNmMtNC4yLTAuNS04LjctMi4xLTguNy05LjRjMC0yLjEgMC43LTMuNyAyLTUuMWMtMC4yLTAuNS0wLjgtMi40IDAuMi01YzAgMCAxLjYtMC41IDUuMiAyIGMxLjUtMC40IDMuMS0wLjcgNC44LTAuN2MxLjYgMCAzLjMgMC4yIDQuNyAwLjdjMy42LTIuNCA1LjItMiA1LjItMmMxIDIuNiAwLjQgNC42IDAuMiA1YzEuMiAxLjMgMiAzIDIgNS4xYzAgNy4zLTQuNSA4LjktOC43IDkuNCBjMC43IDAuNiAxLjMgMS43IDEuMyAzLjVjMCAyLjYgMCA0LjYgMCA1LjJjMCAwLjUgMC40IDEuMSAxLjMgMC45YzcuNS0yLjYgMTMtOS43IDEzLTE4LjFDNTEgMjEuOSA0Mi41IDEzLjQgMzIgMTMuNHoiLz48L3N2Zz4=');
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
      .gh-count {
        position: relative;
        display: none;
        /* hidden to start */
        margin-left: 4px;
        background-color: #fafafa;
        border: 1px solid #d4d4d4;
      }
      .gh-count:hover,
      .gh-count:focus {
        color: #4183C4;
      }
      .gh-count:before,
      .gh-count:after {
        content: '';
        position: absolute;
        display: inline-block;
        width: 0;
        height: 0;
        border-color: transparent;
        border-style: solid;
      }
      .gh-count:before {
        top: 50%;
        left: -3px;
        z-index: 1;
        margin-top: -4px;
        border-width: 4px 4px 4px 0;
        border-right-color: #fafafa;
      }
      .gh-count:after {
        top: 50%;
        left: -4px;
        z-index: 0;
        margin-top: -5px;
        border-width: 5px 5px 5px 0;
        border-right-color: #d4d4d4;
      }
      .github-btn-large {
        height: 30px;
      }
      .github-btn-large .gh-btn,
      .github-btn-large .gh-count {
        padding: 3px 10px 3px 8px;
        font-size: 16px;
        line-height: 22px;
        border-radius: 4px;
      }
      .github-btn-large .gh-ico {
        width: 20px;
        height: 20px;
      }
      .github-btn-large .gh-count {
        margin-left: 6px;
      }
      .github-btn-large .gh-count:before {
        left: -5px;
        margin-top: -6px;
        border-width: 6px 6px 6px 0;
      }
      .github-btn-large .gh-count:after {
        left: -6px;
        margin-top: -7px;
        border-width: 7px 7px 7px 0;
      }
    `}</style>
  </span>
)
