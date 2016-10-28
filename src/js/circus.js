$(document).ready(function() {

  var captionArr = [{
    "project"  : "Responsive Email Newsletter",
    "client"   : "Kia Motors",
    "role"     : "Design Lead",
    "year"     : "2011",
    "desc"     : "Lead Designer for Kia’s responsive email newsletters, working closely with Front-End Developers to create an attractive and robust. The format has since been rolled out to all of Kia's email communications."
  },
  

  {
    "project"  : "Google Font Previewer for Chrome",
    "client"   : "—",
    "role"     : "Design (Identity)",
    "year"     : "2016",
    "desc"     : "The Google Font Previewer by Pamela Fox serves 25,582 users and earlier in the year I redesigned the Identity, based on Google's 'Product Sans' typeface."
  },


  {
    "project"  : "OLA",
    "client"   : "Orange Brand",
    "role"     : "Motion",
    "year"     : "2012",
    "desc"     : "Carousel animation for the Orange Brand homepage. Created in After Effects. Other work for Orange included instructional motion pieces, Flash carousels and email designs."
  },


  {
    "project"  : "Homepage Hero",
    "client"   : "Orange Brand",
    "role"     : "Motion",
    "year"     : "2012",
    "desc"     : "Carousel animation for the Orange Brand homepage. Created in After Effects. Other work for Orange included instructional motion pieces, Flash carousels and email designs."
  },



  {
    "project"  : "Korahnzo McGayle",
    "client"   : "LGN",
    "role"     : "Design, Motion",
    "year"     : "2011",
    "desc"     : "I was approached by film-maker George Nevin to create suitable titles for this Red Bull short submission, featuringKorahn Gayle. Watch the full HD version here."
  },





  {
    "project"  : "Product Catalogue",
    "client"   : "Ideahouse",
    "role"     : "Artwork",
    "year"     : "2016",
    "desc"     : "Artworking for Ideahouse's 2016 product cataloge. The jacket features a smorgasboard of sample items, with shots of the underside visible on the inside of the jacket."
  },

  {
    "project"  : "Webapp",
    "client"   : "Ideahouse",
    "role"     : "Design (UX, UI), Front-end",
    "year"     : "2016",
    "desc"     : ""
  },





  ];



  function fCaption(section){
    // $("dd.client").text("("+captionArr[section].client+")");
    $("dd.client").text(captionArr[section].client);
    $("dd.project").text(captionArr[section].project);
    $("dd.role").text(captionArr[section].role);
    $("dd.year").text(captionArr[section].year);
    $("dd.desc").text(captionArr[section].desc);
  }


  var vh;
  var vhalf;



  function fWindow(){
    vh = $(window).height();
    vhalf = Math.floor(vh/2);
    console.log(vh);
    console.log(vhalf);

  };

  $(window).resize(function() {
    fWindow();
  });

  fWindow();


  $("#close").click(function(e){
    e.preventDefault();
    $("#close").toggleClass('active');
    $("#blurb").toggleClass('hidden');
  });

  $("#caption").css('opacity', '0');



  var capA = new Waypoint({element: document.getElementById('header'), handler: function(){
    $("#caption").css('opacity', '0');
    $("#continue").css('opacity', '1');
  }, offset: '-30%'});

  var capB = new Waypoint({ element: document.getElementById('header'),handler:function(){
    $("#caption").css('opacity', '1');
    $("#continue").css('opacity', '0');
  }, offset: '-35%'});


  var capC = new Waypoint({element: document.getElementById('footer'), handler: function(){
    $("#caption").css('opacity', '0');
    
  }, offset: '90%'});

  var capD = new Waypoint({ element: document.getElementById('footer'),handler:function(){
    $("#caption").css('opacity', '1');
  }, offset: '95%'});



  // var cap1 = new Waypoint({ element: document.getElementById('email'), handler: function(){
  //   fCaption(0);
  // }, offset: '50%'});

  // var cap2 = new Waypoint({ element: document.getElementById('gfc'), handler: function(){
  //   fCaption(1);
  // }, offset: '50%'});

  // var cap3 = new Waypoint({ element: document.getElementById('beggars'), handler: function(){
  //   fCaption(3);
  // }, offset: '50%'});



var inview = new Waypoint.Inview({
  element: $('#gfc')[0],
  enter: function(direction) {
    console.log('enter')
  },
  entered: function(direction) {
    console.log('entered')
  },
  exit: function(direction) {
    console.log('exit')
  },
  exited: function(direction) {
    console.log('exited')
  }
})






});