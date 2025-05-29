/**
 * Add Eleventy filters here
 * https://www.11ty.dev/docs/filters/
 */
import { DateTime } from "luxon";

export default {

    includes: (haystack, needle) => {
        if (typeof haystack !== "string") return false;
        return haystack.includes(needle);
    },

    readableDate: (dateObj, format, zone) => {
      return DateTime.fromJSDate(new Date(dateObj), {zone: zone || "utc"}).toFormat(format || "dd LLLL, yyyy");
    },
};
