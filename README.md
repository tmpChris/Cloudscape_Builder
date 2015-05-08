# Cloudscape Builder
A repository for the build template for Cloudscape responsive emails. 

## About
Created as a responsive email design workflow by Chris Jefferies

The grunt task splices together three files

* top.html - an html5 head
* style.less - which is complied to master.css during the workflow
* bottom.html - the bulk of the html5 cloudscape template.

And then inlines them to you html and leaves the `@media` queries within `<style></style>`. (hence the separate top and bottom files) 

## Preflight

Requires a few command line tools. I think I've got them all here. 

* git: [http://git-scm.com/download/mac](http://git-scm.com/download/mac)
* Apple's Xcode command line tools: $ `xcode-select --install` then follow the installer.
* Node (and, more specifically, node package manager): [http://nodejs.org/dist/v0.12.2/node-v0.12.2.pkg](http://nodejs.org/dist/v0.12.2/node-v0.12.2.pkg)
* Grunt *the javascript task runner* $ `npm install -g grunt-cli` for a global install of the grunt command line interface. 

## Install

I had to hack it a little bit, but it seems to work. 

### Step 1:
$ `cd ` to wherever you want your local files, then, 

$ `git clone https://github.com/tmpChris/Cloudscape_Builder`

### Step 2:
$ `cd Cloudscape_Builder`

$ `npm install`

The grunt-inline-css folder has been removed from `package.json`. Since it's a custom build of this package with an updated juice library, for now it just downloads manually with your `git clone`. 

### Step 3 (optional):

If you like things that are easy and convenient;

$ `grunt watch`

starts the watch process which monitors the files and compiles to `inline.html` whenever you hit save. 

### Note:

I'm still working on this particular set of HTML and .less (removing urls and making it more like a template) so while the workflow is complete, the HTML needs an update.