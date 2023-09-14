# Setup Manually

```bash
npm install express
npm install --save-dev typescript ts-node nodemon @types/node @types/express


tsc --init
```

## Update tsconfig.json

```json
{
    ...,
    "target": "es2016",
    "baseUrl": "./src",
    "paths": {
        "@/utils": ["utils/*"]
    },
     "outDir": "./dist",
    ...
}
```


### Note:

In .gitignnore file, Note that the /* is required for the folders. The following will not work:

```txt
folder
!folder/some-file.txt
```

but only this will:

```txt
folder/*
!folder/some-file.txt
```

Ref: https://stackoverflow.com/a/16318111/10117814
