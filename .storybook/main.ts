import type { StorybookConfig } from "@storybook/nextjs";
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
  webpackFinal: async (conf) => {
    if(conf.resolve)
      conf.resolve.plugins = [
        ...(conf.resolve?.plugins || []),
        new TsconfigPathsPlugin({
          extensions: conf.resolve?.extensions,
        }),
      ];
    return conf;
  },
};
export default config;
