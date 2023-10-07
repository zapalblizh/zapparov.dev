/**
 * Add Eleventy filters here
 * https://www.11ty.dev/docs/filters/
 */
const { DateTime, Duration } = require("luxon");
const { emojify } = require("node-emoji");

module.exports = {
    titleSinPeriod: (value) => {
        return value.replace(/\.$/, "");
    },

    // Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
    readableDate: (dateObj, format, zone) => {
        return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(
            format || "dd LLLL yyyy"
        );
    },

    // Formats duration to hh:mm:ss or mm:ss
    formatToLiquidCrystal: (duration) => {
        if (duration >= 3600) {
            return Duration.fromMillis(duration * 1000).toFormat("hh:mm:ss");
        }

        return Duration.fromMillis(duration * 1000).toFormat("mm:ss");
    },

    // Changes ISO date to XX years/months/days/hours/minutes/seconds ago
    dateToRelative: (published) => {
        return DateTime.fromISO(published).toRelative();
    },

    emojifyObject: (description) => {
        return emojify(description);
    },

    // Filter to find most liked videos
    mostLikedVideos: (videoCollection, excludeVideoId) => {
        videoCollection = videoCollection.sort((a, b) => b.likes - a.likes);
        videoCollection = videoCollection.filter(
            (el) => el.videoId !== excludeVideoId
        );
        return videoCollection;
    },

    // Clean Thumbnail URL
    cleanThumbnailUrl: (thumbnailUrl) => {
        return thumbnailUrl.replace("https://i.ytimg.com", "");
    },

    // Filters button display depending on active page
    paginationButtons: (pages, pagination, current) => {
        delete pagination.items;
        delete pagination.pages;

        let arr = [];
        let _return = [];

        pages.forEach((value, index) => {
            arr.push({
                page: index + 1,
                href: value,
                current: current,
                active: index === current,
            });
        });

        if (current < 4) {
            _return = arr.slice(0, 5);
            _return.push({
                page: "...",
                href: "...",
                current: current,
                active: false,
            });
            _return.push(arr[arr.length - 1]);
        } else if (current >= 4 && current <= arr.length - 5) {
            _return.push(arr[0]);
            _return.push({
                page: "...",
                href: "...",
                current: current,
                active: false,
            });
            _return = _return.concat(arr.slice(current - 1, current + 2));
            _return.push({
                page: "...",
                href: "...",
                current: current,
                active: false,
            });
            _return.push(arr[arr.length - 1]);
        } else if (current >= arr.length - 5) {
            _return.push(arr[0]);
            _return.push({
                page: "...",
                href: "...",
                current: current,
                active: false,
            });
            _return = _return.concat(arr.slice(arr.length - 5, arr.length));
        }

        return _return;
    },

    // Filters view to nearest 1000 or leaves them as they are if less than 1000
    filterViewsToNearestK: (views) => {
        if (views >= 1000) {
            var rest = views % 1000;
            if (rest > 500) {
                views = (views - rest + 1000) / 1000;
            } else {
                views = (views - rest) / 1000;
            }
            views = views + "K";
        }

        return views;
    },

    /**
     * Clean/escape unicode emojis, zero width jumper and spaces and Magic Spacing
     *
     * @link: https://stackoverflow.com/questions/10992921/how-to-remove-emoji-code-using-javascript
     * @link https://itecnote.com/tecnote/javascript-remove-zero-width-space-characters-from-a-javascript-string/
     *
     * @param text
     * @returns {string}
     */
    escapeMetaData: (text) => {
        return (
            text
                .toString()
                .replaceAll(`"`, `&quot;`)
                // Removes all unicode emojis that are not in node-emoji
                .replace(
                    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/gim,
                    ""
                )
                // Removes zero width jumper and other spaces
                .replace(/[\u200B-\u200D\uFEFF]/gim, "")
                .replace(" ️ ", " ") // Magic?????
                .replace(/\s+/gim, " ")
                .replace(/(\r\n|\n|\r)/gim, "")
                .trim()
        );
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
