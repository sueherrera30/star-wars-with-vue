import axios from 'axios';

new Vue ({
  el: "#app",
  data() {
    return {
      planets: [],
      errors: []
    }
  },
  methods: {
    getPlanets(){
      //usando metodo get y promesa para obtener respuesta
      axios.get('https://swapi.co/api/planets').then(response => {
        console.log(response)
      }).then( response => {
        console.log(response)
      }).catch(errors => {
        console.log(errors)
      })

    }
  }
  // se puede tambien con created()?????
})
