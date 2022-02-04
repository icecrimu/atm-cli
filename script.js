const Account = require("./Account.js")
const CommandLine = require("./CommandLine.js")

async function main() {
  const accountName = await CommandLine.ask("Which account you want to access?")

  const account = await Account.find(accountName)
  if (account) {
    console.log("Found account")
  } else {
    console.log("Can't find!")
  }
}

main()
