# chrome-random-newtab

A new tab override page extension for Google Chrome.

I'm releasing this on GitHub only. Maybe some developer will want to release it to the Web Store.

You can install this extension with the following steps:

1. Click on `Releases` on GitHub  
2. Download version `v1.0` and unzip to some directory on your computer  
3. navigate to `chrome://extensions/`  
4. check `Developer mode`  
5. Click `Load Unpacked Extension...`  
6. Select the directory from step 2  
7. Uncheck `Developer mode`

## Can you highlight or remove the url from the address bar?

No. The only way to load a url like `chrome://apps` as a new tab replacement is to execute this JavaScript code:

```
chrome.tabs.update({ url: "chrome://apps", highlighted: true });
```

By doing this, Chrome will set an address in the address bar. Extensions don't have permissions to highlight/remove/modify that address. Sorry. Use <kbd>CTRL</kbd>+<kbd>L</kbd> and start typing.

# NOTE

Yes, I'm the [New Tab Redirect](https://github.com/jimschubert/NewTab-Redirect) developer. No, I will not accept donations for this extension. Nor will I entertain offers to sell this extension or integrate your code into this extension. I am explicitly *not* publishing this to the Web Store because I don't want to be hassled by 'buyers' or 'marketers'.  My only goal is to give people a way to make their lives easier.

# License

[MIT License](http://bit.ly/mit-license)  
