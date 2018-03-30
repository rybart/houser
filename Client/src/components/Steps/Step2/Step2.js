import React, { Component } from 'react';
import './Step2.css';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import {step2} from'../../../Redux/Actions/action';

class Step2 extends Component {
    constructor(props){

        super(props)
        this.state ={
            address:'',
            city:'',
            state:'',
            zip:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.step2 = this.step2.bind(this);
        
        
    }
    step2(){
        this.props.step2(this.state)
        this.props.history.push('/wizard/3')
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
  render() {
    return (
      <div className="Step2">
      <Header/>
      <div className="StepPage">
        <div className="StepHeader">
            <p className="headerTitle">Add new listing</p>
            <Link to='/dashboard'>
            <button className="cancelButton">Cancel</button>
            </Link>
        </div>
        <div className="StepIdentification">
            <p className="stepNumber">Step 2</p>
            <div className="dotContainer">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABYBJREFUWAnNWGtsVUUQnplzWx6aIqUVkEggRIqlGiLl2UYUFV9RI1hDG4l/iDUSlUr45w8SiX9MwBhjLBr8YxBLqJGkJlYQiDyqVkWIgEpTHwkCvbSUN/WeHWcuPWXvnr2lt8SkJzk5szOzM9++ZmcOQo5PVcOa/LD74q2IqeKUgRGEZrgJabiaocBcNkyXEwSXmBMdwaiRp7Y8u6YnFxc4UOXF9SvHh0iTCaDQGB5QPyJkA9AZsGlvrH37n4H4uq7hqg/rClMhlRo2owdiMJsOIXUlAnN4y/L1ndl0lJ8VEDPj4vdXTzcYTu7PQK4y4qC98cW3fkFE9vX1Anqhvj6vg4+UG8AiX6cb5RFwshjvbN1QW/uvaysGSMEk4dfKkPlmV9nXDihIhJwaEyDmy5A7jYELPj2XJ/rni6BkjwsqYSuml6m+TmemfzBIdwUA8xl4NhtTTCBj7l0AGeEVQjxomFuEtReAL9o+IloH3AFHysVni718Yvfac3DchTKDPOEaJ5MiwBI53KvF/VKRTJX3pkyN9KbUQU4QYHPku4iYUgK8TXarHLjMhwFHNrRuzzvatO9UJOlbMj1NPSmoiATuV7ZgFRI+B2LFlV2vjQhHDZo32eAZn25+AvZGp0/CytVHj3ZEu1+Z0lflXTYYMGpLlnMaMq1DpPGubW3bvtOANOhlizOy+ZbK7DzgM5QTj6FIkL2OFIxw+6lvxaD8NCCNwK5Suo14t2zMaq9sEExZ69vJmBW+rhEG1LspdebsIt91IKdlvSzTFJ+BG+IRrBJ/v9s29JpJ3FLQTD0dZ8f6wdDc/wWMomCoscEorRgUCyWGydp6H8564rzqHuZjZZWw7plVcQnDDKJ4yFAspCmE24MCIAQsd/m5tBeVzoPlFU/DnmM/+boFYIKZriCdzmg+4wogDAolgsaCXkwvC2NhyWyorVwCDT80Q+OBr71aEiwnugLFQlFyZQsNmDF226XHFoyRKfTHx3vvuAdeWlAFnx3YCZtbv3S79rXFeWFfo5dQLH2B0RYimtgy2vK1T66A1x5cFgNVMWUGvHxfNTQd2gMff9dkd4nRkt14fZCmnTFtk+iK8SzGOzs/gfKJpfDK/TVyj1ydqTmTymDlwhpoPrIfPtr/uaXtJyXyx64RxRKUPDF/vBzDkXa3gDTzxCU2z6ZPneuEtuTfUD3rERgnyyeRFlY/9Dzs/O17qP9mq62anSZokSvlsK3ASOeCsqfmFUkOU5AhAJDEHCtk7KNsvk2fOHsa/jh9HGpmPQoLps6E3cd+hPd2N9gq/dIys5tkYydtpUSAncHUh+flyQUyzhYoLamGbuzpLt9uH+/ugL+6TkAYhvDurs0y0b1Jka3kp7tDCj9Ap1ZAzGtL5BcXnJSrQ/KsTCliuIM5WCz2MnIm1/637YdA31weJP4KDWWg16tDyybSukk2TKwSCJmOM3JzLo4GpItwTpDENppiUCzpY691k8+YIdwkKcNpn2ywPDnuG315d4QhDUiLOK2bXCcYcrdkiWuFf8WVDaqNsI3B7HD7qu+okOwLjFrEuYralmS8TfbqG0Ke98kHypNl+iLFvNGnb/vu27CHt7VcKn28Ml/2TaxCle1+EgLaJ6dC09xYyPc5iXgSOi4B4gY5gZ8KnbGRVUcLx6216/609CNSc1+pVuvr5mYrEJkMBhAsgBCWSoC+7VrPOCWetRzaniLerEsf19DQwsnG2vUZZVBGXab1kRSKrdkKRT2qBniXgNmFwJOAcZaMeoIk76NlBoaJ0y4ZclLGdVB0fg6N6cHQB0ViSbpQnNaqPm0NsRd/hlQpHcFLL99Q+dkQgdLvkPkdY4NSesj8sHKBadmk1YEm5P390ktdgaTek7n+0vsPuWdKLg5oNNgAAAAASUVORK5CYII=" alt=""/>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAABH9JREFUWAnNWE1sVVUQnplzefyZKqVVsNFITATxJyZWJULCgoSNO5KaYnRnfCYupCHsXJBo3JhQlz5iWBqF0AWJLhASFkBK0o1NgBpDiC4kpc+WIlBa751x5sJt7z33vPJe+0h6kpt75ufMfOeec+bMXIQWW9/xw5Vk+t7TiHF3zLCWkNdwQmvMDDm+z0L3I4IZkWjCPbnu5on3D8+14gKbVd5XO7A5QdpCAJ3M0tQ4IhQGmHTC14eq395oxtcjDfd9P9AZJ7SdhTc0Y7CRDiFNRY6vnPh4cLKRjvEbAhIR3PfdoVcYky2LGWhVRuKuD336zWVElNDYIKBParVVE3K1lwG7QoOWyyOQeje+PHK0Wv3Pt1UCZGDq8PuuROQJXzlEO3JRIvFGh1jRKU8yw92Qns9T/TtdsPW8DyrKK6bLVBuwL7M4GKTXHMC7AvK2MHcT6JwfLoDOcJYQR1lkWFkXAORe3kfWtwlPwNVe9TmcXz61u9BGN919lVF6FjjFHgFu1cN9SN33q+QlfdYXNdJNaZPsUWDv6HsvCcUK/JruVj1wxSaA646PnFk19vPFm5lkfsnsNM3FsDMT+G/dgn1I+CGoFV/2KBoRxhj5a2G8FdKtRHAhO30aVh40O9pZ33/rJ/1cn4+WAsZs6XJuQ6EjiLTZt2103ncKyIJeozijm69fv86ekKGWeAJdiuwLJLfWH2e+DYPxU0AWgX2llEZ8XTfm/qBsCUxd6+eI+bPQ0AwD2t0U37q9N3Qd6GkZ1GV6MWRgWTyCg+rvj7wNu2aipzpO09zE7WfCYGjHYwFjKAQ+yIOxvmEwLBSt1rUNNml44oLqrTAF3iAqhwzDQpZC+LbIASFgr89vI+2A3Zu+vTSdsXzGF0DiOjWCloJeSW8ZDA2Wz/vDDQtlyVVeyMAb8/Tj6KvzTt+uYZkPjHkhIpeWMS9vR1+zm6APsrSz5ICjqRKvzQyN/KVrxLCQ5cC+L6Jk0azO118KLSj/+OMMC1lC7gsSgX81Qv/l89tJo+Bl355hoXgW6r7AaA3zl0L8NvGmY4zHfFtWqVClu2PcwrYvREzOKi/x+e2gkeRXZCr4NAxWNpHVTVaq+I4Sob91nU/7/GXTmG6Hk74dw2BY0mNvdZOvYDQT/qApQ2nzhXSb5elxPxbKuzMMKSAr4qxu8o1iItOaJX6l/FlftiQa4ZQA21YoNPOdFZLzgdGKuILWQ0KT8Wt6O3+p5J2QvFmebphfYpFjIf287/kk/8qp4Znt7+2q6L4pVahaOI+Do4t6VC3NLYX8kJOMp6d1BhCP6t31k/YLG9l0rHA8WT3yZ04/61ruq9VqbWBHowJRiNGB261nr1/jwrMLI8s99Wzl0JmY5Edb+rKGpatSH6oOFsqgQl1m9ZEWiiONCkU7qgxyTsGcQ5AXQPAtnXWPJu8b9AusVqdTOuW6zmtUdX5LmOewQeB4UChuGzGfebBqr9xWVCmdwUuXb6X8bMhA2XvF/I7Jg7L+ivlh5QOzssmqA0vIF/ulZ5e23ZOt/tL7H/a69wbIuWGUAAAAAElFTkSuQmCC" alt=""/>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAkCAYAAAAOwvOmAAAAAXNSR0IArs4c6QAAAoxJREFUWAnNmL1PFEEYxuedXRAJQSWcSqyoCEppae0fQIJ/geEooaCnt5CSM/4FkNDZEEtjRUUCakVJ4C6AhG9355VnyGxm173L7s6suWv2a97n+d1+zMwzJCr85tZXBuPfl0+JokakxENJakjFcghSMlDXiuV1KMUVc9gOHg0fbbxbuS1jQ2Uaz7YWJ2KSk1KIMaW4UK2UxEqI44DV/mZz9aCIXyHhuc9LY1EsXypWT4qIdmsjSZ6EgdrbeP/xuFsbnO8Jxcw0u7b8SlE82Uuk7DXJwf7mwoddIuK82q5Q863WQJt/vFaCxvMKXc9JwZ0GTW9/ajb/ZLVyoQDUEb/exMwj2QKfxwHR+biY+pYFu3tn0z88MtyhuoHgCg94wdOmCOwD7O88v5hRxC+y5+s6ZkHD69tfB35++X5kPFJ3Cl+Z75faGPXawhPepk0KCp+9ufC/t7Z3AoWO0bUfcvkj8AYDNBIo9NQuoj5qDYN+6zGWRadnb4sOHT4A8jQwJIWPR7dCXLxtnz0TQfqzzCuq+xxuClj04wsfiFp67Sp/AiwaCtOPKgJ11OipEIQxH6rDoIomWPSdMhO0KiK+a8CSdAm+xV30NBSmsC4iPmvBcv/47ubUPoVdtDC/11CY5LsI+awFi4aKbkTHp7CLFhKQhhpsjB6ii3cR81ELBkQyDYVchhjkQ9hFAwxg0VAQQi5zEfRRaxgSKARF5DIf4lU04G3CagIFIQTFKoI+amzvFBSSK4KiD5MyGvC0U3MKCkJIrgiKZURd2sILnrbGP1CI0kiuCIp2wzr24QGvbHxPhUDbuO9iu4HruwUOA4ZtXy0F2WDY76tFsywcIhlSByb5vZYXMdBjXC27vPgXdLEyEfJJ09EAAAAASUVORK5CYII=" alt=""/>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAkCAYAAAAOwvOmAAAAAXNSR0IArs4c6QAAAoxJREFUWAnNmL1PFEEYxuedXRAJQSWcSqyoCEppae0fQIJ/geEooaCnt5CSM/4FkNDZEEtjRUUCakVJ4C6AhG9355VnyGxm173L7s6suWv2a97n+d1+zMwzJCr85tZXBuPfl0+JokakxENJakjFcghSMlDXiuV1KMUVc9gOHg0fbbxbuS1jQ2Uaz7YWJ2KSk1KIMaW4UK2UxEqI44DV/mZz9aCIXyHhuc9LY1EsXypWT4qIdmsjSZ6EgdrbeP/xuFsbnO8Jxcw0u7b8SlE82Uuk7DXJwf7mwoddIuK82q5Q863WQJt/vFaCxvMKXc9JwZ0GTW9/ajb/ZLVyoQDUEb/exMwj2QKfxwHR+biY+pYFu3tn0z88MtyhuoHgCg94wdOmCOwD7O88v5hRxC+y5+s6ZkHD69tfB35++X5kPFJ3Cl+Z75faGPXawhPepk0KCp+9ufC/t7Z3AoWO0bUfcvkj8AYDNBIo9NQuoj5qDYN+6zGWRadnb4sOHT4A8jQwJIWPR7dCXLxtnz0TQfqzzCuq+xxuClj04wsfiFp67Sp/AiwaCtOPKgJ11OipEIQxH6rDoIomWPSdMhO0KiK+a8CSdAm+xV30NBSmsC4iPmvBcv/47ubUPoVdtDC/11CY5LsI+awFi4aKbkTHp7CLFhKQhhpsjB6ii3cR81ELBkQyDYVchhjkQ9hFAwxg0VAQQi5zEfRRaxgSKARF5DIf4lU04G3CagIFIQTFKoI+amzvFBSSK4KiD5MyGvC0U3MKCkJIrgiKZURd2sILnrbGP1CI0kiuCIp2wzr24QGvbHxPhUDbuO9iu4HruwUOA4ZtXy0F2WDY76tFsywcIhlSByb5vZYXMdBjXC27vPgXdLEyEfJJ09EAAAAASUVORK5CYII=" alt=""/>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAkCAYAAAAOwvOmAAAAAXNSR0IArs4c6QAAAoxJREFUWAnNmL1PFEEYxuedXRAJQSWcSqyoCEppae0fQIJ/geEooaCnt5CSM/4FkNDZEEtjRUUCakVJ4C6AhG9355VnyGxm173L7s6suWv2a97n+d1+zMwzJCr85tZXBuPfl0+JokakxENJakjFcghSMlDXiuV1KMUVc9gOHg0fbbxbuS1jQ2Uaz7YWJ2KSk1KIMaW4UK2UxEqI44DV/mZz9aCIXyHhuc9LY1EsXypWT4qIdmsjSZ6EgdrbeP/xuFsbnO8Jxcw0u7b8SlE82Uuk7DXJwf7mwoddIuK82q5Q863WQJt/vFaCxvMKXc9JwZ0GTW9/ajb/ZLVyoQDUEb/exMwj2QKfxwHR+biY+pYFu3tn0z88MtyhuoHgCg94wdOmCOwD7O88v5hRxC+y5+s6ZkHD69tfB35++X5kPFJ3Cl+Z75faGPXawhPepk0KCp+9ufC/t7Z3AoWO0bUfcvkj8AYDNBIo9NQuoj5qDYN+6zGWRadnb4sOHT4A8jQwJIWPR7dCXLxtnz0TQfqzzCuq+xxuClj04wsfiFp67Sp/AiwaCtOPKgJ11OipEIQxH6rDoIomWPSdMhO0KiK+a8CSdAm+xV30NBSmsC4iPmvBcv/47ubUPoVdtDC/11CY5LsI+awFi4aKbkTHp7CLFhKQhhpsjB6ii3cR81ELBkQyDYVchhjkQ9hFAwxg0VAQQi5zEfRRaxgSKARF5DIf4lU04G3CagIFIQTFKoI+amzvFBSSK4KiD5MyGvC0U3MKCkJIrgiKZURd2sILnrbGP1CI0kiuCIp2wzr24QGvbHxPhUDbuO9iu4HruwUOA4ZtXy0F2WDY76tFsywcIhlSByb5vZYXMdBjXC27vPgXdLEyEfJJ09EAAAAASUVORK5CYII=" alt=""/>
            </div>
        </div>
        <div className="stepContainer">
            <div className="Step2AddressContainer">
                <p className="propAddress">Address</p>
            </div>
            <input type="text" className="propertyAddress" value = {this.state.address} onChange={this.handleChange} name = 'address'/>
            <div className="Step2MiddleContainer">
                <div className="Step2CityContainer">
                    <p className="propCity">City</p>
                    <input type="text" className="propertyCity" value = {this.state.city} onChange={this.handleChange} name = 'city'/>
                </div>
                <div className="Step2StateContainer">
                    <p className="propState">State</p>
                    <input type="text" className="propertyState" value = {this.state.state} onChange={this.handleChange} name = 'state'/>
                </div>
            </div>
            <div className="Step2ZipContainer">
                <p className="propZip">Zip</p>
            </div>
            <div className = 'zipInputContainer'>
            <input type="number" className="propertyZip" value = {this.state.zip} onChange={this.handleChange} name = 'zip'/>
            </div>
            <div className="Step2ButtonContainer">
                <Link to= '/wizard/1'>
                <button className="previousStep2">Previous Step</button>
                </Link>
                <button className="nextStepStep2" onClick = {this.step2}>Next Step</button>
            </div>
        </div>
      </div>
        
      </div>
    );
  }
}

function mapStateToProps({step2}){
	return {step2};
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({step2}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Step2);