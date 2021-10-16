const frases21to25minus = ['Точный прогноз погоды на сегодня ты узнаешь завтра.']

const frases16to20minus = ['Точный прогноз погоды на сегодня ты узнаешь завтра.']

const frases11to15minus = ['Точный прогноз погоды на сегодня ты узнаешь завтра.']

const frases6to10pminus = ['Точный прогноз погоды на сегодня ты узнаешь завтра.']

const frases1to5minus = ['Точный прогноз погоды на сегодня ты узнаешь завтра.',
'Глаза полны печали, наполнен я мечтами о тех днях, когда на мне будет курточка Stone Island']

const frases0 = ['Winter is coming.',
'Лужи превращаются в площадки для дрифта.',
'Либо дождь, либо снег, либо будет, либо нет.']

const frases1to4plus = ['Переобулся на зимнюю резину? Успей, пока нет очередей на шиномонтажке.',
'Курточка моя так хорошо сидит на ней. Надену ее сам, пока не стало холодней.',
'И пальто на гвозде, шарф в рукаве, и перчатки в карманах шепчут - подожди до утра, до утра.']

const frases5to9plus = ['Пусть предсказывает погоду тот, кто ее делает.',
'Холод - только для погоды. Не впускай его в свою душу.',
'Можно идти по улице в красном пальто с жёлтым шарфиком навстречу своему счастью и подмигивать.']

const frases10to15plus = ['Сегодня такая погода, что заправлять кровать вообще нет смысла.',
'Спорить с неизбежностью бесполезно. Единственный аргумент против холодного ветра — теплое пальто.',
'Во второй половине октября мир пахнет как теплый пирог.']

const frases16to20plus = ['Точный прогноз погоды на сегодня ты узнаешь завтра.',
'Сейчас ты, наверняка, можешь найти на цице человека в шортах и майке, а рядом с ним будет идти кто-то в пальто.',
'То тебе жарко, то тебе холодно. Когда ты уже определишься?']

const frases21to25plus = ['Точный прогноз погоды на сегодня ты узнаешь завтра.']

const frases26to30plus = ['Точный прогноз погоды на сегодня ты узнаешь завтра.']

const frases31to35plus = ['Точный прогноз погоды на сегодня ты узнаешь завтра.']

const frases36to40plus = ['Точный прогноз погоды на сегодня ты узнаешь завтра.']


function chooseTemperatureFrase (temp=5) {
   if (temp>=-25 && temp<=-21) {
      const index = Math.floor(Math.random()*frases21to25minus.length)
      return frases21to25minus[index]
   } else if (temp>=-20 && temp<=-16) {
      const index = Math.floor(Math.random()*frases16to20minus.length)
      return frases16to20minus[index]
   } else if (temp>=-15 && temp<=-11) {
      const index = Math.floor(Math.random()*frases11to15minus.length)
      return frases11to15minus[index]
   } else if (temp>=-10 && temp<=-6) {
      const index = Math.floor(Math.random()*frases6to10pminus.length)
      return frases6to10minus[index]
   } else if (temp>=-5 && temp<=-1) {
      const index = Math.floor(Math.random()*frases1to5minus.length)
      return frases1to5minus[index]
   } else if (temp===0) {
      const index = Math.floor(Math.random()*frases0.length)
      return frases0[index]
   } else if (temp>=1 && temp<=4) {
      const index = Math.floor(Math.random()*frases1to4plus.length)
      return frases1to4plus[index]
   } else if (temp>=5 && temp<=9) {
      const index = Math.floor(Math.random()*frases5to9plus.length)
      return frases5to9plus[index]
   } else if (temp>=10 && temp<=15) {
      const index = Math.floor(Math.random()*frases10to15plus.length)
      return frases10to15plus[index]
   }else if (temp>=16 && temp<=20) {
      const index = Math.floor(Math.random()*frases16to20plus.length)
      return frases16to20plus[index]
   }else if (temp>=21 && temp<=25) {
      const index = Math.floor(Math.random()*frases21to25plus.length)
      return frases21to25plus[index]
   } else if (temp>=26 && temp<=30) {
      const index = Math.floor(Math.random()*frases26to30plus.length)
      return frases26to30plus[index]
   } else if (temp>=31 && temp<=35) {
      const index = Math.floor(Math.random()*frases31to35plus.length)
      return frases31to35plus[index]
   } else if (temp>=36 && temp<=40) {
      const index = Math.floor(Math.random()*frases36to40plus.length)
      return frases10to15plus[index]
   } else {
      return ('Куда ты попал...')
   }
}
export default chooseTemperatureFrase