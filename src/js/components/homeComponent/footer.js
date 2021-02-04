import React, { Component } from 'react';
import RightBg from '../../../assets/img/feedback-logo.png';
import $ from "jquery";
import correct from './../../../assets/img/correct.png';
import axios from 'axios';
import Loader from '../loader';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id: '',
        name : '',
        email: '',
        msg : '',
        items: [],
        isLoaded: false,
    }
  }


  handleChange = event => {
    this.setState({ 
    [event.target.name]: event.target.value
    });
  }
  handleSubmit = event => {
      event.preventDefault();
      axios.post('http://taha.rmal.com.sa/bash/api/msg',
      { "name": this.state.name ,
        "email": this.state.email ,
        "msg" : this.state.msg,
      })
      .then(res => {
        if (res.status === 201) {
          $(".input-val").val('');
          $(".center-blk").addClass("hide-section");
          $(".correct-section").removeClass("hide-section");
          }

        console.log(res);
        console.log(res.data);
        this.setState.id = res.data.id;
      });
  }
  componentDidMount(){
    axios.get('http://taha.rmal.com.sa/bash/api/msg')
    .then(res => {
      this.setState({
          isLoaded: true,
          items: res.data,
      })
    });
  }
    render() {
      var{ isLoaded, items } = this.state;

        if(!isLoaded){
            return <Loader />
        }
        else{
          return (
        
            <div className="footer-section">
               <div className="container">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="right-blk fadeIn">
                          <img src={RightBg} alt={RightBg} className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="center-blk">
                        <form onSubmit={this.handleSubmit} noValidate>
                          <input
                            placeholder="الاسم"
                            type="text"
                            name="name"
                            onChange={this.handleChange}
                            className="input-val fadeInDown"
                          />
                          <input
                            placeholder="البريد الالكترونى"
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                            className="input-val fadeInDown"
                          />
                          <textarea
                            placeholder="شارك برأيك"
                            type="text"
                            name="msg"
                            onChange={this.handleChange}
                            className="input-val fadeInDown"
                          />
                          <button type="submit" className="fadeIn">ارسال</button>
                        </form>
                      </div>
                      <div className="correct-section hide-section">
                          <img src={correct} alt={correct}/>
                          <h3> تم إرسال ردك بنجاح </h3>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="left-blk">
                        {items.map((item) => (
                          <div className="comment-block"
                              key={item.id}
                          >
                          <div className="comment owner">
                              <p>
                                {item.name}
                              </p>
                            </div>
                            <div className="comment body">
                              <p>
                                {item.msg}
                              </p>
                            </div>
                            <time>
                              {item.created_at}
                            </time>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="copy-right">
                  <p>جميع الحقوق محفوظة لشركة <a href="https://rmal.com.sa/" target="_blank" rel="noopener noreferrer">رمال الأودية</a></p>
                </div>
            </div>
          );
        }
    }
}
  
export default Footer;
  