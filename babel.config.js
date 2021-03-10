module.exports = {
  presets: [["@vue/cli-plugin-babel/preset", { useBuiltIns: "entry" }]],
  plugins: [
    [
      "component",
      {
        libraryName: "element-plus",
        styleLibraryName: "theme-chalk"
      }
    ]
  ]
};
