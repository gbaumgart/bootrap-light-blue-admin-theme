# Require any additional compass plugins here.
#button line-height fix
#https://github.com/twbs/bootstrap-sass/issues/409
Sass::Script::Number.precision = 10

#allows to include(embed) css as if it was scss
require 'sass-css-importer'

# Set this to the root of your project when deployed:
http_path = ""
css_dir = "dist/theme"
sass_dir = "src/theme"
images_dir = "src/img"
javascripts_dir = "src/js"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true
# environment = :development #:production #setting this variable via grunt config

#set to false if there is not need to display comments in applications.css
#line_comments = false
output_style = (environment == :production) ? :compressed : :expanded

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
