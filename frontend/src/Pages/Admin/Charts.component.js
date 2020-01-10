// import React, { Component } from 'react';
// import LeftAdmin from "../../Components/LeftAdmin.component";
// import Upper from "../../Components/Upper.component";
// export default class AdminCharts extends Component {
//     render() {
//         return (
//             <div>
//                 <LeftAdmin/>
//                 <div class="right">
//                 <Upper/>
//                     This is Admin - Charts
//                 </div> 
//             </div>   
//         )
//     }
// }

import React, { PureComponent } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import LeftAdmin from "../../Components/LeftAdmin.component";
import Upper from "../../Components/Upper.component";
import axios from 'axios';


const data = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];

export default class Charts extends PureComponent {
  // static jsfiddleUrl = 'https://jsfiddle.net/alidingling/rnywhbu8/';
  // static jsfiddleUrl = 'https://jsfiddle.net/alidingling/g03265a4/'; 

  constructor(props) {
    super(props);

    this.onChangeSignupFirstName = this.onChangeSignupFirstName.bind(this);
    this.onChangeSignupLastName = this.onChangeSignupLastName.bind(this);
    this.onChangeSignupEmail = this.onChangeSignupEmail.bind(this);
    this.onChangeSignupPassword = this.onChangeSignupPassword.bind(this);
    this.onChangeSignupAPassword = this.onChangeSignupAPassword.bind(this);
    this.onChangeSignupNumber = this.onChangeSignupNumber.bind(this);
    this.onChangeSignupAddress = this.onChangeSignupAddress.bind(this);
    this.onChangeSignupAddress2 = this.onChangeSignupAddress2.bind(this);
    this.onChangeSignupCity = this.onChangeSignupCity.bind(this);
    this.onChangeSignupState = this.onChangeSignupState.bind(this);
    this.onChangeSignupZip = this.onChangeSignupZip.bind(this);
    this.onChangeSignupText = this.onChangeSignupText.bind(this);
    this.onChangeSignupCompany = this.onChangeSignupCompany.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        signup_firstName: '',
        signup_lastName: '',
        signup_email: '',
        signup_password: '',
        signup_aPassword: '',
        signup_number: '',
        signup_address: '',
        signup_address2: '',
        signup_city: '',
        signup_state: '',
        signup_zip: '',
        signup_text:'',
        signup_company:'',
        signup_completed: false
    }
}

componentDidMount() {
    axios.get('http://localhost:4000/mazzevents/'+this.props.id)
        .then(response => {
            this.setState({
                signup_firstName: response.data.signup_firstName,
                signup_lastName: response.data.signup_lastName,
                signup_email: response.data.signup_email,
                signup_password: response.data.signup_password,
                signup_aPassword: response.data.signup_aPassword,
                signup_number: response.data.signup_number,
                signup_address: response.data.signup_address,
                signup_address2: response.data.signup_address2,
                signup_city: response.data.signup_city,
                signup_state: response.data.signup_state,
                signup_zip: response.data.signup_zip,
                signup_text: response.data.signup_text,
                signup_company: response.data.signup_company,
                signup_completed: response.data.signup_completed
            })
        })
        .catch(function(error) {
            console.log(error)
        })
}

onChangeSignupFirstName(e){
    this.setState({
        signup_firstName: e.target.value
    });
}
onChangeSignupLastName(e){
    this.setState({
        signup_lastName: e.target.value
    });
}
onChangeSignupEmail(e){
    this.setState({
        signup_email: e.target.value
    });
}
onChangeSignupPassword(e){
    this.setState({
        signup_password: e.target.value
    });
}
onChangeSignupAPassword(e){
    this.setState({
        signup_aPassword: e.target.value
    });
}
onChangeSignupNumber(e){
    this.setState({
        signup_number: e.target.value
    });
}
onChangeSignupAddress(e){
  this.setState({
      signup_address: e.target.value
  });
}
onChangeSignupAddress2(e){
this.setState({
    signup_address2: e.target.value
});
}
onChangeSignupCity(e){
this.setState({
    signup_city: e.target.value
});
}
onChangeSignupState(e){
this.setState({
    signup_state: e.target.value
});
}
onChangeSignupZip(e){
this.setState({
    signup_zip: e.target.value
});
}
onChangeSignupText(e){
  this.setState({
      signup_text: e.target.value
  });
}
onChangeSignupCompany(e){
  this.setState({
      signup_company: e.target.value
  });
}
onSubmit(e) {
    e.preventDefault();
    const obj = {
        signup_firstName: this.state.signup_firstName, 
        signup_lastName: this.state.signup_lastName,
        signup_email: this.state.signup_email,
        signup_password: this.state.signup_password,
        signup_aPassword: this.state.signup_aPassword,
        signup_number: this.state.signup_number,
        signup_address: this.state.signup_address,
        signup_address2: this.state.signup_address2,
        signup_city: this.state.signup_city,
        signup_state: this.state.signup_state,
        signup_zip: this.state.signup_zip,
        signup_text: this.state.signup_text,
        signup_company: this.state.signup_company,
        signup_completed: this.state.signup_completed
    };
    
    axios.post('http://localhost:4000/mazzevents/updatecustomer/'+this.props.id, obj)
        .then(res => console.log(res.data));

    this.props.history.push('/serviceprovider/addservices');
}

  render() {
    return (
        <div>
                 <LeftAdmin/>
                 <div class="right">
               <Upper/>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>

      </div> 
         </div> 
    );
  }
}







