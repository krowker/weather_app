const frasesWarm = ['снова подъём засветло, всё наскоро,  дождь, пасмурно',
'я обниму её, чтобы не стало холодней. отдолжишь свою курточку?',
'Нет я не плачу, это просто дождь.',
'Тучкой маленькой обернусь и над твоих крохотным домиком разрыдаюсь косым дождем. знаешь, я так соскучился']

const frasesHot = ['hot1', 'hot2', 'hot3']

function chooseTemperatureFrase (temp=5) {
   if (temp<10) {
      const index = Math.floor(Math.random()*frasesWarm.length)
      return frasesWarm[index]
   } else if (temp>10) {
      const index = Math.floor(Math.random()*frasesHot.length)
      return frasesHot[index]
   } else {
      return ('cold')
   }
}
export default chooseTemperatureFrase