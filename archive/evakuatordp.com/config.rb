require 'compass/import-once'

css_dir = "css"
sass_dir = "scss"
images_dir = "img"
javascripts_dir = "js"
sprite_load_path = "img/sprite"
relative_assets = true
line_comments = false

preferred_syntax = :scss
output_style = :compact
# output_style = :nested
environment = :production

sass_options = {:debug_info => false}
sass_options = {:sourcemap => true}