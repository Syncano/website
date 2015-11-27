import React from 'react';

export default React.createClass({
  render() {
    return (
      <div dangerouslySetInnerHTML={{__html:`
        <!-- Google Code for All Users - maximum period -->
        <!-- Remarketing tags may not be associated with personally identifiable information or placed on pages related to sensitive categories. For instructions on adding this tag and more information on the above requirements, read the setup guide: google.com/ads/remarketingsetup -->
        <script type="text/javascript">
        /* <![CDATA[ */
        var google_conversion_id = 942300848;
        var google_conversion_label = "QPxVCN29imEQsL2pwQM";
        var google_custom_params = window.google_tag_params;
        var google_remarketing_only = true;
        /* ]]> */
        </script>
        <script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
        </script>
        <noscript>
        <div style="display:inline;">
        <img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/942300848/?value=1.00&amp;currency_code=USD&amp;label=QPxVCN29imEQsL2pwQM&amp;guid=ON&amp;script=0"/>
        </div>
        </noscript>
      `}}></div>
    )
  }
});