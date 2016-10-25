$(document).ready(function() {

  var captionArr = [{
    "project"  : "Responsive Email Newsletter",
    "client"   : "Kia Motors",
    "role"     : "Design Lead",
    "year"     : "2011",
    "desc"     : "I was the Lead Designer for Kia’s responsive email newsletters, working closely with Front-End Developers to create an attractive and robust. The format has since been rolled out to all of Kia's email communications."
  },
  
  {
    "project"  : "Catalogue Jacket",
    "client"   : "Ideahouse",
    "role"     : "Design/Artworke",
    "year"     : "2016",
    "desc"     : "Design and artworking for Ideahouse's 2016 product cataloge. The jacket features a smorgasboard of sample items, with shots of the underside present on the inside of the jacket."
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
    "project"  : "Google Font Changer",
    "client"   : "Reformist.io",
    "role"     : "Design",
    "year"     : "2016",
    "desc"     : "Pamela Fox, Chrome extention, serves [] people, purpose."
  },
  ];



  function fCaption(section){
    $("dd.client").text("("+captionArr[section].client+")");
    $("dd.project").text(captionArr[section].project);
    $("dd.role").text(captionArr[section].role);
    $("dd.year").text(captionArr[section].year);
    $("dd.desc").text(captionArr[section].desc);
  }


  $("#close").click(function(e){
    e.preventDefault();
    $("#close").toggleClass('active');
    $("#blurb").toggleClass('hidden');
  });

  $("#caption").css('opacity', '0');

  var cap2 = new Waypoint({element: document.getElementById('header'), handler: function(){
    $("#caption").css('opacity', '0');

    fCaption(0);
  }, offset: '-30%'});

  var cap1 = new Waypoint({ element: document.getElementById('header'),handler:function(){
    $("#caption").css('opacity', '1');
  }, offset: '-35%'});

  var cap3 = new Waypoint({element: document.getElementById('footer'), handler: function(){
    $("#caption").css('opacity', '0');
    
  }, offset: '90%'});

  var cap4 = new Waypoint({ element: document.getElementById('footer'),handler:function(){
    $("#caption").css('opacity', '1');
  }, offset: '95%'});


  // var cap3 = new Waypoint({ element: document.getElementById('email'), handler: function(){
  //   fCaption(2);
  // }, offset: -40});

  // var cap4 = new Waypoint({ element: document.getElementById('gfc'), handler: function(){
  //   fCaption(3);
  // }, offset: -40});




});