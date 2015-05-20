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

## Using Cloudscape

Once you've got these assets installed, feel free to test your `$ grunt` task. It should spit a `inline.html` file into your root directory. Compare this against your `bottom.html` file. It should include a heavy amount of inline styles in nearly every element (for broad email rendering compatability).

Next, open up the `Gruntfile` and modify the first group of object keys in `obj` to suit your email requirements. This group includes things like your Content Delivery Network URL, domain name and copyright information.

The other groups in the `obj` object should change with every email you build, and include things cdn folder names for external resources, fine print expiration dates and alt text for specific images in your email. 

The last thing to do is modify `bottom.html` to suit your design, and upload your image assets to your server. Cloudscape requires a certain folder setup to work (though, you can always modify the `Gruntfile` to suit your needs). 

Example of a Main Banner Image in an email about bikes scheduled for delivery on Jan 1, 1970:

`http://cdn.example.com/70-0101-bikes/email_mainBanner.png`

It produces two files `inline.html` and `index.html`. They are the same except 'index.html' has had the comments removed (but not the `<!--[if (gte mso 9)|(IE)]>`).


### Note:

This version still requires some modification to `bottom.html` before it's ready to send. Check the comments in this file for specific instructions.

### Todo

* Building a new template needs to be faster. Include more html pieces in `bottom.html` and iterate multiple versions to include (along with new definition in `obj` to target them, for these html variants).
* Link and tracking code is an issue, esp if you're directing users to different domains. Could be improved. `!domain` should probably include `http://` by default.
* Port over to SASS.
* Set it up to generate a `hard-facebook-share.html` with slightly varied content  (like: "sign up for messages like this _here_" instead of "view online version.") and complete og protocol.
* Integrate html min
* Integrate grunt to ftp into default.









