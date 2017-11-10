# fontface-loader

What’s your opinion on FOIT & FOUT? Not got one?

For those out there who are Nerds like me, [here](https://www.bramstein.com/writing/web-font-loading-patterns.html) is a great little article about Font loading patterns written by Bram Stein (Adobe dude involved in Typekit) also the creator of [Font Observer](https://github.com/bramstein/fontfaceobserver).

-----
## Summery

In simple terms this is a really nice pattern for loading your fonts async, giving your user the best experience. Works cross browser and with custom local fonts.

## FOIT and FOUT
*Flash Of Invisible Text* and *Flash Of Unstyled Text*

Before a browser can show a font it has to be downloaded. Different browsers will handle this in their own unique ways. Some browser hide the text (FOIT), some show the fallback (FOUT).

## Technical goings on
* Set your website up with fallback fonts by deault
* Use Font Observer to load in your nice custom fonts
* On load complete add a class to the html tag 'fonts-loaded'
* Under this class, style your website with the nice fonts
* Use session storage to decide if you need to load the fonts or if they are cached.

## What the user sees
* First load would be rendered with fallback fonts
* Once fonts are loaded the nice custom fonts kick in
* A refresh would show the nice fonts straight away as they have been cached for that session.

##### None of this can be credited to me, I have just made a little demo for future reference. 
 