import React from 'react';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';
import Moment from 'react-moment';
import { deleteLogs, setCurrent } from '../../reducers/actions/logActions';
import { connect } from 'react-redux';

const LogItem = ({ log, deleteLogs, setCurrent })  => {

    const deleteHandler = () => {
        deleteLogs(log.id);
        M.toast({ html: `Logs successfully deleted` });
    }

    const setCurrentItem = () => {
        setCurrent(log);
    }

    return (
        <li className="collection-item">
            <div>
                <a href='#edit-log-modal' className={`modal-trigger ${
                    log.attention ? 'red-text' : 'blue-text'}`} onClick={setCurrentItem}>
                        {log.message}
                </a>
                <br/>
                <span className="grey-text">
                <span className="black-text"> ID #{ log.id + '  '}</span>
                last updated by {' '}
                <span className="black-text">{ log.tech }</span> On {' '}
                <Moment format="MMMM DD YYYY, h:mm:ss a">{log.date}</Moment>
                </span>
                <a href="#!" className="secondary-content" onClick={deleteHandler}> 
                    <i className='material-icons grey-text' >delete</i>
                </a>
            </div>
            
        </li>
    )
}

LogItem.propTypes ={
    log: PropTypes.object.isRequired,
    deleteLogs: PropTypes.func.isRequired,
    setCurrent:PropTypes.func.isRequired
}

export default connect(null, { deleteLogs, setCurrent } )(LogItem);
