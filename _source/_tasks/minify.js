module.exports = function(grunt) {
	grunt.registerTask('minify', 'Minify nos arquivos HTML, CSS e JS', function() {
		var spawn = require('child_process').spawn
		var exec = require('child_process').exec
		var done = this.async()

		// html minify
		exec('java -jar _source/_tools/htmlcompressor-1.5.2.jar --compress-css --compress-js --remove-intertag-spaces -r -o site site')
		// css minify
		exec("java -jar _source/_tools/yuicompressor-2.4.7.jar -o ./site/styles/*.css ./site/styles/*.css")
		// js minify
		exec("java -jar _source/_tools/yuicompressor-2.4.7.jar -o ./site/scripts/*.js ./site/scripts/*.js")

		done(true)
	})
}
