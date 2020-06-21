import React from 'react';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import image from './images/corona.png'


class App extends React.Component{
    state = {
        data: {},
        country: '',
    }


    async  componentDidMount(){
        const data = await fetchData()
        this.setState({ data })
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);
    
        this.setState({ data, country: country });
    }
  
    

    render(){
        const { data, country } = this.state
        return(
            <div className={ styles.container }>
                <img src={image} className={styles.image} alt='COVID-19'/>
               <Cards data={ data } />
               <CountryPicker handleCountryChange={this.handleCountryChange} />
               <Chart data={data} country={country} />
            </div>
        )
    }

}
export default App;