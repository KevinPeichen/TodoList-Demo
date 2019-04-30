import React from 'react';
import { connect } from 'react-redux';
import { getInputValue, getAddDate, getDeleteDate } from './store/actionCreator';

const TodoList = (props) =>{
    const { inputValue, handleChange, handleAddDate,list, deleteDate } = props; //结构赋值
    return (
        <div>
            <div>
                <input value={inputValue} onChange={handleChange}/>
                <button onClick={handleAddDate}>提交</button>
            </div>
            <ul>
                {list.map((item,key)=>{
                    return <li key={key} onClick={deleteDate}>{item}</li>
                })}
            </ul>
        </div>
    );
}
//把dispatch映射到props中，组件调用this.props.事件
const mapDispatchToProps = (dispatch) =>{
    return {
        handleChange(e) {
            const action = getInputValue(e.target.value);
            dispatch(action);
        },
        handleAddDate(){
            const action = getAddDate();
            dispatch(action);
        },
        deleteDate(key){
            const action = getDeleteDate(key);
            dispatch(action);
        }
    }
}

//绑定store和该组件的值 (把store里面的值映射到组件里的props里)
const mapStatetoProps = ( state ) => {
    return {
        inputValue: state.inputValue,
        list : state.list
    }
}
export default connect(mapStatetoProps,mapDispatchToProps)(TodoList); //让TodoList组件和store进行连接