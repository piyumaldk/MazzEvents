import React, { PureComponent } from 'react';
import {LineChart,BarChart, Bar,Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import LeftAdmin from "../../Components/LeftAdmin.component";
import Upper from "../../Components/Upper.component";
import axios from 'axios';



export default class Charts extends PureComponent {


  constructor(props) {
    super(props);
    this.state = {userCount:[], data:[]};
}

componentDidMount() {
  axios.get('http://localhost:4000/mazzevents/graph/pass')
      .then(response => {
          this.setState({ usersCount: response.data });
          console.log(this.state.usersCount[12])

          var d = new Date();
          var month = new Array();
          month[0] = "January";
          month[1] = "February";
          month[2] = "March";
          month[3] = "April";
          month[4] = "May";
          month[5] = "June";
          month[6] = "July";
          month[7] = "August";
          month[8] = "September";
          month[9] = "October";
          month[10] = "November";
          month[11] = "December";
          var n = 1;
          var i = 9;
          var j = d.getMonth();
          var m = new Array();
          while(n<11){
            if(j==-1){
              j=11;
            }
            m[i] = month[j];
            j--;
            i--;
            n++;
          }
    
          console.log(m)

          this.setState ({data : [
            {
              name: m[0], users: this.state.usersCount[3],
            },
            {
              name: m[1], users: this.state.usersCount[4], 
            },
            {
              name: m[2],  users: this.state.usersCount[5], 
            },
            {
              name: m[3], users: this.state.usersCount[6], 
            },
            {
              name: m[4],  users: this.state.usersCount[7], 
            },
            {
              name: m[5], users: this.state.usersCount[8], 
            },
            {
              name: m[6], users: this.state.usersCount[9],
            },
            {
              name: m[7], users: this.state.usersCount[10], 
            },
            {
              name: m[8],  users: this.state.usersCount[11], 
            },
            {
              name: m[9],  users: this.state.usersCount[12], 
            },
          ]});
          
      })
      .catch(function (error){
          console.log(error);
      })
    


      

}


  render() {
    return (
        <div><center>
                 <LeftAdmin/>
                 <div >
               <Upper/>


          <BarChart width={900} height={500} data={this.state.data}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar type="monotone" dataKey="users" fill="#8884d8" barSize={30} />
          </BarChart>
      
      </div> 
      </center></div> 
    );
  }
}







