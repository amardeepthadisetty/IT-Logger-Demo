import React, { useRef } from 'react';
import { searchLog } from '../../reducers/actions/logActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const SearchBar = ({ searchLog }) => {
    const text = useRef('');
    const onChangeHandler = () => {
        searchLog(text.current.value);
    }
    return (
        <nav style={{ marginBottom : '30px'}} className="blue">
                    <div className="nav-wrapper">
                        <form>
                            <div className="input-field">
                                <input id="search" onChange={onChangeHandler} type="search" placeholder="Enter to filter..." ref={text} />
                                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                                    <i className="material-icons">close</i>
                </div>
            </form>
            </div>
        </nav>
    )
}

SearchBar.propTypes = {
    searchLog: PropTypes.func.isRequired
}

export default connect(null, { searchLog })(SearchBar);
