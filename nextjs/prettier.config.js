/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
    trailingComma: "none",
    tabWidth: 4,
    arrowParens: "avoid",
    overrides: [
        {
            files: [
                "**/*config*/*.js",
                "*config*.ts",
                "*config*.(c)js",
                "*.json",
                "*env*.js"
            ],
            options: {
                tabWidth: 2
            }
        }
    ],
    plugins: ["prettier-plugin-tailwindcss"]
};

export default config;
