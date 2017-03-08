let heroData = [
  {name: "Spider-Man", affiliation: "Marvel", phone: "1-800-779-2766", image: "http://i.annihil.us/u/prod/marvel/i/mg/2/00/53710b14a320b.png" },
  {name: "Iron Man", affiliation: "Marvel", phone: "1-800-476-6626", image: "https://lumiere-a.akamaihd.net/v1/images/usa_avengers_chi_ironman_n_cf2a66b6.png?region=0%2C0%2C300%2C300" },
  {name: "Batman", affiliation: "DC", phone: "1-800-843-6483", image: "http://www.digitaljournal.com/img/2/5/5/1/i/3/9/2/o/batman-color.jpg"},
  {name: "Superman", affiliation: "DC", phone: "1-800-787-7626", image: "http://media.dcentertainment.com/sites/default/files/files/character-pops/superman_459Wx300H_589104907a0b05.70849485.png" },
  {name: "Teenage Mutant Ninja Turtles", affiliation: "Mirage", phone: "1-800-749-9992", image: "http://1.bp.blogspot.com/-qBRcU81F7i8/Vc1p5gTrfII/AAAAAAAAR6w/87p2K2uwn20/s640/tmntbanner4.jpg"}
]

angular
  .module("directory", [])
  .controller("directoryCtrl", [directoryController])

  function directoryController(){
    this.heros = heroData;
  }
