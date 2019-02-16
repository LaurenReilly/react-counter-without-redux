const {Component} = React;

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
    }
    increment() {
        this.setState({
            value: this.state.value += 1
        })
    }
    decrement() {
        this.setState({
            value: this.state.value -= 1
        })
    }
    render(){
        return (
            <div className="d-flex flex-column justify-content-center align-items-center m-auto rounded" style={{width:"200px", height:"300px", backgroundColor:"#f4f4f4", border:"5px solid black"}}>
                <div style={{width:"180px", backgroundColor:"white", border:"3px solid blue"}} className="m-auto rounded">
                    <h1 className="text-center" style={{fontWeight:"bold"}}>{this.state.value}</h1>
                </div>
                <div className="d-flex text-center justify-content-center align-items-center" style={{width:"200px"}}>
                    <button onClick={this.increment.bind(this)} className="button btn-success btn-lg m-1">+1</button>
                    <button onClick={this.decrement.bind(this)} className="button btn-danger btn-lg m-1">-1</button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Counter/>, document.getElementById('root'))