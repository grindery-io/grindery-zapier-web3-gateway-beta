var fs = require("fs")
const { validateHeaderName } = require("http")
const { fileURLToPath } = require("url")
const { Z_ASCII } = require("zlib")

const {
  config: authentication,
  befores = [],
  afters = [],
} = require("./authentication")

//const near_hidden = require("./triggers/near");

//--DECLARED_VARIABLES--//

const syndicate_action = require("./creates/syndicate")
const syndicate = require("./triggers/syndicate")
const nftmints_action = require("./creates/nftmints")
const gnosisSafe_action = require("./creates/gnosisSafe")
const gnosisSafe = require("./triggers/gnosisSafe")
const flow = require("./triggers/flow")
const evmGenericAbi_action = require("./creates/evmGenericAbi")
const evmGenericAbi = require("./triggers/evmGenericAbi")
const chainlink_action = require("./creates/chainlink")






module.exports = {
  // This is just shorthand to reference the installed dependencies you have.

  // Zapier will need to know these before we can upload.
  version: require("./package.json").version,
  platformVersion: require("zapier-platform-core").version,

  authentication,

  beforeRequest: [...befores],

  afterResponse: [...afters],

  // If you want your trigger to show up, you better include it here!
  triggers: triggers(),

  // If you want your searches to show up, you better include it here!
  searches: {},

  // If you want your creates to show up, you better include it here!
  creates: creates(),

  resources: {},
}

function creates() {
  let creates = {}
  //read contents of creates folder, return objects
  try {
    fs.readdirSync("./creates/").forEach((file) => {
      var temp = require(`./creates/${file}`)
      //console.log(temp.key);
      creates = {
        [temp.key]: temp,
        ...creates,
      }
    })
  } catch (error) {}
  //console.log("Creates Object: ", creates);
  return creates
}

function triggers() {
  let triggers = {}
  //read contents of triggers folder, return objects
  try {
    fs.readdirSync("./triggers/").forEach((file) => {
      var temp = require(`./triggers/${file}`)
      console.log(temp)
      //console.log(temp.key);
      triggers = {
        [temp.key]: temp,
        ...triggers,
      }
    })
  } catch (error) {
    console.log("error with trigger: ", error.message)
  }
  /*triggers = {
    [list_driver_triggers.key]: list_driver_triggers,
    ...triggers
  }*/
  //console.log("TRIGGER Object: ", triggers);
  //.log("Trigger: ", triggers);
  return triggers
}
