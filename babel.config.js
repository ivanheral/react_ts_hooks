const presets = [
    ["@babel/env", {
        targets: {
            ie: "8"
        },
        corejs: 3,
        useBuiltIns: "usage"
    }]
];


module.exports = {
    presets
};