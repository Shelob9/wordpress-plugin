const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require("path");
const isProduction = "production" === process.env.NODE_ENV;

let entry = {};
/**
 * Array of entry points
 */
let entryPoints = ["admin","block"]

entryPoints.forEach(
	(entryPoint) => {
		entry[entryPoint] = path.resolve(process.cwd(), `${entryPoint}/index.js`);
	}
);
module.exports = {
	mode: isProduction ? "production" : "development",
	...defaultConfig,
	module: {
		...defaultConfig.module,
		rules: [
			...defaultConfig.module.rules,
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
		],
	},
	entry,
	output: {
		filename: "[name].js",
		path: path.join(__dirname, "../build"),
	},
};
