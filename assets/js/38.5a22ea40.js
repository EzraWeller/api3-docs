(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{518:function(s,t,e){"use strict";e.r(t);var a=e(8),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"frontmatter-title"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[s._v("#")]),s._v(" "+s._s(s.$frontmatter.title))]),s._v(" "),e("TocHeader"),s._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#test-links"}},[s._v("Test Links")])]),e("li",[e("a",{attrs:{href:"#understand-deploy-sh"}},[s._v("Understand deploy.sh")])]),e("li",[e("a",{attrs:{href:"#deploying"}},[s._v("Deploying")])])])]),e("p"),s._v(" "),e("p",[s._v("The project docs are deployed to the remote repo "),e("strong",[s._v("gh-pages branch")]),s._v(" using the "),e("strong",[s._v("deploy.sh")]),s._v(" bash script. The script is run locally from the "),e("strong",[s._v("main")]),s._v(" branch which will be used for the build. Local "),e("strong",[s._v("main")]),s._v(" must be up-to-date with all changes by contributors.")]),s._v(" "),e("h2",{attrs:{id:"test-links"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-links"}},[s._v("#")]),s._v(" Test Links")]),s._v(" "),e("p",[s._v("Before building be sure to test all hyperlinks in the project. The test commands are only good for hyperlinks in markdown files. Hyperlinks inside custom Vue components must be tested manually.")]),s._v(" "),e("p",[s._v("The following checks all production version folders including "),e("em",[s._v("/dev")]),s._v(".")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" test:links:prod\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("A separate command checks the "),e("em",[s._v("/next")]),s._v(" folder which is not considered production ready. It should be noted that the GitHub Action "),e("RouterLink",{attrs:{to:"/dev/github-actions.html#markdown-link-check"}},[s._v("markdown-link-check")]),s._v(" to check hyperlinks never checks the "),e("em",[s._v("/next")]),s._v(" folder.")],1),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" test:links:next\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"understand-deploy-sh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#understand-deploy-sh"}},[s._v("#")]),s._v(" Understand deploy.sh")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("Builds a static website and places it in "),e("strong",[s._v(".vuepress/dist")]),s._v(". The "),e("strong",[s._v("/dist")]),s._v(" folder is deleted if it exists and re-created.")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# build the docs")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run docs:build\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("The deployment must be run from the .vuepress/dist folder.")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# navigate to the build output directory")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" docs/.vuepress/dist\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("The .vuepress/dist folder is staged to be pushed.")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# api3dao/api3-doc uses the main branch as default.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git init must start with a main branch so gh-pages will")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# "hang" off of it.')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init --initial-branch"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("main\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Deploying a locally built /dist folder to main:gh-pages as its own commit history.'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("A git push is "),e("em",[s._v("forced")]),s._v(" onto the remote branch gh-pages.")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# If you are deploying to https://<USERNAME>.github.io/<REPO>")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# NEVER push to main, use main:gh-pages.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f git@github.com:api3dao/api3-docs.git main:gh-pages\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])])]),s._v(" "),e("h2",{attrs:{id:"deploying"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deploying"}},[s._v("#")]),s._v(" Deploying")]),s._v(" "),e("p",[s._v("It is important to pull down the "),e("strong",[s._v("main branch")]),s._v(" (step 3) after the remote master repo has been merged with all contributions. This insures the local build of the /dist folder gets the latest from all contributors.")]),s._v(" "),e("ol",[e("li",[e("p",[s._v("Verify the repo target in "),e("code",[s._v("deploy.sh")]),s._v(" is set to "),e("code",[s._v("api3dao/api3-docs")]),s._v(". It is unlikely this has changed since the script went through final testing back in Feb 2021.")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Verify only, do not execute outside the deploy.sh script.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f git@github.com:api3dao/api3-docs.git main:gh-pages\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("Run "),e("code",[s._v("yarn test:links:prod")]),s._v(" to verify hyperlinks.")])]),s._v(" "),e("li",[e("p",[s._v("Git")]),s._v(" "),e("ul",[e("li",[s._v("Commit and push local work to the remote repo.")]),s._v(" "),e("li",[s._v("From the remote repo, merge contributing branches to main.")]),s._v(" "),e("li",[s._v("Return to your local repo and switch to the main branch.")]),s._v(" "),e("li",[s._v("Pull remote main to local main.")])])]),s._v(" "),e("li",[e("p",[s._v("Verify the proper versions ("),e("strong",[s._v("versions key")]),s._v(") are listed in config.json. Currently there is only one version "),e("code",[s._v("pre-alpha")]),s._v(".")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[s._v("  versions"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("'pre-alpha'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" url"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("'/pre-alpha/'"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("Deploy")]),s._v(" "),e("ul",[e("li",[s._v("Deploy from a desired local branch, usually "),e("strong",[s._v("main")]),s._v(".")]),s._v(" "),e("li",[s._v("Execute "),e("code",[s._v("deploy.sh")]),s._v(" to deploy.")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd <root of project>")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Verify the branch that is set.")]),s._v("\n% /Users/warren/DEV/api3-docs "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("main"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" deploy.sh\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);