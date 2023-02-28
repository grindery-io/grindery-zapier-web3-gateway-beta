var fs = require("fs");
const { validateHeaderName } = require("http");
const { fileURLToPath } = require("url");
const { Z_ASCII } = require("zlib");

const {
  config: authentication,
  befores = [],
  afters = [],
} = require("./authentication");


//const near_hidden = require("./triggers/near");

//--DECLARED_VARIABLES--//



const vault_xfactory_action = require("./creates/vault_xfactory")
const vault_xfactory = require("./triggers/vault_xfactory")
const router02_action = require("./creates/router02")
const router_action = require("./creates/router")
const router = require("./triggers/router")
const quickswap_router_action = require("./creates/quickswap_router")
const pickle_action = require("./creates/pickle")
const pickle = require("./triggers/pickle")
const messages_action = require("./creates/messages")
const messages = require("./triggers/messages")
const marketplace_action = require("./creates/marketplace")
const marketplace = require("./triggers/marketplace")
const lp_action = require("./creates/lp")
const lp = require("./triggers/lp")
const glp_connector_action = require("./creates/glp_connector")
const glp_connector = require("./triggers/glp_connector")
const flash_action = require("./creates/flash")
const flash = require("./triggers/flash")
const erc20GRT_action = require("./creates/erc20GRT")
const drip_action = require("./creates/drip")
const drip = require("./triggers/drip")
const chef_action = require("./creates/chef")
const chef = require("./triggers/chef")
const candy_chef_action = require("./creates/candy_chef")
const candy_chef = require("./triggers/candy_chef")


























































const flow = require("./triggers/flow")


const evmWallet_action = require("./creates/evmWallet")
const evmWallet = require("./triggers/evmWallet")








const astroDao = require("./triggers/astroDao")
const syndicate_action = require("./creates/syndicate")
const syndicate = require("./triggers/syndicate")
const gnosisSafe_action = require("./creates/gnosisSafe")
const gnosisSafe = require("./triggers/gnosisSafe")


const erc721_action = require("./creates/erc721")
const erc721 = require("./triggers/erc721")
const erc20_action = require("./creates/erc20")
const erc20 = require("./triggers/erc20")
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
};

function creates() {
  let creates = {};
  //read contents of creates folder, return objects
  try {
    fs.readdirSync("./creates/").forEach((file) => {
      var temp = require(`./creates/${file}`);
      //console.log(temp.key);
      creates = {
        [temp.key]: temp,
        ...creates,
      };
    });
  } catch (error) {}
  //console.log("Creates Object: ", creates);
  return creates;
}

function triggers() {
  let triggers = {};
  //read contents of triggers folder, return objects
  try {
    fs.readdirSync("./triggers/").forEach((file) => {
      var temp = require(`./triggers/${file}`);
      console.log(temp);
      //console.log(temp.key);
      triggers = {
        [temp.key]: temp,
        ...triggers,
      };
    });
  } catch (error) {
    console.log("error with trigger: ", error.message);
  }
  /*triggers = {
    [list_driver_triggers.key]: list_driver_triggers,
    ...triggers
  }*/
  //console.log("TRIGGER Object: ", triggers);
  console.log("Trigger: ", triggers);
  return triggers;
}
