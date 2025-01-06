#
Turbo is an incremental bundler and build system optimized for JavaScript and TypeScript, written in Rust.

## use
- to avoid ./../ or files structure , we can create npm modeules and publish them , then use them or we can use tools like turbo , which give us import export in modular way.

### package.json of web =     "@repo/ui": "*",
### package.json of ui 
  "exports": {
    "./button": "./src/button.tsx",
    "./card": "./src/card.tsx",
    "./code": "./src/code.tsx",
    "./signup: "./src/signup.tsx"
      },

