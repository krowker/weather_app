const frases21to25minus = []

const frases16to20minus = []

const frases11to15minus = []

const frases6to10pminus = []

const frases1to5minus = []

const frases0 = []

const frases1to4plus = []

const frases5to9plus = []

const frases10to15plus = []

const frases16to20plus = []

const frases21to25plus = []

const frases26to30plus = []

const frases31to35plus = []

const frases36to40plus = []


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