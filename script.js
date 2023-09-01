
// scripts.js

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment

const SV782 = data.response.data.SV782
const NM372 = data.response.data.NM372
// const NM372Section = document.querySelector('data-athlete="NM372"')

const createHtml = (athlete) => {
    const firstName = athlete.firstName
    const surname = athlete.surname
    const id = athlete.id
    const races = athlete.races
    const lastDateTime = athlete.races[races.length - 1]
    const day =new Date(lastDateTime.date.slice(0, 23)).getDate() 
    const month =new Date(lastDateTime.date.slice(0, 23)).getMonth()
    const month1 = MONTHS[month - 1]
    const year =new Date(lastDateTime.date.slice(0, 23)).getFullYear() 
    const formatDate = `${day} ${month1} ${year}`
    const time = lastDateTime.time[0] + lastDateTime.time[1] + lastDateTime.time[2] + lastDateTime.time[3]

    const racesAmount = races.length

    if (athlete == data.response.data.NM372 ){
      const section = document.querySelector('[data-athlete="NM372"]')

      const h2 = document.createElement('h2')
      const dd = document.createElement('dd')
      const dt = document.createElement('dt')
      const dt2 = document.createElement('dt')
      const dt3 = document.createElement('dt')
      const dt4 = document.createElement('dt')
  
      section.append(h2)
      h2.innerHTML = id
      section.append(dd)
      dd.append(dt)
      dt.innerHTML ="Athlete: " + firstName + ' ' + surname
      dd.append(dt2)
      dt2.innerHTML = "Total races: " + racesAmount
      dd.append(dt3)
      dt3.innerHTML = "Event Date (Latest): "+ formatDate
      dd.append(dt4)
      if (time >= 60 ){
        const hrs = Math.floor(time / 60)
        const min = time%60
        const timeFormat = `${hrs.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`
        dt4.innerHTML = "Total Time (Latest): " + timeFormat
    }else{
        const hrs = Math.floor(time / 60)
        const min = time%60
        const timeFormat = `${hrs.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`
        dt4.innerHTML = "Total Time (Latest): " + timeFormat
    }

    
    }else{
      const section = document.querySelector('[data-athlete="SV782"]')

      const h2 = document.createElement('h2')
      const dd = document.createElement('dd')
      const dt = document.createElement('dt')
      const dt2 = document.createElement('dt')
      const dt3 = document.createElement('dt')
      const dt4 = document.createElement('dt')
  
      section.append(h2)
      h2.innerHTML = id
      section.append(dd)
      dd.append(dt)
      dt.innerHTML ="Athlete: " + firstName + ' ' + surname
      dd.append(dt2)
      dt2.innerHTML = "Total races: " + racesAmount
      dd.append(dt3)
      dt3.innerHTML = "Event Date (Latest): "+ formatDate
      dd.append(dt4)
      if (time >= 60 ){
        const hrs = Math.floor(time / 60)
        const min = time%60
        const timeFormat = `${hrs.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`
        dt4.innerHTML = "Total Time (Latest): " + timeFormat
    }else{
        const hrs = Math.floor(time / 60)
        const min = time%60
        const timeFormat = `${hrs.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`
        dt4.innerHTML = "Total Time (Latest): " + timeFormat
    }

    }


}
createHtml(NM372)
createHtml(SV782)

