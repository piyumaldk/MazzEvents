import React, { Component } from 'react';
import LeftStaff from "../../Components/LeftStaff.component";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { PieChart, Pie, Sector } from 'recharts';
import Upper from "../../Components/Upper.component";
import axios from 'axios';

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle,
      fill, payload, percent, value,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';
  
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>{payload.name}</text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(Rate ${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };

export default class StaffCharts extends Component {


    state = {
        activeIndex: 0,
      };
    
      onPieEnter = (data, index) => {
        this.setState({
          activeIndex: index,
        });
      };
    
    
      constructor(props) {
        super(props);
        this.state = { userCount: [], data: [], cusCount: [], serCount: [], cus: [], sur: [] };
    
      }
    
      componentDidMount() {
        axios.get('http://localhost:4000/mazzevents/graph/pass')
          .then(response => {
            this.setState({ usersCount: response.data });
            console.log(this.state.usersCount[13]);
            console.log(response.data);
    
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
            while (n < 11) {
              if (j === -1) {
                j = 11;
              }
              m[i] = month[j];
              j--;
              i--;
              n++;
            }
    
            // console.log(m)
    
            this.setState({
              data: [
                {
                  name: m[0], users: this.state.usersCount[2],
                },
                {
                  name: m[1], users: this.state.usersCount[3],
                },
                {
                  name: m[2], users: this.state.usersCount[4],
                },
                {
                  name: m[3], users: this.state.usersCount[5],
                },
                {
                  name: m[4], users: this.state.usersCount[6],
                },
                {
                  name: m[5], users: this.state.usersCount[7],
                },
                {
                  name: m[6], users: this.state.usersCount[8],
                },
                {
                  name: m[7], users: this.state.usersCount[11],
                },
                {
                  name: m[8], users: this.state.usersCount[12],
                },
                {
                  name: m[9], users: this.state.usersCount[13],
                },
              ]
            });
    
          })
          .catch(function (error) {
            console.log(error);
          })
    
        axios.get('http://localhost:4000/mazzevents')
          .then(response => {
            this.setState({
              cusCount: response.data
    
    
            })
    
            var cnt1 = 0;
            var cnt2 = 0;
            var cnt3 = 0;
            var cnt4 = 0;
            var cnt5 = 0;
            var cnt6 = 0;
            var cnt7 = 0;
    
            var count1 = 0;
            var count2 = 0;
            var i;
            for (i = 0; i < this.state.cusCount.length; i++) {
    
              if (this.state.cusCount[i].signup_type === "1") {
                count1 = count1 + 1;
              }
    
              if (this.state.cusCount[i].signup_type === "2") {
                count2 = count2 + 1;
              }
    
              if (this.state.cusCount[i].signup_type === "2" && this.state.cusCount[i].signup_category === "Photgrapher") {
                cnt1 = cnt1 + 1;
              }
    
              if (this.state.cusCount[i].signup_type === "2" && this.state.cusCount[i].signup_category === "Dj") {
                cnt2 = cnt2 + 1;
              }
    
              if (this.state.cusCount[i].signup_type === "2" && this.state.cusCount[i].signup_category === "Music") {
                cnt3 = cnt3 + 1;
              }
    
              if (this.state.cusCount[i].signup_type === "2" && this.state.cusCount[i].signup_category === "Flowers") {
                cnt4 = cnt4 + 1;
              }
    
              if (this.state.cusCount[i].signup_type === "2" && this.state.cusCount[i].signup_category === "Halls") {
                cnt5 = cnt5 + 1;
              }
    
              if (this.state.cusCount[i].signup_type === "2" && this.state.cusCount[i].signup_category === "Vehicles") {
                cnt6 = cnt6 + 1;
              }
    
              if (this.state.cusCount[i].signup_type === "2" && this.state.cusCount[i].signup_category === "Catering") {
                cnt7 = cnt7 + 1;
              }
    
              this.setState({
                cus: [
                  { name: 'Customer', value: count1 },
                  { name: 'Service Providers', value: count2 },
                ]
              })
    
              this.setState({
                sur: [
                  {
                    name: 'Photographers', users: cnt1,
                  },
                  {
                    name: 'Dj', users: cnt2,
                  },
                  {
                    name: 'Music', users: cnt3,
                  },
                  {
                    name: 'Flowers', users: cnt4,
                  },
                  {
                    name: 'Halls', users: cnt5,
                  },
                  {
                    name: 'Vehicles', users: cnt6,
                  },
                  {
                    name: 'Catering', users: cnt7,
                  },
    
                ]
              });
            }
            console.log(count1);
          })
    
      }

    render() {
        return (
            <div>
              <LeftStaff />
              <div className="right">
                <div >
                  <Upper />
                </div>
      
                <div className="row">
                  <h3 className="lTenM_topic">All the Users in the Last Ten Months</h3>
                  <div className="lTenM_graph">
                    <BarChart width={1300} height={500} data={this.state.data}>
                      <XAxis dataKey="name" stroke="#0088FE" />
                      <YAxis />
                      <Tooltip />
                      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                      <Bar type="monotone" dataKey="users" fill="#0088FE" barSize={100} />
                    </BarChart>
                  </div>
                </div>
      
      
      
                <div className="row">
                  <h3 className="lTenM_topic">Service Providers</h3>
                  <div className="lTenM_graph">
      
                    <BarChart width={1300} height={500} data={this.state.sur}>
                      <XAxis dataKey="name" stroke="#0088FE" />
                      <YAxis />
                      <Tooltip />
                      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                      <Bar type="monotone" dataKey="users" fill="#0088FE" barSize={100} />
                    </BarChart>
                  </div>
                </div>
                <div className="row">
                  <h3 className="lTenM_topic">Service Providers & Customers</h3>
                  <div className="lTenM_graph">
      
                    <PieChart width={400} height={400}>
                      <Pie
                        activeIndex={this.state.activeIndex}
                        activeShape={renderActiveShape}
                        data={this.state.cus}
                        cx={200}
                        cy={200}
                        innerRadius={60}
                        outerRadius={80}
                        fill="#0088FE"
                        dataKey="value"
                        onMouseEnter={this.onPieEnter}
                      />
                    </PieChart>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}








