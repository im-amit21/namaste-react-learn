# Igniting our App

## What is NPM

    NPM is a package manager for Javascript Language from where the packages/libraries are hosted.
    There are two type of dependencies.
        1. Dev
            Required during developement phase.
        2. Normal
            Required for productions too.

## What is parcel/webpack ? Why do we need it ?

    This are the bundlers which bundles the packages, so that it can shift to the production properly.
        - Dev Build
        - Local Server
        - HMR : Hot Module Replacement (Auto Saving)
        - Its using File Watching Algorithm (C++)
        - Fast Build because of caching
        - Image Optimization
        - Minification of file for production
        - Bundling
        - Compress
        - Consistant Hashing
        - Code Splitting
        - Differential Bundling - Support Older Browsers
        - Error Handling
        - Diagnostics
        - Https
        - Tree Shaking - Remove unused code
        - Different dev and prod build

## What is .parcel-cache ?

    It stores the information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse everything again. That makes the parcel even more faster in developement mode.

## What is npx ?

    NPX stands for Node Package eXecute. It is simply an NPM package runner. It allows developers to execute any Javascript Package available on the NPM registry without even installing it.

## What is difference between dependencies and dev dependencies ?

    Dependencies:
        These are the packages which required for both production and developement.

    Dev Dependencies:
        These are the packages which required for the developement purpose, e.g parcel

## What is tree shaking ?

    Its helps to remove the dead or unused code. It relies on the import and export statement to detect if code modules are exported and imorted or not.

## What is Hot Module Replacement

    HMR improves the development experience by updating modules in the browser at runtime without needing a whole page refresh.

## What is .gitignore ? What should we add or not to add in it ?

    This file helps to prevent to commit the code, which is not required for other environment.
    We should not add the code which we can regenerate from npm packages and add the main codebase in it.
    e.g /node-modules

## What is difference between package.json and package-lock.json ?

    pacakge.json
        It's a configuration for npm or dependencies which are required for project.
        (Have approx version)

    package-lock.json
        Its keep the record of exact version of the package/dependecies and aslo has dependencies of all node modules packages
        (Have exact version)
        Its helps to use same dependecies for production too (Integrity).

## Why should I not modify the `package-lock.json` ?

    `package-lock.json` contains the exact version of the dependencies, if we change it from other version, it may impact on  the packages due to upgrade.

## What is node_modules ?

    Its fetch the code from npm and stored it in node_modules folder.
    Node Modules contain the codebases of all the install packages.
    No need to push it in git, as we can regenarate again using npm.

## What is .dist folder ?

    It stands for distribution and is the minified or concatenated version it has been actually used on production sites.
    It contains all the files which required to run/build a module.

## What is browserlist ?

    - We can add browser list in package.json.
    - Can provide the required details of browser or country specific.

## Caret (^) and Tilde (~):

    ^ : It's automatically update the nearest version.
    ~ : It's update with latest version and may impact in major changes.

## script types

    <script src="..." type="module" />
        Attribute is used to denote when a module is being pointed
