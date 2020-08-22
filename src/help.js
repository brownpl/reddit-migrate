const { stripIndent } = require("common-tags")
const chalk = require("chalk")
const { blue, blueString } = require("./util")

module.exports = function helpInformation() {
    this.options.unshift({ flags: this._helpFlags, description: this._helpDescription })
    const help = stripIndent(chalk`
        {bold Usage:}
            reddit-migrate {${blueString} [options]}

        {bold Options:}
            ${
                this.options.map(option =>
                    option.flags.padEnd(24) + blue(option.description)
                ).join("\n" + " ".repeat(12))
            }
        {reset  }
    `)
    this.options.shift()
    return help
}