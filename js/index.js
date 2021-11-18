Vue.component('navbar',{
    props: ['titulo'],
    template: `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">{{ titulo }}</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    `
});
Vue.component('banner',{
    template: `
        <div class="banner">
            <h1>Hola coders</h1>
        </div>
    `
});
Vue.component('card',{
    template: `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `
});

var app = new Vue({
  el: "#app",

  data: {
    // Binding
    // variableText: "Utilizando v-text",
    // elementoHTML: `<strong>Vengo en strong desde variable</strong>`,
    // sourceImagen: './logo-vue.jpg',
    // Two Way Binding
    // mensaje: "",
    // numeroUno: 20,
    // numeroDos: 50,
    // fondo: false
  },


//   methods: {
//       funcionAlertar(parametro){
//           alert(`El parametro es: ${parametro}`)
//       },
//       funcionLimpiarInputMensaje(){
//           this.mensaje = ""
//       },
//       funcionSuma(){
//           return this.numeroUno + this.numeroDos
//       },
//       funcionCambiarFondo(){
//           this.fondo = !this.fondo
//       }
//   },
//   computed: {
//       mensajeConVue(){
//           return `${this.mensaje} con Vue!`
//       }
//   }
});