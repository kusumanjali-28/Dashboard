import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import { FaHeart } from 'react-icons/fa';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pp from './pp.png'
import qq from './qq.png'
import rr from './rr.png'


const Home = () => {
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-..." crossorigin="anonymous" />

 const data = [
        {name:'April', x:50},
        {name:'May', x:30},
        {name:'Jun', x:300},
        {name:'July', x:210},
        {name:'Aug', x:500},
        {name:'Sep', x:250},
        {name:'Oct', x:400},
        {name:'Nov', x:220},
        {name:'Dec', x:500},
    ];
   
  return (
    
    <div style={{backgroundColor:'#59bfff',height:'400px'}}>
    <div className='s1'> 
    <div style={{marginLeft:'10px'}} className='side-bar'>
    <br /><br />     
    <div style={{marginTop:'-10px'}}>
    <img  style={{height:'40px',width:'40px',marginLeft:'0px',marginTop:'0px'}}src={rr} alt=" "></img>
    <span style={{marginLeft:'30px'}}>
        Argon Dashboard 2 pro
        </span>
        </div>

       <div style={{backgroundColor:'white'}}> 
                <nav class="side-bar">
                    <ul>
                    <li>
                            <Link to="/">
                            <i class="fas fa-desktop computer-icon" style={{ color: 'blue',fontSize: '15px' }}></i>
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            <i class="fas fa-table" style={{ color: 'red' ,fontSize: '15px'}}></i>
                                <span>Tables</span>
                            </Link>
                        </li>
                        
                        <li>
                            <Link to="/">
                            <i className="fas fa-money-bill" style={{ color: 'green',fontSize: '15px' }}></i>
                                <span>Billing</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            <i className="fas fa-vr-cardboard" style={{ color: 'blue' ,fontSize: '15px'}}></i>
                                <span>Virtual Reality</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            <i className="fas fa-globe" style={{ color: 'red' ,fontSize: '15px'}}></i>
                                <span>RTL</span>
                            </Link>
                        </li>
                        <br /><br />
                        <span >Account Pages</span>
                        <br /><br />
                        <li>
                            <Link to="/">
                            <i className="fas fa-user" style={{ color: 'green',fontSize: '15px' }}></i>
                                <span>Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            <i className="fas fa-sign-in-alt" style={{ color: 'red' ,fontSize: '15px'}}></i>
                                <span>Sign in</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                            <i className="fas fa-user-plus" style={{ color: 'blue',fontSize: '15px'}}></i>
                                <span>Sign up</span>
                            </Link>
                        </li>
                        <br />
                        <img  style={{height:'150px',width:'250px',marginLeft:'-50px',marginTop:'-20px'}}src={qq} alt=" "></img>
                    </ul>
                </nav>
            </div>
    </div>
    </div>
    

<div style={{marginLeft:'350px',marginTop:'-730px',color:'white'}}>
<i className="fas fa-home"></i>/ Dashboard <br/>
<span>Dashboard</span>
<span style={{ marginRight: '100px' }}></span> 

<i className="fas fa-bars"></i>
</div>

<div className="search">
<input type="text" placeholder="Type here..." size={'10px'}/>
<span style={{ marginRight: '10px' }}></span> 
<i className="fas fa-user"></i>
<span>Sign in</span>
<span style={{ marginRight: '10px' }}></span> 
<i className="fas fa-cog"></i>
<span style={{ marginRight: '10px' }}></span> 
<i className="fas fa-bell"></i>
</div>
<div className='s2' style={{marginLeft: '350px',marginTop: '80px'}}>
TODAY'S MONEY
<div style={{marginLeft: '170px',marginTop:'-10px'}}><i className="fas fa-database" style={{ color: 'blue' }}></i></div>
<b >$53,000 </b><br /><br />
<span>+<span style={{ color: 'green' }}>55%</span> since yesterday</span>
</div>

<div className='s2' style={{marginLeft: '650px',marginTop: '-110px'}}>
TODAY'S USERS <br />
<div style={{marginLeft: '170px',marginTop:'-10px'}}><i className="fas fa-globe" style={{ color: 'red' }}></i></div>

<b>2,300</b><br /><br />
 <span>+<span style={{ color: 'green' }}>3%</span> since last week</span>
</div>

<div className='s2' style={{marginLeft: '950px',marginTop: '-110px'}}>
NEW CLIENTS <br />
<div style={{marginLeft: '170px',marginTop:'-10px'}}>
    <i className="fas fa-user circle-icon" style={{ color: 'green' }} ></i>
   </div>

<b>3,462</b><br /><br />
 <span>-<span style={{ color: 'red' }}>2%</span> since last quarter</span>
</div>



<div className='s2' style={{marginLeft: '1250px',marginTop: '-110px'}}>
SALES<br />
<div style={{marginLeft: '170px',marginTop:'-10px'}}>
    <i className="fas fa-shopping-cart" style={{ color: 'red' }}></i>
    
    </div>

<b>$103,430</b><br /><br />
 <span>+<span style={{ color: 'green' }}>5%</span> than last month</span>

</div>
<div className='s3' style={{marginLeft: '350px',marginTop: '50px', width: '600px'}}>

<div style={{marginLeft:'-380px'}}>SALES OVERVIEW <br/><br/>
<FontAwesomeIcon icon={faArrowUp} className="up-arrow" color='green' /> 4% more in 2022
</div><br />< br/>

<AreaChart width={550} height={280} data={data}>
  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
  <XAxis dataKey="name" />
  <YAxis ticks={[0, 100, 200, 300, 400,500]} domain={[0, 500]}/>
  <Area type="monotone" dataKey="x" stackId="1" stroke="#59bfff" fill="url(#colorShading)" />
  <defs>
    <linearGradient id="colorShading" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#59bfff" stopOpacity={1} />
      <stop offset="100%" stopColor="white" stopOpacity={1} />
    </linearGradient>
  </defs>
</AreaChart>
</div>
<div className='s3' style={{marginLeft: '1050px',marginTop: '-410px',width: '450px'}}>
<img  style={{height:'430px',marginTop: '-10px',width:'450px'}}src={pp} alt=" "></img>
</div>
   </div>
  )
}

export default Home