module.exports = {
   semi: true,
   singleQuote: false,
   trailingComma: "es5",
   printWidth: 75,
   bracketSpacing: true,
   jsxBracketSameLine: false,
   overrides: [
      {
         files: ["*.js", "*.jsx"],
         options: {
            tabWidth: 3,
         },
      },
      {
         files: ["*.cjs"],
         options: {
            tabWidth: 3,
         },
      },
      {
         files: ["*.html", "*.css"],
         options: {
            tabWidth: 2,
         },
      },
      {
         files: "*.json",
         options: {
            printWidth: 80,
            singleQuote: false,
            trailingComma: "all",
            bracketSpacing: false,
         },
      },
   ],
};
