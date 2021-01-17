### Refactor Needed

-  Fix the sidebar links & color
-  Liked Videos | API Reference
-  User Image on Header & Comment Section
-  Favicon(.ico or .png) & Page Title
   https://www.freepnglogos.com/uploads/youtube-logo-icon-png-11.png
-  hover pointer on categories bar

-  Watch Screen Responsive

```
@media (max-width: $) {
    .watchScreen__player {
        height: 35vh;
    }
}
```

-  remove padding left from video horizontal image

```
useEffect(() => {
    document.title = video?.snippet?.title
}, [video])
```

-  solve the warnings
-  push the changes
