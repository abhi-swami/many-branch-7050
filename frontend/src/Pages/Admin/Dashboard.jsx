import "./dashboard.css"
import styled from "styled-components"


export const Dashboard = () => {


  return (
   <>
       <div className='container'>
       
      <div className='navigation' >
<ul>
  <li>
    <a href="#">
      <span className='icon'></span>
       <span className='title'>Amaze</span>
    </a>
  </li>
    <li>
    <a href="/dashboard">
      <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
       <span className='title'>Add Product</span>
    </a>
  </li>
    <li>
    <a href="/customers">
      <span className='icon'><ion-icon name="person-outline"></ion-icon></span>
       <span className='title'>Customers</span>
    </a>
  </li>
    <li>
    <a href="/messages">
      <span className='icon'><ion-icon name="person-outline"></ion-icon></span>
       <span className='title'>Messages</span>
    </a>
  </li>
    <li>
    <a href="/help">
      <span className='icon'><ion-icon name="help-circle-outline"></ion-icon></span>
       <span className='title'>Help</span>
    </a>
  </li>
    <li>
    <a href="/settings">
      <span className='icon'><ion-icon name="settings-outline"></ion-icon></span>
       <span className='title'>Settings</span>
    </a>
  </li>
  <li>
    <a href="/password">
      <span className='icon'><ion-icon name="lock-closed-outline"></ion-icon></span>
       <span className='title'>Password</span>
    </a>
  </li>
  <li>
    <a href="/signout">
      <span className='icon'><ion-icon name="log-out-outline"></ion-icon></span>
       <span className='title'>Sign Out</span>
    </a>
  </li>
</ul>
      </div>
    </div>
    <h1 style={{marginLeft:"250px"}}>Newly Added Products</h1>
    <DIV>
      {/* {AdminProduct.map((el)=>
      <div key={el.id}>
       <img src={el.defaultImages} alt={el.title} />
       <h3>{el.title}</h3>
       <h3>{el.category}</h3>
       <h2>{el.price}</h2>
       <button>
          <Link to={`/dashboard/edit/${el.id}`}>Edit Products</Link>
       </button>
     
      </div>
      )} */}
    </DIV>
   </>
  )
}

const DIV=styled.div`
margin-left:310px;
padding:15px;
   display:grid;
  justify-content:center;
  align-items:center;
  grid-template-columns: repeat(3,auto);
  gap:5px;

div{
  border: 1px solid gray;
width:300px;
}
img{
  width:80%;
  margin:auto;
}
button{
  padding:5px;
  margin-bottom:5px;
  border: 1px solid gray;

}
`
