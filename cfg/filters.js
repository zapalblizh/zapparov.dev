/**
 * Add Eleventy filters here
 * https://www.11ty.dev/docs/filters/
 */
import { DateTime, Duration } from "luxon";

export default {
    titleSinPeriod: (value) => {
        return value.replace(/\.$/, "");
    },

    // Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
    readableDate: (dateObj, format, zone) => {
        return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(
            format || "dd LLLL yyyy"
        );
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

    // Return the smallest number argument
    min: (...numbers) => {
        return Math.min.apply(null, numbers);
    },

    // Return all the tags used in a collection
    getAllTags: (collection) => {
        let tagSet = new Set();
        for (let item of collection) {
            (item.data.tags || []).forEach((tag) => tagSet.add(tag));
        }
        return Array.from(tagSet);
    },

    filterTagList: (tags) => {
        return (tags || []).filter(
            (tag) => ["all", "nav", "post", "posts"].indexOf(tag) === -1
        );
    },
};
