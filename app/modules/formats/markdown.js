module.exports = {
	name: "Markdown",
	defaultContent: "# Markdown",
	extensions: ["md", "markdown"],
	defaultExtension: "md",
	shortcuts: {
		bold: 		{ left : "**", right : "**" },
		italic:		{ left : "_", right : "_" },
		image:		{ left : "![", right : "]({0})", cursorOffset: { value: 1, fromLeft: false } },
		link:		{ left : "[", right : "]({0})" },
		code:		{ left : "`", right : "`" },	
		h1:			{ left : "# ", right : "", cursorOffset: { wrapAtBeginningOfLine: true } },
		h2:			{ left : "## ", right : "", cursorOffset: { wrapAtBeginningOfLine: true } },
		h3:			{ left : "### ", right : "", cursorOffset: { wrapAtBeginningOfLine: true } },
		quote:		{ left : "> ", right : "", cursorOffset: { wrapAtBeginningOfLine: true } },
		ordered:	{ left : "1. ", right : "", cursorOffset: { wrapAtBeginningOfLine: true } },
		unordered:	{ left : "-  ", right : "", cursorOffset: { wrapAtBeginningOfLine: true } },
		hr:			{ left : "\n\n---\n\n", right : "" },
		comment:	{ left : "<!---\n", right : "\n--->\n\n" }
	},
    wrapTextInComment: (text) => {
        return `<!---\n${text}\n--->\n\n`;  
    },
    metadataPatterns: {
        full: /\<!---\s{0,}\|metadata\|(.|\s)+?\|metadata\|\s{0,}---\>/,
        left: /\<!---\s{0,}\|metadata\|/g,
        right: /\|metadata\|\s{0,}---\>/g
    } 
}