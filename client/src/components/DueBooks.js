import React, { Component } from "react";
import '../App.css';
import moment from 'moment';

class DueBooks extends Component {

    getColor(item){
        if(item.dueDate){
            return "green"
        }else{
            return "red"
        }
    }

    render(){
            return (
                <div>
                 <ul>
    
                    { 
                        this.props.savedBooks.map((item,i) => {
                            return (
                                
                                <div key={i} className="SavedBooksDiv">
 
                                <li>
                                
                                <img className="SavedBookImg" src={item.image} alt=""/>
                               
                                <div className="SavedBookInfo">
                                    <p>{item.title}</p>
                                    <p>{item.author}</p> 
                                        
                                    
                                </div>
                                <br/><br/>
                                <p>Due in</p> 
                                <p>{item.dueDate}</p>
                                    
                                </li>
                                </div>
                                
                            )
                    })
                    }
                 </ul>
                </div>
            )
       
        
    }
}
export default DueBooks;