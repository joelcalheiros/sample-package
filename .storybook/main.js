module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "storybook-addon-intl",
    "storybook-addon-jsx",
    "@storybook/addon-a11y",
    "@storybook/addon-jest",
    "@storybook/addon-queryparams",
    "@storybook/addon-links",
    "storybook-dark-mode",
    "@storybook/addon-viewport",
    "@storybook/preset-scss",
  ],
  viteFinal: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });
    return config;
  },
};
