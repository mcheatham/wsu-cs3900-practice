import React, { Component } from 'react';


class Encrypt extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '',shift: '1',out: ''};


        this.handleChange = this.handleChange.bind(this);
        this.handleShiftChange = this.handleShiftChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }



    handleChange(event) {
        this.setState({value: event.target.value.toLowerCase()});

    }
    handleShiftChange(event){
        this.setState({shift:event.target.value});
    }



    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        var text=this.state.value;


        //alert('shift value is: ' + this.state.shift);
        const test2= text.toLowerCase().replace( /\s/g, '');

        const arr = test2.split("");

        var counter =0;
        var i;
        var k;
        var l;
        var numArr = [];
        var newNum;
        var s1 = parseInt(this.state.shift);
        var result= "";
        var myList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 'j', "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
            "v", "w", "x", "y", "z"];

        var doubleList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
            "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        for(i=0;i<arr.length;i++){
            for(k=0;k<myList.length;k++){
                if(arr[i]!==myList[k]){
                    counter++;
                    //alert(counter);


                }
                else{

                    numArr.push(counter);
                    counter=0;
                    break;

                }
            }
        }

        for(l=0;l<numArr.length;l++){
            newNum = numArr[l] + s1;
            result+=doubleList[newNum];
        }

        this.setState({out:result})
        this.setState({value: ""});

    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <label class="PlainText">Plain Text<div><br/></div>
                    <input type="text"  onChange={this.handleChange} class="blocks" />
                    <input type="submit" value="Encrypt" className="encrypt"/>
                </label>


            </form>
                <form>
                    <label class="h1">Shift<div><br/></div>
                    <input  class="blocks" name='shifter' id="shifter" type="number" value={this.state.shift} onChange={this.handleShiftChange} smin='1' max='25'/>
                    <input type="submit" value="Encrypt" className="dark"/>
                    </label>
                </form>
                <form>
                    <label
                        className="PlainText">Cipher Text<div><br/></div>
                        <input class="blocks" name='output' type="text" value={this.state.out} onSubmit={this.handleSubmit}/>
                        <input type="submit" value="Encrypt" className="dark"/>
                    </label>

                </form>

            </div>
        );
    }

}
export default Encrypt;