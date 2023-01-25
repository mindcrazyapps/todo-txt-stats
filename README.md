<br/>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) and contributors

<!--- datetimefilenameordatetimefilenamefolder.md --->
 
<p align="center">
 <img width="90px" src="https://cdn-icons-png.flaticon.com/512/423/423786.png" align="center" alt="GitHub Readme Stats" />
 <h2 align="center">Todo-txt Stats</h2>
 <p align="center">Get dynamically generated Todo-txt stats on your READMEs!</p>
</p>

  <p align="center">
    <a href="https://github.com/mindcrazyapps/todo-txt-stats/graphs/contributors">
      <img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/mindcrazyapps/todo-txt-stats" />
    </a>
    <a href="https://codecov.io/gh/mindcrazyapps/todo-txt-stats">
      <img src="https://codecov.io/gh/mindcrazyapps/todo-txt-stats/branch/master/graph/badge.svg" />
    </a>
    <a href="https://github.com/mindcrazyapps/todo-txt-stats/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/mindcrazyapps/todo-txt-stats?color=0088ff" />
    </a>
    <a href="https://github.com/mindcrazyapps/todo-txt-stats/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/mindcrazyapps/todo-txt-stats?color=0088ff" />
    </a>
    <br />
    <br />
    <a href="https://a.paddle.com/v2/click/16413/119403?link=1227">
      <img src="https://img.shields.io/badge/Supported%20by-VSCode%20Power%20User%20%E2%86%92-gray.svg?colorA=655BE1&colorB=4F44D6&style=for-the-badge"/>
    </a>
    <a href="https://a.paddle.com/v2/click/16413/119403?link=2345">
      <img src="https://img.shields.io/badge/Supported%20by-Node%20Cli.com%20%E2%86%92-gray.svg?colorA=61c265&colorB=4CAF50&style=for-the-badge"/>
    </a>
  </p>

  <p align="center">
    <a href="https://api-todo-txt-stats.netlify.app/">View Demo</a>
    ·
    <a href="https://docs-todo-txt-stats.netlify.app/">View Docs</a>
    ·    
    <a href="https://github.com/nextexperience//issues/new/choose">Report Bug</a>
    ·
    <a href="https://github.com/nextexperience//issues/new/choose">Request Feature</a>
    ·
    <a href="https://github.com/nextexperience//discussions">Ask Question</a>
  </p>
</p>

</p>

# Screenshot

*img 1*
- **api http post:** `https:/todo-txt-stats.netlify.app/api?upload/`
![image](https://user-images.githubusercontent.com/123137817/214712029-f32f59d6-3cfa-4203-af81-4ab75448a333.png)

*img 2*
- **api http response(post):** `https:/todo-txt-stats.netlify.app/api?upload/`
![image](https://user-images.githubusercontent.com/123137817/214712540-f1c4210c-cad4-441b-b586-b57c3ae57f7b.png)

*img 3*
- **api http response(post):** `https:/todo-txt-stats.netlify.app/api?upload/`
![image](https://user-images.githubusercontent.com/123137817/214711957-e1b33da9-32dc-464b-900d-2999173c3ec1.png)

# Features

-   [Todo-txt Stats Card](#github-stats-card)
-   [Todo-txt Extra Pins](#github-extra-pins)
-   [Top Languages Card](#top-languages-card)
-   [Wakatime Week Stats](#wakatime-week-stats)
-   [Themes](#themes)
    -   [Responsive Card Theme](#responsive-card-theme)
-   [Customization](#customization)
    -   [Common Options](#common-options)
    -   [Stats Card Exclusive Options](#stats-card-exclusive-options)
    -   [Repo Card Exclusive Options](#repo-card-exclusive-options)
    -   [Language Card Exclusive Options](#language-card-exclusive-options)
    -   [Wakatime Card Exclusive Option](#wakatime-card-exclusive-options)
-   [Deploy Yourself](#deploy-on-your-own-netlify-instance)
    -   [Keep your fork up to date](#keep-your-fork-up-to-date)

# Todo-txt Stats

Copy-paste this into your markdown content, and that is it. Simple!

Change the `?upload=` value to your filepath in upload.

```md
[![NextExperience Todo stats](https:/todo-txt-stats.netlify.app/api?upload/)](https://github.com/nextexperience/)
```

> **Note**
> Available ranks are S+ (top 1%), S (top 25%), A++ (top 45%), A+ (top 60%), and B+ (everyone). The values are calculated by using the [cumulative distribution function](https://en.wikipedia.org/wiki/Cumulative_distribution_function) using commits, contributions, issues, stars, pull requests, followers, and owned repositories. The implementation can be investigated at [src/calculateRank.js](./src/calculateRank.js).

### Hiding individual stats

You can pass a query parameter `&hide=` to hide any specific stats with comma-separated values.

> Options: `&hide=stars,commits,prs,issues,contribs`

```md
![NextExperience Todo stats](https:/todo-txt-stats.netlify.app/api?upload/&hide=contribs,prs)
```

#### Output
<p align="center">
  <img alt="image" src="https://user-images.githubusercontent.com/123137817/214237663-727695f0-57a8-4635-8594-40cd0227abce.png"/>
</p>

### Adding private contributions count to total commits count

You can add the count of all your private contributions to the total commits count by using the query parameter `&count_private=true`.

> **Note**
> If you are deploying this project yourself, the private contributions will be counted by default. If you are using the public netlify instance, you need to choose to [share your private contributions](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/showing-your-private-contributions-and-achievements-on-your-profile).

> Options: `&count_private=true`

```md
![NextExperience Todo stats](https:/todo-txt-stats.netlify.app/api?upload/&count_private=true)
```

### Showing icons

To enable icons, you can pass `show_icons=true` in the query param, like so:

```md
![NextExperience Todo stats](https:/todo-txt-stats.netlify.app/api?upload/&show_icons=true)
```

### Themes

With inbuilt themes, you can customize the look of the card without doing any [manual customization](#customization).

Use `&theme=THEME_NAME` parameter like so :

```md
![NextExperience Todo stats](https:/todo-txt-stats.netlify.app/api?upload/&show_icons=true&theme=radical)
```

#### All inbuilt themes

Todo-txt stats comes with several built-in themes (e.g. `dark`, `radical`, `merko`, `gruvbox`, `tokyonight`, `onedark`, `cobalt`, `synthwave`, `highcontrast`, `dracula`).

<img src="https://res.cloudinary.com/filepath/image/upload/v1595174536/grs-themes_l4ynja.png" alt="GitHub Readme Stats Themes" width="600px"/>

You can look at a preview for [all available themes](./themes/README.md) or checkout the [theme config file](./themes/index.js) & **you can also contribute new themes** if you like :D

#### Responsive Card Theme

[![NextExperience Todo stats-Dark](https:/todo-txt-stats.netlify.app/api?upload/&show_icons=true&theme=dark#gh-dark-mode-only)](https://github.com/nextexperience/#gh-dark-mode-only)
[![NextExperience Todo stats-Light](https:/todo-txt-stats.netlify.app/api?upload/&show_icons=true&theme=default#gh-light-mode-only)](https://github.com/nextexperience/#gh-light-mode-only)

Since GitHub will re-upload the cards and serve them from their [CDN](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-anonymized-urls), we can not infer the browser/GitHub theme on the server side. There are, however, four methods you can use to create dynamics themes on the client side.

##### Use the transparent theme

We have included a `transparent` theme that has a transparent background. This theme is optimized to look good on GitHub's dark and light default themes. You can enable this theme using the `&theme=transparent` parameter like so:

```md
![NextExperience Todo stats](https:/todo-txt-stats.netlify.app/api?upload/&show_icons=true&theme=transparent)
```

<details>
<summary>:eyes: Show example</summary>

![NextExperience Todo stats](https:/todo-txt-stats.netlify.app/api?upload/&show_icons=true&theme=transparent)

</details>

##### Add transparent alpha channel to a themes bg_color

You can use the `bg_color` parameter to make any of [the available themes](./themes/README.md) transparent. This is done by setting the `bg_color` to a colour with a transparent alpha channel (i.e. `bg_color=00000000`):

```md
![NextExperience Todo stats](https:/todo-txt-stats.netlify.app/api?upload/&show_icons=true&bg_color=00000000)
```

<details>
<summary>:eyes: Show example</summary>

![NextExperience Todo stats](https:/todo-txt-stats.netlify.app/api?upload/&show_icons=true&bg_color=00000000)

</details>

##### Use GitHub's theme context tag

You can use [GitHub's theme context](https://github.blog/changelog/2021-11-24-specify-theme-context-for-images-in-markdown/) tags to switch the theme based on the user GitHub theme automatically. This is done by appending `#gh-dark-mode-only` or `#gh-light-mode-only` to the end of an image URL. This tag will define whether the image specified in the markdown is only shown to viewers using a light or a dark GitHub theme:

```md
[![NextExperience Todo stats-Dark](https:/todo-txt-stats.netlify.app/api?upload/&show_icons=true&theme=dark#gh-dark-mode-only)](https://github.com/nextexperience/#gh-dark-mode-only)
[![NextExperience Todo stats-Light](https:/todo-txt-stats.netlify.app/api?upload/&show_icons=true&theme=default#gh-light-mode-only)](https://github.com/nextexperience/#gh-light-mode-only)
```

<details>
<summary>:eyes: Show example</summary>

[![NextExperience Todo stats-Dark](https:/todo-txt-stats.netlify.app/api?upload/&show_icons=true&theme=dark#gh-dark-mode-only)](https://github.com/nextexperience/#gh-dark-mode-only)
[![NextExperience Todo stats-Light](https:/todo-txt-stats.netlify.app/api?upload/&show_icons=true&theme=default#gh-light-mode-only)](https://github.com/nextexperience/#gh-light-mode-only)

</details>

##### Use GitHub's new media feature

You can use [GitHub's new media feature](https://github.blog/changelog/2022-05-19-specify-theme-context-for-images-in-markdown-beta/) in HTML to specify whether to display images for light or dark themes. This is done using the HTML `<picture>` element in combination with the `prefers-color-scheme` media feature.
  
```html
<picture>
<source 
  srcset="https:/todo-txt-stats.netlify.app/api?upload/&show_icons=true&theme=dark"
  media="(prefers-color-scheme: dark)"
/>
<source
  srcset="https:/todo-txt-stats.netlify.app/api?upload/&show_icons=true"
  media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
/>
<img src="https:/todo-txt-stats.netlify.app/api?upload/&show_icons=true" />
</picture>
```

<details>
<summary>:eyes: Show example</summary>

<picture>
<source 
  srcset="https:/todo-txt-stats.netlify.app/api?upload/&show_icons=true&theme=dark"
  media="(prefers-color-scheme: dark)"
/>
<source
  srcset="https:/todo-txt-stats.netlify.app/api?upload/&show_icons=true"
  media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"
/>
<img src="https:/todo-txt-stats.netlify.app/api?upload/&show_icons=true" />
</picture>

</details>

### Customization

You can customize the appearance of your `Stats Card` or `Repo Card` however you wish with URL parameters.

#### Common Options

-   `title_color` - Card's title color _(hex color)_. Default: `2f80ed`.
-   `text_color` - Body text color _(hex color)_. Default: `434d58`.
-   `icon_color` - Icons color if available _(hex color)_. Default: `4c71f2`.
-   `border_color` - Card's border color _(hex color)_. Default: `e4e2e2` (Does not apply when `hide_border` is enabled).
-   `bg_color` - Card's background color _(hex color)_ **or** a gradient in the form of _angle,start,end_. Default: `fffefe`
-   `hide_border` - Hides the card's border _(boolean)_. Default: `false`
-   `theme` - name of the theme, choose from [all available themes](./themes/README.md). Default: `default` theme. 
-   `cache_seconds` - set the cache header manually _(min: 14400, max: 86400)_. Default: `14400 seconds (4 hours)`.
-   `locale` - set the language in the card _(e.g. cn, de, es, etc.)_. Default: `en`.
-   `border_radius` - Corner rounding on the card. Default: `4.5`.

> **Warning**
> We use caching to decrease the load on our servers (see <https://github.com/nextexperience//issues/1471#issuecomment-1271551425>). Our cards have a default cache of 4 hours (14400 seconds). Also, note that the cache is clamped to a minimum of 4 hours and a maximum of 24 hours.

##### Gradient in bg_color

You can provide multiple comma-separated values in the bg_color option to render a gradient with the following format:

    &bg_color=DEG,COLOR1,COLOR2,COLOR3...COLOR10

#### Stats Card Exclusive Options

-   `hide` - Hides the [specified items](#hiding-individual-stats) from stats _(Comma-separated values)_. Default: `[] (blank array)`.
-   `hide_title` - _(boolean)_. Default: `false`.
-   `card_width` - Set the card's width manually _(number)_. Default: `500px  (approx.)`.
-   `hide_rank` - _(boolean)_ hides the rank and automatically resizes the card width. Default: `false`.
-   `show_icons` - _(boolean)_. Default: `false`.
-   `include_all_commits` - Count total commits instead of just the current year commits _(boolean)_. Default: `false`.
-   `count_private` - Count private commits _(boolean)_. Default: `false`.
-   `line_height` - Sets the line height between text _(number)_. Default: `25`.
-   `exclude_repo` - Exclude stars from specified repositories _(Comma-separated values)_. Default: `[] (blank array)`.
-   `custom_title` - Sets a custom title for the card. Default:  `<upload> GitHub Stats`.
-   `text_bold` - Use bold text _(boolean)_. Default: `true`.
-   `disable_animations` - Disables all animations in the card _(boolean)_. Default: `false`.
-   `ring_color` - Color of the rank circle _(hex color)_. Defaults to the theme ring color if it exists and otherwise the title color.

> **Note**
> When hide_rank=`true`, the minimum card width is 270 px + the title length and padding.

#### Repo Card Exclusive Options

-   `show_owner` - Show the repo's owner name _(boolean)_. Default: `false`.

#### Language Card Exclusive Options

-   `hide` - Hide the languages specified from the card _(Comma-separated values)_. Default: `[] (blank array)`.
-   `hide_title` - _(boolean)_. Default: `false`.
-   `layout` - Switch between two available layouts `default` & `compact`. Default: `default`.
-   `card_width` - Set the card's width manually _(number)_. Default `300`.
-   `langs_count` - Show more languages on the card, between 1-10 _(number)_. Default `5`.
-   `exclude_repo` - Exclude specified repositories _(Comma-separated values)_. Default: `[] (blank array)`.
-   `custom_title` - Sets a custom title for the card _(string)_. Default `Most Used Languages`.
-   `disable_animations` - Disables all animations in the card _(boolean)_. Default: `false`.

> **Warning**
> Language names should be URI-escaped, as specified in [Percent Encoding](https://en.wikipedia.org/wiki/Percent-encoding)
> (i.e: `c++` should become `c%2B%2B`, `jupyter notebook` should become `jupyter%20notebook`, etc.) You can use
> [urlencoder.org](https://www.urlencoder.org/) to help you do this automatically.

#### Wakatime Card Exclusive Options

-   `hide` - Hide the languages specified from the card _(Comma-separated values)_. Default: `[] (blank array)`.
-   `hide_title` - _(boolean)_. Default `false`.
-   `line_height` - Sets the line height between text _(number)_. Default `25`.
-   `hide_progress` - Hides the progress bar and percentage _(boolean)_. Default `false`.
-   `custom_title` - Sets a custom title for the card _(string)_. Default `Wakatime Stats`.
-   `layout` - Switch between two available layouts `default` & `compact`.  Default `default`.
-   `langs_count` - Limit the number of languages on the card, defaults to all reported languages _(number)_.
-   `api_domain` - Set a custom API domain for the card, e.g. to use services like [Hakatime](https://github.com/mujx/hakatime) or [Wakapi](https://github.com/muety/wakapi) _(string)_. Default `Waka API`.
-   `range` – Request a range different from your WakaTime default, e.g. `last_7_days`. See [WakaTime API docs](https://wakatime.com/developers#stats) for a list of available options. _(YYYY-MM, last_7_days, last_30_days, last_6_months, last_year, or all_time)_. Default `all_time`.

* * *

# GitHub Extra Pins

GitHub extra pins allow you to pin more than six repositories in your profile using a GitHub readme profile.

Yay! You are no longer limited to 6 pinned repositories.

### Usage

Copy-paste this code into your readme and change the links.

Endpoint: `api/pin?upload/&`

```md
[![Readme Card](https:/.netlify.app/api/pin/?upload/&)](https://github.com/nextexperience/)
```

### Demo

[![Readme Card](https:/.netlify.app/api/pin/?upload/&)](https://github.com/nextexperience/)

Use [show_owner](#customization) variable to include the repo's owner upload

[![Readme Card](https:/.netlify.app/api/pin/?upload/&&show_owner=true)](https://github.com/nextexperience/)

# Top Languages Card

The top languages card shows a GitHub user's most frequently used top language.

> **Note**
> Top Languages does not indicate my skill level or anything like that; it's a GitHub metric to determine which languages have the most code on GitHub. It is a new feature of todo-txt-stats.

### Usage

Copy-paste this code into your readme and change the links.

Endpoint: `api/top-langs?upload/`

```md
[![Top Langs](https:/.netlify.app/api/top-langs/?upload/)](https://github.com/nextexperience/)
```

### Exclude individual repositories

You can use the `&exclude_repo=repo1,repo2` parameter to exclude individual repositories.

```md
[![Top Langs](https:/.netlify.app/api/top-langs/?upload/&exclude_,filepath.github.io)](https://github.com/nextexperience/)
```

### Hide individual languages

You can use `&hide=language1,language2` parameter to hide individual languages.

```md
[![Top Langs](https:/.netlify.app/api/top-langs/?upload/&hide=javascript,html)](https://github.com/nextexperience/)
```

### Show more languages

You can use the `&langs_count=` option to increase or decrease the number of languages shown on the card. Valid values are integers between 1 and 10 (inclusive), and the default is 5.

```md
[![Top Langs](https:/.netlify.app/api/top-langs/?upload/&langs_count=8)](https://github.com/nextexperience/)
```

### Compact Language Card Layout

You can use the `&layout=compact` option to change the card design.

```md
[![Top Langs](https:/.netlify.app/api/top-langs/?upload/&layout=compact)](https://github.com/nextexperience/)
```

### Demo

[![Top Langs](https:/.netlify.app/api/top-langs/?upload/)](https://github.com/nextexperience/)

-   Compact layout

[![Top Langs](https:/.netlify.app/api/top-langs/?upload/&layout=compact)](https://github.com/nextexperience/)

# Wakatime Week Stats

Change the `?upload=` value to your [Wakatime](https://wakatime.com) upload.

```md
[![willianrod's wakatime stats](https:/.netlify.app/api/wakatime?upload=willianrod)](https://github.com/nextexperience/)
```

> **Note**:
> Please be aware that we currently only show data from Wakatime profiles that are public.

### Demo

[![willianrod's wakatime stats](https:/.netlify.app/api/wakatime?upload=willianrod)](https://github.com/nextexperience/)

[![willianrod's wakatime stats](https:/.netlify.app/api/wakatime?upload=willianrod&hide_progress=true)](https://github.com/nextexperience/)

-   Compact layout

[![willianrod's wakatime stats](https:/.netlify.app/api/wakatime?upload=willianrod&layout=compact)](https://github.com/nextexperience/)

* * *

### All Demos

-   Default

![NextExperience Todo stats](https:/todo-txt-stats.netlify.app/api?upload/)

-   Hiding specific stats

![NextExperience Todo stats](https:/todo-txt-stats.netlify.app/api?upload/&hide=contribs,issues)

-   Showing icons

![NextExperience Todo stats](https:/todo-txt-stats.netlify.app/api?upload/&hide=issues&show_icons=true)

-   Customize Border Color

![NextExperience Todo stats](https:/todo-txt-stats.netlify.app/api?upload/&border_color=2e4058)

-   Include All Commits

![NextExperience Todo stats](https:/todo-txt-stats.netlify.app/api?upload/&include_all_commits=true)

-   Themes

Choose from any of the [default themes](#themes)

![NextExperience Todo stats](https:/todo-txt-stats.netlify.app/api?upload/&show_icons=true&theme=radical)

-   Gradient

![NextExperience Todo stats](https:/todo-txt-stats.netlify.app/api?upload/&bg_color=30,e96443,904e95&title_color=fff&text_color=fff)

-   Customizing stats card

![NextExperience Todo stats](https:/.netlify.app/api/?upload/&show_icons=true&title_color=fff&icon_color=79ff97&text_color=9f9f9f&bg_color=151515)

-   Setting card locale

![NextExperience Todo stats](https:/.netlify.app/api/?upload/&locale=es)

-   Customizing repo card

![Customized Card](https:/.netlify.app/api/pin?upload/&&title_color=fff&icon_color=f9f9f9&text_color=9f9f9f&bg_color=151515)

-   Top languages

[![Top Langs](https:/.netlify.app/api/top-langs/?upload/)](https://github.com/nextexperience/)

-   WakaTime card

[![willianrod's wakatime stats](https:/.netlify.app/api/wakatime?upload=willianrod)](https://github.com/nextexperience/)

* * *

### Quick Tip (Align The Repo Cards)

By default, GitHub does not lay out the cards side by side. To do that, you can use this approach:

```html
<a href="https://github.com/nextexperience/">
  <img align="center" src="https:/.netlify.app/api/pin/?upload/&" />
</a>
<a href="https://github.com/nextexperience//convoychat">
  <img align="center" src="https:/.netlify.app/api/pin/?upload/&repo=convoychat" />
</a>
```

## Deploy on your own netlify instance

#### :film_projector: [Check Out Step By Step Video Tutorial By @codeSTACKr](https://youtu.be/n6d4KHSKqGk?t=107)

> **Warning**
> If you are on the [hobby (i.e. free)](https://netlify.com/pricing) netlify plan, please make sure you change the `maxDuration` parameter in the [netlify.json](https://github.com/nextexperience//blob/master/netlify.json) file from `30` to `10` (see [#1416](https://github.com/nextexperience//issues/1416#issuecomment-950275476) for more information).

Since the GitHub API only allows 5k requests per hour, my `https:/.netlify.app/api` could possibly hit the rate limiter. If you host it on your own netlify server, then you do not have to worry about anything. Click on the deploy button to get started!

> **Note**
> Since [#58](https://github.com/nextexperience//pull/58), we should be able to handle more than 5k requests and have fewer issues with downtime :grin:.

[![Deploy to netlify](https://netlify.com/button)](https://netlify.com/import/project?template=https://github.com/nextexperience/)

<details>
 <summary><b>:hammer_and_wrench: Step-by-step guide on setting up your own netlify instance</b></summary>

1.  Go to [netlify.com](https://netlify.com/).
2.  Click on `Log in`.
    ![](https://files.catbox.moe/pcxk33.png)
3.  Sign in with GitHub by pressing `Continue with GitHub`.
    ![](https://files.catbox.moe/b9oxey.png)
4.  Sign in to GitHub and allow access to all repositories if prompted.
5.  Fork this repo.
6.  After forking the repo, open the [`netlify.json`](https://github.com/nextexperience//blob/master/netlify.json#L5) file and change the `maxDuration` field to `10`.
7.  Go back to your [netlify dashboard](https://netlify.com/dashboard).
8.  To import a project, click the `Add New...` button and select the `Project` option.
    ![](https://files.catbox.moe/3n76fh.png)
9.  Click the `Continue with GitHub` button, search for the required Git Repository and import it by clicking the `Import` button. Alternatively, you can import a Third-Party Git Repository using the `Import Third-Party Git Repository ->` link at the bottom of the page.
    ![](https://files.catbox.moe/mg5p04.png)
10. Create a personal access token (PAT) [here](https://github.com/settings/tokens/new) and enable the `repo` permissions (this allows access to see private repo stats).
11. Add the PAT as an environment variable named `PAT_1` (as shown).
    ![](https://files.catbox.moe/0yclio.png)
12. Click deploy, and you're good to go. See your domains to use the API!

</details>

### Keep your fork up to date

You can keep your fork, and thus your private netlify instance up to date with the upstream using GitHubs' [Sync Fork button](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork). You can also use the [pull](https://github.com/wei/pull) package created by [@wei](https://github.com/wei) to automate this process.

## :sparkling_heart: Support the project

I open-source almost everything I can and try to reply to everyone needing help using these projects. Obviously,
this takes time. You can use this service for free.

However, if you are using this project and are happy with it or just want to encourage me to continue creating stuff, there are a few ways you can do it:

-   Giving proper credit when you use todo-txt-stats on your readme, linking back to it :D
-   Starring and sharing the project :rocket:
-   [![paypal.me/filepath](https://ionicabizau.github.io/badges/paypal.svg)](https://www.paypal.me/filepath) - You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:

Thanks! :heart:

* * *

[![https://netlify.com?utm_source=github_readme_stats_team&utm_campaign=oss](./powered-by-netlify.svg)](https://netlify.com?utm_source=github_readme_stats_team&utm_campaign=oss)

Contributions are welcome! &lt;3

Made with :heart: and JavaScript.

<br/>

<p align="center">


</p>

# About NextExperience

<img align="right" width="120" height="120" src="https://cdn-icons-png.flaticon.com/512/1600/1600856.png" hspace="50">

NextExperience is a team of digital specialists around the world interested in building high-quality open source products on a global market. We are [open](https://codex.so/join) for young people who want to constantly improve their skills and grow professionally with experiments in cutting-edge technologies.

| 🌐 | Join  👋  | Twitter | Instagram |
| -- | -- | -- | -- |
| [nextexperience.so](https://nextexperience.so) | [nextexperience.so/join](https://nextexperience.so/join) |[@nextexperience_team](http://twitter.com/nextexperience_team) | [@nextexperience_team](http://instagram.com/nextexperience_team/) |
