import isbot from "isbot";
import Plausible from "plausible-tracker";

const { trackEvent, trackPageview, enableAutoOutboundTracking } = Plausible({
    domain: "zapparov.co.uk",
    apiHost: "https://zapparov.co.uk",
});


document.addEventListener("DOMContentLoaded", () => {

    if (isbot(navigator.userAgent)) return;

    trackPageview(
        {},
        {
            props: {
                title: document.title,
                url: location.href,
                path: location.pathname,
                referrer: document.referrer,
                userAgent: navigator.userAgent,
                deviceWidth: window.innerWidth,
            }
        }
    );

    enableAutoOutboundTracking();
});
