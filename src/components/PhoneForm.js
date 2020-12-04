import React, { Component } from 'react';

class PhoneForm extends Component {
    input =null;
    state = {
        name: '',
        phone: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handelSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate({
            name: this.state.name,
            phone: this.state.phone
        });
        this.setState({
            name: '',
            phone: ''
        });
        this.input.focus();
    }

    render() {
        return (
            <form onSubmit={this.handelSubmit}>
                <input
                    name="name"
                    placeholder="이름"
                    onChange={this.handleChange}
                    value={this.state.name}
                    ref={ref => this.input = ref} 
                />
                <input
                    name="phone"
                    placeholder="전화번호"
                    onChange={this.handleChange}
                    value={this.state.phone} />
                <button type="submit">등록</button>
            </form>
        );
    }
}

export default PhoneForm;