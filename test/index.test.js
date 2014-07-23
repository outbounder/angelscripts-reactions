var path = require("path")
var expect = require("chai").expect
var Angel = require("organic-angel")

describe("index", function(){
  it("works as expected", function(done){
    var instance = new Angel({
      reactions: {
        "test1": {
          "emit": {
            type: "test1"
          }
        },
        "test2": {
          "do": "test1"
        }
      }
    })
    instance.scripts.loadScript(path.join(process.cwd(), "index.js"), function(err){
      expect(err).to.be.falsy
      expect(instance.reactor.$handlers["test1"]).to.be.truethy
      expect(instance.reactor.$handlers["test2"]).to.be.truethy
      instance.plasma.once("test1", function(c){
        expect(c.type).to.be.equal("test1")
        instance.plasma.once("test1", function(c2){
          expect(c2.type).to.be.equal("test1")
          done()
        })
        instance.do("test2")
      })
      instance.do("test1", function(err){
        expect(err).to.be.falsy
      })
    })
  })
})