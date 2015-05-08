# Cloudscape Builder
A repo for the build template for Cloudscape responsive emails. 

## About
Created as a responsive email design workflow by Chris Jefferies

## Preflight

Requires a few command line tools. 

Here's the first one: http://nodejs.org/dist/v0.12.2/node-v0.12.2.pkg

Then

$ `npm install -g grunt-cli` 

for a global install of the grunt command line interface. 

## Install

it's pretty easy, but one of the `npm` dependencies isn't up to date, so you have to do that *manually*.

### Step 1:
$ `cd ` to wherever you want your local files, then, 

$ `git clone https://github.com/tmpChris/Cloudscape_Builder`



### Step 2:
$ `cd Cloudscape_Builder`

...then...

$ `npm install`

The grunt-inline-css folder has been removed from `package.json`. Since it's a custom build of this package, for now it just downloads manually with your `git clone`. 

### Step 3 (optional):

If you like things that are easy and convenient;

$ `grunt watch`

starts the watch process which monitors the files and compiles to `inline.html` whenever you hit save. 

### Note:

I'm still working on this particular set of HTML and .less (removing urls and making it more like a template) so while the workflow is complete, there's more work to be done. 