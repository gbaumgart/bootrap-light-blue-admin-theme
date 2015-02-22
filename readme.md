Light Blue v3.0 (November 15)
=========

Now available in two [transparent (basic)](http://demo.flatlogic.com/3.1/transparent) and [white](http://demo.flatlogic.com/3.1/white) version both with **handlebars** and **bower** under the hood!

Light Blue is a **next generation** dashboard template based on the unique transparent design. There are few reasons why we created it:.

  - We didn't like the darkness of most of admin templates, so we created this **light** one.
  - We didn't like the slowness of most of admin templates, so we created this **fast** one.
  - We didn't like the high contrast of most of admin templates, so we created this **unobtrusive** one.
  - We searched for a solution of how to make widgets look like real widgets, so we decided that **deep background** - is what makes widgets look real.

![Light Blue Preview](http://demo.flatlogic.com/3.0/light-blue-preview.png)

New Version 3.1 Released!
-

- White Version codebase rewrite & improvement
- Tiny UI issues fix
- Bootstrap 3.3.1 update

**Light Blue** works great with all range of devices: starting from small mobile to large desktop ones.
**Light Blue** will make the development of your next web application or admin entrance for it much easier and faster.
It is based on great Bootstrap framework, uses powerful Sass (CSS preprocessor) technology and makes page loading super fast with built-in ajax page-loader.

We plan to release continuous long term updates and dozens of new features will be coming soon in the future releases. Once you purchased Light Blue, you will be entitled to free download of all future updates.

Feedback
-
Let's make **Light Blue** template better together! If you notice any bugs or you want some features to be implemented let us know!
Email us at [contact@flatlogic.com](mailto:contact@flatlogic.com) or tweet to [okendokenn](https://twitter.com/Okendokenn). We will do our best to help you.

Next Release Plan
-

  - White Version 3.0
  - Design Improvements
  - Your suggestions!

Full feature list
-

  - Light Design
    *   Html5 Gradient Background
    *   Unobtrusive colors and widgets
    *   Option to select between two perfectly chosen background gradients
  - White & Transparent Versions
  - Fully Responsive Layout: from small mobile to large desktop devices.
  - Bower package manager
  - Grunt tasks
  - Print Optimized
  - 3 Sidebar Options
    *   Sidebar can be shown or hidden
    *   It can be placed on the left or right side
    *   Iconic or Automatic representation
    *   Sidebar state is controlled via localStorage
  - Developer Friendly
    *   Sass powered styles
    *   Lost of useful help classes
    *   Easy to read and maintain code
  - Crossbrowser Support: tested in all major browsers
  - Easily Customizable Widgets
    *   6 background styles
    *   4 size options
  - Integrated Rickshaw and Nvd3 Chart Libraries Based on Powerful D3.js
    *   Donut Chart
    *   Stacked Area Chart
    *   Bar Chart
    *   Line Chart
    *   Realtime Chart
  - Form Elements
    *   Two Ready-to-Use Demo Forms: Account and Article
    *   Form Markups
        *   Default
        *   Horizontal
        *   Labels on Left
        *   Condensed
    *   Different Kinds of Text Inputs
    *   Textareas
        *   Elastic textarea with autogrow feature
        *   Editor
    *   Selects
        *   Selects with search, groups and tagging
        *   Bootstrap-like selects
    *   On/Off Switches
    *   Datepicker
    *   Colorpicker
    *   Masked inputs
    *   Form Wizard
  - Statistic Elements
    *   Metro-like Tiles
    *   Progress Bars
    *   Overview Widgets
  - User Interface Elements
    *   Different Kinds of Buttons
        *   Simple Buttons
        *   Dropdowns
        *   Button Groups
        *   Button States
    *   Dialogs
    *   Icons
    *   Tabs
    *   Accordion
  - Components
    *   Maps
        *   Google Maps
        *   Vector Maps
    *   Google-like Calendar
    *   Gallery
    *   File Upload
  - Tables
    *   Static
    *   Dynamic (Sortable, Filterable, Editable and Validatable)
  - Special Pages' Concepts
    *   Search Page
    *   404 Page
    *   Login Page
    *   Invoice Page
    *   Inbox Page
    *   Landing Page

Please note that support is provided via email as mentioned in the documentation page.

##install compass on ubuntu 14

 #https://gorails.com/setup/ubuntu/14.04
 sudo apt-get update
 sudo apt-get install git-core curl zlib1g-dev build-essential libssl-dev libreadline-dev libyaml-dev libsqlite3-dev sqlite3 libxml2-dev libxslt1-dev libcurl4-openssl-dev python-software-properties
 sudo apt-get install libgdbm-dev libncurses5-dev automake libtool bison libffi-dev
  
 curl -L https://get.rvm.io | bash -s stable
 source ~/.rvm/scripts/rvm
 echo "source ~/.rvm/scripts/rvm" >> ~/.bashrc
 rvm install 2.1.2
 rvm use 2.1.2 --default
 ruby -v
  
 #http://blog.acrona.com/index.php?post/2014/05/15/Installer-Fondation-et-Compass/sass-sur-Ubuntu-14.04
 
  gem install compass
  gem install --pre sass-css-importer