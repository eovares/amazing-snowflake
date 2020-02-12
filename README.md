# Amazing Snowflake

## Information

```
react
react-dom
mobx
mobx-react
```

```json
{
  "include": [
    "./src/*",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./src/**/*.js",
    "./src/**/*.jsx"
  ],
  "compilerOptions": {
    "target": "esnext",
    "baseUrl": "./src",
    "jsx": "react",
    "allowSyntheticDefaultImports": true,
    "allowUnreachableCode": true,
    "allowJs": true,
    "moduleResolution": "node",
    "module": "es2015",
    "experimentalDecorators": true,
    "forceConsistentCasingInFileNames": false,
    "strict": true,
    "lib": ["es2015", "dom"],
    "typeRoots": [
      "./typings/modules",
      "./node_modules/@types",
      "node_modules/@types"
    ],
    "sourceMap": true,
    "noEmit": true,
    "noImplicitAny": false,
    "paths": {
      "mobx-react": ["../typings/modules/mobx-react"],
      "third_party_libraries/*": ["../third_party_libraries/*"]
    }
  },
  "exclude": ["node_modules", "build"],
  "compileOnSave": false,
  "buildOnSave": false
}
```
