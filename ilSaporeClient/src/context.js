import React, { Component, createContext } from "react"
import { withRouter } from "react-router-dom"
import AUTH_SERVICE from "./services/auth"
import PIZZA_SERVICE from "./services/pizza"

export const MyContext = createContext()

class MyProvider extends Component {
  state={
    formSignup: {
      nombre: "",
      email: "",
      numero: "",
      password:"",
    },
    formLogin: {
      email: '',
      password: ''
    },
    formIngrediente:{
      ingrediente:"",
      tipo:"",
      extraPrecio:""
    },
    formPizzas:{
      nombre:"",
      ingredientes:[],
      orilla: false,
      descripcion:"",
      precio:"",
      image_URL:""
    },  
    ingredientes:[],
    isLoggedIn: false,
    msg: 'Landing page'
  }

  handleSignupInput = e => {
    const { name, value } = e.target
    this.setState(prevState => ({
      ...prevState,
      formSignup: {
        ...prevState.formSignup,
        [name]: value
      }
    }))
  }

  handleLoginInput = e => {
    const { name, value } = e.target
    this.setState(prevState => ({
      ...prevState,
      formLogin: {
        ...prevState.formLogin,
        [name]: value
      }
    }))
  }

  handleIngredienteInput = e => {
    const { name, value } = e.target
    this.setState(prevState => ({
      ...prevState,
      formIngrediente: {
        ...prevState.formIngrediente,
        [name]: value
      }
    }))
    console.log(name,value)
    
  }


  handlePizzaInput = e => {
    const { name, value,checked,type } = e.target
    if(type !=="checkbox"){
      this.setState(prevState => ({
        ...prevState,
        formPizzas: {
          ...prevState.formPizzas,
          [name]: value,
        }
      }))
    }
    else{
      this.setState(prevState => ({
        ...prevState,
        formPizzas: {
          ...prevState.formPizzas,
          orilla: checked
        }
      }))
    }
    
    
    
  }
  

  handleIngredientesCheckBox = e => {
    let {value}=e.target
    if(this.state.formPizzas.ingredientes.indexOf(value)>-1)
      this.state.formPizzas.ingredientes.splice(this.state.formPizzas.ingredientes.indexOf(value),1)
    else
      this.state.formPizzas.ingredientes.push(value)
    console.log("en ingredientes",this.state.formPizzas.ingredientes)
  }


  handleSignupSubmit = e => {
    e.preventDefault()
    const { nombre, email,numero,password } = this.state.formSignup
    AUTH_SERVICE.signup({ nombre,email,numero,password })
      .then(() => {
        this.setState(prevState => ({
          ...prevState,
          formSignup: {
            nombre: "",
            email: "",
            numero:"",
            password: ""
          }
        }))
        alert('Se Creo Satisfactoriamente')
        this.props.history.push("/login")
      })
      .catch(() => {
        alert("Error al Guardar")
      })
  }

  handleLoginSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state.formLogin
    AUTH_SERVICE.login({ email, password })
      .then(({ data }) => {
        this.setState(prevState => ({
          ...prevState,
          formLogin: {
            email: '',
            password: ''
          },
          loggedUser: data.user,
          isLoggedIn: true
        }))
        this.props.history.push("/profile")
      })
      .catch(() => {
        alert("Error al Logearte")
      })
  }

  handleIngredienteSubmit = e => {
    e.preventDefault()
    const { ingrediente, tipo, extraPrecio } = this.state.formIngrediente
    PIZZA_SERVICE.crearIngrediente({ ingrediente, tipo, extraPrecio })
      .then(() => {
        this.setState(prevState => ({
          ...prevState,
          formIngrediente: {
            ingrediente: '',
            tipo:"",
            extraPrecio:""
          },
        }))
        this.props.history.push("/")
      })
      .catch(() => {
        alert("Error al Crear Ingrediente")
      })
  }

  handlePizzaSubmit = e =>{
    e.preventDefault()
    const{nombre,ingredientes,orilla,descripcion,precio}=this.state.formPizzas
    PIZZA_SERVICE.crearPizza({nombre,ingredientes,orilla,descripcion,precio})
    .then(()=>{
      this.setState(prevState=>({
        ...prevState,
        formPizzas:{
          nombre:"",
          ingrediente:[],
          orilla:false,
          descripcion:"",
          precio:"",

        }
      }))
      this.props.history.push("/")
    })
    .catch(()=>{
      alert("Error al Crear Pizza")
    })
    

  }


  logout = async () => {
    this.setState({isLoggedIn: false})
    await AUTH_SERVICE.logout()
    this.props.history.push("/")
}

  getdata=async()=>{
    const {data }= await PIZZA_SERVICE.allIngredientes()
    this.setState(prevState=>({
      ...prevState,
          ingredientes:data
    }))
  }

  deleteData=()=>{
    console.log("delete")
    // const {id}=e.target
    // PIZZA_SERVICE.borrarIngrediente({id})
  }

  

  

  componentDidMount=async ()=>{
    const {data} = await PIZZA_SERVICE.allIngredientes()
    this.setState(prevState=>({
      ...prevState,
        ingredientes:data
    }))
  }




  render() {
    const {
      state,
      handleSignupInput,
      handleSignupSubmit,
      handleLoginInput,
      handleLoginSubmit,
      handleIngredienteInput,
      handleIngredienteSubmit,
      handleIngredientesCheckBox,
      handlePizzaInput,
      handlePizzaSubmit,
      getdata,
      logout,
    } = this
    return (
      <MyContext.Provider
        value={{
          state,
          handleSignupInput,
          handleSignupSubmit,
          handleLoginInput,
          handleLoginSubmit,
          handleIngredienteInput,
          handleIngredienteSubmit,
          handleIngredientesCheckBox,
          handlePizzaInput,
          handlePizzaSubmit,
          getdata,
          logout
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default withRouter(MyProvider)