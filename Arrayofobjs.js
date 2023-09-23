import React,{Component} from 'react'
class Arrayofobjs extends Component{
    constructor(props){
        super(props);
        this.state={
            countriesinfo:[
                {name:'India',capital:'NewDelhi'},
                {name:'china',capital:'Beijing'},
                {name:'USA',capital:'WashingtonDC'},
                {name:'Japan',capital:'Tokyo'},

            ]
        }
    }
    render(){
        const{countriesinfo}=this.state;
        return(
            <div>
                <table border='1'>
                    <tr>
                        <th>CountryName</th>
                        <th>CountryCapital</th>
            
                    </tr>
                    {countriesinfo.length>0&&countriesinfo.map((country)=>{
                        return
                            <tr Key={country.name}>
                                <td>{country.name}</td>
                                <td>{country.capital}</td>
                            </tr>
                    })}
                    </table>
                    </div>
                   )

                }

        }
export default  Arrayofobjs;

