(function(window, jQuery) {
  var map;

  var stations = [
    {
      name:'Nørreport',
      type:'stog',
      lat:55.683,
      lng:12.5712
    },
    {
      name:'Vesterport',
      type:'stog',
      lat:55.6757,
      lng:12.5626
    },
    {
      name:'Christianshavn',
      type:'metro',
      lat:55.67225,
      lng:12.5911
    },
    {
      name:'København H',
      type:'stog',
      lat:55.6720911288,
      lng:12.5651407242
    },
    {
      name:'Dybbølsbro',
      type:'stog',
      lat:55.664757484,
      lng:12.5595617294
    },
    {
      name:'Enghave',
      type:'stog',
      lat:55.663123564,
      lng:12.5397348404
    },
    {
      name:'Valby',
      type:'stog',
      lat:55.6638134496,
      lng:12.5147151947
    },
    {
      name:'Valby Langgade',
      type:'stog',
      lat:55.6671416744,
      lng:12.5042653084
    },
    {
      name:'Peter Bangs Vej',
      type:'stog',
      lat:55.6784555216,
      lng:12.5036001205
    },
    {
      name:'Vanløse',
      type:'stog',
      lat:55.687092148,
      lng:12.4916538559
    },
    {
      name:'Nørrebro',
      type:'stog',
      lat:55.7006139176,
      lng:12.5376534462
    },
    {
      name:'Bispebjerg',
      type:'stog',
      lat:55.706381265,
      lng:12.5414085388
    },
    {
      name:'Ryparken',
      type:'stog',
      lat:55.7149400354,
      lng:12.5585961342
    },
    {
      name:'Hellerup',
      type:'stog',
      lat:55.7309101824,
      lng:12.5667285919
    },
    {
      name:'Fuglebakken',
      type:'stog',
      lat:55.695371785,
      lng:12.5271391869
    },
    {
      name:'Grøndal',
      type:'stog',
      lat:55.6907034581,
      lng:12.5155413151
    },
    {
      name:'Østerport',
      type:'stog',
      lat:55.6927655727,
      lng:12.5874352455
    },
    {
      name:'Nordhavn',
      type:'stog',
      lat:55.7060790142,
      lng:12.5904178619
    },
    {
      name:'Svanemøllen',
      type:'stog',
      lat:55.7155141795,
      lng:12.5779080391
    },
    {
      name:'Emdrup',
      type:'stog',
      lat:55.7200043003,
      lng:12.5415802002
    },
    {
      name:'Danshøj',
      type:'stog',
      lat:55.6642491606,
      lng:12.4933862686
    },
    {
      name:'Hvidovre',
      type:'stog',
      lat:55.664346,
      lng:12.4744177
    },
    {
      name:'Rødovre',
      type:'stog',
      lat:55.6649269236,
      lng:12.4587535858
    },
    {
      name:'Brøndbyøster',
      type:'stog',
      lat:55.6650842598,
      lng:12.4404609203
    },
    {
      name:'Glostrup',
      type:'stog',
      lat:55.6629722717,
      lng:12.3974168301
    },
    {
      name:'Albertslund',
      type:'stog',
      lat:55.6581185032,
      lng:12.3533535004
    },
    {
      name:'Taastrup',
      type:'stog',
      lat:55.652531688,
      lng:12.3018121719
    },
    {
      name:'Høje Taastrup',
      type:'stog',
      lat:55.648899528,
      lng:12.2692930698
    },
    {
      name:'Charlottenlund',
      type:'stog',
      lat:55.7517769362,
      lng:12.5723290443
    },
    {
      name:'Ordrup',
      type:'stog',
      lat:55.7628912493,
      lng:12.5832939148
    },
    {
      name:'Klampenborg',
      type:'stog',
      lat:55.7769893713,
      lng:12.587928772
    },
    {
      name:'Bernstoffsvej',
      type:'stog',
      lat:55.7429605086,
      lng:12.5573945045
    },
    {
      name:'Gentofte',
      type:'stog',
      lat:55.7535369638,
      lng:12.5414675474
    },
    {
      name:'Jægersborg',
      type:'stog',
      lat:55.7615994712,
      lng:12.5212919712
    },
    {
      name:'Lyngby',
      type:'stog',
      lat:55.7681545008,
      lng:12.5025701523
    },
    {
      name:'Sorgenfri',
      type:'stog',
      lat:55.7812612542,
      lng:12.4831616879
    },
    {
      name:'Virum',
      type:'stog',
      lat:55.7957839629,
      lng:12.4730497599
    },
    {
      name:'Holte',
      type:'stog',
      lat:55.8078594749,
      lng:12.4681949615
    },
    {
      name:'Birkerød',
      type:'stog',
      lat:55.8403377234,
      lng:12.4234235287
    },
    {
      name:'Allerød',
      type:'stog',
      lat:55.8710131522,
      lng:12.3564434052
    },
    {
      name:'Hillerød',
      type:'stog',
      lat:55.9267227244,
      lng:12.3106098175
    },
    {
      name:'Forum',
      type:'metro',
      lat:55.6816796714,
      lng:12.5528454781
    },
    {
      name:'Frederiksberg',
      type:'metro',
      lat:55.6811655189,
      lng:12.5318062305
    },
    {
      name:'Fasanvej - Solbjerg',
      type:'metro',
      lat:55.6816191832,
      lng:12.5232124329
    },
    {
      name:'Lindevang',
      type:'metro',
      lat:55.6834337876,
      lng:12.5129127502
    },
    {
      name:'Flintholm',
      type:'metro',
      lat:55.6858954663,
      lng:12.4992227554
    },
    {
      name:'Vanløse',
      type:'metro',
      lat:55.6871111276,
      lng:12.4924314022
    },
    {
      name:'Amagerbro',
      type:'metro',
      lat:55.663522973,
      lng:12.6025307178
    },
    {
      name:'Kongens Nytorv',
      type:'metro',
      lat:55.679411301,
      lng:12.584913969
    },
    {
      name:'Lergravsparken',
      type:'metro',
      lat:55.6621371274,
      lng:12.6164245605
    },
    {
      name:'Islands Brygge',
      type:'metro',
      lat:55.6635713859,
      lng:12.5851124525
    },
    {
      name:'DR Byen - Universitetet',
      type:'metro',
      lat:55.6558215289,
      lng:12.5888621807
    },
    {
      name:'Sundby',
      type:'metro',
      lat:55.6451943776,
      lng:12.5855791569
    },
    {
      name:'Bella Center',
      type:'metro',
      lat:55.6380555261,
      lng:12.5828111172
    },
    {
      name:'Ørestad',
      type:'metro',
      lat:55.6289893081,
      lng:12.5792598724
    },
    {
      name:'Vestamager',
      type:'metro',
      lat:55.6193212098,
      lng:12.5754833221
    },
    {
      name:'Flintholm',
      type:'stog',
      lat:55.6854116105,
      lng:12.4984073639
    },
    {
      name:'Dyssegård',
      type:'stog',
      lat:55.7321576695,
      lng:12.5359100103
    },
    {
      name:'Vangede',
      type:'stog',
      lat:55.7394454595,
      lng:12.5234270096
    },
    {
      name:'Kildebakke',
      type:'stog',
      lat:55.7447481097,
      lng:12.5072908401
    },
    {
      name:'Buddinge',
      type:'stog',
      lat:55.7471515795,
      lng:12.4937081337
    },
    {
      name:'Stengården',
      type:'stog',
      lat:55.756933019,
      lng:12.4724006653
    },
    {
      name:'Bagsværd',
      type:'stog',
      lat:55.7615391067,
      lng:12.4549019337
    },
    {
      name:'Skovbrynet',
      type:'stog',
      lat:55.7653841393,
      lng:12.4346458912
    },
    {
      name:'Hareskov',
      type:'stog',
      lat:55.7656406626,
      lng:12.4065846205
    },
    {
      name:'Værløse',
      type:'stog',
      lat:55.7820063723,
      lng:12.373008728
    },
    {
      name:'Farum',
      type:'stog',
      lat:55.8120646727,
      lng:12.373175025
    },
    {
      name:'KB Hallen',
      type:'stog',
      lat:55.6776902762,
      lng:12.4921470881
    },
    {
      name:'Ålholm',
      type:'stog',
      lat:55.6719096195,
      lng:12.4930214882
    },
    {
      name:'Vigerslev Allé',
      type:'stog',
      lat:55.6597223711,
      lng:12.4986004829
    },
    {
      name:'Ny Ellebjerg',
      type:'stog',
      lat:55.6523258746,
      lng:12.5163674355
    },
    {
      name:'Sydhavn',
      type:'stog',
      lat:55.6549045173,
      lng:12.5375032425
    },
    {
      name:'Sjælør',
      type:'stog',
      lat:55.6514662893,
      lng:12.5261306763
    },
    {
      name:'Åmarken',
      type:'stog',
      lat:55.6394906669,
      lng:12.4994158745
    },
    {
      name:'Friheden',
      type:'stog',
      lat:55.6292436995,
      lng:12.4826145172
    },
    {
      name:'Avedøre',
      type:'stog',
      lat:55.6255306321,
      lng:12.4543976784
    },
    {
      name:'Brøndby Strand',
      type:'stog',
      lat:55.6210114817,
      lng:12.4213314056
    },
    {
      name:'Vallensbæk',
      type:'stog',
      lat:55.6234043943,
      lng:12.387342453
    },
    {
      name:'Ishøj',
      type:'stog',
      lat:55.6134743669,
      lng:12.3574948311
    },
    {
      name:'Hundige',
      type:'stog',
      lat:55.5979593463,
      lng:12.3335802555
    },
    {
      name:'Greve',
      type:'stog',
      lat:55.5819955023,
      lng:12.2965764999
    },
    {
      name:'Karlslunde',
      type:'stog',
      lat:55.5666136283,
      lng:12.2706770897
    },
    {
      name:'Solrød Strand',
      type:'stog',
      lat:55.5337917755,
      lng:12.2182130814
    },
    {
      name:'Jersie',
      type:'stog',
      lat:55.5206505,
      lng:12.2085142136
    },
    {
      name:'Ølby',
      type:'stog',
      lat:55.4800208334,
      lng:12.1752762794
    },
    {
      name:'Køge',
      type:'stog',
      lat:55.4578592215,
      lng:12.186434269
    },
    {
      name:'Jyllingevej',
      type:'stog',
      lat:55.6906490313,
      lng:12.4768638611
    },
    {
      name:'Islev',
      type:'stog',
      lat:55.6982922293,
      lng:12.4693536758
    },
    {
      name:'Husum',
      type:'stog',
      lat:55.7097119133,
      lng:12.4634742737
    },
    {
      name:'Herlev',
      type:'stog',
      lat:55.7189044799,
      lng:12.4433898926
    },
    {
      name:'Skovlunde',
      type:'stog',
      lat:55.7230256253,
      lng:12.4029421806
    },
    {
      name:'Malmparken',
      type:'stog',
      lat:55.7246056852,
      lng:12.3860120773
    },
    {
      name:'Ballerup',
      type:'stog',
      lat:55.7298650415,
      lng:12.3580205441
    },
    {
      name:'Måløv',
      type:'stog',
      lat:55.7473689714,
      lng:12.3181790113
    },
    {
      name:'Kildedal',
      type:'stog',
      lat:55.751933923,
      lng:12.2866845131
    },
    {
      name:'Veksø',
      type:'stog',
      lat:55.7500983453,
      lng:12.2383350134
    },
    {
      name:'Stenløse',
      type:'stog',
      lat:55.7665912927,
      lng:12.1901464462
    },
    {
      name:'Gl. Toftegård',
      type:'stog',
      lat:55.7794692925,
      lng:12.1855545044
    },
    {
      name:'Ølstykke',
      type:'stog',
      lat:55.7950330771,
      lng:12.1613931656
    },
    {
      name:'Frederikssund',
      type:'stog',
      lat:55.8351203714,
      lng:12.0663142204
    },
    {
      name:'Nørreport',
      type:'metro',
      lat:55.6836968982,
      lng:12.5712400675
    },
    {
      name:'Øresund',
      type:'metro',
      lat:55.66144,
      lng:12.62881
    },
    {
      name:'Amager Strand',
      type:'metro',
      lat:55.65624,
      lng:12.63178
    },
    {
      name:'Femøren',
      type:'metro',
      lat:55.64553,
      lng:12.63818
    },
    {
      name:'Kastrup',
      type:'metro',
      lat:55.6358,
      lng:12.64689
    },
    {
      name:'Lufthavnen',
      type:'metro',
      lat:55.63082,
      lng:12.64922
    }
  ];

  var lines = [
    { type: 'F', color: '#f3c500', stations: ['Vigerslev Allé', 'Danshøj', 'Ålholm', 'KB Hallen', 'Flintholm', 'Grøndal', 'Fuglebakken', 'Nørrebro', 'Bispebjerg', 'Ryparken']},
    { type: 'B', color: '#4ebf4d', stations: ['Høje Taastrup', 'Taastrup', 'Albertslund', 'Glostrup', 'Brøndbyøster', 'Rødovre', 'Hvidovre', 'Danshøj', 'Valby', 'Enghave', 'Dybbølsbro', 'København H', 'Vesterport', 'Nørreport', 'Østerport', 'Nordhavn', 'Hellerup', 'Bernstoffsvej', 'Gentofte', 'Jægersborg', 'Lyngby', 'Sorgenfri', 'Virum', 'Holte']},
    { type: 'Bx', color: '#a5cb7e', stations: ['Høje Taastrup', 'Taastrup', 'Albertslund', 'Glostrup', 'Danshøj',  'Valby', 'Enghave', 'Dybbølsbro', 'København H', 'Vesterport', 'Nørreport', 'Østerport']}

  ];

  var mapstyles = [
    {
      featureType: "administrative.locality",
      elementType: "all",
      stylers: [
        { visibility: "off" }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "all",
      stylers: [
        { visibility: "simplified" }
      ]
    }
  ];

  function getStationByName(name) {
    return _.detect(stations, function(station, num) {
      return station['name'] === name;
    });
  }

  function onDomReady() {
    var myOptions = {
      zoom: 13,
      center: new google.maps.LatLng(55.676, 12.569),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var styledMap = new google.maps.StyledMapType(mapstyles, { 'name' : 'something'});
    map = new google.maps.Map(document.getElementById("map"), myOptions);

    map.mapTypes.set('hiphop', styledMap);
    map.setMapTypeId('hiphop');

    _.each(stations, function(item, key) {
      new google.maps.Marker({
        position: new google.maps.LatLng(item.lat, item.lng),
        map: map,
        icon: '/i/icon_station_s.gif',
        title: item.name
      });
    });

    _.each(lines, function(item, key) {
      var path = _.map(item.stations, function(item, key) {
        var station = getStationByName(item);
        console.log('station', item, station);
        return new google.maps.LatLng(station.lat, station.lng);
      });

      console.log(item, path);

      var linePlan = new google.maps.Polyline({
        path: path,
        strokeColor: item.color,
        strokeOpacity: 1.0,
        strokeWeight: 5
      });

      linePlan.setMap(map);

    });

    console.log(getStationByName('Danshøj'));


  }

  $(onDomReady);

}(window, jQuery, undefined));