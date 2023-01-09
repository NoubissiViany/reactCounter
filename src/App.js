import "./App.css";
import { Component } from "react"

const images = [
  {
    src: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name: "beach" 
  },

  {
    src: "https://images.pexels.com/photos/3601450/pexels-photo-3601450.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "beach" 
  },

  {
    src: "https://images.pexels.com/photos/417144/pexels-photo-417144.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "beach" 
  },

  {
    src: "https://images.pexels.com/photos/7955122/pexels-photo-7955122.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "beach" 
  },

  {
    src: "https://images.pexels.com/photos/1450354/pexels-photo-1450354.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "beach" 
  },

  {
    src: "https://images.pexels.com/photos/11435615/pexels-photo-11435615.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "beach" 
  },

  {
    src: "https://images.pexels.com/photos/3601456/pexels-photo-3601456.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "beach" 
  },

  {
    src: "https://images.pexels.com/photos/6934/beach-vacation-water-summer.jpg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "beach" 
  },

  {
    src: "https://images.pexels.com/photos/7079776/pexels-photo-7079776.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "beach" 
  },

  {
    src: "https://images.pexels.com/photos/13359867/pexels-photo-13359867.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    name: "beach" 
  },  
]

console.log(images)

export default  class App extends Component {
  constructor () {
    super();
    this.state = {
      count : 0
    }
  }

  componentDidMount() {
    this.interval = setInterval(this.add.bind(this), 3000)
  }

  componentWillUnmount() {

  }

  add() {
    this.setState({count: (this.state.count +1) % images.length})
  }

  sub() {
    const count = this.state.count -1
    this.setState({count: count < 0? images.length - 1: count }) 
  }

  render() {
    return <div>
      <div className="wrapper">
        <div className="imgwrapper">
          <img src={images[this.state.count].src} alt={images[this.state.count].name} width={350}></img>
        </div>
        <p className="img-name">{images[this.state.count].name} {this.state.count + 1}</p>
      </div>
      <div className="container">
         <button className="btn" onClick={this.sub.bind(this)}> &lang;</button>
        <span>{this.state.count}</span>
        <button className="btn1" onClick={this.add.bind(this)}>&rang;</button>
      </div>
      <div className="images">
        {}
      </div>
    </div>
  }
}