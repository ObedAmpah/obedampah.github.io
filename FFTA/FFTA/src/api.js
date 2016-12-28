import axios from 'axios';

export const callAPI = () => {
  axios.get('https://obedampah.github.io/teams/trilam/trilam.json').then(
    response => {
      if (response.status >= "200 ") {
        console.log(response.data)
      }
    },
    error => {
      console.log(error)
    }
  )
}
