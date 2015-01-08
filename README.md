# angelabilities-reactions

Adds support for scriptable reactions via angel dna


### reactions syntax

    "reactions": {
      "<command pattern>": {"emit": ChemicalBody},
      "<command pattern>": {"do": ["command string"]},
      "<command pattern>": {"run": "path/to/script"}
    }

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
        },
        "test run command": {
          "run": "relative/to/cwd/angel/reaction/script"
        }
      }
    }

#### Given the above dna, angel used with command line

    $ angel test emit command

emits Chemical `{type: "test"}` within angel's Plasma

    $ angel test do command

does angel `test emit command` command.

    $ angel test run command

require's and executes `relative/to/cwd/angel/reaction/script`

### reaction script format

    module.exports = function(angel [, next]) {
      // angel.cmdData...
    }