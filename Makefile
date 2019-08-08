SHELL := /bin/bash  # Required for OSX
PATH  := node_modules/.bin:$(PATH)

.PHONY: all clean

# Quoted file glob is passed to node-glob instead of shell's own glob
# Note: the CLI doesn't seem to have an option to ignore files,
# so everything will be bundled into the sprite.
all:
	svg-sprite --config config.json 'images/**/*.svg'

clean:
	rm -rf dist
