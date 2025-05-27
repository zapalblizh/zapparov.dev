/**
 * Add Eleventy filters here
 * https://www.11ty.dev/docs/filters/
 */
import { DateTime } from "luxon";

export default {
    titleSinPeriod: (value) => {
        return value.replace(/\.$/, "");
    },

    // Changes ISO date to XX years/months/days/hours/minutes/seconds ago
    dateToRelative: (published) => {
        return DateTime.fromISO(published).toRelative();
    },

    // dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
    htmlDateString: (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
            "yyyy-LL-dd"
        );
    },

    // Get the first `n` elements of a collection.
    head: (array, n) => {
        if (!Array.isArray(array) || array.length === 0) {
            return [];
        }
        if (n < 0) {
            return array.slice(n);
        }

        return array.slice(0, n);
    },

    includes: (haystack, needle) => {
        if (typeof haystack !== "string") return false;
        return haystack.includes(needle);
    },

    readableDate: (dateObj, format, zone) => {
      return DateTime.fromJSDate(new Date(dateObj), {zone: zone || "utc"}).toFormat(format || "dd LLLL, yyyy");
    },
};
