var connect = require('connect'),
    express = require('express'),
    http = require('http'),
    faye = require('faye'),
    fs = require("fs"),
    markdown = require('markdown').markdown;

(function() {
  var _ = require('underscore/underscore')._;

  var port = (process.env.PORT || 9090);
  var app = express.createServer();
  var since = 0;

  app.configure('development', function(){
      app.use(express.compiler({ src: __dirname +  '/public', enable: ['less'] }));
      app.use(express.static(__dirname + '/public'));
      app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  });

  app.register('.html', require('ejs'));
  app.set('view engine', 'html');

  app.get('/', function(req, res){

    var slides = [];

    fs.readFile(__dirname + '/slides/showoff.json', function loadConfigSuccess(err, fileData) {
      var slideConfig = JSON.parse(fileData);

      _.each(slideConfig.sections, function(item, key) {
        var sectionData = load_section_files(item.section);
        var folderPath = sectionData[0];
        var files = sectionData[1];

        _.each(files, function(file, key) {
          var sectionSlides = load_single_section(folderPath, file);
          slides = slides.concat(sectionSlides);
        })
      });

      console.log('index', slides);
      res.render('index', { 'slides' : slides });
      
    });  

  });

  function init() {

    // Listen on port 3000
    app.listen(port);

    console.log('Express started on port 3000');

  }

  function process_markdown(name, content) {
    var slidesCollection = [];
    var slides = _.compact(content.split(/!SLIDE/));
    //console.log('process_markdown', slides.length, slides);
    
    _.each(slides, function(slide) {
      // extract content classes
      var lines = slide.split("\n");
      var slideClass = _.first(lines);

      var slide = _.rest(lines).join('\n');
      var content = markdown.toHTML(slide);

      var slideData = { 'content' : content, 'slideClass' : slideClass };
      slidesCollection.push(slideData);
      
      //console.log('process_markdown slide', slideData );
    });

   
    //console.log('process_markdown', slidesCollection);

    return slidesCollection;
  }

  function load_single_section(folderPath, file, callback) {
    var fileContent = fs.readFileSync(folderPath + file);

      return process_markdown(file, String(fileContent));
  }

  function load_section_files(section, callback) {
    var path = __dirname + '/slides/' + section + '/';
    var files = fs.readdirSync(path);

    var markdownFiles = _.select(files, function(file) {
      console.log('markdown file', file);
      return file.indexOf('.md') > -1;
    });

    return [path, _.toArray(markdownFiles)];
  }  


  init()
  
})();






