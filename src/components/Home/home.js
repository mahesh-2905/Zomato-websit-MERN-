import React,{Component} from 'react';
import Search from './search';
import QuickSearch from './quickSearchApi';
import Footer from '../Footer/footer'



class Home extends Component{

    constructor(){
        super()
        this.state={

        }
    }
    render(){
        return(
            <React.Fragment>
                <Search/>
                <QuickSearch/>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default Home;