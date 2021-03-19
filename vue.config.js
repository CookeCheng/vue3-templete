const path = require('path');
const glob = require('glob-all');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const PurgecssPlugin = require('purgecss-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const resolve = dir => path.join(__dirname, dir);
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);

module.exports = {
  publicPath: process.env.VUE_APP_SRC || '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  runtimeCompiler: false,
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('vue-i18n', 'vue-i18n/dist/vue-i18n.esm-browser.prod.js');

    if (process.env.VUE_APP_MODE === 'analyze') {
      config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin);
    }
  },
  configureWebpack: config => {
    config.optimization = {
      splitChunks: {
        chunks: 'all',
        minSize: 30000,
        maxSize: 1000000,
        minChunks: 1,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '-',
        name: true,
        cacheGroups: {
          vendors: {
            name: 'chunk-vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            chunks: 'initial'
          },
          common: {
            name: 'chunk-common',
            minChunks: 2,
            priority: -20,
            chunks: 'initial',
            reuseExistingChunk: true
          }
        }
      }
    };
    config.performance = {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    };

    if (IS_PROD) {
      const plugins = [];

      plugins.push(
        new PurgecssPlugin({
          paths: glob.sync([
            path.join(__dirname, './src/**/*.vue'),
            path.join(__dirname, './src/**/*.scss')
          ])
        })
      );
      plugins.push(
        new CompressionPlugin({
          test: /\.js$|\.html$|\.css/,
          threshold: 10240,
          deleteOriginalAssets: false
        })
      );

      config.plugins = [...config.plugins, ...plugins];
      config.devtool = 'none';
    } else {
      config.devtool = 'cheap-source-map';
    }
  },
  css: {
    extract: false,
    sourceMap: false,
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/variables.scss";@import "@/assets/scss/mixins.scss";`
      }
    }
  },
  parallel: require('os').cpus().length > 1,
  pwa: {},
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 9999,
    compress: true,
    https: false,
    hotOnly: true,
    proxy: {
      '/': {
        target: 'https://127.0.0.1/',
        changeOrigin: true,
        pathRewrite: {
          // '^/api': ''
        }
      }
    }
  }
};
