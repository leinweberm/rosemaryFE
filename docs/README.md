# **STYLES**
## Z-INDEX
>- pages 1
>- navigations (sidebar, navbar) 10
>- modals 20

## COLORS
>- all colors are defined in [global.css](../assets/style/global.css)

<br/>
<br/>

# **LOCALIZATION**
>- this app is using i18n library for locales
>- all languages are defined in [nuxt.config.js](../nuxt.config.js)
>- language dictionaries are in folder lang in form of JS module that exports single object
```js
// dictionary in /lang/en.js
export default {
	welcome: 'Welcome {name}!',
}

// usage in your component
this.$t('welcome', { name: 'Martin' });
//output: Welcome Martin!
```
>- manual locale switcher has to look like this:
```html
<nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
```
>- to route acros pages with correct locale you need to `strategy: 'prefix'` in your nuxt.config.js and use nuxt-links to route. example below.
```html
<nuxt-link :to="localePath('gallery')">GALLERY</nuxt-link>
```
>- you can use pluralization for locales, [more here](https://kazupon.github.io/vue-i18n/guide/pluralization.html#custom-pluralization)
>- you can use localized numbers, [more here](https://kazupon.github.io/vue-i18n/guide/number.html)