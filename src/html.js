import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}

        {/* <div
          name="termly-embed"
          data-id="598f7ac7-e7ad-45db-9a96-23beae5b6dfd"
          data-type="iframe"
        ></div> */}
        {/* <button
          className="termly-cookie-preference-button"
          type="button"
          style={{
            background: "white",
            width: "165px",
            height: "30px",
            borderRadius: "3px",
            border: "1px solid #5f7d9c",
            fontFamily: "Roboto, Arial",
            fontSize: "10px",
            color: "#5f7d9c",
            fontWeight: "600",
            boxSizing: "border-box",
            cursor: "pointer",
            padding: "0",
            outline: "none",
          }}
          onClick="displayPreferenceModal()"
        >
          Do Not Sell My Info
        </button> */}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{
            __html: `
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-62310318-2"></script>
                <script>
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());

                  gtag('config', 'UA-62310318-2');
                </script>
                <script type="text/javascript">
                  var $zoho = $zoho || {};
                  $zoho.salesiq = $zoho.salesiq || { widgetcode: "1579fbd82eca9de9319ab1e3e5b245158f741e52e1f6d72caadf827bde1eda82", values: {}, ready: function () { } };
                  var d = document; 
                  s = d.createElement("script"); 
                  s.type = "text/javascript"; 
                  s.id = "zsiqscript"; 
                  s.defer = true;
                  s.src = "https://salesiq.zoho.com/widget"; 
                  t = d.getElementsByTagName("script")[0]; 
                  t.parentNode.insertBefore(s, t); 
                  d.write("<div id='zsiqwidget'></div>");
                  
                  (function () {
                    var s = document.createElement('script');
                    s.type = 'text/javascript';
                    s.async = true;
                    s.src = 'https://app.termly.io/embed.min.js';
                    s.id = '39ce7a3d-fbe1-4ce5-91e5-5fb5e935fcd2';
                    s.setAttribute("data-name", "termly-embed-banner");
                    var x = document.getElementsByTagName('script')[0];
                    x.parentNode.insertBefore(s, x);
                  })();
                </script>
                <script type="text/javascript">(function(d, s, id) {
                  var js, tjs = d.getElementsByTagName(s)[0];
                  if (d.getElementById(id)) return;
                  js = d.createElement(s); js.id = id;
                  js.src = "https://app.termly.io/embed-policy.min.js";
                  tjs.parentNode.insertBefore(js, tjs);
                }(document, 'script', 'termly-jssdk'));</script>
                `,
          }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
