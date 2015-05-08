# Cloudscape Builder
A repo for the build template for Cloudscape responsive emails. 

## About
Created as a responsive email design workflow by Chris Jefferies

## Install

it's pretty easy, but one of the `npm` dependencies isn't up to date, so you have to do that *manually*.

### Step 1:
`$cd ` to wherever you want your local files, then, 

`$git clone https://github.com/tmpChris/Cloudscape_Builder`



### Step 2:
`$cd Cloudscape_Builder`

...then...

`$npm install`

The grunt-inline-css folder has been removed from `package.json`. Since it's a custom build of this package, for now it just downloads manually. 

### Step 3 (optional):

If you like ease and convenience;

`$grunt watch`

starts the watch process which monitors the files and compiles to `inline.html` whenever you hit save. 