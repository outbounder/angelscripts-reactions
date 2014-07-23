# angelabilities-reactions

Adds support for scriptable reactions via angel dna

## angel dna

    {
      "reactions": {
        "test emit command": {
          "emit": {
            "type": "test"
          }
        },
        "test do command": {
          "do": "test emit command"
        }
      }
    }

### reactions syntax

    "reactions": {
      "<command pattern> emit": <ChemicalBody>,
      "<command pattern> do": "<command>"
    }

#### Given the above dna, angel used with command line

    $ angel test emit command

emits Chemical `{type: "test"}` within angel's Plasma

    $ angel test do command

does angel `test emit command` command.