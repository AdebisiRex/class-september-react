import Navbar from "@/Components/Layout/Navbar";
import { Component } from "react";
// import { useRouter } from "next/router";

class ClassBased extends Component {
  constructor() {
    super();
    this.state = { number: 12 };
    // this.router = useRouter()
  }

  componentDidMount(){
    console.log("Component mounts")
  }

  componentWillUnmount(){
    console.log("Are you really leaving?")
  }

  showUsers() {
    console.log("I am showing users");
  }

  

  render() {
    return (
      <>
      <Navbar/> 
        <h1>This is a class based component {this.state.number}</h1>
        <button onClick={()=>this.showUsers}>Somthing</button>
        <button
          onClick={() => this.setState({ number: this.state.number + 1 })}
        >
          Increase Number
        </button>
      </>
    );
  }
}

export default ClassBased;
