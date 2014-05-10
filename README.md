# angelabilities-reactions

Adds support for scriptable reactions via angel dna

## angel dna

    {
      "abilities": [
        "./plasma/angelabilities-reactions.js"
      ],
      "reactions": {
        "test emit": {
          "emit": {
            "type": "test"
          }
        },
        "test do": {
          "do": "test emit"
        }
      }
    }

#### Given the above dna, angel used with command line

    $ angel test emit

emits Chemical `{type: "test"}` within angel's Plasma

    $ angel test do

does angel `test emit` command.

### reactions syntax

    "reactions": {
      "<command pattern> emit": <ChemicalBody>,
      "<command pattern> do": "<command>"
    }