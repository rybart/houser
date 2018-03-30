import React, { Component } from 'react';
import './Step1.css';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import {step1} from'../../../Redux/Actions/action';

class Step1 extends Component {
    constructor(props){

        super(props)
        this.state ={
            property_name:'',
            description:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.step1 = this.step1.bind(this);
        
        
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    step1(){
        this.props.step1(this.state)
        this.props.history.push('/wizard/2')
    }
    render() {
    return (
      <div className="Step1">
      <Header/>
      <div className="step1container">
        <div className="step1Header">
            <p className="headerTitle">Add new listing</p>
            <Link to='/dashboard'>
            <button className="cancelButton">Cancel</button>
            </Link>
        </div>
        <div className="StepIdentification">
            <p className="stepNumber">Step 1</p>
            <div className="dotContainer">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABH9JREFUWAnNWE1sVVUQnplzefyZKqVVsNFITATxJyZWJULCgoSNO5KaYnRnfCYupCHsXJBo3JhQlz5iWBqF0AWJLhASFkBK0o1NgBpDiC4kpc+WIlBa751x5sJt7z33vPJe+0h6kpt75ufMfOeec+bMXIQWW9/xw5Vk+t7TiHF3zLCWkNdwQmvMDDm+z0L3I4IZkWjCPbnu5on3D8+14gKbVd5XO7A5QdpCAJ3M0tQ4IhQGmHTC14eq395oxtcjDfd9P9AZJ7SdhTc0Y7CRDiFNRY6vnPh4cLKRjvEbAhIR3PfdoVcYky2LGWhVRuKuD336zWVElNDYIKBParVVE3K1lwG7QoOWyyOQeje+PHK0Wv3Pt1UCZGDq8PuuROQJXzlEO3JRIvFGh1jRKU8yw92Qns9T/TtdsPW8DyrKK6bLVBuwL7M4GKTXHMC7AvK2MHcT6JwfLoDOcJYQR1lkWFkXAORe3kfWtwlPwNVe9TmcXz61u9BGN919lVF6FjjFHgFu1cN9SN33q+QlfdYXNdJNaZPsUWDv6HsvCcUK/JruVj1wxSaA646PnFk19vPFm5lkfsnsNM3FsDMT+G/dgn1I+CGoFV/2KBoRxhj5a2G8FdKtRHAhO30aVh40O9pZ33/rJ/1cn4+WAsZs6XJuQ6EjiLTZt2103ncKyIJeozijm69fv86ekKGWeAJdiuwLJLfWH2e+DYPxU0AWgX2llEZ8XTfm/qBsCUxd6+eI+bPQ0AwD2t0U37q9N3Qd6GkZ1GV6MWRgWTyCg+rvj7wNu2aipzpO09zE7WfCYGjHYwFjKAQ+yIOxvmEwLBSt1rUNNml44oLqrTAF3iAqhwzDQpZC+LbIASFgr89vI+2A3Zu+vTSdsXzGF0DiOjWCloJeSW8ZDA2Wz/vDDQtlyVVeyMAb8/Tj6KvzTt+uYZkPjHkhIpeWMS9vR1+zm6APsrSz5ICjqRKvzQyN/KVrxLCQ5cC+L6Jk0azO118KLSj/+OMMC1lC7gsSgX81Qv/l89tJo+Bl355hoXgW6r7AaA3zl0L8NvGmY4zHfFtWqVClu2PcwrYvREzOKi/x+e2gkeRXZCr4NAxWNpHVTVaq+I4Sob91nU/7/GXTmG6Hk74dw2BY0mNvdZOvYDQT/qApQ2nzhXSb5elxPxbKuzMMKSAr4qxu8o1iItOaJX6l/FlftiQa4ZQA21YoNPOdFZLzgdGKuILWQ0KT8Wt6O3+p5J2QvFmebphfYpFjIf287/kk/8qp4Znt7+2q6L4pVahaOI+Do4t6VC3NLYX8kJOMp6d1BhCP6t31k/YLG9l0rHA8WT3yZ04/61ruq9VqbWBHowJRiNGB261nr1/jwrMLI8s99Wzl0JmY5Edb+rKGpatSH6oOFsqgQl1m9ZEWiiONCkU7qgxyTsGcQ5AXQPAtnXWPJu8b9AusVqdTOuW6zmtUdX5LmOewQeB4UChuGzGfebBqr9xWVCmdwUuXb6X8bMhA2XvF/I7Jg7L+ivlh5QOzssmqA0vIF/ulZ5e23ZOt/tL7H/a69wbIuWGUAAAAAElFTkSuQmCC" alt=""/>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAkCAYAAAAOwvOmAAAAAXNSR0IArs4c6QAAAoxJREFUWAnNmL1PFEEYxuedXRAJQSWcSqyoCEppae0fQIJ/geEooaCnt5CSM/4FkNDZEEtjRUUCakVJ4C6AhG9355VnyGxm173L7s6suWv2a97n+d1+zMwzJCr85tZXBuPfl0+JokakxENJakjFcghSMlDXiuV1KMUVc9gOHg0fbbxbuS1jQ2Uaz7YWJ2KSk1KIMaW4UK2UxEqI44DV/mZz9aCIXyHhuc9LY1EsXypWT4qIdmsjSZ6EgdrbeP/xuFsbnO8Jxcw0u7b8SlE82Uuk7DXJwf7mwoddIuK82q5Q863WQJt/vFaCxvMKXc9JwZ0GTW9/ajb/ZLVyoQDUEb/exMwj2QKfxwHR+biY+pYFu3tn0z88MtyhuoHgCg94wdOmCOwD7O88v5hRxC+y5+s6ZkHD69tfB35++X5kPFJ3Cl+Z75faGPXawhPepk0KCp+9ufC/t7Z3AoWO0bUfcvkj8AYDNBIo9NQuoj5qDYN+6zGWRadnb4sOHT4A8jQwJIWPR7dCXLxtnz0TQfqzzCuq+xxuClj04wsfiFp67Sp/AiwaCtOPKgJ11OipEIQxH6rDoIomWPSdMhO0KiK+a8CSdAm+xV30NBSmsC4iPmvBcv/47ubUPoVdtDC/11CY5LsI+awFi4aKbkTHp7CLFhKQhhpsjB6ii3cR81ELBkQyDYVchhjkQ9hFAwxg0VAQQi5zEfRRaxgSKARF5DIf4lU04G3CagIFIQTFKoI+amzvFBSSK4KiD5MyGvC0U3MKCkJIrgiKZURd2sILnrbGP1CI0kiuCIp2wzr24QGvbHxPhUDbuO9iu4HruwUOA4ZtXy0F2WDY76tFsywcIhlSByb5vZYXMdBjXC27vPgXdLEyEfJJ09EAAAAASUVORK5CYII=" alt=""/>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAkCAYAAAAOwvOmAAAAAXNSR0IArs4c6QAAAoxJREFUWAnNmL1PFEEYxuedXRAJQSWcSqyoCEppae0fQIJ/geEooaCnt5CSM/4FkNDZEEtjRUUCakVJ4C6AhG9355VnyGxm173L7s6suWv2a97n+d1+zMwzJCr85tZXBuPfl0+JokakxENJakjFcghSMlDXiuV1KMUVc9gOHg0fbbxbuS1jQ2Uaz7YWJ2KSk1KIMaW4UK2UxEqI44DV/mZz9aCIXyHhuc9LY1EsXypWT4qIdmsjSZ6EgdrbeP/xuFsbnO8Jxcw0u7b8SlE82Uuk7DXJwf7mwoddIuK82q5Q863WQJt/vFaCxvMKXc9JwZ0GTW9/ajb/ZLVyoQDUEb/exMwj2QKfxwHR+biY+pYFu3tn0z88MtyhuoHgCg94wdOmCOwD7O88v5hRxC+y5+s6ZkHD69tfB35++X5kPFJ3Cl+Z75faGPXawhPepk0KCp+9ufC/t7Z3AoWO0bUfcvkj8AYDNBIo9NQuoj5qDYN+6zGWRadnb4sOHT4A8jQwJIWPR7dCXLxtnz0TQfqzzCuq+xxuClj04wsfiFp67Sp/AiwaCtOPKgJ11OipEIQxH6rDoIomWPSdMhO0KiK+a8CSdAm+xV30NBSmsC4iPmvBcv/47ubUPoVdtDC/11CY5LsI+awFi4aKbkTHp7CLFhKQhhpsjB6ii3cR81ELBkQyDYVchhjkQ9hFAwxg0VAQQi5zEfRRaxgSKARF5DIf4lU04G3CagIFIQTFKoI+amzvFBSSK4KiD5MyGvC0U3MKCkJIrgiKZURd2sILnrbGP1CI0kiuCIp2wzr24QGvbHxPhUDbuO9iu4HruwUOA4ZtXy0F2WDY76tFsywcIhlSByb5vZYXMdBjXC27vPgXdLEyEfJJ09EAAAAASUVORK5CYII=" alt=""/>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAkCAYAAAAOwvOmAAAAAXNSR0IArs4c6QAAAoxJREFUWAnNmL1PFEEYxuedXRAJQSWcSqyoCEppae0fQIJ/geEooaCnt5CSM/4FkNDZEEtjRUUCakVJ4C6AhG9355VnyGxm173L7s6suWv2a97n+d1+zMwzJCr85tZXBuPfl0+JokakxENJakjFcghSMlDXiuV1KMUVc9gOHg0fbbxbuS1jQ2Uaz7YWJ2KSk1KIMaW4UK2UxEqI44DV/mZz9aCIXyHhuc9LY1EsXypWT4qIdmsjSZ6EgdrbeP/xuFsbnO8Jxcw0u7b8SlE82Uuk7DXJwf7mwoddIuK82q5Q863WQJt/vFaCxvMKXc9JwZ0GTW9/ajb/ZLVyoQDUEb/exMwj2QKfxwHR+biY+pYFu3tn0z88MtyhuoHgCg94wdOmCOwD7O88v5hRxC+y5+s6ZkHD69tfB35++X5kPFJ3Cl+Z75faGPXawhPepk0KCp+9ufC/t7Z3AoWO0bUfcvkj8AYDNBIo9NQuoj5qDYN+6zGWRadnb4sOHT4A8jQwJIWPR7dCXLxtnz0TQfqzzCuq+xxuClj04wsfiFp67Sp/AiwaCtOPKgJ11OipEIQxH6rDoIomWPSdMhO0KiK+a8CSdAm+xV30NBSmsC4iPmvBcv/47ubUPoVdtDC/11CY5LsI+awFi4aKbkTHp7CLFhKQhhpsjB6ii3cR81ELBkQyDYVchhjkQ9hFAwxg0VAQQi5zEfRRaxgSKARF5DIf4lU04G3CagIFIQTFKoI+amzvFBSSK4KiD5MyGvC0U3MKCkJIrgiKZURd2sILnrbGP1CI0kiuCIp2wzr24QGvbHxPhUDbuO9iu4HruwUOA4ZtXy0F2WDY76tFsywcIhlSByb5vZYXMdBjXC27vPgXdLEyEfJJ09EAAAAASUVORK5CYII=" alt=""/>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAkCAYAAAAOwvOmAAAAAXNSR0IArs4c6QAAAoxJREFUWAnNmL1PFEEYxuedXRAJQSWcSqyoCEppae0fQIJ/geEooaCnt5CSM/4FkNDZEEtjRUUCakVJ4C6AhG9355VnyGxm173L7s6suWv2a97n+d1+zMwzJCr85tZXBuPfl0+JokakxENJakjFcghSMlDXiuV1KMUVc9gOHg0fbbxbuS1jQ2Uaz7YWJ2KSk1KIMaW4UK2UxEqI44DV/mZz9aCIXyHhuc9LY1EsXypWT4qIdmsjSZ6EgdrbeP/xuFsbnO8Jxcw0u7b8SlE82Uuk7DXJwf7mwoddIuK82q5Q863WQJt/vFaCxvMKXc9JwZ0GTW9/ajb/ZLVyoQDUEb/exMwj2QKfxwHR+biY+pYFu3tn0z88MtyhuoHgCg94wdOmCOwD7O88v5hRxC+y5+s6ZkHD69tfB35++X5kPFJ3Cl+Z75faGPXawhPepk0KCp+9ufC/t7Z3AoWO0bUfcvkj8AYDNBIo9NQuoj5qDYN+6zGWRadnb4sOHT4A8jQwJIWPR7dCXLxtnz0TQfqzzCuq+xxuClj04wsfiFp67Sp/AiwaCtOPKgJ11OipEIQxH6rDoIomWPSdMhO0KiK+a8CSdAm+xV30NBSmsC4iPmvBcv/47ubUPoVdtDC/11CY5LsI+awFi4aKbkTHp7CLFhKQhhpsjB6ii3cR81ELBkQyDYVchhjkQ9hFAwxg0VAQQi5zEfRRaxgSKARF5DIf4lU04G3CagIFIQTFKoI+amzvFBSSK4KiD5MyGvC0U3MKCkJIrgiKZURd2sILnrbGP1CI0kiuCIp2wzr24QGvbHxPhUDbuO9iu4HruwUOA4ZtXy0F2WDY76tFsywcIhlSByb5vZYXMdBjXC27vPgXdLEyEfJJ09EAAAAASUVORK5CYII=" alt=""/>
            </div>
        </div>
        <div className="stepContainer">
            <div className="step1NameContainer">
                <p className="propName">Property Name</p>
            </div>
            <input type="text" className="propertyName" value = {this.state.property_name} onChange={this.handleChange} name = 'property_name'/>
            <div className="step1DescriptionContainer">
                <p className="propDesc">Property Description</p>
            </div>
            <textarea id="" cols="30" rows="10" className="step1Input" value = {this.state.description} onChange={this.handleChange} name = 'description'></textarea>
            <div className="step1ButtonContainer">

                <button className="nextStepStep1" onClick={this.step1}>Next Step</button>
                
            </div>
        </div>
      </div>
        
      </div>
    );
  }
}

function mapStateToProps({step1}){
	return {step1};
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({step1}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Step1);