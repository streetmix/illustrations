Streetmix illustrations
=======================

Converted to SVG from original source illustrations, work in progress.

Up until now we have been doing everything in Adobe Illustrator, but in the conversion process I've updated all the canonical "source" vector files to [Affinity Designer](https://affinity.serif.com/), which has a really smooth workflow for designing vector images that are intended to convert to a pixel view, and is much more precise than Illustrator is. Plus, its SVG export is really clean and minimal, and the source files are an order of magnitude less space consuming than Illustrator files. I may add the Affinity source files into this repository in the future if the demand is there and if source control is the appropriate place to put them.


## Styleguide

**For design guidelines and colors see the [Illustration guide](https://streetmix.readme.io/docs/illustrations).**

- Swatches are provided in Adobe ASE format in the `swatches` folder. These were extracted from an Illustrator file and are not completely verified for accuracy or completeness. There are a lot of colors used in current illustrations that are obtained by adding a tint to it, and tints are not exchangeable in the ASE format, so colors that are really tints may not be 100% accurate in the swatch.


## Technical guidelines and notes

- Baseline units in Streetmix are 24px = 1 imperial foot (12px display size, 24px is 2x for Retina screens)
- Artboard (svg) area should be defined (this will come into play when automating spritesheet creation). All sprite svgs should be equal to the dimensions set in the current tilesheets.
- Group layers and elements as needed and name them with the same standards as naming HTML ids - `lower-case-with-dashes` (no spaces, no Sentence case or Title Case, no camelCase, no under_scores)
- Group everything into a single containing group (Affinity Designer will add one anyway) and name with the name of the item. (Adobe Illustrator wraps an SVG with its own layer; do not use it)
- The best export option right now appears to be exporting from Affinity Designer to SVG and select "Export for editability."" It creates a nice small SVG cleanly formatted without Adobe's cruft.
- Keep things simple. No fonts, no bitmap images, try to reduce masks and complex shapes if possible. **NOTE**: Embedded images will not render on the canvas in Firefox.
- Similarly, expand strokes to shapes to make sure they scale properly
- If exported SVG has fills that look like a node is missing, make sure the shape has a closed path.

### Note about sky files

Opening them in Affinity Design and then saving it back out at SVG seems to affect the gradient tinting in a bad way. Don't do it.


## Other artwork
- [Icons](https://github.com/streetmix/icons)

## Credits

- **Art direction** Katie Lewis (@katielewis) - Cars, bus, streetcar, mixed use apartment buildings, people, trees, plants, modern lamp post, bikes, bike racks, bicyclists, parklet variant, flex zone items
- **Contributors**
  - Marcin Wichary (@mwichary) - light rail, truck, additional people and bicyclists, icons and road markings
  - Lou Huang (@louh) - parklet, traditional lamp post, parking lot, single family residence, NYC wayfinding pylons, Inception train, waterfront, construction items, bus shelters, bollard and dome
  - Doneliza Joaquin (@djoaquin) - fenced lot
  - [Jon Reese](https://jonreese.com) - vectorized sky and lane markings
  - Brian Wamsley - utility pole (prototype)


## License


![Creative Commons License](https://i.creativecommons.org/l/by/4.0/88x31.png)

This work is licensed under a [Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).

More on [licensing](http://guidebook.streetmix.net/faq/#license) at the Guidebook.
