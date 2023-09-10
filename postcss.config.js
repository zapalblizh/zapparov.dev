module.exports = {
    plugins: [
        require("postcss-easy-import"),
        require("postcss-discard-comments")({ removeAll: true }),
        require("autoprefixer"),
        require("postcss-merge-rules"),
    ],
};
