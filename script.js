

(function () {

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


  for (var name in names) {

     
      var firstLetter = names[name].charAt(0).toLowerCase();

      
      // name in the loop.
      if (firstLetter === 'j') {
          byeSpeaker.speak(names[name]);
      } else {
          helloSpeaker.speak(names[name]);
      }
  }
})();