var async = require("async")

var angelListenAndEmit = function(angel, pattern) {
  return function(dna) {
    angel.on(pattern, function(angel){
      angel.plasma.emit(dna)
    })
    .example("r$ "+pattern)
  }
}

module.exports = function(angel) {
  for(var pattern in angel.angelDNA.reactions) {
    var reactionDNA = angel.angelDNA.reactions[pattern]
    if(reactionDNA["emit"] && typeof reactionDNA["emit"] == "object") {
      angelListenAndEmit(angel, pattern)(reactionDNA["emit"])
    }
    if(reactionDNA["do"] && typeof reactionDNA["do"] == "object" && Array.isArray(reactionDNA["do"])) {
      angel.on(pattern, function(angel){
        async.each(reactionDNA["do"], function(cmd, next){
          angel.do(cmd, next)
        }, function(err){
          if(err) console.error(err)
        })
      })
      .example("r$ "+reactionDNA["do"])
    }
  }
}